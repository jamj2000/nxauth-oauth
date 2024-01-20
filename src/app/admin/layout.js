import React from 'react'

function layout({children}) {
    return (
        <section>
            <h1>Admin panel</h1>
            {children}
        </section>
    )
}

export default layout