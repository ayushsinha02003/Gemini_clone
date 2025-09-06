import { GoogleGenAI } from "@google/genai";

// Use environment variable for API key
const apiKey = "AIzaSyDubr8q2YLPBmhZ7Xv9vqYLRc2kSTEAjLQ";

if (!apiKey) {
  throw new Error("GEMINI_API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({
  apiKey: "AIzaSyDubr8q2YLPBmhZ7Xv9vqYLRc2kSTEAjLQ",
});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  // Access the generated text from the response
  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log(text);
  return text;
}

export default main;
