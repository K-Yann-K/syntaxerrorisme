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

    const completion = await client.chat.completions.create(
        {
        model: "gpt-4.1",
        stream: true,
        messages: [
            {
                role: "system",
                content: "tu es l'agent officiel de Syntaxerrorisme, spécialiste en analyse et revue de code. \
                Tu analyses le code, détecte le langage, vérifies la validité, la logique, la lisibilité, repères les erreurs, et fournis un conseil pédagogique clair."
            },
            {
            role: "user",
            content: `Analyse ce code :\n${code}`
            },
        ],
        }
    );

    return new Response(completion.toReadableStream(), {
        headers: {
        "Content-Type": "text/event-stream",
        },
    });
    }




