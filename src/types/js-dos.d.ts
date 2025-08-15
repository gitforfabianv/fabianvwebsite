declare global {
  interface Window {
    Dos: any; // Type 'any' since the actual type of Dos might be complex
    jsDos: any; // Type 'any' for the same reason
  }
}
export {};
