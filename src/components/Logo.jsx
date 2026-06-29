import logoUrl from '../assets/logo.svg';

/**
 * Logo component for Orianza.
 * Renders the new SVG logo from assets.
 * Supports size profiles ('sm', 'md', 'lg') and light/dark theme styling.
 * 
 * @param {object} props
 * @param {string} props.className - Additional class names.
 * @param {boolean} props.showSubtitle - Ignored since the new logo includes brand branding, kept for prop compatibility.
 * @param {string} props.size - Size profile: 'sm', 'md', or 'lg'.
 * @param {boolean} props.lightTheme - If true, displays the logo as-is (for light backgrounds). If false, applies a CSS filter to make it white (for dark backgrounds).
 */
export default function Logo({ className = '', showSubtitle = true, size = 'md', lightTheme = false }) {
  // Sizing mapping for the image height (increased to make the vertical logo larger and more readable)
  const heightClass = {
    sm: 'h-14 md:h-16 w-auto object-contain', // Fills the Navbar (h-20) nicely for better readability
    md: 'h-24 md:h-28 w-auto object-contain', // Larger for the Footer
    lg: 'h-52 md:h-64 w-auto object-contain',
  }[size] || 'h-24 w-auto object-contain';

  // If the logo is on a dark background (lightTheme === false), 
  // we apply a CSS filter to turn the dark parts of the SVG white so it remains highly visible.
  const themeFilterClass = lightTheme ? '' : 'brightness-0 invert';

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

