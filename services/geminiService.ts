
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getCyberAdvice = async (prompt: string): Promise<string> => {
  if (!API_KEY) return "API Key is missing. Please check your environment configuration.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional Cyber Security consultant. Answer the following user inquiry in English, providing technical yet understandable advice. Ensure the tone is serious, professional, and helpful. 
      Inquiry: ${prompt}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    return response.text || "Sorry, I couldn't process your request at the moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI expert. Please try again later.";
  }
};
