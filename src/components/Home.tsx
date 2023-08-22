import { Link } from "react-router-dom"
import styled from "styled-components"
import { Typewriter } from "react-simple-typewriter"
import convTitleImage from "../assets/conv_e.jpg"
import { CommonS } from "../style/styles"

const Home = () => {
  return (
    <S.Container>
      <CommonS.Background src={convTitleImage} />
      <S.Panel>
        <S.Title>
          <Typewriter
            words={["社恐店員傳說"]}
            cursor
            loop={1}
            typeSpeed={300}
          />
        </S.Title>
        <S.Buttons>
          <Link to="/stage0">
            <S.Button>
              <S.ButtonText>新遊戲</S.ButtonText>
            </S.Button>
          </Link>
          <Link to="/load">
            <S.Button>
              <S.ButtonText>繼續</S.ButtonText>
            </S.Button>
          </Link>
          <Link to="/description">
            <S.Button>
              <S.ButtonText>關於</S.ButtonText>
            </S.Button>
          </Link>
        </S.Buttons>
      </S.Panel>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    padding-top: 30vh;
    display: flex;
    justify-content: center;
  `,
  Panel: styled.div`
    border: 1px solid white;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    opacity: 0.7;
    padding: 20px;
    z-index: 1;
  `,
  Title: styled.div`
    color: white;
    font-size: 48px;
    margin: 0 0 30px;
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

export default Home
