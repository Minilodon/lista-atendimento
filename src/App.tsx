import { useState } from 'react'

interface PeopleList {
  id: string;
  name: string;
  position: number
}

function App() {
  const [list, setList] = useState<PeopleList[]>([{id: '1', name: 'Pedro', position: 0}])
  const [text, setText] = useState('')
  return (
    <div className='flex flex-col items-center justify-center gap-y-4'>
     <span>{list.map((person) => <span key={person.id}>{person.name}</span>)}</span>
     <input value={text} onChange={(event) => setText(event.target.value)}/>
     <button onClick={() => console.log(text)}>See text</button>
    </div>
  )
}

export default App
