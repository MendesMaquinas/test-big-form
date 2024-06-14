import TextAreaProps from "../../../interfaces/TextAreaProps";

export default function TextArea(props: TextAreaProps) {
  return (
    <div className="relative">
      <textarea
        maxLength={300}
        rows={6}
        onChange={(e) => props.setValue(e.target.value)}
        value={props.value}
        className={`peer p-4 block w-full bg-white border-transparent rounded-lg text-sm placeholder:text-transparent
           focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2`}
        placeholder=""
      ></textarea>
      <label
        className={`absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none
          transition ease-in-out duration-100 border border-transparent origin-[0_0]
          peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
         peer-focus:text-gray-500
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
        peer-[:not(:placeholder-shown)]:text-gray-500`}
      >
        {props.title}
      </label>
    </div>
  );
}
