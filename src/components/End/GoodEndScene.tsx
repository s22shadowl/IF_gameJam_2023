import { throttle } from "lodash"
import { useCallback, useMemo, useState } from "react"
import styled from "styled-components"
import { CommonS } from "../../style/styles"
import HouseB from "../../assets/house_b.jpg"
import ConvE from "../../assets/conv_e.jpg"
import ConvInside from "../../assets/conv_inside.jpg"
import Cus1 from "../../assets/cus_1.png"
import Cus3 from "../../assets/cus_3.png"
import GE from "../../assets/ge.png"

const lines = [
  "又是那些奇怪的夢...",
  "我發覺夢正在侵入現實",
  "門市裡出現了長得像林肯與秦始皇的常客",
  "長得像林肯的大叔是附近偏鄉國中的數學老師",
  "他好像是因為偏鄉教學資源匱乏而主動申請來到這邊任教",
  "雖然打扮像是穿越時空的人一樣特立獨行",
  "但實際上也是個有愛心親切的大叔",
  "長得像秦始皇的大叔職業是小貨卡司機",
  "每個禮拜會固定運送山上的高麗菜到都市去販賣",
  "通常會在門市買提神飲料或是香菸",
  "雖然嗓門很大，但熟識後會發現實際上還是個親切的大叔",
  "在這鄉下的小門市，重複上門的常客也就那幾個",
  "試著和他們聊天以後發現大家也沒有想像中那麼可怕",
  "或許在這偏僻的小店，我可以慢慢練習與人交流",
  "改善我的社交恐懼也不一定",
  "或許我可以練習不要對人那麼疏離",
  "至少我可以踏出第一步，未來的路還很長呢！",
  "Good End",
]

const NormalScene = () => {
  const [currentLine, setCurrentLine] = useState(0)

  const throttledOnClick = useCallback(
    throttle(() => {
      setCurrentLine((v) => v + 1)
    }, 500),
    [currentLine]
  )

  const renderText = useMemo(() => {
    return lines[currentLine]
  }, [currentLine])

  return (
    <S.Container onClick={throttledOnClick}>
      {currentLine >= 3 && currentLine < 7 && <S.Image src={Cus1} />}
      {currentLine >= 7 && currentLine < 11 && <S.Image src={Cus3} />}
      {currentLine < 11 && <CommonS.Background src={HouseB} />}
      {currentLine >= 11 && currentLine < 13 && (
        <CommonS.Background src={ConvE} />
      )}
      {currentLine >= 13 && currentLine <= lines.length - 1 && (
        <CommonS.Background src={ConvInside} />
      )}
      {currentLine >= lines.length - 1 && <CommonS.Background src={GE} />}
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
