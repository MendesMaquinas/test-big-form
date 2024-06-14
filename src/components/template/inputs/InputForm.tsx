import InputProps from "../../../interfaces/InputFormProps";

export default function InputForm(props: InputProps) {
  return (
    !props.hidden && (
      <div className={props.styleBox}>
        <label
          className={`
            ${props.errors[props.name]?.message && "text-red-600"}
            ${
              props.styleLabel
            } block text-xs font-medium leading-6 text-gray-800 
            `}
        >
          {props.label}
        </label>
        <input
          type={props.type}
          {...props.register(props.name, { required: `Campo obrigatório.` })}
          defaultValue={props.defaultValue}
          className={`
              ${
                props.errors[props.name]?.message &&
                "border-red-500 ring-red-500  ring-2"
              }
               block w-full rounded-md py-2 px-2
               ring-gray-300 text-gray-900 shadow-sm ring-1 ring-inset
               placeholder:text-gray-400 focus:ring-2
              focus:ring-indigo-600 text-sm ${props.styleInput}
              `}
        />
        {props.errors[props.name]?.message && (
          <span className="error text-xs text-red-600 leading-none">
            {props.errors[props.name]?.message?.toString()}
          </span>
        )}
      </div>
    )
  );
}
