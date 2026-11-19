import Link from "next/link";

export default async function Page({params}: {params: Promise<{id: number}>}) {
  const p = await params;

  const id = p.id;

  return (
    <div>
      <Link href="/">
        Back to home
      </Link>

      <p>
        Product ID: {id}
      </p>
    </div>
  );
}