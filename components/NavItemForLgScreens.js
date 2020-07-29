import Link from "next/link"

export default function NavItemForLgScreens(props) {
  return (
    <Link href={props.href}>
      <div key={props.id} className={props.classNameTailwind}>
        <div className="group cursor-pointer flex justify-center  py-2 px-4 transition duration-500 ease-in-out transform hover:scale-110 hover:bg-yellow-500">
          <h4 className="text-lg overflow-x-hidden truncate text-black font-black jost transition duration-500 ease-in-out transform">{props.text}</h4>
        </div>
      </div>
    </Link>
  )
}