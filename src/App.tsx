import { useState } from 'react'
import './App.css'


function App() {
  const themeOptions = ["light", "dark", "system"]
  const [selectedTheme, setSelectedTheme] = useState("light")

  return (
    <>
      <h1>Themes</h1>
      <ul>
        {themeOptions.map((theme, index) => (
          <li key={index}>
            <button
              onClick={() => setSelectedTheme(theme)}
              disabled={theme === selectedTheme}
            >
              {theme}
            </button>
          </li> 
        ))}
      </ul>
      {/* <ThemeList /> */}

      <h2>Selected theme: {selectedTheme}</h2>
    </>
  )
}

// type ThemeListProps = {}

// function ThemeList(props: ThemeListProps) {
//   const {themeOptions, selectedTheme, setSelectedTheme} = props
//   return (
//     <ul>
//       {/* ... */}
//       </ul>
//   )
// }

export default App
