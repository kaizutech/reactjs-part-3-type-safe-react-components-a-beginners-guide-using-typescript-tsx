import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import Button from './components/Button'
import Timer from './components/Timer'
import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <Greeting name="KaizuTech.com"/>
      <br/>
      <Counter />
      <br/>
      <Button label='Button'/>
      <br/>
      <Timer />
      <br/>
      <UserCard age={25} name='Ace Lennox'/>
    </>
  )
}

export default App
