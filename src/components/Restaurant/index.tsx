import Tag from '../Tag'
import { BottomCard, Card, CardHeader, Description, Infos, Rating, Score, Title } from './styles'
import star from '../../assets/images/estrela.svg'
import { ButtonLink } from '../Button/styles'

type Props = {
  title: string
  category: string
  score: string
  description: string
  infos: string
  image: string
  star: string
}

const Restaurant = ({
  title,
  category,
  score,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
    {infos.length > 0 && <Tag>{infos}</Tag>}
    <Tag>{category}</Tag>
    </Infos>
    <BottomCard>
      <CardHeader>
        <Title>{title}</Title>
        <Rating>
          <Score>{score}</Score>
          <img src={star} alt="" />
        </Rating>
      </CardHeader>
      <Description>{description}</Description>
      <ButtonLink  to="/product" type={'button'} title={'Conheça nosso cardápio'} children={'Saiba mais'} />
    </BottomCard>
  </Card>
);

export default Restaurant
