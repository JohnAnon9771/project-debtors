import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  margin-right: 1.5rem;

  height: 65vh;
  min-width: 250px;

  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);

  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  font-size: 1.6rem;

  .nothing-here {
    text-align: center;
  }

  .users {
    padding: 5px;
    color: #fff;

    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`
