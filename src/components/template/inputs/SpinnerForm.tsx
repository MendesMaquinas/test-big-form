import { Controller } from "react-hook-form";
import spinnerOptions from "../../../helpers/spinnerOptions";

interface SpinnerFormProps {
  name: string;
  label: string;
  options: any;
  selectedId: number;

  register: any;
  errors: any;
}

export default function SpinnerFrom(props: SpinnerFormProps) {    
  return (
    <div className="shadow-sm">
      <label
        className="block text-xs font-medium leading-6 text-gray-800"
      >
        {props.label}
      </label>
      <select
        defaultValue={+props?.selectedId}
        value={props?.selectedId}
        id="spinner"
        name={props.name}
        {...props.register(props.name, { required: true})}
        className={`block w-full rounded-md py-2 px-2
                ring-gray-300 text-gray-900 shadow-sm ring-1 ring-inset
                placeholder:text-gray-400 focus:ring-2
                focus:ring-indigo-600 text-sm`}
      >
 
        {spinnerOptions(props?.options, props.selectedId)}
      </select>
      {props?.errors?.[props.name] && <span className="formError errorMssg">This field is required</span>}
    </div>
  );
}
