import { logout } from "@/lib/actions"

function page() {
  return (
    <section className="auth">
      <h1>Cerrar sesión</h1>
      <form>
        <button formAction={logout}>
          <img src="/logout.svg" alt="Google" /> Cerrar sesión
        </button>
      </form>
    </section>
  )
}

export default page