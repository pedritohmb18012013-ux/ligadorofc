import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ erro: "Método não permitido" });

  const { numero, texto } = req.body;

  if (!numero || !texto) {
    return res.status(400).json({ erro: "Número e texto são obrigatórios" });
  }

  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const origin = req.headers.origin || "https://ligadorofc.vercel.app";

    await client.calls.create({
      to: numero,
      from: process.env.TWILIO_FROM_NUMBER,
      url: `${origin}/api/twiml?texto=${encodeURIComponent(texto)}`,
    });

    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
}   
