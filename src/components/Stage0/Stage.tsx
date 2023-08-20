import { CommonS } from "../../style/styles"
import PackBack from "../../assets/pack_background.jpg"
import Pack from "../../assets/pack.png"
import Cus1 from "../../assets/cus_1.png"
import ConvInside2 from "../../assets/conv_inside2.png"
import { styled } from "styled-components"
import { useCallback, useMemo, useState } from "react"
import { throttle } from "lodash"
import QTE from "./QTE"

const stageLines = [
  "我看看...客人的包裹在哪裡呢？",
  "啊找到了，就是這個",
  "不過包裹的樣子好像不太對勁......",
  "包裹：不要碰我！！我才不要跟陌生人走咧！",
  "原來這包裹跟我一樣是社恐...",
  "不對，應該先吐槽包裹為什麼會說話吧！？",
  "包裹頑強底抗，我該怎麼做呢？",
]

const giveUpLines = [
  "......好吧，算了",
  "社恐何苦為難社恐",
  "我拋下仍在大叫的包裹，掉頭就走",
  "什麼？你要走了嗎？喂！等等啊！！！",
  "很抱歉客人，沒有找到你的包裹",
  "我面無表情地說",
  "什麼意思！我要去投訴你！",
  "林肯怒髮沖天，立刻展開了另一場臭罵",
  "不過，這些都跟我無關了",
  "羞辱的言語完全沒有進到我的耳中",
  "我只是一個勁的道歉",
  "就像一尊故障的機器人一樣",
  "......",
  "...",
]

const winLines = [
  "在我高超的技巧下，總算是擊敗(?)了包裹",
  "包裹：可惡！放開我",
  "不顧包裹掙扎，我無情地把它交給林肯",
  "林肯又碎念了兩句後，總算是離開了",
  "唉，當超商店員真不容易啊......",
  "好想回家耍廢",
  "......",
  "...",
]

const failedLines = [
  "碰！",
  "區區人類還想拿走本大爺？作夢！",
  "包裹隨著怒吼送出一記華麗的迴旋踢（沒錯，這傢伙有長腳）",
  "貧弱的我完全躲避不及，被包裹正中胸口——",
  "我眼前一黑，就這麼昏了過去",
  "......",
  "...",
]

const speakLines = [
  "我：你難道不想看看真正的天空嗎？",
  "包裹：不要，在倉庫裡的日子就很好了，沒必要做那麼費力的事！",
  "我：包裹的使命就是被人打開，將東西傳遞給顧客",
  "包裹：我才不管什麼使命，只要能安穩過日子就行了",
  "我：（脫下眼鏡）包裹乖！讓我看看！！",
  "包裹：不、不要！旁邊的這個包裹肉比較多，比較好吃！",
]

type Props = {
  setCurrentPart: () => void
}

const Stage = (props: Props) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [battleStatus, setBattleStatus] = useState("intro")

  const throttledOnClick = useCallback(
    throttle(() => {
      if (battleStatus === "speak") {
        if (currentLine === 1 || currentLine === 3) {
          setBattleStatus("ready")
        }
        if (currentLine === 5) {
          setBattleStatus("win")
          setCurrentLine(0)
        }
      }

      if (battleStatus === "giveUp") {
        if (currentLine === giveUpLines.length - 1) {
          props.setCurrentPart()
        } else {
          setCurrentLine((v) => v + 1)
        }
      } else if (currentLine === stageLines.length - 1) {
        if (battleStatus === "intro") {
          setBattleStatus("ready")
          setCurrentLine(0)
        } else {
          props.setCurrentPart()
        }
      } else {
        setCurrentLine((v) => v + 1)
      }
    }, 500),
    [currentLine]
  )

  const renderText = useMemo(() => {
    return stageLines?.[currentLine]
  }, [currentLine])

  const renderDialogText = useMemo(() => {
    const renderGiveUpText = () => {
      return giveUpLines?.[currentLine]
    }

    const renderWinText = () => {
      return winLines?.[currentLine]
    }

    const renderFailedText = () => {
      return failedLines?.[currentLine]
    }

    const renderSpeakText = () => {
      return speakLines?.[currentLine]
    }

    switch (battleStatus) {
      case "ready":
        return stageLines?.[stageLines.length - 1]
      case "giveUp":
        return renderGiveUpText()
      case "win":
        return renderWinText()
      case "failed":
        return renderFailedText()
      case "speak":
        return renderSpeakText()
      default:
        return
    }
  }, [battleStatus, currentLine])

  if (battleStatus !== "intro") {
    return (
      <S.Container
        onClick={
          battleStatus !== "fight" && battleStatus !== "ready"
            ? throttledOnClick
            : undefined
        }
      >
        {(battleStatus === "ready" || battleStatus === "speak") && (
          <S.Image src={Pack} />
        )}
        {battleStatus === "giveUp" && currentLine > 4 && <S.Image src={Cus1} />}
        {battleStatus === "giveUp" ? (
          <CommonS.Background src={ConvInside2} />
        ) : (
          <CommonS.Background src={PackBack} />
        )}
        {battleStatus === "fight" ? (
          <QTE
            onFail={() => {
              setBattleStatus("failed")
              setCurrentLine(0)
            }}
            onSuccess={() => {
              setBattleStatus("win")
              setCurrentLine(0)
            }}
            limit={5000}
          />
        ) : (
          <S.Dialog>
            <S.DialogText>{renderDialogText}</S.DialogText>
            {battleStatus === "ready" && (
              <S.DialogButtons>
                {/* remove on stage 1 */}
                {currentLine === 0 && (
                  <S.DialogButton
                    onClick={() => {
                      if (currentLine === 0) {
                        setCurrentLine(0)
                      }
                      setBattleStatus("speak")
                    }}
                  >
                    說服
                  </S.DialogButton>
                )}
                <S.DialogButton onClick={() => setBattleStatus("fight")}>
                  戰鬥
                </S.DialogButton>
                <S.DialogButton
                  onClick={() => {
                    setCurrentLine(0)
                    setBattleStatus("giveUp")
                  }}
                >
                  放棄
                </S.DialogButton>
              </S.DialogButtons>
            )}
          </S.Dialog>
        )}
      </S.Container>
    )
  }

  return (
    <S.Container onClick={throttledOnClick}>
      <S.Image src={Pack} />
      <CommonS.Background src={PackBack} />
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
  DialogButtons: styled.div`
    text-align: center;
  `,
  DialogButton: styled.button`
    border: white 1px solid;
    background-color: black;
    color: white;
    margin: 5px;
    font-size: 24px;
  `,
}

export default Stage
