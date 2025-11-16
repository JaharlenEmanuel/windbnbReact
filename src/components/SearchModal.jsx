import { useState, useRef, useEffect } from 'react'
import GuestSelector from './GuestSelector'

const CITIES = ['Helsinki', 'Turku', 'Vaasa', 'Oulu']

export default function SearchModal({ isOpen, onClose, onSearch }) {
    const [city, setCity] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [guests, setGuests] = useState({ adults: 0, children: 0 })
    const modalRef = useRef(null)

    const filteredCities = CITIES.filter(c =>
        c.toLowerCase().includes(city.toLowerCase())
    )

    const handleSearch = () => {
        onSearch({
            city: city.replace(', Finland', '').trim(),
            guests: guests.adults + guests.children
        })
    }

    const handleCitySelect = (selectedCity) => {
        setCity(`${selectedCity}, Finland`)
        setShowSuggestions(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 ">
            <div
                ref={modalRef}
                className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[50%] "
            >
                <div className="p-6">
                    <header className="flex items-center justify-between w-full mb-6">
                        <h2 className="font-bold text-xl dark:text-white">Edita tu busqueda</h2>
                        <button
                            onClick={onClose}
                            className="flex items-center text-xl font-montserrat size-[14px] dark:text-white"
                        >
                            ×
                        </button>
                    </header>

                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-4 md:rounded-lg md:shadow-lg md:border">
                        <div className="flex-1 relative">
                            <label className="block text-xs font-bold uppercase mb-1 dark:text-white">
                                CIUDAD
                            </label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                onFocus={() => setShowSuggestions(true)}
                                placeholder="Helsinki, Finland"
                                className="focus:outline text-sm p-2 w-full border-b dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                            {showSuggestions && filteredCities.length > 0 && (
                                <div className="absolute left-0 right-0 top-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10">
                                    {filteredCities.map(city => (
                                        <div
                                            key={city}
                                            onClick={() => handleCitySelect(city)}
                                            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer flex items-center gap-2"
                                        >
                                            <span>{city}, Finland</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex-1 relative">
                            <GuestSelector guests={guests} onChange={setGuests} />
                        </div>

                        <button
                            onClick={handleSearch}
                            className="bg-red-400 border rounded-xl p-3 gap-2 text-white hover:bg-red-500 transition-colors flex items-center justify-center md:w-auto"
                        >
                            <img src="/assets/icons/search.svg" className="size-4" alt="" />
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}