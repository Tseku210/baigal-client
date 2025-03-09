import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-96 flex-1 md:gap-10">
      <div className="flex items-center justify-center flex-wrap gap-5 text-center md:text-left">
        <div className="animate-hover">
          <Image
            src="/images/tans/marwo-3-shadow.png"
            alt="not found image"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
        <div className="space-y-5">
          <h1 className="font-black text-3xl md:text-5xl text-gray-500 dark:text-gray-300">
            404
          </h1>
          <h2 className="font-medium text-2xl md:text-4xl text-gray-500 dark:text-gray-300">
            Хайсан хуудас олдсонгүй
          </h2>
          <Link href="/">
            <Button>Буцах</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
