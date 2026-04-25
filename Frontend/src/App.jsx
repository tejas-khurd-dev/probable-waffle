import {Routes, Route} from "react-router-dom"
import HOME from "./pages/HOME"

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HOME />} />
        </Routes>
      </div>
    </>
  )
}

export default App