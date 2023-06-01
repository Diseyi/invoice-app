import { ReactNode } from 'react';
import "./index.css";

interface LayoutProps {
    children: ReactNode;
}

const Modal = ({ children }: LayoutProps) => {
    return (
        <div className="background-overlay  z-10 ml-20 fixed w-screen h-screen top-0 left-0">
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    )
}

export default Modal