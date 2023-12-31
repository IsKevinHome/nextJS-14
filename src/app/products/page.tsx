import Link from 'next/link';

export default function ProductList() {
  const productId = 100;

  return (
    <>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2 </Link>
      </h2>
      <h2>
        <Link href="products/3" replace>
          {/* replace prop replaces the current history state, instead of adding a new URL to the stack. */}
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId} </Link>
      </h2>
      <Link href="/">Homepage</Link>
    </>
  );
}
