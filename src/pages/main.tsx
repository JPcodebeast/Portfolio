import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css';
import Intro from './intro'


interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
  }
  
  const Page = ({ offset, gradient, onClick }: PageProps) => (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className={styles.slopeBegin} />
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
      </ParallaxLayer>
    </>
  )
  
  export default function Main() {
    const parallax = useRef<IParallax>(null)
  
    const scroll = (to: number) => {
      if (parallax.current) {
        parallax.current.scrollTo(to)
      }
    }
    return (
      <div style={{ background: '#ffffff' }}>
        <Parallax className={styles.container} ref={parallax} pages={4} horizontal>
          <Page offset={0} gradient="tomato" onClick={() => scroll(1)} />
          <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
          <Page offset={2} gradient="pink" onClick={() => scroll(0)} />
          <Page offset={3} gradient="peach" onClick={() => scroll(4)} />
        </Parallax>
      </div>
    )
  }


  