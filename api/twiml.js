export default function handler(req, res) {
  const texto = req.query.texto || "";

  const seguro = texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  res.type("text/xml").send(`
    <Response>
      <Say language="pt-BR">${seguro}</Say>
      <Hangup/>
    </Response>
  `);
}   
