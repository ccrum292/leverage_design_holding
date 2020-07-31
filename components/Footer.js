import Link from "next/link"

export default function Footer(props) {
  return (
    // <div className="">
      <div className="flex flex-col justify-center border-black border-t-2 pt-4 mt-4">
      <div className="flex justify-around">
        <Link href="/legal">
            <h4 className="cursor-pointer overflow-x-hidden truncate text-black jost transition duration-500 ease-in-out transform hover:font-black">Legal Policies</h4>
        </Link>
        <Link href="/contact">
            <h4 className="cursor-pointer overflow-x-hidden truncate text-black jost transition duration-500 ease-in-out transform hover:font-black">Contact Information</h4>
        </Link>
      </div>
      <h3 className="text-black self-center">© 2020 Copyright Leverage Design Holding LLC</h3>
      </div>
    // </div>
  )
}