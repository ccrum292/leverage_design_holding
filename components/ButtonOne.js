import Link from "next/link";

export default function ButtonOne(props){
  return(
    <Link href={props.route}>
      <div className="text-center text-white bg-gray-700 shadowClass mx-2 mb-2 cursor-pointer py-2 px-2 w-1/2 self-center transition duration-700 ease-in-out transform hover:text-black hover:font-black hover:bg-gray-500 hover:scale-105">
        {props.text}
      </div>
    </Link>
  )
}