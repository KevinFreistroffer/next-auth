import Image from "next/image";
import Link from "next/link";
import "./styles.css";

export default function Home() {
  return (
    <main
      id={"main-screen"}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <h1 className={"h-1"}>H1 Title</h1>
      <Link href="/signup" className="text-2xl font-bold text-center">
        Sign upz
      </Link>
      {/* I want to scope the styles to container paragraph, excluding the paragraph in the content div  */}
      <div className="container">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <div className="content div-2">
          <p>Third paragraph</p>
        </div>
      </div>
    </main>
  );
}
