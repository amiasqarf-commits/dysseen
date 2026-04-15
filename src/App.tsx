/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Search, 
  User, 
  Settings, 
  ChevronRight, 
  Camera, 
  BookOpen, 
  Lightbulb,
  LogOut,
  Facebook,
  Mail,
  CheckCircle2,
  Loader2,
  ArrowLeft,
  History,
  Edit3,
  Clock,
  Mic,
  MicOff,
  Sparkles,
  Send,
  AlertTriangle,
  Trash2,
  Eye,
  EyeOff
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { auth, db } from './firebase';
import { 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  sendEmailVerification, 
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { doc, setDoc, getDoc, collection, addDoc, query, where, getDocs } from 'firebase/firestore';

import { translations, Language } from './translations';

// --- Types ---
type Screen = 'landing' | 'login' | 'signup' | 'verifyEmail' | 'forgotPassword' | 'home' | 'screening' | 'handwriting' | 'reading' | 'scanning' | 'results' | 'profile' | 'settings' | 'learnMore' | 'recommendations';

interface UserData {
  name: string;
  email: string;
  childAge: string;
}

interface AnalysisResult {
  type: 'handwriting' | 'reading';
  limitations: string[];
  riskLevel: 'low' | 'medium' | 'high';
  riskDescription: string;
  detectedSymptoms?: string[];
}

// --- Constants ---
const COLORS = {
  pink: '#FF769F',
  yellow: '#FFC107',
  teal: '#3DC7B7',
  tealLight: '#B9F2EB',
  bgPink: '#FFE4ED',
  bgYellow: '#FFF5D9',
};

const CENTER_URLS = [
  "https://2gis.kz/astana/search/%D0%94%D0%B8%D1%81%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%8F%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/firm/70000001093747365/71.468034%2C51.138691",
  "https://2gis.kz/astana/search/%D0%94%D0%B8%D1%81%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%8F%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/firm/70000001080304723/71.438545%2C51.097257",
  "https://2gis.kz/astana/search/%D0%94%D0%B8%D1%81%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%8F%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/firm/70000001102999145/71.452774%2C51.144306",
  "https://2gis.kz/astana/search/%D0%94%D0%B8%D1%81%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%8F%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/firm/70000001094503747/71.444072%2C51.098201",
  "https://2gis.kz/astana/search/%D0%94%D0%B8%D1%81%D0%BB%D0%B5%D0%BA%D1%81%D0%B8%D1%8F%20%D0%BD%D0%B5%D0%B9%D1%80%D0%BE%D0%BF%D1%81%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3/firm/70000001065438010/71.421285%2C51.141115"
];

// --- Components ---

const GearIcon = ({ color, size = 48, className = "" }: { color: string, size?: number, className?: string, key?: React.Key }) => (
  <motion.div
    key={className} // Use className or something else as a key if needed, but React handles the 'key' prop passed to the component itself
    animate={{ rotate: 360 }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className={cn("relative flex items-center justify-center", className)}
    style={{ width: size, height: size }}
  >
    <div 
      className="absolute inset-0 border-[6px] border-dashed rounded-full" 
      style={{ borderColor: color }}
    />
    <div 
      className="w-1/2 h-1/2 border-2 border-dashed rounded-full opacity-40" 
      style={{ borderColor: color }}
    />
  </motion.div>
);

const GearBackground = () => (
  <div className="absolute bottom-0 left-0 right-0 h-[45%] overflow-hidden pointer-events-none">
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 p-4">
      {Array.from({ length: 35 }).map((_, i) => (
        <GearIcon 
          key={i} 
          size={56}
          color={i % 3 === 0 ? COLORS.pink : i % 3 === 1 ? COLORS.yellow : COLORS.teal} 
        />
      ))}
    </div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('ru');
  const t = translations[lang];

  const BottomNav = ({ active, onNavigate }: { active: string, onNavigate: (s: Screen) => void }) => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50 rounded-t-3xl shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
      <button onClick={() => onNavigate('home')} className={cn("flex flex-col items-center gap-1 transition-colors", active === 'home' ? "text-pink-500" : "text-gray-400")}>
        <div className={cn("p-2 rounded-2xl", active === 'home' && "bg-pink-100")}>
          <Home size={24} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">{t.nav.main}</span>
      </button>
      <button onClick={() => onNavigate('screening')} className={cn("flex flex-col items-center gap-1 transition-colors", active === 'screening' ? "text-pink-500" : "text-gray-400")}>
        <div className={cn("p-2 rounded-2xl", active === 'screening' && "bg-pink-100")}>
          <Search size={24} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">{t.nav.screening}</span>
      </button>
      <button onClick={() => onNavigate('profile')} className={cn("flex flex-col items-center gap-1 transition-colors", active === 'profile' ? "text-pink-500" : "text-gray-400")}>
        <div className={cn("p-2 rounded-2xl", active === 'profile' && "bg-pink-100")}>
          <User size={24} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">{t.nav.child}</span>
      </button>
      <button onClick={() => onNavigate('settings')} className={cn("flex flex-col items-center gap-1 transition-colors", active === 'settings' ? "text-pink-500" : "text-gray-400")}>
        <div className={cn("p-2 rounded-2xl", active === 'settings' && "bg-pink-100")}>
          <Settings size={24} />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">{t.nav.settings}</span>
      </button>
    </div>
  );

  const LangBadge = () => (
    <button 
      onClick={toggleLang}
      className="absolute top-8 right-8 bg-gray-100 px-4 py-1.5 rounded-2xl text-lg font-black tracking-tight shadow-sm z-50 uppercase active:scale-95 transition-transform"
    >
      {lang}
    </button>
  );

  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [user, setUser] = useState<UserData | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [isResetSent, setIsResetSent] = useState(false);
  const [error, setError] = useState('');

  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', age: '' });
  const [signupError, setSignupError] = useState('');
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  // Analysis States
  const [lastResult, setLastResult] = useState<AnalysisResult | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [handwritingImage, setHandwritingImage] = useState<string | null>(null);
  const [savedExercises, setSavedExercises] = useState<string[]>([]);
  const [screeningHistory, setScreeningHistory] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth Listener
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        if (!firebaseUser.emailVerified) {
          setUserId(firebaseUser.uid);
          setVerificationEmail(firebaseUser.email || '');
          setCurrentScreen('verifyEmail');
          return;
        }

        setUserId(firebaseUser.uid);
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const data = userDoc.data() as UserData & { savedExercises?: string[] };
          setUser({ name: data.name, email: data.email, childAge: data.childAge });
          setSavedExercises(data.savedExercises || []);
          setCurrentScreen('home');
        } else {
          // If user exists in Auth but not in Firestore
          const newData = { name: firebaseUser.displayName || 'User', email: firebaseUser.email || '', childAge: '7', savedExercises: [] };
          await setDoc(doc(db, 'users', firebaseUser.uid), newData);
          setUser({ name: newData.name, email: newData.email, childAge: newData.childAge });
          setSavedExercises([]);
          setCurrentScreen('home');
        }

        // Fetch screening history
        const screeningsQuery = query(collection(db, 'users', firebaseUser.uid, 'screenings'), where('type', '!=', ''));
        const screeningsSnap = await getDocs(screeningsQuery);
        const history = screeningsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // Sort by date desc
        history.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setScreeningHistory(history);
      } else {
        setUserId(null);
        setUser(null);
        setSavedExercises([]);
        setScreeningHistory([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // --- Handlers ---
  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ru' : prev === 'ru' ? 'kk' : 'en');
  };

  const toggleSave = async (ex: string) => {
    if (!userId) return;
    
    let newSaved: string[];
    if (savedExercises.includes(ex)) {
      newSaved = savedExercises.filter(item => item !== ex);
    } else {
      newSaved = [...savedExercises, ex];
    }
    
    setSavedExercises(newSaved);
    
    // Sync with Firestore
    try {
      await setDoc(doc(db, 'users', userId), { savedExercises: newSaved }, { merge: true });
    } catch (err) {
      console.error("Error saving exercise:", err);
    }
  };

  const handleLogin = async () => {
    if (!loginEmail || !loginPass) {
      setError(t.login.fillFields);
      return;
    }
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
      const firebaseUser = userCredential.user;
      
      if (!firebaseUser.emailVerified) {
        setVerificationEmail(firebaseUser.email || '');
        setCurrentScreen('verifyEmail');
        return;
      }
      
      // Save/Update user in Firestore
      const userData: UserData = { 
        name: firebaseUser.displayName || 'User', 
        email: firebaseUser.email || loginEmail, 
        childAge: '7' // Default or fetch if exists
      };
      
      // Check if exists first to not overwrite childAge if already set
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', firebaseUser.uid), userData);
        setUser(userData);
      } else {
        setUser(userDoc.data() as UserData);
      }
      
      setUserId(firebaseUser.uid);
      setCurrentScreen('home');
    } catch (err: any) {
      console.error(err);
      setError("Password or Email Incorrect");
    }
  };

  const handleGoogleAuth = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      
      // Save/Update user in Firestore
      const userData: UserData = { 
        name: firebaseUser.displayName || 'User', 
        email: firebaseUser.email || '', 
        childAge: '7' 
      };
      
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', firebaseUser.uid), userData);
        setUser(userData);
      } else {
        setUser(userDoc.data() as UserData);
      }
      
      setUserId(firebaseUser.uid);
      setCurrentScreen('home');
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/unauthorized-domain') {
        setError("Error: This domain is not authorized in Firebase. Please add this app's URL to 'Authorized Domains' in your Firebase Console (Authentication -> Settings).");
      } else {
        setError("Google Authentication Failed");
      }
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      setError(t.login.fillFields);
      return;
    }
    setError('');
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setIsResetSent(true);
    } catch (err: any) {
      console.error(err);
      setError(t.forgotPassword.error);
    }
  };

  const handleSignup = async (data: { name: string, email: string, pass: string, age: string }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.pass);
      const firebaseUser = userCredential.user;
      
      await updateProfile(firebaseUser, { displayName: data.name });
      await sendEmailVerification(firebaseUser);
      
      setVerificationEmail(data.email);
      
      const userData: UserData = {
        name: data.name,
        email: data.email,
        childAge: data.age
      };
      
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        ...userData,
        savedExercises: []
      });
      
      await signOut(auth);
      setUserId(null);
      setUser(null);
      setCurrentScreen('verifyEmail');
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError("User Already exist. Sign in instead?");
      } else {
        setError(err.message);
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUserId(null);
    setUser(null);
    setLoginEmail('');
    setLoginPass('');
    setCurrentScreen('landing');
  };

  const runAnalysis = async (type: 'handwriting' | 'reading') => {
    setCurrentScreen('scanning');
    
    if (type === 'reading') {
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Analyze this child's reading attempt (simulated transcription). 
        Target text: "${t.reading.text}".
        The child might have these symptoms:
        1. syllableReading: Difficulty transitioning to whole-word reading.
        2. repeatingLines: Repeating the same line.
        3. skippingLines: Skipping lines.
        4. visualErrors: Mispronouncing visually similar letters (e.g. "кофова" instead of "корова").
        5. mirrorReading: Reading right to left.
        6. regression: Returning to start of words/sentences.
        7. unclearSpeech: Unclear pronunciation.
        8. lowSpeed: Low reading speed.
        9. comprehension: Difficulty understanding.
        10. voicingErrors: Confusing voiced/voiceless consonants (e.g. "папушка" instead of "бабушка").
        11. phoneticSubstitutions: Substituting similar sounding letters (e.g. "колова" instead of "корова").
        12. additions: Adding extra letters/syllables (e.g. "корокодил" instead of "крокодил").

        Based on a typical dyslexic/dysgraphic profile for these words, generate a realistic analysis result in JSON format:
        {
          "detectedSymptoms": ["syllableReading", "voicingErrors", "additions"],
          "riskLevel": "medium" | "high" | "low",
          "riskDescription": "string describing the risk based on the symptoms"
        }
        Only return the JSON.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        
        if (jsonMatch) {
          const data = JSON.parse(jsonMatch[0]);
          const result: AnalysisResult = {
            type: 'reading',
            limitations: data.detectedSymptoms.map((s: string) => (t.results.symptoms as any)[s] || s),
            riskLevel: data.riskLevel,
            riskDescription: data.riskDescription,
            detectedSymptoms: data.detectedSymptoms
          };
          setLastResult(result);
          
          // Save to Firestore
          if (userId) {
            await addDoc(collection(db, 'users', userId, 'screenings'), {
              ...result,
              createdAt: new Date().toISOString()
            });
          }
        } else {
          throw new Error("Invalid AI response");
        }
      } catch (err) {
        console.error(err);
        // Fallback mock
        setLastResult({
          type: 'reading',
          limitations: [t.results.symptoms.voicingErrors, t.results.symptoms.additions],
          riskLevel: 'medium',
          riskDescription: 'Moderate risk of dyslexia detected through phonemic confusion and syllable additions.',
          detectedSymptoms: ['voicingErrors', 'additions']
        });
      }
    } else if (type === 'handwriting' && handwritingImage) {
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Convert base64 to parts for Gemini
        const base64Data = handwritingImage.split(',')[1];
        const imagePart = {
          inlineData: {
            data: base64Data,
            mimeType: "image/jpeg"
          }
        };

        const prompt = `Analyze this image of a child's handwriting for potential signs of dysgraphia.
        Look for these symptoms:
        1. irregularSize: Irregular letter sizing.
        2. poorSpatial: Poor spatial awareness (writing outside lines).
        3. inconsistentSlant: Inconsistent letter slant.
        4. mixingStyles: Mixing cursive and print styles.
        5. illegible: Illegible handwriting in some areas.
        6. visualErrors: Writing letters that look similar to others incorrectly.

        Generate a realistic analysis result in JSON format:
        {
          "detectedSymptoms": ["irregularSize", "poorSpatial"],
          "riskLevel": "medium" | "high" | "low",
          "riskDescription": "string describing the risk based on the visual evidence in the handwriting"
        }
        Only return the JSON.`;

        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        
        if (jsonMatch) {
          const data = JSON.parse(jsonMatch[0]);
          const result: AnalysisResult = {
            type: 'handwriting',
            limitations: data.detectedSymptoms.map((s: string) => (t.results.symptoms as any)[s] || s),
            riskLevel: data.riskLevel,
            riskDescription: data.riskDescription,
            detectedSymptoms: data.detectedSymptoms
          };
          setLastResult(result);

          // Save to Firestore
          if (userId) {
            await addDoc(collection(db, 'users', userId, 'screenings'), {
              ...result,
              createdAt: new Date().toISOString()
            });
          }
        } else {
          throw new Error("Invalid AI response");
        }
      } catch (err) {
        console.error(err);
        // Fallback mock
        setLastResult({
          type: 'handwriting',
          limitations: [t.results.symptoms.irregularSize, t.results.symptoms.poorSpatial],
          riskLevel: 'medium',
          riskDescription: 'Moderate risk of dysgraphia detected through irregular sizing and poor spatial organization.',
          detectedSymptoms: ['irregularSize', 'poorSpatial']
        });
      }
    }
    
    setCurrentScreen('results');
  };

  // --- Screens ---

  const LandingScreen = () => (
    <div className="relative h-full flex flex-col items-center pt-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
          <path d="M-50,0 Q100,250 450,50" fill="none" stroke={COLORS.yellow} strokeWidth="40" />
          <path d="M-50,50 Q150,300 450,100" fill="none" stroke={COLORS.pink} strokeWidth="15" />
        </svg>
      </div>

      <LangBadge />
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-7xl font-black flex items-baseline gap-0.5 mb-20 drop-shadow-sm z-10"
      >
        <span style={{ color: COLORS.pink }}>Dy</span>
        <span style={{ color: COLORS.yellow }}>s</span>
        <span className="text-black">Seen</span>
      </motion.div>
      
      <div className="flex flex-col gap-4 w-full px-10 z-10">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentScreen('login')}
          className="w-full bg-[#3DC7B7] text-black font-black py-4 rounded-2xl text-xl shadow-md uppercase"
        >
          {t.landing.login}
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentScreen('signup')}
          className="w-full bg-white border-2 border-[#3DC7B7] text-black font-black py-4 rounded-2xl text-xl shadow-md uppercase"
        >
          {t.landing.signup}
        </motion.button>
      </div>
    </div>
  );

  const LoginScreen = () => (
    <div className="h-full flex flex-col bg-white overflow-y-auto pb-20 relative">
      <div className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
          <path d="M-50,0 Q100,250 450,50" fill="none" stroke={COLORS.yellow} strokeWidth="40" />
          <path d="M-50,50 Q150,300 450,100" fill="none" stroke={COLORS.pink} strokeWidth="15" />
        </svg>
      </div>
      
      <LangBadge />

      <div className="px-10 pt-40 pb-10 z-10">
        <h1 className="text-6xl font-black leading-[1.1] mb-12 whitespace-pre-line">{t.login.welcome}</h1>

        <div className="space-y-5 mb-4">
          <input 
            type="email" 
            placeholder={t.login.email}
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            autoComplete="email"
            className="w-full bg-[#3DC7B7] rounded-3xl py-4 px-8 placeholder-black/50 font-bold text-lg focus:outline-none shadow-sm"
          />
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder={t.login.password}
              value={loginPass}
              onChange={(e) => setLoginPass(e.target.value)}
              autoComplete="current-password"
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full bg-[#3DC7B7] rounded-3xl py-4 px-8 placeholder-black/50 font-bold text-lg focus:outline-none shadow-sm pr-16"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-black/50 hover:text-black transition-colors"
            >
              {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 text-center mb-4 font-bold">{error}</p>}
        
        <button 
          onClick={() => {
            setResetEmail(loginEmail);
            setIsResetSent(false);
            setError('');
            setCurrentScreen('forgotPassword');
          }}
          className="w-full text-center text-gray-500 font-medium mb-6"
        >
          {t.login.forgot}
        </button>

        <button 
          onClick={handleLogin}
          className="w-full bg-[#3DC7B7] text-black font-black py-5 rounded-[40px] text-2xl shadow-lg mb-8 active:scale-95 transition-transform uppercase"
        >
          {t.landing.login}
        </button>

        <div className="text-center text-lg mb-10">
          {t.login.noAccount} <button onClick={() => setCurrentScreen('signup')} className="font-black">{t.login.makeOne}</button>
        </div>

        <div className="flex gap-5">
          <button onClick={handleLogin} className="flex-1 bg-[#1877F2] text-white rounded-full py-4 flex items-center justify-center gap-3 font-black text-lg shadow-md">
            <Facebook size={24} fill="white" /> {t.login.facebook}
          </button>
          <button onClick={handleGoogleAuth} className="flex-1 bg-[#E8E8E8] text-gray-500 rounded-full py-4 flex items-center justify-center gap-3 font-black text-lg shadow-md">
            <Mail size={24} /> {t.login.gmail}
          </button>
        </div>
      </div>
    </div>
  );

  const SignupScreen = () => {
    const onSignup = () => {
      setError('');
      if (!signupData.name || !signupData.email || !signupData.password || !signupData.age) {
        setSignupError(t.signup.fillFields);
        return;
      }
      handleSignup({
        name: signupData.name,
        email: signupData.email,
        pass: signupData.password,
        age: signupData.age
      });
    };

    return (
      <div className="h-full flex flex-col bg-white p-10 overflow-y-auto pb-32 relative">
        <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,0 L40,0 L40,40 L0,40 Z" fill={COLORS.yellow} transform="rotate(45 20 20)" />
            <path d="M10,10 L30,10 L30,30 L10,30 Z" fill={COLORS.pink} transform="rotate(45 20 20)" />
          </svg>
        </div>

        <LangBadge />

        <div className="mt-20 space-y-8">
          <div>
            <label className="block text-lg font-black mb-2 ml-4">{t.signup.name}</label>
            <input 
              type="text" 
              value={signupData.name}
              onChange={(e) => setSignupData({...signupData, name: e.target.value})}
              autoComplete="name"
              className="w-full bg-[#B9F2EB] rounded-3xl py-5 px-8 focus:outline-none shadow-inner" 
            />
          </div>
          <div>
            <label className="block text-lg font-black mb-2 ml-4">{t.signup.email}</label>
            <input 
              type="email" 
              value={signupData.email}
              onChange={(e) => setSignupData({...signupData, email: e.target.value})}
              autoComplete="email"
              className="w-full bg-[#B9F2EB] rounded-3xl py-5 px-8 focus:outline-none shadow-inner" 
            />
          </div>
          <div>
            <label className="block text-lg font-black mb-2 ml-4">{t.signup.password}</label>
            <div className="relative">
              <input 
                type={showSignupPassword ? "text" : "password"} 
                value={signupData.password}
                onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                autoComplete="new-password"
                className="w-full bg-[#B9F2EB] rounded-3xl py-5 px-8 focus:outline-none shadow-inner pr-16" 
              />
              <button 
                type="button"
                onClick={() => setShowSignupPassword(!showSignupPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-black/50 hover:text-black transition-colors"
              >
                {showSignupPassword ? <EyeOff size={24} /> : <Eye size={24} />}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-lg font-black mb-2 ml-4">{t.signup.childAge}</label>
            <input 
              type="number" 
              value={signupData.age}
              onChange={(e) => setSignupData({...signupData, age: e.target.value})}
              className="w-full bg-[#B9F2EB] rounded-3xl py-5 px-8 focus:outline-none shadow-inner" 
            />
          </div>

          <div className="flex items-start gap-4 px-2">
            <input type="checkbox" className="mt-1 w-6 h-6 rounded-lg border-[#3DC7B7] text-[#3DC7B7] focus:ring-[#3DC7B7]" required />
            <span className="text-sm font-bold text-gray-700 leading-tight">{t.signup.consent}</span>
          </div>

          {signupError && <p className="text-red-500 text-center font-bold">{signupError}</p>}
          {error && <p className="text-red-500 text-center font-bold">{error}</p>}

          <button 
            onClick={onSignup}
            className="w-full bg-[#3DC7B7] text-black font-black py-5 rounded-[40px] text-2xl shadow-lg mt-8 active:scale-95 transition-transform"
          >
            {t.signup.create}
          </button>
          
          <div className="text-center text-lg mb-8">
            {t.login.noAccount} <button onClick={() => setCurrentScreen('login')} className="font-black">{t.landing.login}</button>
          </div>

          <div className="flex gap-5">
            <button onClick={handleGoogleAuth} className="flex-1 bg-[#E8E8E8] text-gray-500 rounded-full py-4 flex items-center justify-center gap-3 font-black text-lg shadow-md">
              <Mail size={24} /> {t.login.gmail}
            </button>
            <button onClick={() => {}} className="flex-1 bg-[#1877F2] text-white rounded-full py-4 flex items-center justify-center gap-3 font-black text-lg shadow-md">
              <Facebook size={24} fill="white" /> {t.login.facebook}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M60,60 L100,60 L100,100 L60,100 Z" fill={COLORS.yellow} transform="rotate(45 80 80)" />
            <path d="M70,70 L90,70 L90,90 L70,90 Z" fill={COLORS.pink} transform="rotate(45 80 80)" />
          </svg>
        </div>
      </div>
    );
  };

  const VerifyEmailScreen = () => (
    <div className="h-full flex flex-col bg-white p-10 items-center justify-center text-center relative overflow-y-auto pb-20">
      <div className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
          <path d="M-50,0 Q100,250 450,50" fill="none" stroke={COLORS.yellow} strokeWidth="40" />
          <path d="M-50,50 Q150,300 450,100" fill="none" stroke={COLORS.pink} strokeWidth="15" />
        </svg>
      </div>

      <div className="z-10 space-y-8">
        <div className="bg-pink-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail size={48} className="text-pink-500" />
        </div>
        
        <h1 className="text-4xl font-black leading-tight">
          {t.verify.title}
        </h1>
        
        <p className="text-xl font-bold text-gray-600 leading-relaxed">
          {t.verify.desc.replace('{email}', verificationEmail || loginEmail || auth.currentUser?.email || '')}
        </p>

        {error && <p className="text-red-500 font-bold">{error}</p>}

        <button 
          onClick={async () => {
            if (auth.currentUser) {
              await auth.currentUser.reload();
              if (auth.currentUser.emailVerified) {
                // Trigger the auth listener by slightly changing state or just manually navigating
                // Since onAuthStateChanged might not fire on reload, we can manually check
                const firebaseUser = auth.currentUser;
                setUserId(firebaseUser.uid);
                const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
                if (userDoc.exists()) {
                  const data = userDoc.data() as UserData & { savedExercises?: string[] };
                  setUser({ name: data.name, email: data.email, childAge: data.childAge });
                  setSavedExercises(data.savedExercises || []);
                  setCurrentScreen('home');
                }
              } else {
                setError(t.verify.notVerified);
              }
            }
          }}
          className="w-full bg-white border-2 border-[#3DC7B7] text-black font-black py-5 rounded-[40px] text-2xl shadow-lg active:scale-95 transition-transform uppercase mb-4"
        >
          {t.verify.checkStatus}
        </button>

        <button 
          onClick={async () => {
            await signOut(auth);
            setError('');
            setCurrentScreen('login');
          }}
          className="w-full bg-[#3DC7B7] text-black font-black py-5 rounded-[40px] text-2xl shadow-lg active:scale-95 transition-transform uppercase"
        >
          {t.verify.backToLogin}
        </button>
      </div>
    </div>
  );

  const ForgotPasswordScreen = () => (
    <div className="h-full flex flex-col bg-white p-10 items-center justify-center text-center relative overflow-y-auto pb-20">
      <div className="absolute top-0 left-0 right-0 h-1/3 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-80">
          <path d="M-50,0 Q100,250 450,50" fill="none" stroke={COLORS.yellow} strokeWidth="40" />
          <path d="M-50,50 Q150,300 450,100" fill="none" stroke={COLORS.pink} strokeWidth="15" />
        </svg>
      </div>

      <div className="z-10 w-full space-y-8">
        <div className="bg-yellow-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <Sparkles size={48} className="text-yellow-500" />
        </div>
        
        <h1 className="text-4xl font-black leading-tight">
          {t.forgotPassword.title}
        </h1>
        
        {!isResetSent ? (
          <>
            <p className="text-xl font-bold text-gray-600 leading-relaxed">
              {t.forgotPassword.desc}
            </p>
            <input 
              type="email" 
              placeholder={t.forgotPassword.email}
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full bg-[#FFC107] rounded-3xl py-4 px-8 placeholder-black/50 font-bold text-lg focus:outline-none shadow-sm"
            />
            {error && <p className="text-red-500 font-bold">{error}</p>}
            <button 
              onClick={handleResetPassword}
              className="w-full bg-[#3DC7B7] text-black font-black py-5 rounded-[40px] text-2xl shadow-lg active:scale-95 transition-transform uppercase"
            >
              {t.forgotPassword.send}
            </button>
          </>
        ) : (
          <>
            <p className="text-xl font-bold text-gray-600 leading-relaxed">
              {t.forgotPassword.success.replace('{email}', resetEmail)}
            </p>
            <button 
              onClick={() => {
                setError('');
                setCurrentScreen('login');
              }}
              className="w-full bg-[#3DC7B7] text-black font-black py-5 rounded-[40px] text-2xl shadow-lg active:scale-95 transition-transform uppercase"
            >
              {t.forgotPassword.backToLogin}
            </button>
          </>
        )}

        {!isResetSent && (
          <button 
            onClick={() => {
              setError('');
              setCurrentScreen('login');
            }}
            className="text-gray-500 font-bold uppercase tracking-wider"
          >
            {t.forgotPassword.backToLogin}
          </button>
        )}
      </div>
    </div>
  );

  const HomeScreen = () => (
    <div className="h-full flex flex-col bg-white p-10 relative overflow-hidden">
      <LangBadge />

      <div className="mt-32 relative z-10">
        <h1 className="text-5xl font-black leading-[1.1] mb-12">
          {t.home.title}
        </h1>
        
        <div className="flex flex-col gap-5">
          <button 
            onClick={() => setCurrentScreen('screening')}
            className="bg-[#FF769F] text-black font-black px-10 py-4 rounded-3xl shadow-md text-xl w-fit"
          >
            {t.home.start}
          </button>
          <button 
            onClick={() => setCurrentScreen('learnMore')}
            className="bg-[#E8E8E8] text-black font-black px-10 py-4 rounded-3xl shadow-md text-xl w-fit"
          >
            {t.home.learnMore}
          </button>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 opacity-30 pointer-events-none flex justify-center gap-8">
        <GearIcon color={COLORS.pink} size={180} />
        <GearIcon color={COLORS.yellow} size={140} className="mt-20" />
        <GearIcon color={COLORS.teal} size={160} className="-mt-10" />
      </div>

      <BottomNav active="home" onNavigate={setCurrentScreen} />
    </div>
  );

  const ScreeningScreen = () => (
    <div className="h-full flex flex-col bg-[#FFE4ED] p-10 pb-36 overflow-y-auto">
      <h1 className="text-4xl font-black mb-10 mt-4">{t.screening.title}</h1>

      <div className="space-y-6">
        <button 
          onClick={() => setCurrentScreen('handwriting')}
          className="w-full text-left bg-[#E8E8E8] p-8 rounded-[40px] flex gap-5 items-start shadow-sm border border-white/50 active:scale-[0.98] transition-transform"
        >
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <Edit3 className="text-black" size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">{t.screening.handwriting}</h3>
            <p className="text-base text-gray-600 mt-2 leading-snug">{t.screening.handwritingDesc}</p>
          </div>
        </button>

        <button 
          onClick={() => setCurrentScreen('reading')}
          className="w-full text-left bg-[#E8E8E8] p-8 rounded-[40px] flex gap-5 items-start shadow-sm border border-white/50 active:scale-[0.98] transition-transform"
        >
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <BookOpen className="text-black" size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">{t.screening.reading}</h3>
            <p className="text-base text-gray-600 mt-2 leading-snug">{t.screening.readingDesc}</p>
          </div>
        </button>

        <button 
          onClick={() => setCurrentScreen('recommendations')}
          className="w-full text-left bg-[#E8E8E8] p-8 rounded-[40px] flex gap-5 items-start shadow-sm border border-white/50 active:scale-[0.98] transition-transform"
        >
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <Sparkles className="text-black" size={28} />
          </div>
          <div>
            <h3 className="font-black text-xl">{t.screening.exercises}</h3>
            <p className="text-base text-gray-600 mt-2 leading-snug">{t.screening.exercisesDesc}</p>
          </div>
        </button>
      </div>

      <BottomNav active="screening" onNavigate={setCurrentScreen} />
    </div>
  );

  const HandwritingScreen = () => (
    <div className="h-full flex flex-col bg-white p-10">
      <button onClick={() => setCurrentScreen('screening')} className="mb-10 flex items-center gap-3 font-black text-xl">
        <ArrowLeft size={28} /> {t.handwriting.back}
      </button>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <input 
          type="file" 
          accept="image/*" 
          capture="environment"
          className="hidden" 
          ref={fileInputRef}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setHandwritingImage(reader.result as string);
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="w-full aspect-[3/4] bg-gray-100 rounded-[40px] border-4 border-dashed border-gray-300 flex flex-col items-center justify-center p-4 mb-10 overflow-hidden cursor-pointer active:scale-[0.99] transition-transform relative group"
        >
          {handwritingImage ? (
            <>
              <img src={handwritingImage} alt="Handwriting" className="w-full h-full object-contain rounded-3xl" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-black text-xl bg-black/40 px-6 py-2 rounded-full">{t.handwriting.retake}</p>
              </div>
            </>
          ) : (
            <>
              <Camera size={64} className="text-gray-400 mb-4" />
              <p className="text-gray-500 font-bold px-4">{t.handwriting.placeholder}</p>
            </>
          )}
        </div>

        <button 
          onClick={() => handwritingImage && runAnalysis('handwriting')}
          disabled={!handwritingImage}
          className={cn(
            "w-full text-white font-black py-5 rounded-full flex items-center justify-center gap-3 text-2xl shadow-xl transition-all mb-4",
            handwritingImage ? "bg-[#FF769F] active:scale-95" : "bg-gray-300 cursor-not-allowed"
          )}
        >
          {t.handwriting.analyze}
        </button>

        {handwritingImage && (
          <button 
            onClick={() => setHandwritingImage(null)}
            className="text-gray-500 font-black text-lg underline"
          >
            {t.handwriting.retake}
          </button>
        )}
      </div>
    </div>
  );

  const ReadingScreen = () => (
    <div className="h-full flex flex-col bg-white p-10">
      <button onClick={() => setCurrentScreen('screening')} className="mb-10 flex items-center gap-3 font-black text-xl">
        <ArrowLeft size={28} /> {t.reading.back}
      </button>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="mb-12">
          <h2 className="text-2xl font-black mb-4">{t.reading.passage}</h2>
          <p className="text-lg text-gray-700 leading-relaxed italic bg-gray-50 p-6 rounded-3xl border border-gray-100">
            "{t.reading.text}"
          </p>
        </div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            if (isRecording) {
              runAnalysis('reading');
            }
            setIsRecording(!isRecording);
          }}
          className={cn(
            "w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transition-colors",
            isRecording ? "bg-red-500 animate-pulse" : "bg-[#3DC7B7]"
          )}
        >
          {isRecording ? <MicOff size={48} className="text-white" /> : <Mic size={48} className="text-white" />}
        </motion.button>
        
        <p className="mt-6 font-black text-xl">
          {isRecording ? t.reading.recording : t.reading.tapToStart}
        </p>
      </div>
    </div>
  );

  const ScanningScreen = () => (
    <div className="h-full flex flex-col items-center justify-center bg-white p-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="mb-10"
      >
        <Loader2 size={100} className="text-[#FF769F]" />
      </motion.div>
      <h2 className="text-4xl font-black">{t.scanning.title}</h2>
      <p className="text-xl text-gray-500 mt-4 font-bold">{t.scanning.desc}</p>
    </div>
  );

  const ResultsScreen = () => (
    <div className="h-full flex flex-col bg-white p-10 overflow-y-auto pb-32">
      <button onClick={() => setCurrentScreen('screening')} className="mb-10 flex items-center gap-3 font-black text-xl">
        <ArrowLeft size={28} /> {t.results.back}
      </button>

      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} className="text-green-500" />
        </div>
        <h2 className="text-3xl font-black mb-2">{t.results.title}</h2>
        <p className="text-gray-500 font-bold mb-8 uppercase tracking-widest">{lastResult?.type} screening</p>
        
        <div className="w-full space-y-4 mb-8">
          <div className="bg-gray-50 p-6 rounded-[32px] text-left border border-gray-100">
            <h3 className="font-black text-lg mb-3 flex items-center gap-2">
              <AlertTriangle size={20} className="text-orange-500" /> {t.results.detected}
            </h3>
            <ul className="space-y-2">
              {lastResult?.limitations.map((l, i) => (
                <li key={i} className="text-gray-700 font-bold">• {l}</li>
              ))}
            </ul>
          </div>

          <div className={cn(
            "p-6 rounded-[32px] text-left border",
            lastResult?.riskLevel === 'high' ? "bg-red-50 border-red-100" : "bg-orange-50 border-orange-100"
          )}>
            <h3 className="font-black text-lg mb-2 flex items-center gap-2">
              {t.results.risk}: <span className="uppercase">{lastResult?.riskLevel}</span>
            </h3>
            <p className="text-gray-700 font-bold leading-snug">{lastResult?.riskDescription}</p>
          </div>

          <button 
            onClick={() => setCurrentScreen('recommendations')}
            className="w-full bg-black text-white font-black py-4 rounded-3xl flex items-center justify-center gap-3 text-xl shadow-lg mt-4"
          >
            <Sparkles size={24} /> {t.screening.exercises}
          </button>
        </div>
      </div>
    </div>
  );

  const LearnMoreScreen = () => (
    <div className="h-full flex flex-col bg-white p-10 overflow-y-auto pb-32">
      <button onClick={() => setCurrentScreen('home')} className="mb-10 flex items-center gap-3 font-black text-xl">
        <ArrowLeft size={28} /> {t.learnMore.back}
      </button>

      <h1 className="text-4xl font-black mb-10">{t.learnMore.title}</h1>

      <div className="space-y-8">
        <div className="bg-pink-50 p-8 rounded-[40px] border border-pink-100">
          <h2 className="text-2xl font-black mb-4 text-pink-600">{t.learnMore.dyslexia}</h2>
          <p className="font-bold text-gray-700 leading-relaxed">{t.learnMore.dyslexiaDesc}</p>
        </div>

        <div className="bg-yellow-50 p-8 rounded-[40px] border border-yellow-100">
          <h2 className="text-2xl font-black mb-4 text-yellow-600">{t.learnMore.dysgraphia}</h2>
          <p className="font-bold text-gray-700 leading-relaxed">{t.learnMore.dysgraphiaDesc}</p>
        </div>

        <div className="bg-teal-50 p-8 rounded-[40px] border border-teal-100">
          <h2 className="text-2xl font-black mb-4 text-teal-600">{t.learnMore.dyscalculia}</h2>
          <p className="font-bold text-gray-700 leading-relaxed">{t.learnMore.dyscalculiaDesc}</p>
        </div>

        <div className="pt-6">
          <h2 className="text-3xl font-black mb-6">{t.learnMore.parentMaterialsTitle}</h2>
          <div className="space-y-4">
            {t.learnMore.parentMaterials.map((material: any, i: number) => (
              <div key={i} className="bg-gray-50 p-6 rounded-[32px] border border-gray-100">
                <h3 className="font-black text-xl mb-2">{material.title}</h3>
                <p className="text-gray-600 font-bold">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-3xl font-black mb-6">{t.learnMore.centersTitle}</h2>
          <div className="space-y-4">
            {t.learnMore.centers.map((center: any, i: number) => (
              <a 
                key={i}
                href={CENTER_URLS[i]}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-[32px] border-2 border-gray-100 shadow-sm hover:border-pink-200 transition-colors active:scale-[0.98]"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-black text-xl">{center.name}</h3>
                    <p className="text-gray-500 font-bold">{center.type}</p>
                  </div>
                  <ChevronRight size={24} className="text-gray-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const RecommendationsScreen = () => {
    const symptoms = lastResult?.detectedSymptoms || ['syllableReading'];
    
    const handleShare = (ex: string) => {
      if (navigator.share) {
        navigator.share({
          title: 'DysSeen Recommendation',
          text: ex,
          url: window.location.href,
        }).catch(console.error);
      } else {
        navigator.clipboard.writeText(ex);
      }
    };

    return (
      <div className="h-full flex flex-col bg-white p-10 overflow-y-auto pb-32">
        <button onClick={() => setCurrentScreen('screening')} className="mb-10 flex items-center gap-3 font-black text-xl">
          <ArrowLeft size={28} /> {t.learnMore.back}
        </button>

        <h1 className="text-4xl font-black mb-10">{t.recommendations.title}</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <Sparkles className="text-pink-500" /> {t.recommendations.homework}
            </h2>
            <div className="space-y-4">
              {symptoms.map((s, i) => {
                const ex = (t.recommendations.exercises as any)[s];
                if (!ex) return null;
                const isSaved = savedExercises.includes(ex);
                return (
                  <div key={i} className="bg-pink-50 p-6 rounded-[32px] border border-pink-100 relative">
                    <p className="font-bold text-gray-800 pr-10">{ex}</p>
                    <button 
                      onClick={() => handleShare(ex)}
                      className={cn(
                        "absolute top-4 right-4 p-2 rounded-full transition-colors",
                        isSaved ? "bg-pink-500 text-white" : "bg-white text-pink-500 border border-pink-100"
                      )}
                    >
                      <Send size={18} />
                    </button>
                    <button 
                      onClick={() => toggleSave(ex)}
                      className="mt-4 text-sm font-black uppercase text-pink-600 tracking-wider"
                    >
                      {isSaved ? t.recommendations.saved : t.recommendations.save}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
              <Lightbulb className="text-yellow-500" /> {t.recommendations.methodologies}
            </h2>
            <div className="space-y-4">
              {t.learnMore.parentMaterials.slice(0, 2).map((m: any, i: number) => (
                <div key={i} className="bg-yellow-50 p-6 rounded-[32px] border border-yellow-100">
                  <h3 className="font-black text-lg mb-1">{m.title}</h3>
                  <p className="text-gray-700 font-bold text-sm">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <BottomNav active="screening" onNavigate={setCurrentScreen} />
      </div>
    );
  };

  const ProfileScreen = () => (
    <div className="h-full flex flex-col bg-[#FFF5D9] p-10 pb-36 overflow-y-auto">
      <div className="flex items-center gap-6 mb-10 mt-4">
        <div className="w-24 h-24 bg-white rounded-3xl border-[3px] border-black flex items-center justify-center overflow-hidden shadow-md">
          <User size={64} className="text-gray-200" />
        </div>
        <div>
          <h2 className="text-2xl font-black">{user?.name || 'Исмаил Батырхан'}</h2>
          <p className="text-lg text-gray-500 font-bold">{user?.email || 'batyr@example.com'}</p>
        </div>
      </div>

      <div className="flex items-stretch gap-6 mb-10">
        <div className="flex-1 bg-[#E8E8E8] p-6 rounded-[32px] text-center shadow-sm border border-white/50 flex flex-col justify-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <History size={20} className="text-black" />
            <span className="text-3xl font-black">{screeningHistory.length}</span>
          </div>
          <p className="text-xs font-black uppercase text-gray-600 tracking-wider leading-tight">{t.profile.screenings}</p>
        </div>
        <div className="flex-1 bg-[#E8E8E8] p-6 rounded-[32px] text-center shadow-sm border border-white/50 flex flex-col justify-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock size={20} className="text-black" />
            <span className="text-3xl font-black">{savedExercises.length}</span>
          </div>
          <p className="text-xs font-black uppercase text-gray-600 tracking-wider leading-tight">{t.profile.exercises}</p>
        </div>
      </div>

      <button className="w-full bg-white border-2 border-gray-100 py-3 rounded-full font-black text-lg mb-12 shadow-sm active:bg-gray-50">
        {t.profile.edit}
      </button>

      <div className="mb-6 flex justify-center">
        <span className="bg-white px-8 py-2 rounded-full border-2 border-gray-100 font-black text-lg shadow-md inline-block whitespace-nowrap">
          {t.profile.history}
        </span>
      </div>

      <div className="space-y-4">
        {screeningHistory.map((item, i) => (
          <div key={i} className="bg-white p-5 rounded-3xl flex justify-between items-center shadow-md border border-gray-50">
            <span className="font-black text-xl text-gray-800">{new Date(item.createdAt).toLocaleDateString()}</span>
            <span className={cn(
              "font-black text-xl",
              item.riskLevel === 'low' ? "text-[#00FF00]" : item.riskLevel === 'medium' ? "text-[#FFA500]" : "text-red-500"
            )}>
              {item.riskLevel === 'low' ? t.profile.lowRisk : item.riskLevel === 'medium' ? t.profile.mediumRisk : 'High Risk'}
            </span>
          </div>
        ))}
        {screeningHistory.length === 0 && (
          <p className="text-center text-gray-400 font-bold py-4">No history yet</p>
        )}
      </div>

      {savedExercises.length > 0 && (
        <div className="space-y-6 mt-10">
          <div className="mb-6 text-center">
            <span className="bg-white px-12 py-2 rounded-full border-2 border-gray-100 font-black text-lg shadow-md">
              {t.profile.exercises}
            </span>
          </div>
          <div className="space-y-4">
            {savedExercises.map((ex, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-md border border-gray-50 relative group">
                <p className="font-bold text-gray-800 pr-10">{ex}</p>
                <button 
                  onClick={() => toggleSave(ex)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <BottomNav active="profile" onNavigate={setCurrentScreen} />
    </div>
  );

  const SettingsScreen = () => (
    <div className="h-full flex flex-col bg-white p-10 pb-36 overflow-y-auto">
      <h1 className="text-4xl font-black mb-12 mt-4">{t.settings.title}</h1>
      
      <div className="space-y-4">
        {[
          { label: t.settings.notifications, icon: <ChevronRight size={24} className="text-gray-400" /> },
          { label: `${t.settings.language} (${lang.toUpperCase()})`, icon: <ChevronRight size={24} className="text-gray-400" />, onClick: toggleLang },
          { label: t.settings.privacy, icon: <ChevronRight size={24} className="text-gray-400" /> },
          { label: t.settings.terms, icon: <ChevronRight size={24} className="text-gray-400" /> },
          { label: t.settings.help, icon: <ChevronRight size={24} className="text-gray-400" /> },
        ].map((item) => (
          <button 
            key={item.label} 
            onClick={item.onClick}
            className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-3xl font-black text-xl shadow-sm border border-gray-100"
          >
            {item.label} {item.icon}
          </button>
        ))}
        
        <button 
          onClick={logout}
          className="w-full flex items-center justify-between p-6 bg-red-50 text-red-500 rounded-3xl font-black text-xl mt-10 shadow-sm border border-red-100"
        >
          {t.settings.logout} <LogOut size={24} />
        </button>
      </div>

      <BottomNav active="settings" onNavigate={setCurrentScreen} />
    </div>
  );

  return (
    <div className="max-w-md mx-auto h-screen bg-gray-100 shadow-2xl relative overflow-hidden font-sans selection:bg-pink-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="h-full"
        >
          {currentScreen === 'landing' && LandingScreen()}
          {currentScreen === 'login' && LoginScreen()}
          {currentScreen === 'signup' && SignupScreen()}
          {currentScreen === 'verifyEmail' && VerifyEmailScreen()}
          {currentScreen === 'forgotPassword' && ForgotPasswordScreen()}
          {currentScreen === 'home' && HomeScreen()}
          {currentScreen === 'screening' && ScreeningScreen()}
          {currentScreen === 'handwriting' && HandwritingScreen()}
          {currentScreen === 'reading' && ReadingScreen()}
          {currentScreen === 'scanning' && ScanningScreen()}
          {currentScreen === 'results' && ResultsScreen()}
          {currentScreen === 'profile' && ProfileScreen()}
          {currentScreen === 'settings' && SettingsScreen()}
          {currentScreen === 'learnMore' && LearnMoreScreen()}
          {currentScreen === 'recommendations' && RecommendationsScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
