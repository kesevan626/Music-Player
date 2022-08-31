

function Error ({statusCode}){
  return (
    <div className='bg-white h-screen'>
          <p>
                    {statusCode 
                    ? `An error ${statusCode} occurred`
                    : 'An error ocurred on client'}
          </p>
          <h2>Error</h2>
    </div>
  )
}

Error.getInitialProps =({res, err}) =>{
          const statusCode = res ? res.statusCode : err ? err.statusCode : 500
          return {statusCode}
}

export default Error