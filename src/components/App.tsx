import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import BackGround from "./Background"
import "normalize.css"
import Begin from "./Begin"
import Load from "./Load"
import Description from "./Description"

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <BackGround>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/begin" element={<Begin />} />
              <Route path="/load" element={<Load />} />
              <Route path="/description" element={<Description />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BackGround>
        }
      />
    </Routes>
  )
}

export default App
