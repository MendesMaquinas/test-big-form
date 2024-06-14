import InputRadioGroupFormProps from "../../../interfaces/InputRadioGroupFormProps";
import InputRadioForm from "./InputRadioForm";

export default function InputRadioGroupForm(props: InputRadioGroupFormProps) {

    return (
        <div>
            <p className="text-xs font-medium mt-1">{props.title}</p>
            <div className="flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-md">
                <nav className="flex flex-row gap-1 py-1 px-2 font-sans text-base font-normal">
                    {props.options.map((option) => {
                        return <InputRadioForm register={props.register} name={option.name} title={option.title} value={option.value} checked={props.active == option.value} key={option.value} required />
                    })}
                </nav>
            </div>
        </div>
    )
}