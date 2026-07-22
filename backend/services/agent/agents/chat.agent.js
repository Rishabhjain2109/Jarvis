import { getModel } from "../config/llmModels"

export const chatAgent=async (state)=>{
    const llm=getModel("chat")
    const prompt="You are CortexAI, an intelligent AI assistant."
    const response=(await llm).invoke([
        {
            "role":"system",
            "content":prompt,
        },
        {
            "role":"human",
            "content":state.prompt
        }
    ])

    return{
        ...state,
        aiResponse:response.content
    } 
}