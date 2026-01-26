import { useState } from "react";
import perksData from "./data/perksData";
import PerksPage from "./pages/PerkPage";
import SearchPage from "./pages/SearchPage";
import TabButton from "./components/TabButton";
import PerkRandomPage from "./pages/PerkRandomPage";

const App = () => {
  const [activeTab, setActiveTab] = useState("perks");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");

  return (
    <div className="min-h-screen text-white p-6" style={{ background: "linear-gradient(135deg, #1a0a1a 0%, #3d1a2d 25%, #2d0a1a 50%, #3d1a2d 75%, #1a0a1a 100%)" }}>
    <div className="flex justify-center">
      <img
      src="/pic/Dead-by-Daylight-Emblem.png" alt="Logo" className="w-30 h-15" />
      <h1 className="text-4xl font-bold text-red-500 mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        Dead by Daylight - Database
      </h1>
      </div>

      <div className="flex gap-4 mb-6 border-b border-gray-700">
        <TabButton active={activeTab === "perks"} onClick={() => setActiveTab("perks")}>
          Perks
        </TabButton>
        <TabButton active={activeTab === "search"} onClick={() => setActiveTab("search")}>
          Search
        </TabButton>
        <TabButton active={activeTab === "random"} onClick={() => setActiveTab("random")}>
          Random Build
        </TabButton>
      </div>

      {activeTab === "perks" && (
        <PerksPage
          perks={perksData}
          filterRole={filterRole}
          setFilterRole={setFilterRole}
        />
      )}

      {activeTab === "search" && (
        <SearchPage
          perks={perksData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      )}

       {activeTab === "random" && (
        <PerkRandomPage />
      )}
      




    </div>
  );
};

export default App;
