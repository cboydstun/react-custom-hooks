import React from 'react'

import './App.css'

import DemoInput from './components/DemoInput'
import DemoFetch from './components/DemoFetch'

export default function App() {
    return (
        <div>
            {/* <DemoInput /> */}
            <DemoFetch />
        </div>
    )
}

//do demo input, then updatelogger, then local storage