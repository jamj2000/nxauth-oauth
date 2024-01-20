'use server'
import { signIn, signOut} from "@/auth"
import { redirect } from "next/navigation"


// https://authjs.dev/reference/nextjs#signin
export async function loginGoogle() {
    try {
        await signIn('google')
        // redirect('/dashboard')
    } catch (error) {
        throw error
    }
}

export async function loginGithub() {
    try {
        await signIn('github')
        // redirect('/dashboard')
    } catch (error) {
        console.log(error);
        throw error
    }
}

// https://authjs.dev/reference/nextjs#signout
export async function logout() {
    try {
        await signOut()
    } catch (error) {
        throw error
    }
}

