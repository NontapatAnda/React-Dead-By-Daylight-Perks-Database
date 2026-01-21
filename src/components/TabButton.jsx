const TabButton = ({ active, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 font-semibold transition-all ${
        active
          ? "border-b-2 border-red-500 text-red-500"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
