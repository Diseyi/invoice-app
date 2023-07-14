import "./index.css";

type option = { value: string, label: string }
interface SelectProps {
  border?: string;
  name: string;
  width?: string;
  optionClass?: string;
  onchange?: () => void
  options: Array<option>
}

const Select = ({ name, options, width = 'w-full', border = 'border', optionClass }: SelectProps) => {
  return (
    <select name={name} className={` px-5 py-[16px] rounded ${width} ${border}`} >
      {
        options.map((item) => (
          <option className={optionClass} value={item.value}>{item.label} </option>
        ))
      }
    </select>
  )
}

export default Select