import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Programmers' List| Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. 
                  Doloribus suscipit laboriosam quasi 
                  itaque quisquam ab repudiandae. 
                  Eligendi et sint cumque sunt minima iste tenetur officiis
                  voluptatum? Ea molestias sed esse?
        </p>
        <p className={styles.text}>Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. 
                  Doloribus suscipit laboriosam quasi 
                  itaque quisquam ab repudiandae. 
                  Eligendi et sint cumque sunt minima iste tenetur officiis
                  voluptatum? Ea molestias sed esse?
        </p>
        <Link href="/programmers">
          <a className={styles.btn}>See Programmers Listing</a>
        </Link>
        <Footer/>
      </div>
    </>
    
  )
}
