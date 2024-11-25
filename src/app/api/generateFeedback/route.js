import OpenAI from "openai";

const client = new OpenAI({
  apiKey:"",
});

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body
    const { feedbackData } = body;

    if (!feedbackData) {
      return new Response(JSON.stringify({ error: "Missing feedback data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const prompt = `
    Based on the following feedback, generate a concise comment (max 300 characters) for the student's performance. Highlight strengths and areas for improvement:
    Feedback: ${JSON.stringify(feedbackData)}

    Example:
    "Great progress in mathematics and teamwork. Needs to improve French comprehension and participation."
    `;

    const response = await client.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
      temperature: 0.7,
    });

    const comment = response.choices[0]?.message?.content?.trim();
    if (!comment) {
      throw new Error("No valid comment generated.");
    }

    return new Response(JSON.stringify({ comment }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating feedback:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate feedback" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
