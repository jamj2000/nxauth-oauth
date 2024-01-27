// Los iconos disponibles en la carpeta /public
// han sido obtenidos de https://authjs.dev/img/providers/google.svg y otros proveedores
import { loginGoogle, loginGithub } from "@/lib/actions"


// https://next-auth.js.org/configuration/pages#sign-in-page
const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado con otro proveedor.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");


function page({ searchParams }) {

  const { error } = searchParams

  return (
    <>

      <h1>Iniciar sesión</h1>
      { error && <p>{errors.get(error)}</p>}
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