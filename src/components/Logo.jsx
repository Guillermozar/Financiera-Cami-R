import logoUrl from '../assets/logo.svg';
import logoPngUrl from '../assets/logo.png';

/**
 * Reusable Logo component.
 * Features:
 * - Uses the provided logo.svg and logo.png assets
 * - Automatically handles sizing via standard presets
 * - Automatically inverts to white when placed on dark backgrounds
 * 
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showSubtitle - Ignored since the new logo includes brand branding, kept for prop compatibility.
 * @param {string} props.size - Size profile: 'sm', 'md', or 'lg'.
 * @param {boolean} props.lightTheme - If true, displays the logo as-is (for light backgrounds). If false, applies a CSS filter to make it white (for dark backgrounds).
 * @param {boolean} props.onlySymbol - If true, renders the logo.png symbol icon instead of the full logo.
 */
export default function Logo({ className = '', size = 'md', lightTheme = false, onlySymbol = false }) {
  // If the logo is on a dark background (lightTheme === false), 
  // we apply a CSS filter to turn the dark parts of the SVG white so it remains highly visible.
  const themeFilterClass = lightTheme ? '' : 'brightness-0 invert';

  if (onlySymbol) {
    const symbolClasses = {
      sm: 'h-12 w-auto',
      md: 'h-16 w-auto',
      lg: 'h-24 md:h-32 w-auto object-contain',
      xl: 'w-64 md:w-80 lg:w-96 h-auto object-contain', // Mega grande pero ajustando el ancho (ideal para logos con texto)
    }[size] || 'h-16 w-auto';

    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img 
          src={logoPngUrl} 
          alt="Orianza Symbol" 
          className={`${symbolClasses} ${themeFilterClass} transition-all duration-200`}
          style={{ display: 'block' }}
        />
      </div>
    );
  }

  // Sizing mapping for the image height (increased to make the vertical logo larger and more readable)
  const heightClass = {
    sm: 'h-[62px] md:h-[72px] w-auto object-contain', // Larger for the Navbar to make it highly legible
    md: 'h-24 md:h-28 w-auto object-contain', // Larger for the Footer
    lg: 'h-52 md:h-64 w-auto object-contain',
  }[size] || 'h-24 w-auto object-contain';

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={`${logoUrl}?v=3`} 
        alt="Orianza Logo" 
        className={`${heightClass} ${themeFilterClass} transition-all duration-200`}
        style={{ display: 'block' }}
      />
    </div>
  );
}

