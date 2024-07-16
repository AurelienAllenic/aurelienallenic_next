"use client"

import About from "@/src/components/Home/About";
import CvLetter from "@/src/components/CvLetter/CvLetter";
import Navbar from "@/src/components/Nav/Nav";
import Languages from "@/src/components/Languages/Languages"
import PythonFormation from "@/src/components/Portfolio/PythonFormation"
import ReactFormation from "@/src/components/Portfolio/ReactFormation"
import DevFormation from "@/src/components/Portfolio/DevFormation"
import PersoProjects from "@/src/components/Portfolio/PersoProjects"
import Contact from "@/src/components/Contact/Contact"
import { LanguageProvider } from '@/app/context/LanguageContext'

export default function Home() {
  return (
    <>
      <LanguageProvider>
        <Navbar />
        <About />
        <CvLetter />
        <Languages />
        <PythonFormation />
        <ReactFormation />
        <DevFormation />
        <PersoProjects />
        <Contact />
      </LanguageProvider>
    </>
  );
}
