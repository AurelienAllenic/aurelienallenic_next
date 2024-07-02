/* eslint-disable */
import React from 'react'
import IMG from '@/public/about.jpg'
import '@/styles/about.scss'
import '@/styles/buttons_about.scss'
import Logos from '@/src/components/Logos';
import Links from '@/src/components/Links';
import Image from 'next/image';

const About = () => {

    const downloadDocument = (document: string) => {
        window.open(document, '_blank');
    };

return (
    <>
    <a className='anchor' id='home'></a>
    <section className="container_about">
        <div className='container_title_about'>
            <h1 className='main-title-about'>Aurélien Allenic</h1>
            <h2 className='sub-title'>Développeur Web</h2>
        </div>
    
        <div className='sub_container_about'>
            <div className="container_img_about">
                <Image src={IMG} alt='aurelien allenic about'/>
            </div>
            <div className="container_text_about">
                <p>
                    Diplômé de trois formations Openclassrooms : développeur web, développeur d'applications javascript / react et développeur d'applications Python, j'ai également suivi une piscine en école d'informatique.
                    <br />Je suis également sur le point de commencer une nouvelle formation en 4éme année de mastère en école dans le cadre d'une alternance.
                    <br />J'ai aussi réalisé des projets hors de mes parcours et possède une certaine appétence pour le développement web et mobile.
                </p>
            </div>
        </div>
        <Logos />
        <Links />
        <a className='anchor' id='cvLetter'></a>
        <a className='anchor' id='languages'></a>
        <a className='anchor' id='contact'></a>
    </section>
    </>
  )
}

export default About
