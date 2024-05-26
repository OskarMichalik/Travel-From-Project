"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error">
      <h1>Something went wrong!</h1>
      <Link href="/">
        <button>Try again!</button>
      </Link>
    </div>
  );
}
