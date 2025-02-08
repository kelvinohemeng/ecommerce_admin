export const products = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

export async function GET() {
  return Response.json(products);
}
export async function POST(request: Request) {
  const product = await request.json();
  const newProduct = {
    id: products.length + 1,
    name: product.name,
  };
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
