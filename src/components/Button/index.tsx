import {ButtonHTMLAttributes, memo} from 'react'

import * as S from './style'

function Button({
  onClick,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <S.Button {...props} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default memo(Button)
