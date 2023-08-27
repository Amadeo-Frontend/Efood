import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: none;
  color: ${(props) =>
    props.variant === 'primary' ? colors.beige : colors.red};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.red : colors.beige};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border: none;
  color: ${colors.beige};
  background-color: ${colors.red};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  cursor: pointer;
`
