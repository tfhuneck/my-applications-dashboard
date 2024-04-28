import Link from "next/link"
import Image from "next/image"  
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import MainNav from "./Nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex h-16 items-center justify-between mx-10">
        <MainNav />
        <ThemeToggle />
      </div>
    </header>
  )
}