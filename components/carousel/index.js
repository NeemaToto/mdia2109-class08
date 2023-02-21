import Image from 'next/image'
import { useState } from 'react'
import styles from './carousel.module.css'

export default function Carousel() {
    const [img, setImg] = useState(0)
    const changeImage = (change) => {
        if (change == "backward") {
            setImg(img - 1)
            if (img == 0) {
                setImg(5)
            }
        } else if (change == "forward") {
            setImg(img + 1)
            if (img == 5) {
                setImg(0)
            }
        }
    }
    return (
        <>
            <div className={styles.carouselContainer} style={{
                backgroundImage: "url(/carousel-images/" + img + ".jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: 500,
                height: 300
            }}>
                <Image
                    src={"/icons/leftArrow.png"}
                    alt={"/icons/leftArrow.png"}
                    width={60}
                    height={60}
                    onClick={() => changeImage("backward")}
                />
                <Image
                    src={"/icons/rightArrow.png"}
                    alt={"/icons/rightArrow.png"}
                    width={60}
                    height={60}
                    onClick={() => changeImage("forward")}
                />
            </div>
        </>
    )
}