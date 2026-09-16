export default function handler(req, res) {
  res.type("text/xml").send("<Response><Say>teste</Say><Hangup/></Response>");
}   
