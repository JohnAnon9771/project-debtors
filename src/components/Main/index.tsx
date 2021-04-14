import {FormEvent, FormEventHandler, useState} from 'react'

import {useFetchDebtors} from 'hooks/useApi'
import {api, Data, Debtors, Users} from 'services/api'
import {mutate as mutateGlobal} from 'swr'

import {Button} from 'components'

import * as S from './style'

interface Props {
  data: Data[]
  valueDebtor: Debtors
  active: boolean
}

export default function Main({
  active,
  data: values,
  valueDebtor,
}: Props): JSX.Element {
  const [data, setData] = useState({} as Debtors)

  async function handleDelete(id: string) {
    api.delete(`/divida/${id}?uuid=${process.env.NEXT_PUBLIC_UUID}`)
    await mutateGlobal(
      '/divida',
      async debtors => {
        const result = debtors?.result?.filter(debtor => debtor._id !== id)
        console.log('deb:')
        console.log(debtors.result)
        console.log('result:', {...debtors, result: [...result]})
        console.log(result)
        return {...debtors, result: [...result]}
      },
      false
    )
  }

  async function handleSubmit() {
    if (valueDebtor?._id) {
      api.put(
        `/divida/${valueDebtor?._id}?uuid=${process.env.NEXT_PUBLIC_UUID}`,
        {
          ...valueDebtor,
          // params: {uuid: process.env.NEXT_PUBLIC_UUID},
        }
      )
    } else {
      // // mutate('/divida', true)
      // api.post(
      //   `/divida?uuid=${process.env.NEXT_PUBLIC_UUID}`,
      //   {
      //     ...data,
      //     // params: {uuid: process.env.NEXT_PUBLIC_UUID},
      //   }
      // )
      await mutateGlobal(
        '/divida',
        async debtors => {
          const response = await api.get(
            `/divida?uuid=${process.env.NEXT_PUBLIC_UUID}`
          )
          console.log(response.data)
          console.log({
            ...response?.data,
            result: [...response?.data?.result, data],
          })
          return {...response?.data, result: [...response?.data?.result, data]}
        },
        false
      )
    }
  }
  console.log(data)

  return (
    <S.Container>
      <div className="square" />
      <div className="square" />
      <div className="square" />
      <div className="square" />
      {active ? (
        <div className="content">
          <h2>Novo devedor</h2>
          <div className="content__form">
            <form>
              <div className="input-box">
                <label htmlFor="Cliente">Cliente</label>
                <select
                  // value={valueDebtor?.name}
                  // defaultValue={valueDebtor?.name}
                  onBlur={e =>
                    setData(state => {
                      return {
                        ...state,
                        idUsuario: e.target.value,
                      }
                    })
                  }
                >
                  {values &&
                    values.map(user => (
                      <option className="option" key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="input-box">
                <label htmlFor="Motivo">Motivo</label>
                <input
                  type="text"
                  placeholder="Adicione o motivo"
                  value={valueDebtor?.motivo}
                  onChange={e =>
                    setData(state => {
                      return {
                        ...state,
                        motivo: e.target.value,
                      }
                    })
                  }
                />
              </div>
              <div className="input-box">
                <label htmlFor="Valor">Valor</label>
                <input
                  type="text"
                  placeholder="Adicione o valor aqui"
                  value={valueDebtor?.valor}
                  onChange={e =>
                    setData(state => {
                      return {
                        ...state,
                        valor: e.target.value,
                      }
                    })
                  }
                />
              </div>
              <div className="form-buttons"></div>
            </form>
            <Button
              // type="submit"
              className="btn-add"
              // onSubmit={handleSubmit}
              onClick={handleSubmit}
            >
              Adicionar
            </Button>
            <Button
              type="button"
              onClick={() => handleDelete(valueDebtor?._id)}
            >
              Excluir
            </Button>
          </div>
        </div>
      ) : (
        <p className="nothing-here">
          Está tão quieto por aqui {':('} <br />
          Clique em algum usuário para começar a usar.
        </p>
      )}
    </S.Container>
  )
}
