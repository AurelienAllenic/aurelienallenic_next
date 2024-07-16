/* eslint-disable */
import React from 'react'
import '@/styles/confidentiality.scss'
import ChangeLanguage from '@/src/components/Home/ChangeLanguage'
import { useLanguage } from '@/app/context/LanguageContext'

const Confidentiality = () => {
    const toModifyLanguage = useLanguage();
    const language = toModifyLanguage.language;
  return (
    <>
        <ChangeLanguage />
        <section className="confidentiality">
            <h1 className='title_confidentiality'>{language === 'FR' ? ("Règles de confidentialité pour l'application MagicCounters") : "Confidentiality rules for the MagicCounters app"}</h1>
            <ul className='content_confiddentiality'>
                <li>{language === 'FR' ? ("I. Aucune information personnelle n'est collectée ou partagée par l'application") : "I. No personal data is either stored or shared by the app"}</li>
                <li>{language === 'FR' ? ("II. Expo est utilisé en tant que bibliothèque SDK pour build l'application et rien de plus") : "II. Expo is only used to build the app, nothing more"}</li>
                <li>{language === 'FR' ? ("III. Aucune donnée utilisateur n'est transmise depuis mon serveur via un tiers ou une autre application tierce sur le même appareil"): "III. No user data is transfered from my server to a third part or application on the same device"}</li>
                <li>{language === 'FR' ? ("IV. La seule interaction de l'utilisateur hors de l'application est une requête à l'api de Scryfall afin d'afficher l'image de son choix en fond") : "IV. The only interaction of the user outside of the app is a request to the Scryfall API to load an image as a background"}</li>
            </ul>
        </section>
    </>
  )
}

export default Confidentiality
