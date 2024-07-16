"use client"


import React from 'react'
import Confidentiality from "@/src/components/confidentiality/Confidentiality"
import { LanguageProvider } from '@/app/context/LanguageContext'

const ConfidentialityContainer = () => {
  return (
    <LanguageProvider>
      <Confidentiality />
    </LanguageProvider>
  )
}

export default ConfidentialityContainer
