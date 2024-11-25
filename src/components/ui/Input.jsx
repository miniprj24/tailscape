export function Input({ placeholder, value, onChange, disabled = false, width = "80%" }) {
    return (
        <input
            type="text"
            className={`w-[${width}] px-4 py-2 text-gray-700 border rounded-sm 
          ${disabled ? 'bg-gray-100 border-gray-300 cursor-not-allowed' : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'}
          focus:outline-none focus:ring-2 transition duration-300`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    );
}  