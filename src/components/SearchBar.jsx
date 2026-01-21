const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="ค้นหา Perk, ตัวละคร หรือคำอธิบาย..."
        className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
      />
    </div>
  );
};

export default SearchBar;
