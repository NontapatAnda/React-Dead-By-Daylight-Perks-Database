import SearchBar from "../components/SearchBar";
import PerkCard from "../components/PerkCard";

const SearchPage = ({ perks, searchTerm, setSearchTerm }) => {
  const filtered = perks.filter(perk =>
    perk.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perk.character.toLowerCase().includes(searchTerm.toLowerCase()) ||
    perk.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchBar
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(perk => (
          <PerkCard key={perk.id} perk={perk} />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
