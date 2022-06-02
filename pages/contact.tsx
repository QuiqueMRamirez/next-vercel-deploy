
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import {MainLayout} from '../components/layouts/MainLayout'

const AboutPage = () => {
  return (

    <MainLayout>
      <h1 className={styles.title}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/contact.js</code>
      </p>

    </MainLayout>

  )
}

export default AboutPage