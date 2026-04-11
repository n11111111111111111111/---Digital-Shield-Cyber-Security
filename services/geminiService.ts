
import { GoogleGenAI } from "@google/genai";

export const getCyberAdvice = async (prompt: string): Promise<string> => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) return "عذراً، مفتاح API مفقود. يرجى التحقق من إعدادات النظام.";
  
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "أنت 'حارس دجلة'، مستشار أمن سيبراني محترف وخبير. مهمتك هي تقديم نصائح تقنية دقيقة ومفهومة باللغة العربية. يجب أن يكون أسلوبك جاداً، مهنياً، ومفيداً جداً. ركز على حماية المستخدمين من التهديدات الرقمية وتوعيتهم بأفضل الممارسات الأمنية."
      }
    });
    return response.text || "عذراً، لم أتمكن من معالجة طلبك في الوقت الحالي.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "حدث خطأ أثناء الاتصال بخبير الذكاء الاصطناعي. يرجى المحاولة مرة أخرى لاحقاً.";
  }
};
