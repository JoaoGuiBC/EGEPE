import { User } from 'phosphor-react'

import { theme } from "../../../stitches.config"
import { AvatarRoot, AvatarImage, AvatarFallback } from './styles'

interface AvatarProps {
  src?: string;
}

export function Avatar({src}: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage src={src} alt="usuário" />
      <AvatarFallback>
        <User size={40} color={theme.colors.gray900.value} weight="light" />
      </AvatarFallback>
    </AvatarRoot>
  )
}