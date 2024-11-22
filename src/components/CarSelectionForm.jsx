'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function CarSelectionForm({ children }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleSelectChange = (e) => {
        const { name, value } = e.target
        const params = new URLSearchParams(searchParams)

        // Clear dependent fields when parent selection changes
        if (name === 'brand') {
            params.delete('model')
            params.delete('subModel')
        } else if (name === 'model') {
            params.delete('subModel')
        }

        if (value) {
            params.set(name, value)
        } else {
            params.delete(name)
        }

        router.push(`?${params.toString()}`)
    }

    return (
        <form onChange={handleSelectChange}>
            {children}
        </form>
    )
} 