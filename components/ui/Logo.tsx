import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="text-headline-md font-bold text-primary">
      <span className="text-headline-md font-bold text-primary">Nexus</span>
    </Link>
  );
}
