
interface LabelProps {
    text: string;
    className?: string
}

const Label = ({ text, className }: LabelProps) => {
    return (
        <label htmlFor="" className={className} >{text} </label>
    )
}

export default Label