import Countdown from "react-countdown"
import styled from "styled-components"

const CountdownTimer = ({
  initialTime,
  completedStatus,
}: {
  initialTime: number
  completedStatus: string
}) => {
  const renderer = ({
    seconds,
    completed,
  }: {
    seconds: number
    completed: boolean
  }) => {
    if (completedStatus === "success") {
      return <S.Text>成功</S.Text>
    } else if (completed || completedStatus === "failed") {
      return <S.Text>失敗！</S.Text>
    } else {
      return <S.Text>{seconds} 秒</S.Text>
    }
  }

  return (
    <S.Wrapper>
      <Countdown date={Date.now() + initialTime * 1000} renderer={renderer} />
    </S.Wrapper>
  )
}

const S = {
  Text: styled.span`
    font-size: 50px;
    color: white;
  `,
  Wrapper: styled.div`
    margin-top: 30px;
    text-align: center;
  `,
}

export default CountdownTimer
