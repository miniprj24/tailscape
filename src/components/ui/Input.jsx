<<<<<<< Updated upstream
export function Input({ type, placeholder, name, value, onChange, width = 'w-4/5' }) {
  const isNumber = type === 'number'; // Check if the type is number

  return (
    <input
      type={type}
=======
export function Input({ placeholder, name, value, onChange, width = 'w-4/5' }) {
  return (
    <input
      type="text"
>>>>>>> Stashed changes
      placeholder={placeholder}
      name={name}
      value={value}
      className={`px-4 py-2 text-gray-700 border rounded-sm 
          ${width} 
          focus:outline-none focus:ring-2 transition duration-300`}
      onChange={onChange}
<<<<<<< Updated upstream
      className={`px-4 py-2 text-gray-700 border rounded-sm 
        ${width} 
        focus:outline-none focus:ring-2 transition duration-300
        ${isNumber ? 'appearance-none' : ''}`} // Remove the spinner if the type is number
=======
>>>>>>> Stashed changes
    />
  );
}