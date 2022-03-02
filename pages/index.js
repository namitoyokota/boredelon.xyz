import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bored Elon</title>
        <meta name="description" content="hey elon, what do you want on here?" />
        <link rel="icon" href="/elon.png" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/elon.png"
          alt="elon"
          width={250}
          height={250}
        />

        <h1 className={styles.title}>
        Bored Elon
        </h1>

        <p className={styles.description}>
          hey elon, what do you want on here?
        </p>
      </main>
    </div>
  )
}
