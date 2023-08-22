import FoodTypes from '../../models/FoodTypes'
import Restaurant from '../Restaurant'
import { Title } from '../Restaurant/styles'
import { List } from './styles'

export type Props = {
  title: string
  types: FoodTypes[]
}
const RestaurantsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <div>
      <Title>{title}</Title>
      <List>
        {types.map((type) => (
          <Restaurant
            key={type.id}
            title={type.title}
            category={type.category}
            system={type.system}
            description={type.description}
            infos={type.infos}
            image={type.image}
          />
        ))}
      </List>
      </div>
    </div>
  </>
)

export default RestaurantsList
