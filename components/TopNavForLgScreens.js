import NavItemForLgScreens from "./NavItemForLgScreens"

export default function TopNavForLgScreens(props) {

  const navInfoArray = [{
    href: "/",
    id: 1,
    text: "Home"
  },{
    href: "/products",
    id: 2,
    text: "Products"
  },{
    href: "/about",
    id: 3,
    text: "About"
  },
  {
    href: "/contact",
    id: 4,
    text: "Contact"
  }]

  const checkForActive = (props, navInfoArray) => {
    return(
      navInfoArray.map(val => {
        if(props.active != val.text){
          return(<NavItemForLgScreens href={val.href} key={val.id} text={val.text} classNameTailwind="mx-4 mt-2 mb-2"/>)
        }
        return(<NavItemForLgScreens href={val.href} key={val.id} text={val.text} classNameTailwind="mx-4 mt-2 mb-2 border-b-2 border-yellow-500"/>)
      })
    )
  };

  return (
    <div className="hidden bg-gray-700 rounded-b-full pt-1 pb-12 sm:rounded-b-lg sm:py-2 lg:flex flex-row w-8/12 items-center justify-around">
      {checkForActive(props, navInfoArray)}
    </div>
  )
}