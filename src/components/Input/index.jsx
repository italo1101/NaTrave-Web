export const Input = ({name, label, error, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-grey-500 mb-2">{label}</label>
        <input {...props} name={name} id={name} className={`p-3 border border-grey-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700 ${error && 'border-red-300'}`}></input>
        <span className="p-2 text-sm text-red-300">{error}</span>
    </div>
)    