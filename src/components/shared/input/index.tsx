interface InputProps {
    type?: string;
    border?: string;
    value: string;
    width?: string;
    onchange?: () => void
}

const Input = ({ type = 'text', border = 'border', value, width = 'w-full', onchange  }: InputProps) => {
    return (
        <input onChange={onchange} type={type} value={value} className={` px-5 py-3 rounded ${width} ${border}`} />
    )
}

export default Input