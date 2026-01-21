import { useState } from "react";
import PerkCard from "../components/PerkCard";

const PerksPage = ({ perks, filterRole, setFilterRole }) => {
  const [activeButton, setActiveButton] = useState("all");

  const filteredPerks = perks.filter(
    p => filterRole === "all" || p.role === filterRole
  );

  const handleButtonClick = (role) => {
    setFilterRole(role);
    setActiveButton(role);
  };

  return (
    <>
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => handleButtonClick("all")}
          className={activeButton === "all" ? "text-blue-500" : "text-white"}
        >
          All
        </button>
        <button
          onClick={() => handleButtonClick("survivor")}
          className={activeButton === "survivor" ? "text-blue-500" : "text-white"}
        >
          🧑 Survivor
        </button>
        <button
          onClick={() => handleButtonClick("killer")}
          className={activeButton === "killer" ? "text-blue-500" : "text-white"}
        >
          👻 Killer
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPerks.map(perk => (
          <PerkCard key={perk.id} perk={perk} />
        ))}
      </div>
    </>
  );
};

export default PerksPage;
