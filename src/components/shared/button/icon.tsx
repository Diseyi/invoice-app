interface ButtonProp {
    text: string;
    src: string;
    alt: string;
    bgColor: string;
    color: string;
    imgSize: string
    onclick?: () => void;
}

const ButtonIcon = ({ src, alt, text, bgColor, color, imgSize, onclick }: ButtonProp) => {
    return (
        <div role="button" onClick={onclick} className={`rounded-full py-4 px-2 inline-flex items-center gap-4 ${color} ${bgColor}`}>
            <div className={`${imgSize}`}>
                <img src={src} alt={alt} className="w-full h-full" />
            </div>
            <span className="">{text} </span>
        </div>
    )
}

export default ButtonIcon