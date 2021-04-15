import {memo} from 'react'

import {useFetchDebtors} from 'hooks/useApi'
import {Data, Debtors} from 'services/api'

import * as S from './style'

interface Props {
  data: Data[]
  setActive: (state) => void
  setValueDebtor: (state) => void
}

function Aside({data, setActive, setValueDebtor}: Props): JSX.Element {
  // const {data} = useFetchDebtors<{result: Debtors[]}>('/divida')
  // if (!data) {
  //   return <p>carregando...</p>
  // }

  return (
    <S.Container>
      {data ? (
        data?.map(user => {
          if (user._id) {
            return (
              <div key={user._id} className="users">
                <button
                  onClick={() => {
                    setActive(true)
                    setValueDebtor(user)
                  }}
                >
                  {user.name}
                </button>
              </div>
            )
          }
        })
      ) : (
        <p className="nothing-here">
          Nenhuma divida. <br />
          Por favor adicione alguns {':)'}
        </p>
      )}
    </S.Container>
  )
}

export default memo(Aside)
