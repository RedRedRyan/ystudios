import React, {useRef} from 'react'
import { cocktailLists, mockTailLists,servicesData,projectsData } from '../../constants'
import {useGSAP} from "@gsap/react";
import  gsap  from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TiltedCard from "../assets/TiltedCard.jsx";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
    const main = useRef();
useGSAP(()=>{


    const parallaxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#services',
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true,
        }
    })
    parallaxTimeline
        .from('#c-left-leaf',{
            x:-100, y:100
    })
        .from('#c-right-leaf',{
            x:100, y:100
    })
    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#services',
            start: 'top center',
        }
    })
    scrollTimeline

        .from('.stop-grid div, .sbottom-grid div', {
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.04,
        },'-=0.5')

})
  return (
    <section id= 'services' className='noisy'>
        <div className='heading'><h1>Services</h1></div>


        <img src = '/images/cocktail-left-leaf.png' alt='l-leaf' id='c-left-leaf' />
        <img src = '/images/cocktail-right-leaf.png' alt='r-leaf' id='c-right-leaf' />

        <div className='list'>

            <div className='servicegrid'>

                <div className="stop-grid">


                        {servicesData.map(({title,image,details,link})=> (
                        <div key={title} className={'card'}>
                            <TiltedCard
                                imageSrc={image}
                                altText={title}
                                captionText={title}
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="100%"
                                imageWidth="100%"
                                rotateAmplitude={12}
                                scaleOnHover={1.2}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={true}
                                overlayContent={
                                    <h2 className="font-extrabold" id={'text'}>
                                        {title}
                                    </h2>
                                }
                            />


                        </div>
                        ))}





                </div>


                <div className='sbottom-grid'>
                    <div className='md:col-span-8'>
                        <div className='clear'/>
                        <img src = '/images/abt3.png' alt='grid-img-3'/>
                    </div>

                    <div className='md:col-span-4'>
                        <div className='clear'/>
                        <img src = '/images/abt4.png' alt='grid-img-4'/>
                    </div>
                </div>
            </div>



            {/*<div className='loved'>
                <h2>Most loved mocktails</h2>
                <ul>
                    {mockTailLists.map(({title,image,details,link})=> (
                        <li key={title}>
                            <div className='me-28'>
                                <h3>{title}</h3>
                                <p>{image}|{details}</p>
                            </div>
                            <span>-{link}</span>
                        </li>
                    ))}
                </ul>
            </div>*/}
        </div>
    </section>
  )
}

export default Services