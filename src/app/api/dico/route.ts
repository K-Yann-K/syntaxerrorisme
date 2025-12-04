import OpenAI from "openai";

export const runtime = "edge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { code } = await req.json();

  if (!code || typeof code !== "string") {
    return new Response("Aucun code reçu.", { status: 400 });
  }

  const completion = await client.chat.completions.create({
    model: "gpt-4.1",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          `Tu es l'agent officiel de Syntaxerrorisme, expert en analyse et revue de code (tous langages).
          Tu détectes le langage, les erreurs, la logique, les imports manquants, 
          et tu fournis une explication pédagogique structurée.`,
      },
      {
        role: "user",
        content: `Analyse ce code :\n${code}`,
      },
    ],
  });

  const stream = completion.toReadableStream();

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
}
