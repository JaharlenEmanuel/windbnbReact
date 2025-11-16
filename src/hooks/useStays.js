import { useState } from 'react'
import { stays } from '../data/stays'

export function useStays() {
    const [filteredStays, setFilteredStays] = useState(stays)

    const filterStays = (filters) => {
        const { city, guests } = filters

        const filtered = stays.filter(stay => {
            const matchesCity = !city || stay.city === city
            const matchesGuests = guests === 0 || stay.maxGuests >= guests
            return matchesCity && matchesGuests
        })

        setFilteredStays(filtered)
    }

    return {
        filteredStays,
        filterStays
    }
}