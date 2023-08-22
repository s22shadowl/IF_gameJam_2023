import { useCallback, useState } from "react"
import NormalScene from "../NormalScene"
import ConvE from "../../assets/conv_e.jpg"
import ConvInside from "../../assets/conv_inside.jpg"
import { Lines1, Lines2 } from "./lines"
import Cus2 from "../../assets/cus_2.png"
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
            backgroundImage={ConvE}
          />
        )
      }
      case 2: {
        return (
          <NormalScene
            setCurrentPart={() => setCurrentPart(3)}
            lines={Lines2}
            backgroundImage={ConvInside}
            peopleImage={Cus2}
          />
        )
      }
      case 3: {
        return <Stage setCurrentPart={() => setCurrentPart(4)} />
      }
      case 4: {
        return (
          <S.Box>
            <Link to="/end">
              <S.Title>{"進入結局 →"}</S.Title>
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
