import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-8 mt-10">
      <Link href="/login">
        <Button className="bg-[#4880FF] text-white rounded">Login</Button>
      </Link>
      <Link href="/dashboard">
        <Button className="bg-[#4880FF] text-white rounded">Back Office</Button>
      </Link>
    </div>
  );
}
