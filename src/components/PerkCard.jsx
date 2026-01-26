const PerkCard = ({ perk }) => {
  const tierColor = {
    "Very Rare": "bg-purple-500",
    Rare: "bg-blue-500",
    Uncommon: "bg-green-500",
  }[perk.tier] || "bg-gray-500";

  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-3 sm:p-5 border border-gray-700">
      
      {/* รูป + รายละเอียด */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
        
        <img
          src={perk.img}
          alt={perk.name}
          className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg p-1 mx-auto sm:mx-0"
        />

        {/* รายละเอียด */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-red-400">{perk.name}</h3>
          <p className="text-xs sm:text-sm text-gray-400">{perk.character}</p>

          <p className="text-sm sm:text-base text-gray-300 mt-2 line-clamp-3">
            {perk.description}
          </p>

          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            ⏱ Cooldown: {perk.cooldown}
          </p>

          <p className="mt-2 text-xs sm:text-sm">
            {perk.role === "survivor" ? "🧑 Survivor" : "👻 Killer"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerkCard;
