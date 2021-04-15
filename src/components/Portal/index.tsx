import {ReactNode, ReactPortal} from 'react'
import {createPortal} from 'react-dom'

const modalElement = document.getElementById('portal')

interface Props {
  children: ReactNode
}

export default function Portal({children}: Props): ReactPortal {
  return createPortal(children, modalElement)
}
