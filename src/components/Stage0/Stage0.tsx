import { useCallback, useState } from "react"
import NormalScene from "../NormalScene"
import ConvE from "../../assets/conv_e.jpg"
import ConvInside from "../../assets/conv_inside.jpg"
import ConvInside2 from "../../assets/conv_inside2.png"
import HouseA from "../../assets/house_a.jpg"
import { Lines1, Lines3, Lines2, Lines4, Lines5, Lines6 } from "./lines"
import Cus1 from "../../assets/cus_1.png"
import Stage from "./Stage"
import styled from "styled-components"
import { Link } from "react-router-dom"

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
        return (
          <S.Box>
            <Link to="/stage1">
              <S.Title>{"Next Stage →"}</S.Title>
            </Link>
          </S.Box>
        )
      }
      default:
        return null
    }
  }, [currentPart])

  return <CurrentComponent />
}

const S = {
  Box: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 300px;
    margin: auto;
    background-color: black;
    padding: 10px;
  `,
  Title: styled.div`
    font-size: 30px;
    color: white;
    text-align: center;
    margin-bottom: 30px;
    border: 1px solid white;
  `,
}

export default Stage0
