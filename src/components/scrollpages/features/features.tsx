import { RefObject } from "react";

import Link from "next/link"
import styles from "./features.module.scss"
export default function Features(){
    return (
        <div className={styles.container} >  
            <section className={styles.title} id="#main">
                <div className={styles.titleTxt}>
                    <h2>INTRODUCING </h2>
                    <h1>Redgear</h1>
                    <h1>Cosmos 7.1</h1>
                    <p>The Ultimate Gaming Experience</p>
                </div>
            </section>
            <section className={styles.sound}>
                <div className={styles.soundTxt}>
                    <h1 className={styles.inline}>7.1</h1>
                    <h2 className={styles.inline}>Surround Sound</h2>
                    <div style={{marginTop:"1.5rem"}}>
                        <p style={{fontSize:"3.5rem",fontWeight:"300"}}>Immersive Experince</p>
                        <p>with hardware driven virtual 7.1 surround sound</p>
                    </div>
                </div>
            </section>
            <section className={styles.mic}>
                <div className={styles.micTxt}>
                    <h1>Noise-Cancelling</h1>
                    <h1>Microphone</h1>
                </div>
            </section>
            <section className={styles.rgb}>
                <div className={styles.rgbTxt}>
                    <h1>RGB Breathing</h1>
                    <h1>Lights</h1>
                    <p>An amazing RGB LED light effect on ear-cup</p>
                </div>
            </section>
            <section className={styles.headband}>
                <div className={styles.headbandTxt}>
                    <h1>Comfort</h1>
                    <p>Comfertable headband</p>
                    <p>For long duration usage</p>
                </div>
            </section>
            <section className={styles.purchase}>
                <Link href="#" target="_blank" className={styles.btn}>
                    <h2>Purchase Now</h2>
                </Link>
            </section>
        </div>
    )
}