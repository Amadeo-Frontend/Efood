import styled from 'styled-components'
import Vector from '../../assets/images/Vector.svg'

export const HeaderLayout = styled.header`
  top: -24px;
  background-image: url(${Vector});
  width: 100%;
  height: 384px;
  background-color: #E667670D ;  
  overflow-y: hidden;
  img {
    margin-top: 64px;
  }
`

export const HeaderText = styled.p`
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 140px;
  margin-bottom: 40px;
`
export const HeaderContainer = styled.div`
  text-align: center;
`