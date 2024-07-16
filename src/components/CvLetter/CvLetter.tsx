/* eslint-disable */
import React from 'react';
import '@/styles/cvLetter.scss';
import CV from '@/public/CV.png';
import Motivation from '@/public/motivation.png';
import Image from 'next/image';

const CvLetter = () => {

    const downloadDocument = (document: string) => {
        window.open(document, '_blank');
    };

    return (
        <>
            <section className='cvLetter' id='cvLetter'>
                <h1 className='main-title-languages'>Curriculum</h1>
                <div className='cvLetter_container'>
                    <div className='container_cv' onClick={() => downloadDocument('./CV.pdf')}>
                        <Image src={CV} alt="CV" width={500} height={500}/>
                    </div>
                    <div className='container_letter' onClick={() => downloadDocument('./motivation.pdf')}>
                        <Image src={Motivation} alt="Lettre de motivation" height={500} width={500}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CvLetter;
