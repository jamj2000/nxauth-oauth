

function page({searchParams}) {
  const { error } = searchParams;

  return (
    <>
        <h1>Error</h1>
        <h3>{ error ?? '' }</h3>
    </>

  )
}

export default page