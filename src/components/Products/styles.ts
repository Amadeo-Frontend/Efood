import styled from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  background-color: ${colors.red};
  position: relative;
  padding: 8px;
  img {
    top: 0px;
    left: 0px;
    width: 304px;
    height: 167px;
    object-fit: cover;
  }
`;

export const BottomCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;

  button {
    width: 100%;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  color: ${colors.red};
  margin-top: 8px;
  display: block;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    color: ${colors.beige};
    width: 100%;
    margin-top: 8px;
    white-space: nowrap;
  }
`
export const Description = styled.p`
  color: ${colors.beige};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
`
