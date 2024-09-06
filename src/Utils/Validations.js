// ye saaray alag alag validation methods hain
// kahin pr bhi use krskte in sab ko
// Example validation functions
export function validateEmail(email) {
  // Basic email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone) {
  // Basic phone number validation for US (10 or 11 digits)
  return /^[0-9]{10,11}$/.test(phone);
}

export function sanitizeInput(input) {
  // Example: trim whitespace and remove script tags
  return input.trim().replace(/<script.*?>.*?<\/script>/gi, "");
}

export function validateUsername(username) {
  // Basic username validation: alphanumeric, underscores, spaces, starts with a letter, 3-16 characters long
  return /^[a-zA-Z][a-zA-Z0-9_ ]{2,30}$/.test(username);
}

export function validateZipcode(zipcode) {
  // Basic US zipcode validation (5 digits or 5 digits + 4 digits)
  return /^\d{5}(-\d{4})?$/.test(zipcode);
}
export function validateCnic(cnic) {
  // CNIC validation (13 digits)
  return /^\d{5}-\d{7}-\d{1}$/.test(cnic);
}

export function validateStrongPassword(password) {
  // At least one uppercase letter
  const hasUpperCase = /[A-Z]/.test(password);
  // At least one lowercase letter
  const hasLowerCase = /[a-z]/.test(password);
  // At least one number
  const hasNumber = /[0-9]/.test(password);
  // At least one special character
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  // Minimum length of 8 characters
  const isValidLength = password.length >= 8;

  return (
    hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength
  );
}

export function removeSpecificText(input, textToRemove) {
  const regex = new RegExp(textToRemove, "gi");
  return input.replace(regex, "").trim();
}
