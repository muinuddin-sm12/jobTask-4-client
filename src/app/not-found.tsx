import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen w-full flex items-center justify-center flex-col'>
      <h2 className='text-lg font-[700]'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='px-2 py-1 bg-[#4CAF50] text-white text-sm rounded-md mt-4 transition-all'>Return Home</Link>
    </div>
  )
}