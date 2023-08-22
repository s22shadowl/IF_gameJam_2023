import styled from "styled-components"

export const CommonS = {
  Text: styled.div`
    font-size: 15px;
    color: white;
    text-align: center;
  `,
  CommonDialog: styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Background: styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 0;
  `,
}
