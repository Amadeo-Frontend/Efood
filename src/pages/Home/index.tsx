import FoodTypes from '../../models/FoodTypes'
import RestaurantsList from '../../components/RestaurantList'
import italian from '../../assets/images/italy.png'
import japa from '../../assets/images/sushi.png'

const promo: FoodTypes[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    category: 'Japonês',
    system: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['10%', 'R$ 250,00'],
    image: italian
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    system: '4,8',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['10%', 'R$ 250,00'],
    image: japa
  }
]
const Home = () => (
  <>
    <RestaurantsList types={promo} title='' />
    <RestaurantsList types={promo} title='' />
    <RestaurantsList types={promo} title='' />
  </>
)

export default Home
