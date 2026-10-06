export const Button = ({onClick, children, onDoubleClick}) => (
    <button onClick={onClick} onDoubleClick={onDoubleClick} className="max-w-20 max-h-10 h-full w-full p-auto bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700  transition-colors">
    {children}
  </button>
)