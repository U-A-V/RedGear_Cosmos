import Link from "next/link"
import styles from "./features.module.scss"
export default function Features(){
    return (
        <div className={styles.container}>  
            <section className={styles.title}>
                <h2>INTRODUCING </h2>
                <h1>Redgear Cosmos 7.1</h1>
                <h2>The Ultimate Gaming Experience</h2>
            </section>
            <section className={styles.sound}>
                <h2>7.1 Surround Sound</h2>
                <p>Immersive experince with hardware driven virtual 7.1 surround sound</p>
            </section>
            <section className={styles.mic}>
                <h2>Noise-Cancelling Microphone</h2>
                <p>Equipped with a high quality built-in noise cancelling mic</p>
            </section>
            <section className={styles.rgb}>
                <h2>RGB Breathing Lights</h2>
                <p>An amazing RGB LED light effect on ear-cup</p>
            </section>
            <section className={styles.headband}>
                <h2>Comfort</h2>
                <p>Comfertable headband for long duration usage</p>
            </section>
            <section className={styles.purchase}>
                <Link href="#" target="_blank">
                    Purchase Now
                </Link>
            </section>
        </div>
    )
}