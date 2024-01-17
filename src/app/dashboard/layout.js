import React from 'react'

function layout({children}) {
    return (
        <section>
            <h1>Dashboard</h1>
            {children}
        </section>
    )
}

export default layout