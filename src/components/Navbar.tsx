"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { User } from "next-auth" 
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const {data: session} = useSession();
    const user: User = session?.user as User;
    const { setTheme } = useTheme();

  return (
    <nav className="p-4 md:p-6 ring">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex gap-4">
                <a href="/dashboard" className="text-xl font-bold mb-4 md:mb-0">Obscura</a>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {
                session ? (
                    <>
                        <span className="mr-4">Welcome, {user?.username || user?.email}</span>
                        <Button onClick={() => signOut()}>Logout</Button>
                    </>
                ) : (
                    <div className="w-full md:w-auto flex flex-col md:flex-row justify-between items-center gap-2">
                        <Link href="/signup" className="w-full">
                            <Button className="w-full">SignUp</Button>
                        </Link>
                        <Link href="/signin" className="w-full">
                            <Button className="w-full">Login</Button>
                        </Link>
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar
