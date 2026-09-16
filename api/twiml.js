export default function handler(req, res) {
  const texto = req.query.texto || "";
  res.type("text/xml").send(`
    <Response>
      <Say language="pt-BR">${texto}</Say>
      <Hangup/>
    </Response>
  `);
}   
