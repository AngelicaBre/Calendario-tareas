import { useState } from 'react'
import './App.css'
import Lista from './componentes/Lista'
import Form from './componentes/Form'


function App() {
    return (
    <div className='container'>
      <Form/>
      <Lista/>
    </div>
  )
}

export default App
