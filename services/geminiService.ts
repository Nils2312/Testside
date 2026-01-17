
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches detailed information about a Ju Jitsu technique.
 * Uses gemini-3-flash-preview for basic text task.
 */
export const getTechniqueDetails = async (techniqueName: string): Promise<string> => {
  // Initialize AI client right before use as per guidelines to ensure it uses the latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Beskriv kort og konsist (maks 3 setninger) hovedprinsippet bak Ju Jitsu teknikken: "${techniqueName}". Svaret skal være på norsk og ha en filosofisk men praktisk tone som passer en kampsportside.`,
    });
    // response.text is a property, not a method
    return response.text || "Kunne ikke generere beskrivelse.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "En feil oppstod ved henting av info.";
  }
};

/**
 * Generates a daily motivational quote related to Ju Jitsu or martial arts philosophy.
 * Fixed the missing export error in views/InspirationView.tsx.
 */
export const getDailyMotivation = async (): Promise<string> => {
  // Initialize AI client right before use as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Gi meg et kort, inspirerende og filosofisk sitat om kampsport (spesielt Ju Jitsu), disiplin eller personlig vekst. Svaret skal være på norsk og inneholde kun selve sitatet.",
    });
    // response.text is a property, not a method
    return response.text || "Veien til sort belte starter med det første steget.";
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Styrke kommer ikke fra fysisk kapasitet, men fra en ukuelig vilje.";
  }
};
