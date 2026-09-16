export default function handler(req, res) {
  const texto = req.query.texto || "";

  const seguro = texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(`<Response><Say language="pt-BR">${seguro}</Say><Hangup/></Response>`);
}   
