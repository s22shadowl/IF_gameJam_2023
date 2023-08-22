import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import CountdownTimer from "./CountdownTimer"

const commands = [
  "W",
  "O",
  "R",
  "K",
  "I",
  "S",
  "L",
  "I",
  "F",
  "E",
  "L",
  "I",
  "F",
  "E",
  "I",
  "S",
  "W",
  "O",
  "R",
  "K",
]

type Props = {
  onSuccess: () => void
  onFail: () => void
  limit: number
}

const QTEComponent = (props: Props) => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const restCommands = commands.slice(currentCommandIndex).join(" ")
  const [completedStatus, setCompletedStatus] = useState("ready")

  const renderTimer = useMemo(() => {
    return (
      <CountdownTimer
        initialTime={props.limit / 1000}
        completedStatus={completedStatus}
      />
    )
  }, [completedStatus, props.limit])

  useEffect(() => {
    const handleOnFail = () => {
      setCompletedStatus("failed")

      setTimeout(() => {
        props.onFail()
      }, 2000)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (completedStatus !== "start") return

      console.log("render")
      if (event.key.toUpperCase() === commands[currentCommandIndex]) {
        setCurrentCommandIndex((i) => i + 1)
      } else {
        handleOnFail()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    const timer = setTimeout(() => {
      handleOnFail()
    }, props.limit)
    // 返回一個清理函數，這將在組件卸載時運行
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      clearTimeout(timer)
    }
  }, [completedStatus, currentCommandIndex, props])

  if (currentCommandIndex === commands.length && completedStatus === "start") {
    props.onSuccess()
    setCompletedStatus("success")
  }

  return (
    <S.Box>
      <S.Title>在倒數結束前輸入指定 QTE ！</S.Title>

      {completedStatus === "ready" ? (
        <S.StartButton onClick={() => setCompletedStatus("start")}>
          開始
        </S.StartButton>
      ) : (
        <>
          <S.CommandsWrapper>
            <S.RestCommands isfailed={completedStatus === "failed"}>
              {restCommands || "搞定"}
            </S.RestCommands>
          </S.CommandsWrapper>
          {renderTimer}
        </>
      )}
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
  `,
  StartButton: styled.div`
    font-size: 30px;
    color: white;
    text-align: center;
    border: 1px solid white;
    padding: 5px;
    background-color: black;
  `,
  SolvedCommands: styled.span<{ isfailed: boolean }>`
    color: ${({ isfailed }) => (isfailed ? "red" : "grey")};
    font-size: 50px;
  `,
  RestCommands: styled.span<{ isfailed: boolean }>`
    color: ${({ isfailed }) => (isfailed ? "red" : "white")};
    font-size: 50px;
    overflow: hidden;
    white-space: nowrap;
    display: block;
  `,
  CommandsWrapper: styled.div`
    flex-direction: column;
    text-align: center;
    border: 1px solid white;
    padding: 5px;
  `,
}

export default QTEComponent
