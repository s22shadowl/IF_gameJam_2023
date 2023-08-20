import { throttle } from "lodash"
import { useCallback, useMemo, useState } from "react"
import styled from "styled-components"
import { CommonS } from "../style/styles"

type Props = {
  lines: string[]
  backgroundImage: string
  setCurrentPart: () => void
  peopleImage?: string
}

const NormalScene = (props: Props) => {
  const [currentLine, setCurrentLine] = useState(0)

  const throttledOnClick = useCallback(
    throttle(() => {
      if (currentLine === props.lines?.length - 1) {
        props.setCurrentPart()
      }
      setCurrentLine((v) => v + 1)
    }, 500),
    [currentLine]
  )

  const renderText = useMemo(() => {
    return props.lines[currentLine]
  }, [currentLine, props.lines])

  return (
    <S.Container onClick={throttledOnClick}>
      {!!props.peopleImage && <S.Image src={props.peopleImage} />}
      <CommonS.Background src={props.backgroundImage} />
      <S.Dialog>
        <S.DialogText>{renderText}</S.DialogText>
      </S.Dialog>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    display: flex; // 將容器設為 flexbox
    flex-direction: column; // 子元件垂直堆疊
    justify-content: flex-end; // 確保 Dialog 位於底部
    height: calc(100% - 20px); // 如果需要，可以設置容器的高度為整個視窗的高度
    padding: 10px;
  `,
  Dialog: styled.div`
    border: 1px solid white;
    height: 100px;
  `,
  DialogText: styled.div`
    padding: 10px;
    font-size: 24px;
    color: white;
  `,
  Image: styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 999;
    transform: scale(0.4);
  `,
}

export default NormalScene
