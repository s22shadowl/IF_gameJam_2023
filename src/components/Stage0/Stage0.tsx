import { useCallback, useState } from "react"
import NormalScene from "../NormalScene"
import ConvE from "../../assets/conv_e.jpg"
import ConvInside from "../../assets/conv_inside.jpg"
import ConvInside2 from "../../assets/conv_inside2.png"
import HouseA from "../../assets/house_a.jpg"
import { Lines1, Lines3, Lines2, Lines4, Lines5, Lines6 } from "./lines"
import Cus1 from "../../assets/cus_1.png"
import Stage from "./Stage"
import { CommonS } from "../../style/styles"

const Stage0 = () => {
  const [currentPart, setCurrentPart] = useState<number>(1)

  const CurrentComponent = useCallback(() => {
    switch (currentPart) {
      case 1: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(2)}
            lines={Lines1}
            backgroundImage={HouseA}
          />
        )
      }
      case 2: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(3)}
            lines={Lines2}
            backgroundImage={ConvE}
          />
        )
      }
      case 3: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(4)}
            lines={Lines3}
            backgroundImage={ConvInside}
          />
        )
      }
      case 4: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(5)}
            lines={Lines4}
            backgroundImage={ConvInside2}
          />
        )
      }
      case 5: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(6)}
            lines={Lines5}
            backgroundImage={ConvInside2}
            peopleImage={Cus1}
          />
        )
      }
      case 6: {
        return <Stage setCurrentPart={() => setCurrentPart(7)} />
      }
      case 7: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(8)}
            lines={Lines6}
            backgroundImage={HouseA}
          />
        )
      }
      case 8: {
        return <CommonS.Text>下一關，還在做</CommonS.Text>
      }
      default:
        return null
    }
  }, [currentPart])

  return <CurrentComponent />
}

export default Stage0
