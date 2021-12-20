import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home1 from './Home'
import Navbar from './left_navbar'

export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='left_navbar'>
            <Navbar />
        </div>
        <div className='right_content'>
            <Home1 />
            
        </div>
      </div>
    </div>
  )
}
