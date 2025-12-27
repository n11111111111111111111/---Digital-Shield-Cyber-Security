
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const getCyberAdvice = async (prompt: string): Promise<string> => {
  // Use process.env.API_KEY directly for initialization as per guidelines
  if (!process.env.API_KEY) return "API Key is missing. Please check your environment configuration.";
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      // Using gemini-3-pro-preview for complex reasoning and professional technical advice
      model: 'gemini-3-pro-preview',
      contents: `You are a professional Cyber Security consultant. Answer the following user inquiry in English, providing technical yet understandable advice. Ensure the tone is serious, professional, and helpful. 
      Inquiry: ${prompt}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });
    // The response.text property directly returns the generated string
    return response.text || "Sorry, I couldn't process your request at the moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI expert. Please try again later.";
  }
};
