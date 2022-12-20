import { useEffect, useState } from 'react'
import reactLogo from './assets/svg/react.svg'

function App() {

  const [HasFBUser, setHasFBUser] = useState(false)

  useEffect(() => {
    (async() => {
        while(!window.hasOwnProperty("playerName")) // define the condition as you like
            await new Promise(resolve => setTimeout(resolve, 1000));
            setHasFBUser(true)
    })();
  })

  return (
    <div>
      <div className="App" style={{
        display: HasFBUser ? "flex" : "none",
      }}>
        <img src={reactLogo} className="logo react" alt="React logo" />
        Hello Instant {(window as any).playerName}!
      </div>

      {/* Wait for user info */}
      <div style={{
        display: !HasFBUser ? "block" : "none",
      }}>
        Getting your data
      </div>
    </div>
  )
}

export default App
