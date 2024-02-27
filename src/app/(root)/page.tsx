import Animation from "@/components/Animation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='mt-[68px] section-min-heght'>
      <Animation />
    </main>
  );
}
