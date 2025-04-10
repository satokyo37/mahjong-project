//import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mahjong Score Calculator</h1>
      </header>
      <select>
        <option value="unlimited">青天井</option>
        <option value="withRoundingMangan">切り上げ満貫あり</option>
        <option value="strict">切り上げ満貫なし</option>
      </select>
      <input type="number" placeholder="Han" />
    </div>
  )
}
