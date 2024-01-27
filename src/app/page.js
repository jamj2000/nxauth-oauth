import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Página principal</h1>
      <div>
        <h2>Algunas rutas en /api/auth</h2>
        <Link href="/api/auth/providers">providers</Link>
        <Link href="/api/auth/session">session</Link>
        <Link href="/api/auth/signin">signin</Link>
        <Link href="/api/auth/signout">signout</Link>
        <Link href="/api/auth/error">error</Link>
        <h2>Ruta en /about</h2>
        <Link href="/about">about</Link>
      </div>
    </main>
  )
}
