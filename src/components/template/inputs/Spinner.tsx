import spinnerOptions from '../../../helpers/spinnerOptions';
import SpinnerProps from '../../../interfaces/SpinnerProps';


export default function Spinner(props: SpinnerProps) {

    if (!props?.array?.[0]) {
        return (
            <div className='relative border border-gray-300 rounded-lg py-3 px-2 shadow-sm flex items-center justify-center gap-2'>
                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#efefef] px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{props.label}</label>
                <p className='text-sm font-medium text-red-700'>Nenhum registro foi encontrado</p>
                
            </div>
        )
    }

    return (
        <div className="relative">
            <select
                name={props.name}
                disabled={props.disabled}
                className={`shadow-sm peer p-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                focus:pt-6
                focus:pb-2
                [&:not(:placeholder-shown)]:pt-6
                [&:not(:placeholder-shown)]:pb-2
                autofill:pt-6
                autofill:pb-2`}
                onChange={(e) => props.setSelectedValue(+e.target.value)}
            >
                <option value="" disabled selected>
                    Selecione {props.label}
                </option>
                {spinnerOptions(props.array, props.selectedId)}
            </select>
            <label
            className={`absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
            peer-focus:text-xs
            peer-focus:-translate-y-1.5
            text-black
            peer-focus:text-gray-500
            peer-[:not(:placeholder-shown)]:text-xs
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-gray-500`} 
            >{props.label}</label>
        </div>
    );
}
