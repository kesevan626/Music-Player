import Link from 'next/link'

const Custom404 = () => {
      return (
            <div className='bg-slate-600/3 h-screen text-white flex items-center justify-center'>
                  Page Not Found <Link href='/'> Go Back</Link>
            </div>
      )
}

export default Custom404