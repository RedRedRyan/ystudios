import React from 'react'
import {openingHours, socials} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import  gsap  from 'gsap';
import { SplitText } from "gsap/all";

const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2',{type: 'words'} );
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',

                scrub: true,
            },
            ease: 'power1.inOut'
        })
        timeline
            .from(titleSplit.words, {
                opacity: 0,
                yPercent:100,
                stagger: 0.02,
            })
            .from('#contact h3, #contact p', {
                opacity: 0,
                yPercent:100,
                stagger: 0.02,
            })
            .to('#f-right-leaf', {
                y:'-50', duration: 1, ease: 'power1.inOut',
            })
            .to('#f-left-leaf', {
                y:'-50', duration: 1, ease: 'power1.inOut',
            },'<')
    })

    return (
        <footer id='contact'>
            <img src = '/images/paint.png' alt={'leaf-right'} id={'f-right-leaf'}/>
            <img src = '/images/bl-leaf.png' alt={'leaf-left'} id={'f-left-leaf'}/>
            <div className='content' >
                <h2>Where To Find Us</h2>
                <div>
                    <h3>Visit our Office</h3>
                    <p>Mayor Road 15, Ongata Rongai </p>
                </div>
                <div>
                    <h3>Call Us</h3>
                    <p>+254795706200 , +254715402567</p>
                    <p>ytekstudios@gmail.com</p>
                </div>
                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time)=>(
                        <p key={time.day}>
                            {time.day} {time.time}
                        </p>
                        ))}
                </div>
                <h3>Socials</h3>
                <div className={'flex-center gap-5'}>
                    {socials.map((social)=>(
                        <a
                        key={social.name}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.name}
                        >
                            <img src = {social.icon}/>
                            </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Contact
