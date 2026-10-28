import express from "express";
import OpenAI from "openai";
import "dotenv/config";

const app = express();
const PORT = 3000;

app.use(express.json());

const ai = new OpenAI({
  apiKey: process.env.AI_KEY,
  baseURL: process.env.AI_URL,
});

app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Pertanyaan tidak boleh kosong",
      });
    }

    if (message.length > 4000) {
      return res.status(400).json({
        error: "Pertanyaan terlalu panjang",
      });
    }

    const response = await ai.chat.completions.create({
      model: process.env.AI_MODEL,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.json({
      answer: response.choices[0]?.message?.content ?? "",
    });
  } catch (error) {
    console.error("Groq error:", error);

    res.status(500).json({
      error: "Gagal mendapatkan respons AI",
    });
  }
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Backend berjalan di http://127.0.0.1:${PORT}`);
});