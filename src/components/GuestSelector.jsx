import { useState } from 'react'

export default function GuestSelector({ guests, onChange }) {
    const [isOpen, setIsOpen] = useState(false)

    const totalGuests = guests.adults + guests.children

    const updateGuests = (type, delta) => {
        const newGuests = { ...guests }
        newGuests[type] = Math.max(0, newGuests[type] + delta)
        onChange(newGuests)
    }

    return (
        <div className="relative">
            <label className="block text-xs font-bold uppercase mb-1 dark:text-white">
                Huéspedes
            </label>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 dark:text-gray-300 cursor-pointer w-full text-left p-2 border-b dark:border-gray-600"
            >
                {totalGuests === 0 ? 'Agregar huéspedes' :
                    totalGuests === 1 ? '1 huésped' :
                        `${totalGuests} huéspedes`}
            </button>

            {isOpen && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 p-4">
                    <div className="flex flex-col items-start justify-center mb-4">
                        <span className="font-medium">Adultos</span>
                        <span className="text-gray-500 text-sm">13 años a más</span>
                        <div className="flex items-center justify-center mt-2">
                            <button
                                onClick={() => updateGuests('adults', -1)}
                                className="rounded-sm border border-gray-400 size-6 flex items-center justify-center hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{guests.adults}</span>
                            <button
                                onClick={() => updateGuests('adults', 1)}
                                className="rounded-sm border border-gray-400 size-6 flex items-center justify-center hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center">
                        <span className="font-medium">Niños</span>
                        <span className="text-gray-500 text-sm">Menos de 13 años</span>
                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={() => updateGuests('children', -1)}
                                className="rounded-sm border border-gray-400 size-6 flex items-center justify-center hover:bg-gray-100"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{guests.children}</span>
                            <button
                                onClick={() => updateGuests('children', 1)}
                                className="rounded-sm border border-gray-400 size-6 flex items-center justify-center hover:bg-gray-100"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}