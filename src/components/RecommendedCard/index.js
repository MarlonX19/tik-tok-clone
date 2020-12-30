import { Container, Avatar, Info } from './styles';

export default function RecommendedCard({ recommend }) {
  return (
    <Container>
      <Avatar src={recommend.avatar}></Avatar>
      <Info>
        <a>{recommend.title}</a>
        <span>{recommend.views}</span>
      </Info>
    </Container>
  );
}