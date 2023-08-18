import { HeaderContainer, HeaderLayout, HeaderText } from "./styles"
import Logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderLayout>
      <HeaderContainer>
        <img src={Logo} alt="logo" />
        <HeaderText>
            Viva experiências gastronômicas <br /> no conforto da sua casa
        </HeaderText>
      </HeaderContainer>
  </HeaderLayout>
)

export default Header