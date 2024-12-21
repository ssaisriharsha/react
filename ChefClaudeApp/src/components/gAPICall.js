import { GoogleGenerativeAI } from "@google/generative-ai"


export async function gAPICall(ingredients) {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
    const prompt = "you are a chef assisting a human to make food items. you will be provided with the list of ingredients that are available. all you have to do is to generate clear instructions on how to prepare that food item. if no food item is possible with the given ingredients, just say that its not possible. Add a few ingredients if required. If no non veg ingredient is given, prefer a veg dish. return the response in markdown so it will be easier to render in a web page. Provide nothing other than jsx in the response.";
    const allIngredients = " The ingredients are " + ingredients.join(", ");
    const result = await model.generateContent(prompt+allIngredients);
    return result.response.text();
}