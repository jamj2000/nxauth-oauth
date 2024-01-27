// Los iconos disponibles en la carpeta /public
// han sido obtenidos de https://authjs.dev/img/providers/google.svg y otros proveedores
import { loginGoogle, loginGithub } from "@/lib/actions"

function page({ searchParams }) {

  const { error } = searchParams

  return (
    <>

      <h1>Iniciar sesión</h1>
      { error && <p>{error}</p>}
      <form>

        <button formAction={loginGoogle}>
          <img src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>

        <button formAction={loginGithub}>
          <img src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

      </form>

    </>
  )
}

export default page