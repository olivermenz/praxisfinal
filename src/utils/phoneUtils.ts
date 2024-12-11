export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format for German numbers
  if (cleaned.startsWith('49')) {
    return `+${cleaned}`;
  } else if (cleaned.startsWith('0')) {
    return `+49${cleaned.substring(1)}`;
  }
  
  return `+49${cleaned}`;
};

export const createPhoneLink = (phone: string): string => {
  return `tel:${formatPhoneNumber(phone)}`;
};