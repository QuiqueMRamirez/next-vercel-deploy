
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import {MainLayout} from '../components/layouts/MainLayout'
import {DarkLayout}  from '../components/layouts/DarkLayout'
import { ReactNode } from 'react'

export default function AboutPage () {
  return (
    <>
      <h1 className={styles.title}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/about.js</code>
        </p>
    </>
    
  )
}

AboutPage.getLayout = function getLayout( page: ReactNode ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
