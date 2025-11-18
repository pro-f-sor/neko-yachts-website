import { GoogleGenAI } from "@google/genai";

export const generateVoyageItinerary = async (destination: string): Promise<string> => {
  // Per Gemini API guidelines, initialize the client directly with the API key from environment variables.
  // By initializing here, we prevent a site-wide crash if process.env is not available on load.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `You are a world-class sailing voyage planner. Create a thrilling and luxurious 7-day sailing itinerary for a state-of-the-art 19-metre catamaran trip to ${destination}. The itinerary should be aspirational and exciting. Include daily stops, unique activities (like snorkeling in hidden coves, dining at exclusive restaurants, exploring local culture), and vivid descriptions of the scenic highlights. Structure the response in Markdown format, with each day as a main heading.`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating voyage itinerary:", error);
    return "We're sorry, but we couldn't generate your dream voyage at this time. Please try again later.";
  }
};