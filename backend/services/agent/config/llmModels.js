import { ChatGroq } from "@langchain/groq"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
import { ChatOpenRouter } from "@langchain/openrouter";
import dotenv from "dotenv";
dotenv.config();

const groq = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY ,
    model: "openai/gpt-oss-120b"
})
const gemini=new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY ,
    model:"gemini-2.5-flash"
})
const deepseek= new ChatOpenRouter({
  model:"deepseek/deepseek-chat",
  temperature: 0,
  maxTokens:2500,
});
export const getModel=async (agent)=>{
    switch(agent){
        case "chat":
            return gemini;
        case "search":
            return gemini;
        case "coding":
            return deepseek;
        case "imageAnalyzer":
            return gemini;
        default:
            return gemini;
    }
}