import Link from 'next/link'
import Carousel from '@/components/carousel'
import styles from '@/styles/carouselPage.module.css'

export default function carouselPage() {

    return (
        <>
            <div className={styles.backgroundColour}>
                <main className={styles.main}>
                    <Link className={styles.link} href="/">Home</Link>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.primaryHeader}>Carousel Page</h1>
                        <h2 className={styles.secondaryHeader}>A carousel.</h2>
                    </div>
                    <Carousel />
                </main>
            </div>
        </>
    )
}