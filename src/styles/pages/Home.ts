import styled from 'styled-components'

export const Container = styled.div`
  .section {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    min-width: 100vw;

    background: linear-gradient(to bottom, #f1f4f9, #dff1ff);

    &__color {
      position: absolute;
      filter: blur(150px);

      &:nth-child(1) {
        top: -350px;
        width: 600px;
        height: 600px;
        background-color: #44344f;
      }
      &:nth-child(2) {
        bottom: -150px;
        left: 100px;
        width: 500px;
        height: 500px;
        background-color: #564d80;
      }
      &:nth-child(3) {
        bottom: 50px;
        right: 100px;
        width: 300px;
        height: 300px;
        background-color: #98a6d4;
      }
    }
  }
`
