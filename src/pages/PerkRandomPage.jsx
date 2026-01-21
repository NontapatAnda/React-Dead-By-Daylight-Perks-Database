import { useState, useMemo, useEffect, useRef } from "react"
import perkData from "../data/perksData.js"

function getRandomPerks(list, count = 4) {
  const result = []
  const used = new Set()

  if (list.length < count) return []

  while (result.length < count) {
    const perk = list[Math.floor(Math.random() * list.length)]
    if (!used.has(perk.id)) {
      used.add(perk.id)
      result.push(perk)
    }
  }

  return result
}

export default function PerkRandomPage() {
  const [role, setRole] = useState("survivor")
  const [build, setBuild] = useState([])
  const [openedIndices, setOpenedIndices] = useState(new Set())
  const timeoutIdsRef = useRef([])

  const filteredPerks = useMemo(() => {
    return perkData.filter((p) => p.role === role)
  }, [role])

  // Clear timeouts when component unmounts or role changes
  useEffect(() => {
    return () => {
      timeoutIdsRef.current.forEach(id => clearTimeout(id))
      timeoutIdsRef.current = []
    }
  }, [role])

  const handleRandomClick = () => {
    // Clear any existing timeouts
    timeoutIdsRef.current.forEach(id => clearTimeout(id))
    timeoutIdsRef.current = []
    
    const randomPerks = getRandomPerks(filteredPerks)
    setBuild(randomPerks)
    setOpenedIndices(new Set())
    
    randomPerks.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setOpenedIndices(prev => new Set([...prev, index]))
      }, index * 400)
      timeoutIdsRef.current.push(timeoutId)
    })
  }

  return (
    <div className="min-h-[80vh]  bg-slate-900 text-white p-6 flex justify-center">
      <style>{`
        @keyframes cardFlip {
          0% { transform: rotateY(90deg); opacity: 0; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        .card-flip {
          animation: cardFlip 0.6s ease-out;
        }
      `}</style>
      <div className="w-full max-w-xl bg-slate-800 rounded-2xl p-6 shadow-xl">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">
          🎲 Random Perk Build (ระบบสุ่มเปิร์ก)
        </h1>

        {/* Role Filter */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            onClick={() => {
              setRole("survivor")
              setBuild([])
              setOpenedIndices(new Set())
              timeoutIdsRef.current.forEach(id => clearTimeout(id))
              timeoutIdsRef.current = []
            }}
            className={`px-4 py-2 rounded-full border transition
              ${role === "survivor"
                ? "bg-blue-600 border-blue-600"
                : "border-slate-600 hover:bg-slate-700"
              }`}
          >
            Survivor
          </button>

          <button
            onClick={() => {
              setRole("killer")
              setBuild([])
              setOpenedIndices(new Set())
              timeoutIdsRef.current.forEach(id => clearTimeout(id))
              timeoutIdsRef.current = []
            }}
            className={`px-4 py-2 rounded-full border transition
              ${role === "killer"
                ? "bg-red-600 border-red-600"
                : "border-slate-600 hover:bg-slate-700"
              }`}
          >
            Killer
          </button>
        </div>

        {/* Perk Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`aspect-square rounded-xl border border-slate-700
                         bg-slate-900 flex flex-col items-center justify-center
                         hover:border-blue-500 transition ${
                           openedIndices.has(index) ? 'card-flip' : ''
                         }`}
            >
              {openedIndices.has(index) ? (
                build[index] ? (
                  <>
                    <img
                      src={build[index].img}
                      alt={build[index].name}
                      className="w-40 h-40 mb-2"
                    />
                    <span className="text-sm text-center">
                      {build[index].name}
                    </span>
                  </>
                ) : null
              ) : (
                <span className="text-slate-500 text-3xl font-bold">?</span>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={handleRandomClick}
            className="flex-1 py-2 rounded-xl bg-emerald-600
                       hover:bg-emerald-500 transition font-semibold"
          >
            🎲 Random Perks
          </button>

          <button
            onClick={() => {
              setBuild([])
              setOpenedIndices(new Set())
            }}
            className="px-4 py-2 rounded-xl border border-slate-600
                       hover:bg-slate-700 transition"
          >
            Reset
          </button>
        </div>

        {/* Info */}
        <p className="text-center text-sm text-slate-400 mt-4">
          Role: {role.toUpperCase()} • {filteredPerks.length} perks available
        </p>

      </div>
    </div>
  )
}

