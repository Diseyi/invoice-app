
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
;
export const IHeader = () => {
  return <h1 className=" text-dark-blue dark:text-white text-2xl md:3xl lg:text-5xl font-bold" style={{
  /*style placeholder*/
}}>Invoices</h1>;
};

export default Button