import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/useEffectTwo.module.css'

export default function useEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])

    return (
        <>
            <div className={styles.backgroundColour}>
                <main className={styles.main}>
                    <Link className={styles.link} href="/">Home</Link>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.primaryHeader}>useEffect Two</h1>
                        <h2 className={styles.secondaryHeader}>Runs once.</h2>
                    </div>
                    <div className={styles.counter}>
                        {number}
                    </div>
                </main>
            </div>
        </>
    )
}