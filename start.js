
import openai from './openaiClient.js';

async function getChatResponse() {
    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [{ role: 'user', content: 'Provide me advise what exercises should I do for my back pain?' }],
    });

    console.log(response.choices[0].message.content);
}

getChatResponse();
