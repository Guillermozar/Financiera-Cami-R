// Custom triangle component for letter A declared outside to satisfy react-hooks/static-components
const TriangleA = ({ size, strokeWidth }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${size} text-white inline-block relative top-[-2px]`} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Outer Triangle Outline */}
    <polygon 
      points="12,3 23,21 1,21" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      fill="none" 
      strokeLinejoin="round" 
    />
    {/* Inner Filled Triangle */}
    <polygon 
      points="12,11 17.5,20 6.5,20" 
      fill="currentColor" 
    />
  </svg>
);

/**
 * Custom stylized Logo component for Orianza Crédito Financiero.
 * Incorporates a premium vector logo with customized triangle glyphs for the 'A's.
 *
 * @param {object} props
 * @param {string} props.className - Additional class names.
 * @param {boolean} props.showSubtitle - Whether to show the "Crédito Financiero" tagline.
 * @param {string} props.size - Size profile: 'sm', 'md', or 'lg'.
 */
export default function Logo({ className = '', showSubtitle = true, size = 'md' }) {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  // Sizing definitions
  const containerClasses = isLg 
    ? 'flex flex-col items-center text-center' 
    : 'flex flex-col items-start';

  const brandTextSize = isSm 
    ? 'text-lg tracking-[0.25em]' 
    : isLg 
      ? 'text-3xl lg:text-4xl tracking-[0.3em] font-light' 
      : 'text-xl lg:text-2xl tracking-[0.28em] font-semibold';

  const svgSize = isSm 
    ? 'w-4 h-4 mr-[0.25em]' 
    : isLg 
      ? 'w-8 h-8 mr-[0.3em]' 
      : 'w-5.5 h-5.5 mr-[0.28em]';

  const subtitleTextSize = isSm 
    ? 'text-[8px] tracking-[0.15em]' 
    : isLg 
      ? 'text-xs lg:text-sm tracking-[0.25em] mt-3' 
      : 'text-[9px] tracking-[0.2em] mt-1.5';

  const strokeWidth = isLg ? 2 : 2.5;

  return (
    <div className={`select-none font-sans ${containerClasses} ${className}`}>
      {/* Brand Name with Stylized "A"s */}
      <div className={`flex items-center text-white uppercase font-bold leading-none ${brandTextSize}`}>
        <span className="mr-[0.28em]">O</span>
        <span className="mr-[0.28em]">R</span>
        <span className="mr-[0.28em]">I</span>
        <TriangleA size={svgSize} strokeWidth={strokeWidth} />
        <span className="mr-[0.28em]">N</span>
        <span className="mr-[0.28em]">Z</span>
        <TriangleA size={svgSize} strokeWidth={strokeWidth} />
      </div>

      {/* Subtitle / Tagline */}
      {showSubtitle && (
        <div className={`flex items-center text-brand-gold uppercase font-bold ${subtitleTextSize}`}>
          {isLg && <span className="w-12 h-px bg-brand-gold/40 mr-3"></span>}
          <span>Crédito Financiero</span>
          {isLg && <span className="w-12 h-px bg-brand-gold/40 ml-3"></span>}
        </div>
      )}
    </div>
  );
}
