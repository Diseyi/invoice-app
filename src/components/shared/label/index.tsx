
interface LabelProps {
    text: string;
    className?: string
}

const Label = ({ text, className }: LabelProps) => {
    return (
        <label htmlFor="" className={className} >{text} </label>
    )
}
export const WelcomeComponent = () => {
  return <div className="" style={{
  color: "red",
  fontSize: "40px"
}}>Welcome Joshua</div>;
};

export default Label