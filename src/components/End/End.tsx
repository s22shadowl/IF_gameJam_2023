import { useState } from "react"
import styled from "styled-components"
import NormalScene from "../NormalScene"
import { badLines, normalLines } from "./lines"
import ConvInside from "../../assets/conv_inside.jpg"
import HouseD from "../../assets/house_d.jpg"
import GoodEndScene from "./GoodEndScene"

const End = () => {
  const [endStatus, setEndStatus] = useState("none")

  if (endStatus !== "none") {
    switch (endStatus) {
      case "good":
        return <GoodEndScene />
      case "normal":
        return (
          <NormalScene
            lines={normalLines}
            backgroundImage={ConvInside}
            setCurrentPart={() => null}
          />
        )
      case "bad":
        return (
          <NormalScene
            lines={badLines}
            backgroundImage={HouseD}
            setCurrentPart={() => null}
          />
        )
      default:
        return
    }
  }

  return (
    <S.Box>
      <S.Title>選擇結局:試玩版直接用選DER</S.Title>
      <S.Buttons>
        <S.Button onClick={() => setEndStatus("good")}>
          <S.ButtonText>好結局</S.ButtonText>
        </S.Button>
        <S.Button onClick={() => setEndStatus("normal")}>
          <S.ButtonText>普通結局</S.ButtonText>
        </S.Button>
        <S.Button onClick={() => setEndStatus("bad")}>
          <S.ButtonText>壞結局</S.ButtonText>
        </S.Button>
      </S.Buttons>
    </S.Box>
  )
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
  ButtonText: styled.div`
    color: white;
    margin: 5px;
    font-size: 24px;
  `,
  Buttons: styled.div`
    text-align: center;
  `,
  Button: styled.button`
    border: white 1px solid;
    background-color: black;
    margin: 5px;
  `,
}

export default End
