import { Container, IconsContainer, Icon, BoxContainer, BoxHeader, ItemContainer, Item, DownloadImage, ArrowIcon } from './styles';
import User from '../User';
import Button from '../Button';
import RecommendedCard from '../RecommendedCard';

const people = [
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1601125200&x-signature=eEiuYnl%2Fl3JG0Glicyoe9lX8M0A%3D',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1600527600&x-signature=7xKDPGFet6e0H%2FUZkqEovBS%2FDNw%3D',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1600527600&x-signature=7xKDPGFet6e0H%2FUZkqEovBS%2FDNw%3D',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
  {
    name: 'Neymar Jr',
    username: '@neymarjr',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/8a7686c7081061b6771ce7f3e6dee9cc~c5_100x100.jpeg',
  },
  {
    name: 'Felipe Neto',
    username: '@felipeneto',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/1647961242038278~c5_100x100.jpeg',
  },
  {
    name: 'Anitta',
    username: '@anitta',
    avatar:
      'https://p77-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/cbf8d6144770083807ece585afc668ce.jpeg?x-expires=1600527600&x-signature=7xKDPGFet6e0H%2FUZkqEovBS%2FDNw%3D',
  },
  {
    name: 'Isis Valverde',
    username: '@isisvalverde',
    avatar:
      'https://p77-sg.tiktokcdn.com/img/musically-maliva-obj/5425b455c73f7d399d7538e8b059d9ef~c5_100x100.jpeg',
  },
];

function Suggestions() {

  return (
    <Container>
      <IconsContainer>
        <Icon src='/images/facebookIcon.svg'></Icon>
        <Icon src='/images/pinterestIcon.svg'></Icon>
        <Icon src='/images/twitterIcon.svg'></Icon>
      </IconsContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Contas sugeridas</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((person, index) => {
            <Item>
              <User user={person}></User>
              <Button fontSize={14} outlined>Seguir</Button>
            </Item>
          })}
        </ItemContainer>
      </BoxContainer>
      <BoxContainer>
        <BoxHeader>
          <span>Descobrir</span>
        </BoxHeader>
        <ItemContainer>
          {people.map((item, index) => {
            <Item>
              <RecommendedCard key={index} recommended={item}></RecommendedCard>
              <ArrowIcon></ArrowIcon>
            </Item>
          })}
        </ItemContainer>
      </BoxContainer>
      <DownloadImage src='/images/appstore.png'></DownloadImage>
      <DownloadImage src='/images/playstore.png'></DownloadImage>
      <DownloadImage src='/images/amazon.png'></DownloadImage>
    </Container>
  )
}

export default Suggestions;
