
import { GoogleGenAI } from "@google/genai";

export const generateVoyageItinerary = async (destination: string): Promise<string> => {
  const systemInstruction = `You are a world-class sailing voyage planner. Create a thrilling and luxurious 7-day sailing itinerary for a state-of-the-art 19-metre catamaran. The itinerary should be aspirational and exciting. Include daily stops, unique activities (like snorkelling in hidden coves, dining at exclusive restaurants, exploring local culture), and vivid descriptions of the scenic highlights.
  
  Format the response in Markdown:
  - Use "## Day X: Title" for daily headings.
  - Use bullet points for activities.
  - Use bold text for highlights.`;

  try {
    let apiKey = '';

    // 1. Try Vite Standard (import.meta.env) - This is the most likely method for this project structure
    try {
        // @ts-ignore
        if (typeof import.meta !== 'undefined' && import.meta.env) {
            // @ts-ignore
            apiKey = import.meta.env.VITE_GOOGLE_API_KEY || import.meta.env.VITE_API_KEY;
        }
    } catch (e) {
        console.warn('Vite env access failed', e);
    }

    // 2. Fallback to Node/CRA Standard (process.env)
    if (!apiKey) {
        try {
            apiKey = 
                process.env.REACT_APP_GOOGLE_API_KEY || 
                process.env.REACT_APP_API_KEY || 
                process.env.NEXT_PUBLIC_GOOGLE_API_KEY ||
                process.env.VITE_GOOGLE_API_KEY ||
                process.env.GOOGLE_API_KEY || 
                process.env.API_KEY;
        } catch (e) {
            console.warn('Process env access failed', e);
        }
    }

    if (!apiKey) {
        console.error("NEKO Yachts: API Key is missing. Please ensure you have set 'VITE_GOOGLE_API_KEY' in your Vercel Environment Variables and redeployed.");
        return "Error: System configuration missing (API Key). Please check Vercel Environment Variables.";
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Plan a voyage to: ${destination}`,
        config: {
            systemInstruction: systemInstruction,
        }
    });

    return response.text || "Detailed itinerary unavailable. Please try a different destination.";
  } catch (error) {
    // Log the full error object for debugging
    console.error("Error generating voyage itinerary:", error);
    
    let errorMessage = error instanceof Error ? error.message : String(error);

    // Attempt to parse clean error message from JSON response (Google often returns JSON inside the Error string)
    try {
        const jsonStart = errorMessage.indexOf('{');
        if (jsonStart !== -1) {
            const jsonStr = errorMessage.substring(jsonStart);
            const jsonError = JSON.parse(jsonStr);
            if (jsonError.error && jsonError.error.message) {
                errorMessage = jsonError.error.message;
            }
        }
    } catch (e) {
        // Ignore parsing errors and return original string
    }

    // Handle specific common errors with helpful hints
    if (errorMessage.includes("Generative Language API has not been used") || errorMessage.includes("SERVICE_DISABLED")) {
        console.error("ACTION REQUIRED: You must enable the Generative Language API in your Google Cloud Console.");
        console.error("Enable here: https://console.developers.google.com/apis/api/generativelanguage.googleapis.com/overview");
        return "Error: Google AI Service not enabled. Please check browser console for activation link.";
    }

    return `Error: ${errorMessage}`;
  }
};
