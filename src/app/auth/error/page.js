

function page({searchParams}) {
  const { error } = searchParams;

  return (
    <section className="auth">
        <h1>Error</h1>
        <h3>{ error ?? '' }</h3>
    </section>
  )
}

export default page