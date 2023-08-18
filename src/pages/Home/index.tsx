import FoodTypes from '../../models/FoodTypes'
import RestaurantsList from '../../components/RestaurantList'

const promo: FoodTypes[] = [
  {
    id: 1,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: ''
  },
  {
    id: 2,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: ''
  },
  {
    id: 3,
    title: 'FIFA 23',
    category: 'Esporte',
    system: 'PS5',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    infos: ['5%', 'R$ 290,00'],
    image: ''
  },
  {
    id: 4,
    title: 'Resident Evil 4',
    category: 'Ação',
    system: 'PS5',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['10%', 'R$ 250,00'],
    image: ''
  }
]
const Home = () => (
  <>
    <RestaurantsList types={promo} title='' />
  </>
)

export default Home
