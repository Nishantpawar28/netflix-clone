import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home= () => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section></section>
      </main>
    </div>
  )
}

export default Home
