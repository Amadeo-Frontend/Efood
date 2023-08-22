import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  background-color: ${colors.white};
  position: relative;
  border: solid 1px ${colors.red};

  img {
    top: 0px;
    left: 0px;
    width: 472px;
    height: 217px;
    object-fit: cover;
  }
`;

export const BottomCard = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  color: ${colors.red};
  margin-top: 8px;
  display: block;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Score = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  align-items: center;

`
