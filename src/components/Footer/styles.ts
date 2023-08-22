import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterLayout = styled.header`
  margin-top: 120px;
  width: 100%;
  height: 298px;
  background-color: ${colors.beige};
  overflow-y: hidden;
  img {
    margin-top: 40px;
    width: 125px;
    height: 56px;
  }
`
export const Footerlinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-top: 40px;
    width: 24px;
    height: 24px;
  }
`
export const Footerlink = styled.li`
  margin-right: 8px;
  cursor: pointer;
`
export const FooterText = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  margin-top: 80px;
`
export const FooterContainer = styled.div`
  text-align: center;
`
