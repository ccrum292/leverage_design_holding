import Link from 'next/link'

export default function LgTitle(props) {

  return (
    <div className="flex justify-center">
      <div className="hidden lg:flex px-2 py-2 cursor-pointer transition duration-700 ease-in-out transform hover:scale-110">
          <Link href="/">
            <a className="jost self-center text-xl font-bold text-black sm:text-3xl">Leverage Design Holding</a>
          </Link>
      </div>
    </div>
  )
}