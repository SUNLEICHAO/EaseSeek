import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: "sk-075bfafbc9b042669ea5c6e8c44d2af7",
  dangerouslyAllowBrowser: true,
});

async function main() {
  const completion = await client.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  return completion.choices[0].message.content;
}

export { main };
