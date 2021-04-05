import * as S from './style'

export default function Main(): JSX.Element {
  return (
    <S.Container>
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />

      <p className="nothing-here">
        Está tão quieto por aqui {':('} <br />
        Clique em algum usuário para começar a usar.
      </p>
    </S.Container>
  )
}
