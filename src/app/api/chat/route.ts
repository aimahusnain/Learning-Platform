// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error('Error communicating with OpenAI:', error);

    // if (error.response?.status === 429) {
    //   return NextResponse.json({ error: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
    // }

    return NextResponse.json({ error: 'Error communicating with OpenAI' }, { status: 500 });
  }
}
