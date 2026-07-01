/**
 * Centralized Contact and Corporate Configuration for Orianza.
 * Replace these empty strings or placeholders with the actual client data.
 */
export const CONTACT_CONFIG = {
  razonSocial: "Orianza S.A.",      // E.g., "Orianza S.A."
  ruc: "80119000-1",              // E.g., "80012345-6"
  direccion: "Bella Vista, Itapúa – Paraguay",        // E.g., "Avda. Aviadores del Chaco 2050, Asunción, Paraguay"
  email: "contacto@orianza.com.py",            // E.g., "contacto@orianza.com.py"
  telefonoFijo: "+595 767 240234",     // E.g., "+595 21 123 4567"
  whatsappNumber: "595981123456",   // Full WhatsApp number with country code, no "+" or spaces. E.g., "595981123456"
  whatsappDisplay: "+595 981 123 456",  // WhatsApp number formatted for display. E.g., "+595 981 123456"
};

/**
 * Helper to generate a functional WhatsApp link.
 * If no WhatsApp number is configured, it will open the general WhatsApp chat interface.
 * 
 * @param {string} message - Pre-filled message for the chat.
 * @returns {string} The formatted WhatsApp URL.
 */
export const getWhatsAppLink = (message = "") => {
  if (!CONTACT_CONFIG.whatsappNumber) {
    return "https://wa.me/";
  }
  
  const cleanNumber = CONTACT_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  if (!cleanNumber) {
    return "https://wa.me/";
  }

  return `https://wa.me/${cleanNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
};
