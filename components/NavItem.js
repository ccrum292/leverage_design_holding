import Link from "next/link"

export default function NavItem(props) {
  return (
    <Link href={props.href}>
      <div key={props.id} className={props.classNameTailwind}>
        <div className="bg-white shadowClass cursor-pointer flex justify-center w-full border-4 border-yellow-500 py-2 px-4 transition duration-500 ease-in-out transform hover:bg-yellow-300">
          <h4 className="overflow-x-hidden text-xl truncate text-black font-black jost">{props.text}</h4>
        </div>
      </div>
    </Link>
  )
}