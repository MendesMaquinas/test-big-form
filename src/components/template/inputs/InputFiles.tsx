

export default function InputFiles(props) {
  return (
    <div className="flex items-center justify-center w-full">
    <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-400 "><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
            <p className="text-xs text-gray-400 ">SVG, PNG, JPG</p>
        </div>
        <input onChange={props.onChange} id="dropzone-file" type="file" multiple className="hidden" accept="image/png, image/jpeg" />
    </label>
</div> 
  );
}
