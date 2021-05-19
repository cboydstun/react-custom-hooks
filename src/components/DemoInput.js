import React from 'react'

import useLocalStorage from '../hooks/useLocalStorage'
import useUpdateLogger from '../hooks/useUpdateLogger'

export default function DemoInput() {
    const [name, setName] = useLocalStorage('name','')
    useUpdateLogger(name)

    return (
        <div>
            <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    )
}
