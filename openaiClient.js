import dotenv from 'dotenv';
dotenv.config();

import { OpenAI } from 'openai';
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'Loaded ✅' : 'Missing ❌');
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Read API key from env variables
});

export default openai;