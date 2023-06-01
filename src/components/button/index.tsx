
interface ButtonProp {
    text: string;
    bgColor?: string;
    color?: string;
    onclick?: () => void;
}

const Button = ({text, bgColor = 'bg-gray-100', color = 'text-black', onclick}: ButtonProp) => {
  return (
    <button onClick={onclick} className={`rounded-full py-4 px-8 hover:opacity-90 ${color} ${bgColor}`}> {text} </button>
  )
}

export default Button