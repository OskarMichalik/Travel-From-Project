"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Could not find the page!</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
