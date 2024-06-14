import InputRadioGroupProps from "../../../interfaces/InputRadioGroupProps";
import InputRadio from "./InputRadio";

export default function InputRadioGroup(props: InputRadioGroupProps) {

    return (
        <div>
            <p className="text-xs font-medium mt-1">{props.title}</p>
            <div className="flex w-full flex-col rounded-xl bg-white text-gray-700 shadow-sm">
                <nav className="flex flex-row gap-1 py-1 px-2 font-sans text-base font-normal">
                    {props.options.map((option) => {
                        return <InputRadio name={option.name} title={option.title} value={option.value} setValue={props.setValue} key={option.value} selectedOption={props.selectedOption}/>
                    })}
                </nav>
            </div>
        </div>
    )
}