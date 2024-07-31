import { dotenv } from "dotenv";

import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";

dotenv.config();

export const getResponse = async (prompt, inputs) => {
    const api_key = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL;
    const chat = new ChatOpenAI({ api_key, model });
    const promptTemplate = PromptTemplate.fromTemplate(prompt);
    const chain = promptTemplate.pipe(chat);
    const response = await chain.invoke(inputs);
    return response['content'];
}
