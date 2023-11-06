import { useState } from 'react'
import './App.css'

interface PeopleList {
  id: string;
  name: string;
}

function App() {
  const [list, setList] = useState<PeopleList[]>([{id: '1', name: 'Pedro'}])

  return (
    <>
     <span>{list.map((person) => <span key={person.id}>{person.name}</span>)}</span>
    </>
  )
}

export default App
