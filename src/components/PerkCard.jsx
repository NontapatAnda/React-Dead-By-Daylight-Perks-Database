const PerkCard = ({ perk }) => {
  const tierColor = {
    "Very Rare": "bg-purple-500",
    Rare: "bg-blue-500",
    Uncommon: "bg-green-500",
  }[perk.tier] || "bg-gray-500";

  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-5 border border-gray-700">
      
      {/* รูป + รายละเอียด */}
      <div className="flex gap-2">
        
        <img
          src={perk.img}
          alt={perk.name}
          className="ml-20 mt-2 w-30 h-30 rounded-lg p-1"
        />

        {/* รายละเอียด */}
        <div className="flex-1 ml-20">
          <h3 className="text-xl font-bold text-red-400">{perk.name}</h3>
          <p className="text-sm text-gray-400">{perk.character}</p>

          <p className="text-gray-300 mt-2">
            {perk.description}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            ⏱ Cooldown: {perk.cooldown}
          </p>

          <p className="mt-2 text-sm">
            {perk.role === "survivor" ? "🧑 Survivor" : "👻 Killer"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerkCard;
