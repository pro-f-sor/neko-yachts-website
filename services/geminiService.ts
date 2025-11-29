
import { GoogleGenAI } from "@google/genai";

export const generateVoyageItinerary = async (destination: string): Promise<string> => {
  const systemInstruction = `You are a world-class sailing voyage planner. Create a thrilling and luxurious 7-day sailing itinerary for a state-of-the-art 19-metre catamaran. The itinerary should be aspirational and exciting. Include daily stops, unique activities (like snorkelling in hidden coves, dining at exclusive restaurants, exploring local culture), and vivid descriptions of the scenic highlights.
  
  Format the response in Markdown:
  - Use "## Day X: Title" for daily headings.
  - Use bullet points for activities.
  - Use bold text for highlights.`;

  try {
    // Check if API key is present to provide better debug info
    // Note: accessing process.env might throw in strict browser environments if not replaced by bundler,
    // so we access it inside the try block.
    if (!process.env.API_KEY) {
        console.error("NEKO Yachts: API_KEY is missing. Please ensure it is set in your environment variables.");
        return "System configuration error: API Key missing.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: {
            parts: [
                { text: `Plan a voyage to: ${destination}` }
            ]
        },
        config: {
            systemInstruction: systemInstruction,
        }
    });

    return response.text || "Detailed itinerary unavailable. Please try a different destination.";
  } catch (error) {
    // Log the full error object for debugging
    console.error("Error generating voyage itinerary:", error);
    
    // Return a user-friendly message
    return "We're sorry, but we couldn't generate your dream voyage at this time. Please try again later.";
  }
};
