import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '@/styles/useEffectOne.module.css'
export default function useEffectOne() {
    const [number, setNumber] = useState(0)

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    })

    return (
        <>
            <div className={styles.backgroundColour}>
                <main className={styles.main}>
                    <Link className={styles.link} href="/">Home</Link>
                    <h1 className={styles.primaryHeader}>useEffect One</h1>
                    <h2 className={styles.secondaryHeader}>The infinite counter.</h2>
                    <div className={styles.counter}>
                        {number}
                    </div>
                </main>
            </div>
        </>
    )
}