import Button from '../Button'
import Tag from '../Tag'
import { BottomCard, Card, CardHeader, Description, Infos, Rating, Score, Title } from './styles'
import star from '../../assets/images/estrela.svg'

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
      <Button />
    </BottomCard>
  </Card>
);

export default Restaurant
