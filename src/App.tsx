import { useState } from 'react';
import logo from './logo.svg';
import Select from './Select';

const options=[
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Thrid", value: 3 },
  { label: "Fourth", value: 4 },

]

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);

  return (
    <div className="App">
      <Select options={options} value={value} onChange={o => setValue(o)} />
    </div>
  )
}

export default App
