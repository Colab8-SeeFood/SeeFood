import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function Home() {

  const router = useRouter();

  const getZip = async (event) => {
    event.preventDefault();
    const zip = event.target.zip.value;
    console.log(zip);
    // event.target.reset()
    router.push('question1')
    // showModal = true;
    // console.log(showModal);
  };

  // const [showModal, setShowModal] = useState(false); 
  // console.log(showModal);

  

  // const handleSubmit = () => router.push('questions')

  return (
    <div className={styles.container}>
      <Head>
        <title>Where to eat?</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Let us help you answer the hardest question of all time...
        </p>

        <h1 className={styles.title}>
          Where to eat?
        </h1>

        <p className={styles.description}>
          How it works:
        </p>
        <ol>
          <li>Give us a location.</li>
          <li>Answer some questions.</li>
          <li>We'll give you the best ideas.</li>
          <li>You eat!</li>
        </ol>

        <form className={styles.form} onSubmit={getZip}>
        {/* className="flex flex-col" */}
          <label htmlFor="zip" className="mb-2 italic"></label>
          <input
            className="mb-4 border-b-2"
            id="zip"
            name="zip"
            type="text"
            autoComplete="zip"
            pattern="[0-9]*" 
            placeholder="Enter your zip code here"
            // onChange={() => router.push('questions')}
            required
          />
          {/* <Link href="/questions" passHref> */}
            <button
              type="submit"
              // onClick={handleSubmit}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              
            </button>  
          {/* </Link> */}
        </form>  
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
