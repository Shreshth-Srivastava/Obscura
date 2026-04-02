"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { User } from "next-auth" 
import { Button } from "./ui/button"

const Navbar = () => {
    const {data: session} = useSession();
    const user: User = session?.user as User;

  return (
    <nav className="p-4 md:p-6 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <a href="/dashboard" className="text-xl font-bold mb-4 md:mb-0">Obscura</a>
            {
                session ? (
                    <>
                        <span className="mr-4">Welcome, {user?.username || user?.email}</span>
                        <Button onClick={() => signOut()}>Logout</Button>
                    </>
                ) : (
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <Link href="/signup">
                            <Button>SignUp</Button>
                        </Link>
                        <Link href="/signin">
                            <Button>Login</Button>
                        </Link>
                    </div>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar
