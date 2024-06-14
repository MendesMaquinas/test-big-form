import spinnerOptions from "../../../helpers/spinnerOptions";

interface SpinnerFormProps {
    name: string,
    label: string,
    options: any,
    selectedId: number,
    disabled: boolean,

    register: any,
}

export default function SpinnerFrom(props: SpinnerFormProps) {
    return (
        <div className="shadow-sm">
            <label  htmlFor="spinner" className="block text-xs font-medium leading-6 text-gray-800">
                {props.label}
            </label>
            <select id="spinner" name={props.name} {...props.register(props.name, { required: !props.disabled })}
                className={`block w-full rounded-md py-2 px-2
                ring-gray-300 text-gray-900 shadow-sm ring-1 ring-inset
                placeholder:text-gray-400 focus:ring-2
                focus:ring-indigo-600 text-sm`}
            >
                <option value="0" key="void" disabled selected>Informe um valor</option>
                {spinnerOptions(props?.options, props?.selectedId)}
            </select>
        </div>
    )
}