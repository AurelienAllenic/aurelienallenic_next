"use client"

import About from "@/src/components/Home/About";
import CvLetter from "@/src/components/CvLetter/CvLetter";
import Navbar from "@/src/components/Nav/Nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <CvLetter />
    </>
  );
}
