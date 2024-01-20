// Los iconos disponibles en la carpeta /public
// han sido obtenidos de https://authjs.dev/img/providers/google.svg y otros proveedores
import { loginGoogle, loginGithub } from "@/lib/actions"

function page() {

  return (
    <section className="auth">

      <h1>Iniciar sesión</h1>

      <form>

        <button formAction={loginGoogle}>
          <img src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub}>
          <img src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

      </form>

    </section>
  )
}

export default page