import { useState } from 'react'
import './App.css'

export default function App() {
  const [options, setOptions] = useState({
    rule: 'unlimited' as 'unlimited' | 'withRoundingMangan' | 'strict',
    han: 1,
    hu: 20,
    isDealer: false,
  });

  const handleChangeRule = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions(prev => ({
      ...prev,
      rule: e.target.value as 'unlimited' | 'withRoundingMangan' | 'strict',
    }));
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>麻雀点数計算</h1>
      </header>
      <select onChange={handleChangeRule}>
        <option value="unlimited">青天井</option>
        <option value="withRoundingMangan">切り上げ満貫あり</option>
        <option value="strict">切り上げ満貫なし</option>
      </select>
      <input type="number" placeholder="Han" />
      <select>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
        <option value="110">110</option>
      </select>
      <select>
        <option value="dealer">親</option>
        <option value="noDealer">子</option>
      </select>
    </div>
  )
}
