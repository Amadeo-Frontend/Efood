import ProductsTypes from '../../models/ProductsTypes'
import Products from '../Products'
import { Title } from '../Restaurant/styles'
import { List, ListContainer } from './styles'

export type Props = {
  title: string
  types: ProductsTypes[]
}
const RestaurantsList = ({ title, types }: Props) => (
  <>
    <div className="container">
      <ListContainer>
      <Title>{title}</Title>
      <List>
        {types.map((type) => (
          <Products
            key={type.id}
            title={type.title}
            description={type.description}
            image={type.image}
          />
        ))}
      </List>
      </ListContainer>
    </div>
  </>
)

export default RestaurantsList
