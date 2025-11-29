
import { GoogleGenAI } from "@google/genai";

export const generateVoyageItinerary = async (destination: string): Promise<string> => {
  const systemInstruction = `You are a world-class sailing voyage planner. Create a thrilling and luxurious 7-day sailing itinerary for a state-of-the-art 19-metre catamaran. The itinerary should be aspirational and exciting. Include daily stops, unique activities (like snorkelling in hidden coves, dining at exclusive restaurants, exploring local culture), and vivid descriptions of the scenic highlights.
  
  Format the response in Markdown:
  - Use "## Day X: Title" for daily headings.
  - Use bullet points for activities.
  - Use bold text for highlights.`;

  try {
    // Safely retrieve API Key, handling environments where 'process' might not be defined
    let apiKey = '';
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof process !== 'undefined' && process.env) {
            apiKey = process.env.API_KEY || '';
        }
    } catch (e) {
        console.warn('Error accessing process.env:', e);
    }

    if (!apiKey) {
        console.error("NEKO Yachts: API_KEY is missing in the environment.");
        return "Error: System configuration missing (API Key).";
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
