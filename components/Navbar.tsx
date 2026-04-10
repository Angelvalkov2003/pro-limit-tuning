import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#010000]">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 py-2">
          <Image
            src="/prolimitlogo.PNG"
            alt="Pro Limit Tuning"
            width={200}
            height={56}
            className="h-10 w-auto object-contain sm:h-11"
            priority
          />
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href="#kontakti"
            className="hidden text-zinc-300 transition-colors hover:text-white sm:inline"
          >
            Контакт
          </a>
          <a
            href="#uslugi"
            className="rounded-md bg-[#dc211d] px-4 py-2 text-white transition-[filter] hover:brightness-110"
          >
            Услуги
          </a>
        </div>
      </nav>
    </header>
  );
}
