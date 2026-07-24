import { Annotation } from "@langchain/langgraph";
import Conversation from "../../chat/models/conversation.model.js";

export const agentState=Annotation.Root({
    prompt:Annotation(),
    aiResponse:Annotation(),
    agent:Annotation(),
    conversationId:Annotation(),
    searchResults:Annotation(),
    images:Annotation()
})