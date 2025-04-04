import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="text-4xl font-semibold">
            João Pedro<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop nav e botão*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://wa.me/5561986530748?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio!">
            <Button>Entre em contato</Button>
          </Link>
        </div>

        {/* Mobile nav*/}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
