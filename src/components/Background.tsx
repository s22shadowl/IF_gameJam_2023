import { Link, useLocation } from "react-router-dom"
import { styled } from "styled-components"

const BackGround = (props: any) => {
  const location = useLocation()

  return (
    <S.Container>
      <S.Main>
        {location.pathname !== "/" && (
          <S.GoHome>
            <Link to="/">
              <S.GoHomeText>回首頁</S.GoHomeText>
            </Link>
          </S.GoHome>
        )}
        {props.children}
        <S.CopyRight>@2023 IF GameJam</S.CopyRight>
      </S.Main>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    background-color: grey;
  `,
  GoHome: styled.button`
    background-color: inherit;
    border: 1px solid white;
    position: absolute;
    padding: 5px;
    top: 0;
    left: 0;
  `,
  GoHomeText: styled.div`
    color: white;
  `,
  Main: styled.div`
    position: relative;
    background-color: black;
    width: 100vw;
    height: 100vh;
    max-width: 1024px;
    margin: auto;
    justify-content: center;
    align-items: center;
  `,
  CopyRight: styled.div`
    font-size: 18px;
    color: grey;
    position: absolute;
    right: 0;
    top: 0;
    padding: 5px;
  `,
}

export default BackGround
