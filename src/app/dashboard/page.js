import React from 'react'
import { auth } from '@/auth'
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function page() {
    const session = await auth()
    console.log(session);

    if (!session) redirect('/')

    return (
        <>
            <Link href="/">Página principal</Link>
            <div>
                {JSON.stringify(session)}
            </div>
        </>
    )
}

export default page