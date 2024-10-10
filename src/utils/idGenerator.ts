let counter = 0;

export const generateUniqueId = (prefix: string): string => {
  counter += 1;
  return `${prefix}-${Date.now()}-${counter}`;
};