import './App.css'
import { MainCard } from './components/mainCard/mainCard'
import { LeftCards } from './components/leftCard/lefCard'
import { RightCard } from './components/rightCard/rightCard'

function App() {
  return (
    <>
      <MainCard>
        <LeftCards/>
        <RightCard />
      </MainCard>
    </>
  )

}

export default App
