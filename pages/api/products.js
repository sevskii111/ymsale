export default function handler(req, res) {
  const { query, minPrice, maxPrice, hid, code } = req.query;
  console.log(query, minPrice, maxPrice, hid, code);
  res.status(200).json({ name: "John Doe" });
}
