import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/useEffectThree.module.css'

export default function useEffectThree() {
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue(value + 10)
    }, [number])

    return (
        <>
            <div className={styles.backgroundColour}>
                <main className={styles.main}>
                    <Link className={styles.link} href="/">Home</Link>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.primaryHeader}>useEffect Three</h1>
                        <h2 className={styles.secondaryHeader}>Increments by 10.</h2>
                    </div>
                    <div>
                        <button className={styles.useEffectThreeButton} onClick={() => setNumber(number + 1)}>Click me</button>
                    </div>
                    <div className={styles.counter}>
                        {value}
                    </div>
                </main>
            </div>
        </>
    )
}