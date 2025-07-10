"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/ThemeSwitch";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-white border-b dark:bg-black'>
      <div className='text-xl font-bold'>My-Policy</div>
      <div className='flex items-center gap-4'>
        <ThemeSwitch />

        <Link href='/'>
          <Button
            variant={pathname === "/" ? "default" : "outline"}
            className='cursor-pointer'
          >
            Home
          </Button>
        </Link>

        <Link href='/about'>
          <Button
            variant={pathname === "/about" ? "default" : "outline"}
            className='cursor-pointer'
          >
            About
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
