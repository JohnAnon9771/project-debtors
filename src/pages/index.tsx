import * as S from 'styles/pages/Home'

import {Aside, Main} from 'components'

export default function Home(): JSX.Element {
  return (
    <S.Container>
      <section className="section">
        <div className="section__color"></div>
        <div className="section__color"></div>
        <div className="section__color"></div>
        <Aside />
        <Main />
        <S.Button>Adicionar usuário</S.Button>
      </section>
    </S.Container>
  )
}
