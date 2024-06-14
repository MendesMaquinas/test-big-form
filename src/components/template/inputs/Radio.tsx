import RadioProps from "../../../interfaces/RadioProps";

export default function Radio(props: RadioProps) {
  return (
    <div className="flex items-center mb-4">
      <input
        id={props.id}
        type="radio"
        checked={props.checked}
        name={props.name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        onClick={props.onClick}
      />
      <label className="ms-2 text-sm font-medium text-gray-900">
        {props.text}
      </label>
    </div>
  );
}
