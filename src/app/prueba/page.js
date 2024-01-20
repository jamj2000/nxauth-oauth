import { loginGoogle, logout } from "@/lib/actions"

function page() {
  return (
    <div>
        page
        <form>
        <button formAction={loginGoogle}>Login</button>
        <button formAction={logout}>Logout</button>
        </form>
    </div>
  )
}

export default page