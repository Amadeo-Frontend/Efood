import FoodTypes from '../../models/FoodTypes'
import Restaurant from '../Restaurant'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  types: FoodTypes[]
}
const RestaurantsList = ({ title, games }: Props) => (
  <Container>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Restaurant
            key={game.id}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
            infos={game.infos}
            image={game.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList