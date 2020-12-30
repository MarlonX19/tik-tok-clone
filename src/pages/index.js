import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions'


function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}>

      </Feed>
      <Suggestions />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // buscar dados no mongodb
  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar: 'https://p77-sign-sg.tiktokcdn.com/musically-maliva-obj/1662912484921350~c5_720x720.webp?x-expires=1609268400&x-signature=P56Y2fF3DyoykW3bx%2BNFKW7rNcI%3D',
        name: 'Marlon Englemam',
        username: 'marlonenglemam'
      },
      description: 'descrição vai aqui',
      tags: [{ title: 'youtube' }, { title: 'clone com next' }],
      songName: 'Nome da musica',
      videoUrl: 'https://v19.tiktokcdn.com/f4be906f2e68776465f2f4e1133898c1/5feceba0/video/tos/useast2a/tos-useast2a-pve-0068/14277f3d61dd4798866614bb03351910/?a=1233&br=2120&bt=1060&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20201230150501010189066032340BE653&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M21yZ25ueXkzeDMzZjczM0ApZWg4O2g3NWQ6Nzo2OTg2OmdwcHFoYHMwY2ZfLS1iMTZzczQwYmIvMGIuNC8vYS41NC86Yw%3D%3D&vl=&vr=',
      likes: 560,
      comments: 10,
      replies: 100
    },

    {
      id: 2,
      author: {
        id: 2,
        avatar: 'https://p77-sign-sg.tiktokcdn.com/musically-maliva-obj/1662912484921350~c5_720x720.webp?x-expires=1609268400&x-signature=P56Y2fF3DyoykW3bx%2BNFKW7rNcI%3D',
        name: 'Marvin Lopes',
        username: 'marvinlopes'
      },
      description: 'descrição vai aqui 2',
      tags: [{ title: 'youtube' }, { title: 'clone com next' }],
      songName: 'Nome da musica 2',
      videoUrl: 'https://v77.tiktokcdn.com/944b9d803a23371d77e30a29f1c0558c/5feceb99/video/tos/alisg/tos-alisg-pve-0037c001/464455cba2bf4ea1afe4cad0460beac7/?a=1180&br=2470&bt=1235&cd=0%7C0%7C1&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202012301504580101902090841F0BBEE1&lr=tiktok&mime_type=video_mp4&qs=0&rc=Mzhnbjd3ODlueDMzaDgzM0ApZGc5aWc2NGVpN2Y6NTpkZWdfYWNhNnBhaDFfLS0xLzRzczQ0YTQwYWJeNTA2YDA2NTY6Yw%3D%3D&vl=&vr=',
      likes: 560,
      comments: 10,
      replies: 100

    }
  ]

  return {
    props: {
      posts: data
    }, // will be passed to the page component as props
  }
}

export default Index;
