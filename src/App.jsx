import { useState } from 'react'
import Header from './components/Header'
import StayCard from './components/StayCard'
import SearchModal from './components/SearchModal'
import { useStays } from './hooks/useStays'
import { useTheme } from './hooks/useTheme'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { filteredStays, filterStays } = useStays()
  useTheme()

  const handleSearch = (filters) => {
    filterStays(filters)
    setIsModalOpen(false)
  }

  return (
    <div className="min-w-full text-gray-800 flex flex-col relative bg-white dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-900 min-h-screen w-full transition-colors duration-300">
        <Header onOpenModal={() => setIsModalOpen(true)} />

        <div className="room-list dark:text-white">
          <header className="flex items-center justify-between px-8 text-gray-800 dark:text-white">
            <h2 className="font-bold text-lg text-gray-800 dark:text-white">
              Stays in Finland
            </h2>
            <h3 className="font-medium text-sm text-gray-600 dark:text-gray-300">
              {filteredStays.length}+ stays
            </h3>
          </header>

          <div className="grid grid-cols-1 place-items-center p-8 gap-4 sm:grid-cols-2 lg:grid-cols-3 dark:text-white">
            {filteredStays.map((stay) => (
              <StayCard key={`${stay.title}-${stay.city}`} stay={stay} />
            ))}
          </div>

          {filteredStays.length === 0 && (
            <div className="flex flex-col items-center justify-center py-8 text-gray-500 w-full px-8">
              <p className="text-lg font-semibold mb-2">Sin resultados</p>
              <p>No se encontraron alojamientos con los filtros seleccionados</p>
              <p className="mt-4">Intenta con otros filtros o ajusta tu búsqueda.</p>
            </div>
          )}
        </div>

        {isModalOpen && (
          <SearchModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSearch={handleSearch}
          />
        )}
      </div>
    </div>
  )
}

export default App