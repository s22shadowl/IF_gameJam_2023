import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import BackGround from "./Background"
import "normalize.css"
import Load from "./Load"
import Description from "./Description"
import Stage1 from "./Stage1"
import Stage0 from "./Stage0"
import Stage2 from "./Stage2"
import End from "./End"

function App() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <BackGround>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/IF_gameJam_2023" element={<Home />} />
              <Route path="/stage0" element={<Stage0 />} />
              <Route path="/stage1" element={<Stage1 />} />
              <Route path="/stage2" element={<Stage2 />} />
              <Route path="/end" element={<End />} />
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
