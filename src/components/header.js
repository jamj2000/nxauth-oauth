import Link from 'next/link'
import { auth } from "@/auth"

async function Header() {
    const session = await auth();
    console.log(session);

    return (
        <header>
            <div>
                <Link href="/">Inicio</Link>
                { session?.user?.role == 'ADMIN'
                    && <Link href="/admin">Admin panel</Link>
                }
                <Link href="/dashboard">Dashboard</Link>
            </div>
            <nav>
                {session
                    ? <Link href="/auth/signout">SignOut</Link>
                    : <Link href="/auth/signin">SignIn</Link>
                }
            </nav>
        </header>
    )
}

export default Header
