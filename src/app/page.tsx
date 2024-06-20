import Image from "next/image";
import Link from "next/link";
import "./styles.css";

export default function Home() {
  return (
    <main
      id={"main-screen"}
      className="flex min-h-screen  items-center justify-center p-24"
    >
      <Link href="/signup" className="text-2xl font-bold text-center mr-6">
        Sign Up
      </Link>
      <Link href="/login" className="text-2xl font-bold text-center">
        Login
      </Link>
    </main>
  );
}
