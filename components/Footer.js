import Link from "next/link"

export default function Footer(props) {
  return (
    <div className="flex flex-col justify-center border-t-2 pt-2">
      <div className="flex justify-around">
        <Link href="/legal">
            <h4 className="cursor-pointer overflow-x-hidden truncate text-white jost transition duration-500 ease-in-out transform hover:font-black hover:text-yellow-500">Legal Policies</h4>
        </Link>
        <Link href="/contact">
            <h4 className="cursor-pointer overflow-x-hidden truncate text-white jost transition duration-500 ease-in-out transform hover:font-black hover:text-yellow-500">Contact Info</h4>
        </Link>
      </div>
      <h3 className="text-white self-center">© 2020 Copyright Leverage Design Holding LLC</h3>
    </div>
  )
}