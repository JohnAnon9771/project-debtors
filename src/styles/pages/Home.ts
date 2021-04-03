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
        background-color: #ff359b;
      }
      &:nth-child(2) {
        bottom: -150px;
        left: 100px;
        width: 500px;
        height: 500px;
        background-color: #fffd87;
      }
      &:nth-child(3) {
        bottom: 50px;
        right: 100px;
        width: 300px;
        height: 300px;
        background-color: #00d2ff;
      }
    }
  }
`
export const Button = styled.button`
  position: absolute;

  right: 10px;
  bottom: 10px;
  padding: 10px 20px;

  background-color: #ffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  font-weight: 500;
  letter-spacing: 1px;
  color: #666;

  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3.5rem;
  transition: all 200ms;

  animation: moveInBottom 0.2s ease-out;
  animation-fill-mode: backwards;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`
