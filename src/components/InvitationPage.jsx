import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

/**
 * InvitationPage component.
 * Serves as an immersive, highly refined "invitation card" entry screen.
 * Displays luxury copywriting, gold ambient glows, and a smooth enter transition.
 * 
 * @param {object} props
 * @param {Function} props.onEnter - Callback triggered when the user enters the main portal.
 */
export default function InvitationPage({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);
  const { t } = useLanguage();

  const handleEnterClick = () => {
    setIsExiting(true);
    // Wait for the exit transition to finish before calling the parent callback
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div 
      className={`fixed inset-0 z-100 flex items-center justify-center bg-radial from-[#060B15] via-[#03060C] to-[#010204] text-slate-200 overflow-hidden transition-all duration-800 ease-in-out select-none ${
        isExiting ? 'opacity-0 scale-[1.05] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      
      {/* Decorative Luxury Background Elements */}
      {/* Ambient Gold Dust Particles (Simulated via floating animation divs) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-gold/4 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/3 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      
      {/* Subtle Grid overlay for a cultured, structural touch */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none" />

      {/* Main Glassmorphic Invitation Card Envelope */}
      <div className="relative w-full max-w-xl mx-4 p-8 lg:p-14 rounded-[3rem] bg-brand-card/45 backdrop-blur-3xl border border-brand-gold/20 shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] text-center animate-fade-in group hover:border-brand-gold/35 transition-colors duration-700">
        
        {/* Top Gold Corner Ornaments (Luxury Fine Details) */}
        <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-brand-gold/30 rounded-tl-xl pointer-events-none" />
        <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-brand-gold/30 rounded-tr-xl pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-brand-gold/30 rounded-bl-xl pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-brand-gold/30 rounded-br-xl pointer-events-none" />

        {/* Brand Header */}
        <div className="flex flex-col items-center mb-10">
          {/* Glowing Minimal Wax Seal Motif */}
          <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-gold/30 flex items-center justify-center mb-6 shadow-inner relative group-hover:border-brand-gold/60 transition-colors duration-500">
            <Sparkles size={20} className="text-brand-gold-light animate-pulse" />
            <div className="absolute inset-1 rounded-full border border-brand-gold/10 pointer-events-none" />
          </div>
          
          <Logo size="lg" showSubtitle={true} className="mt-2" />
        </div>

        {/* Sophisticated Literary Invitation Content */}
        <div className="space-y-6 max-w-md mx-auto mb-10 font-serif font-light text-slate-300">
          <p className="text-sm tracking-[0.2em] text-brand-gold uppercase font-bold">
            {t('invitation.badge')}
          </p>
          
          <h2 className="text-xl lg:text-2xl font-normal leading-relaxed text-white font-serif tracking-wide italic">
            "{t('invitation.heading')}"
          </h2>
          
          <p className="text-sm font-sans font-light leading-relaxed text-slate-400">
            {t('invitation.paragraph')}
          </p>
        </div>

        {/* Gorgeous Golden Entrance Button */}
        <div className="flex justify-center">
          <button 
            onClick={handleEnterClick}
            className="relative bg-linear-to-r from-brand-gold to-brand-gold-light text-brand-dark px-12 py-4.5 rounded-full font-bold text-base tracking-widest uppercase hover:brightness-105 hover:scale-[1.02] active:scale-98 transition-all duration-300 shadow-2xl shadow-brand-gold/20 hover:shadow-brand-gold/45 cursor-pointer overflow-hidden group/btn"
            aria-label="Acceder a la experiencia Orianza"
          >
            {/* Shimmer Light Beam Effect */}
            <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" style={{ animationDuration: '1.5s' }} />
            
            <span>{t('invitation.cta')}</span>
          </button>
        </div>

      </div>

      {/* Floating Sparkles CSS injected in styles to keep this component self-contained */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
      
    </div>
  );
}
