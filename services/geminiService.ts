
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
    
    // Return the actual error message for debugging purposes
    const errorMessage = error instanceof Error ? error.message : String(error);
    return `Error: ${errorMessage}`;
  }
};
