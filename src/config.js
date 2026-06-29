/**
 * Centralized Contact and Corporate Configuration for Orianza.
 * Replace these empty strings or placeholders with the actual client data.
 */
export const CONTACT_CONFIG = {
  razonSocial: "",      // E.g., "Orianza S.A."
  ruc: "",              // E.g., "80012345-6"
  direccion: "",        // E.g., "Avda. Aviadores del Chaco 2050, Asunción, Paraguay"
  email: "",            // E.g., "contacto@orianza.com.py"
  telefonoFijo: "",     // E.g., "+595 21 123 4567"
  whatsappNumber: "",   // Full WhatsApp number with country code, no "+" or spaces. E.g., "595981123456"
  whatsappDisplay: "",  // WhatsApp number formatted for display. E.g., "+595 981 123456"
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
