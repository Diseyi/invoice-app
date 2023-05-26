import logo from "../assets/images/logo.svg"

const Layout = () => {
  return (
    <div className="flex flex-row lg:flex-col">
        <div className="flex justify-between items-center ">
            <div className="">
                <img src={logo} alt="invoice logo" className="" />
            </div>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Layout