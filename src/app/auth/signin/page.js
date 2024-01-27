// Los iconos disponibles en la carpeta /public
// han sido obtenidos de https://authjs.dev/img/providers/google.svg y otros proveedores
import { loginGoogle, loginGithub } from "@/lib/actions"

// // https://next-auth.js.org/configuration/pages#sign-in-page
// const errors = {
//   OAuthSignin: "Intenta iniciar sesión con una cuenta diferente.",
//   OAuthCallback: "Intenta iniciar sesión con una cuenta diferente.",
//   OAuthCreateAccount: "Intenta iniciar sesión con una cuenta diferente.",
//   EmailCreateAccount: "Intenta iniciar sesión con una cuenta diferente.",
//   Callback: "Intenta iniciar sesión con una cuenta diferente.",
//   OAuthAccountNotLinked: "Para confirmar su identidad, inicie sesión con la misma cuenta que utilizó originalmente.",
//   EmailSignin: "Comprueba tu dirección de correo electrónico.",
//   CredentialsSignin: "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos.",
//   SessionRequired: "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.",
//   Default: "No se puede iniciar sesión.",
// }

// https://next-auth.js.org/configuration/pages#sign-in-page
const errors = new Map();
errors.set('OAuthSignin', "Intenta iniciar sesión con una cuenta diferente.");
errors.set('OAuthCallback', "Intenta iniciar sesión con una cuenta diferente.");
errors.set('OAuthCreateAccount', "Intenta iniciar sesión con una cuenta diferente.");
errors.set('EmailCreateAccount', "Intenta iniciar sesión con una cuenta diferente.");
errors.set('Callback', "Intenta iniciar sesión con una cuenta diferente.");
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