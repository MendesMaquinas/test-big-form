import InputRadioProps from "../../../interfaces/InputRadioProps";

export default function InputRadio(props: InputRadioProps) {
  return (
    <div
      className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-300 hover:bg-opacity-80  focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-gray-400 active:bg-opacity-40">
      <label className="flex items-center w-full px-3 py-2 cursor-pointer">
        <div className="grid mr-3 place-items-center">
          <div className="inline-flex items-center">
            <label className="relative flex items-center p-0 rounded-full cursor-pointer" >
              <input
                onClick={() => props.setValue(props.value)}
                name={props.name}
                type="radio"
                value={props.value}
                checked={props.value == props.selectedOption}
                className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
              />
              <span
                className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
          </div>
        </div>
        <p className="block font-sans text-xs antialiased font-medium leading-relaxed text-blue-gray-400">
          {props.title}
        </p>
      </label>
    </div>
  )
}