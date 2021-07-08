import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()
  const { optionalParam, secondOptional } = router.query;

  return(
    <>
      <h1>Homepage</h1>
      <p>{`Optional Param is ${optionalParam} and second is ${secondOptional}`}</p>
    </>
  )};

export default Home


export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

