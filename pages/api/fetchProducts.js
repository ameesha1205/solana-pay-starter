import products from "./products.json";

export default function handler(req, res) {
  // If get request
  if (req.method === "GET") {
    const productsNoHashes = products.map((product) => {
      return product;
    });

    res.status(200).json(productsNoHashes);
  }
  else {
    res.status(405).send(`Method ${req.method} not allowed`);
  }
}