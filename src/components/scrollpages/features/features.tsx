import Image from "next/image"
import Link from "next/link"

import { useRef,useLayoutEffect, useState } from "react"
import { useScroll } from "@react-three/drei"
import { useFrame } from "react-three-fiber"
import { gsap } from "gsap"

import styles from "./features.module.scss"
import { featureProp } from "@/data"

export default function Features({color,setColor}:featureProp){
    const feature=useRef(null)
    const tl=useRef<GSAPTimeline>()
    const scroll = useScroll()
    const handleBtnClick = (color:string) =>{
        setColor(color)
    }

    useFrame((state,delta)=>{
      tl.current?.seek(scroll.offset*tl.current?.duration())
      // console.log(scroll)
    })
    useLayoutEffect(()=>{
        const ctx=gsap.context(()=>{

            tl.current=gsap.timeline({
                defaults:{ease:'power1.inOut'}
            })
            tl.current
            .to('#headsetframe1',{opacity:0},.01)
            .to('#headsetframe2',{opacity:0,left:"30.05vw"},.01)
            .to('#headsetframe3',{opacity:0,left:"30.05vw"},.01)
            .to('#headsetframe1',{opacity:"75%"},12)
        },[feature]);
        return () => {
            ctx.revert();
        }
    },[feature])
    return (
        <div className={styles.container} ref={feature}>  
            <div>
                <Image
                className={styles.headsetframe1}
                src="headsetframe1_edge.svg"
                alt="headsetframe"
                width={671}
                height={697}
                id="headsetframe1"
                />
                <Image
                className={styles.headsetframe2}
                src="headsetframe1_edge.svg"
                alt="headsetframe"
                width={671}
                height={697}
                id="headsetframe2"
                />
                <Image
                className={styles.headsetframe3}
                src="headsetframe1_edge.svg"
                alt="headsetframe"
                width={671}
                height={697}
                id="headsetframe3"
                />
            </div>
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
                    {/* <video className={styles.video} src="waves.webm" autoPlay loop></video> */}
            </section>
            <section className={styles.mic}>
                <div className={styles.micTxt}>
                    <h1>Noise-Cancelling</h1>
                    <h1>Microphone</h1>
                </div>
            </section>
            <section className={styles.rgb}>
                <div className={styles.rgbtnContainer}>
                    <div className={styles.rgbtn}>
                        <button className={styles.blue} id="blue" onClick={()=>handleBtnClick('#0000ff')}></button>
                    </div>
                    <div className={styles.rgbtn}>
                        <button className={styles.green} id="green" onClick={()=>handleBtnClick('#00ff00')}></button>
                    </div>
                    <div className={styles.rgbtn}>
                        <button className={styles.red} id="red" onClick={()=>handleBtnClick('#ff0000')}></button>
                    </div>
                    <div className={styles.rgbtn}>
                        <button className={styles.purple} id="purple" onClick={()=>handleBtnClick('#883988')}></button>
                    </div>
                    <div className={styles.rgbtn}>
                        <button className={styles.white} id="white" onClick={()=>handleBtnClick('#ffffff')}></button>
                    </div>
                    <div className={styles.rgbtn}>
                        <button className={styles.aqua} id="aqua" onClick={()=>handleBtnClick('#00dddd')}></button>
                    </div>
                </div>
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