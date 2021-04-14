import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  font-size: 1.6rem;

  width: 50%;
  height: 65vh;
  min-height: 400px;

  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);

  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  z-index: 1;

  .nothing-here {
    text-align: center;
  }

  .square {
    position: absolute;

    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);

    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;

    animation: animate 10s linear infinite;
    animation-delay: calc(-1s * var(--i));

    &:nth-child(1) {
      --i: 0;

      top: -50px;
      right: -60px;
      width: 100px;
      height: 100px;
      z-index: 0;
    }
    &:nth-child(2) {
      --i: 1;

      bottom: 50px;
      right: -60px;
      width: 80px;
      height: 80px;
      z-index: 2;
    }
    &:nth-child(3) {
      --i: 2;

      bottom: -80px;
      left: 100px;
      width: 50px;
      height: 50px;
      z-index: 2;
    }
    &:nth-child(4) {
      --i: 3;

      top: -80px;
      left: 140px;
      width: 50px;
      height: 50px;
    }

    @keyframes animate {
      0%,
      100% {
        transform: translateY(-40px);
      }
      50% {
        transform: translateY(40px);
      }
    }
  }

  .content {
    height: 100%;
    width: 100%;
    padding: 20px;

    h2 {
      position: relative;

      color: #fff;

      font-size: 2.4rem;
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 40px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 80px;
        height: 4px;
        background-color: #fff;
      }
    }

    &__form {
      margin-left: 40px;

      .input-box {
        display: flex;
        flex-direction: column;

        width: 70%;
        margin-top: 20px;

        label {
          color: #fff;
          font-weight: 600;
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        input,
        select {
          width: 100%;
          background-color: rgba(255, 255, 255, 0.2);

          padding: 10px 20px;

          border: none;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);

          &::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      }

      .form-buttons {
        .btn-add {
          margin-right: 100px;
        }
      }
    }
  }
`
