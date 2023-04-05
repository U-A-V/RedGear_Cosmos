import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, ScrollControls, Scroll, PresentationControls, OrthographicCamera } from '@react-three/drei'
import { Headset } from '@/components/model/Headset'
import Features from '@/components/scrollpages/features/features'
import { useRef } from 'react'
function DEG2RAD(x:number){
 return  (x/180)*Math.PI;
}

export default function Home() {
  const ref= useRef<HTMLDivElement>(null);
  const props:JSX.IntrinsicElements["group"]={
    position:[0,-3,-10],
    rotation:[DEG2RAD(-15),DEG2RAD(225),DEG2RAD(5),'XYZ'],
    scale:2
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.scene} ref={ref}>
          <Canvas
          camera={{
            position:[0,0,0],          }}
          >
              <ScrollControls pages={6} damping={.3}>
                <PresentationControls >
                    <Headset props={props} refer={ref}/>
                </PresentationControls>
                <Scroll html>
                  <Features/>
                </Scroll>
              </ScrollControls>
          </Canvas>
        </div>
      </main>
    </>
  )
}
