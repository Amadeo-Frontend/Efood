import styled from 'styled-components'
import Vector from '../../assets/images/Vector.svg'

export const ProductLayout = styled.header`
  top: -23px;
  background-image: url(${Vector});
  max-width: 2032px;
  width: 100%;
  height: 186px;
  background-color: #E667670D ;
  overflow-y: hidden;

  img {
    margin-top: 63px;
  }
`

export const ProductText = styled.p`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-top: 82px;
`
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`
