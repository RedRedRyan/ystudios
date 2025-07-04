import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap';
import { SplitText } from "gsap/all";
import {useMediaQuery} from "react-responsive";
import { useRef } from 'react';
import Folder from '../assets/Folder.jsx';
import GradientText from "../assets/GradientText.jsx";


const Hero = () => {
  const videoRef = useRef();
  const videoTimelineRef =useRef()
  const isMobile = useMediaQuery({maxWidth: 767});

  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.05,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.05,
      delay: 1,
    });

    // Leaf animations
    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to('.right-leaf', {y: 200}, 0)
    .to('.rocket', {y: -300}, 0);

    // Video animation timeline
    const startValue = isMobile ? 'top 50%' : 'center 60%';
    const endValue = isMobile ? '120% top' : 'bottom top';

    // Create a timeline for video animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    })
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      })
    }

  }, []);

  return (
    <> 
      <section id="hero" className="noisy">
        <h1 className="title">ystudios</h1>

        <img
          src="/images/rocket300.png"
          alt="rocket"
          className="rocket"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}

          <div className="content">
            <div className="space-y-20 hidden md:block">
              <div className={'slogan'}><GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class"
              >
                Only Way is Up.
              </GradientText></div>
              <p className="subtitle">
                Defy <br /> Gravity
              </p>
            </div>

            <div className="view-cocktails">
              <p className="details" >From graphic design to AI Agents, we craft solutions that defy limits—because on the Y-axis, there’s no ceiling.</p>
               <div className={'folder'} style={{ height: '600px', position: 'relative' }}>
                <Folder size={1} color="#05ff9b" className="custom-folder" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          ref={videoRef}
          preload="auto"
          muted
          playsInline
        />
      </div>
    </>
  )
}

export default Hero
