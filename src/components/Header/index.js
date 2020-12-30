
import { Container, Content, LogoContainer, LogoIcon, Logo, OptionsContainer, Icon, Avatar } from './styles';

function Header(){
  
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src='/images/logoIcon.svg'>

          </LogoIcon>
          <Logo src='/images/logo.svg'>
          </Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon src='/images/uploadIcon.svg' ></Icon>
          <Avatar>
            <img src='https://p77-sign-sg.tiktokcdn.com/musically-maliva-obj/1662912484921350~c5_720x720.webp?x-expires=1609268400&x-signature=P56Y2fF3DyoykW3bx%2BNFKW7rNcI%3D' />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  )
}

export default Header;
