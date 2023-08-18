import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 4px 6px;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  display: inline-block;
`