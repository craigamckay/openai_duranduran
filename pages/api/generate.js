import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.song),
    temperature: req.body.temperature,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(song) {
  const capitalizedsong =
    song[0].toUpperCase() + song.slice(1).toLowerCase();
  return `Suggest a line of a song about ${capitalizedsong}.`;
}
