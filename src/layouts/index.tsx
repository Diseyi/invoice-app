import { ReactNode } from "react";

import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.jpg";
import ThemeSwitch from "../hook/theme-switch";


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="flex lg:flex-col justify-between bg-gray-purple-2 w-full lg:w-24 lg:rounded-r-2xl h-20 md:h-24 lg:h-screen sticky z-30 lg:fixed left-0 top-0">
                <div className="bg-light-purple w-20 md:w-24 lg:w-full h-20 md:h-24 flex items-center justify-center rounded-r-2xl ">
                    <img src={logo} alt="invoice logo" className="" />
                </div>
                <div className="flex lg:flex-col">
                    <div className="w-20 md:w-24 lg:w-full h-20 md:h-24  flex items-center justify-center border-l lg:border-l-0 lg:border-t border-gray-purple">
                        <img src={avatar} alt="avatar" className="rounded-full w-10 h-10 md:w-12 md:h-12" />
                    </div><div className="">
                        <div className="w-20 md:w-24 lg:w-full h-20 md:h-24 flex items-center justify-center ">
                            <ThemeSwitch />
                        </div>
                    </div></div>
            </div>
            <div className="w-full h-full">
                {children}
            <div className="flex lg:flex-col justify-between bg-gray-purple-2 w-full lg:w-24 lg:rounded-r-2xl h-20 md:h-24 lg:h-screen sticky z-30 lg:fixed left-0 top-0">
                <div className="bg-light-purple w-20 md:w-24 lg:w-full h-20 md:h-24 flex items-center justify-center rounded-r-2xl ">
                    <img src={logo} alt="invoice logo" className="" />
                </div>
                <div className="flex lg:flex-col">
                    <div className="w-20 md:w-24 lg:w-full h-20 md:h-24  flex items-center justify-center border-l lg:border-l-0 lg:border-t border-gray-purple">
                        <img src={avatar} alt="avatar" className="rounded-full w-10 h-10 md:w-12 md:h-12" />
                    </div><div className="">
                        <div className="w-20 md:w-24 lg:w-full h-20 md:h-24 flex items-center justify-center ">
                            <ThemeSwitch />
                        </div>
                    </div></div>
            </div></div>
        </div>
    )
}

export default Layout