import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

/**
 * Premium Preloader / Splash Screen component.
 * Displays the brand logo, staggered motto text, and a sleek progress bar.
 * Fades out and scales up smoothly upon completion.
 * 
 * @param {object} props
 * @param {function} props.onComplete - Callback triggered when the loading animation completes.
 */
export default function Preloader({ onComplete }) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const duration = 2200; // Smooth 2.2 seconds loading time
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Small pause at 100% for visual satisfaction
          setTimeout(() => {
            setIsFadingOut(true);
            // Complete the transition and unmount
            setTimeout(() => {
              onComplete();
            }, 700); // Matches the CSS transition duration
          }, 300);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-[#051121] via-[#0b2545] to-[#14355a] text-white transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div className="max-w-md px-6 text-center space-y-8 flex flex-col items-center">
        {/* Brand Logo */}
        <div className="h-32 md:h-48 lg:h-56 flex items-center justify-center animate-preloader-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="animate-preloader-pulse">
            <Logo size="xl" lightTheme={false} showSubtitle={false} onlySymbol={true} />
          </div>
        </div>

        {/* Brand Motto */}
        <div className="space-y-3 font-serif">
          <h2 
            className="text-2xl md:text-3xl font-light tracking-wide text-white/90 animate-preloader-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            {t('preloader.motto1')}
          </h2>
          <h2 
            className="text-2xl md:text-3xl font-medium tracking-wide text-brand-accent animate-preloader-fade-in-up"
            style={{ animationDelay: '1100ms' }}
          >
            {t('preloader.motto2')}
          </h2>
        </div>

        {/* Loading Progress */}
        <div 
          className="w-48 mt-12 space-y-2 animate-preloader-fade-in-up"
          style={{ animationDelay: '1500ms' }}
        >
          <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-linear-to-r from-brand-accent via-white to-brand-accent rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold text-center">
            Cargando {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
