import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Home</h1>
      <Link href="/dashboard">Go to dashboard page</Link>
    </div>
  );
}
