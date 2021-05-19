import React from 'react'

import './App.css'

import DemoRender from './components/DemoRender'
// import DemoInput from './components/DemoInput'
import DemoFetch from './components/DemoFetch'

export default function App() {
    return (
        <div>
            {/* <DemoRender /> */}
            {/* <DemoInput /> */}
            <DemoFetch />
        </div>
    )
}

//do demo render, demo input, then updatelogger, then local storage