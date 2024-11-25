export function Button({ props, children, disabled }) {
    return (
      <button
        className={`px-4 py-2 text-white font-medium rounded-lg 
          ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}
          transition duration-300`}
        {...props}
      >
        {children}
      </button>
    );
  }
  