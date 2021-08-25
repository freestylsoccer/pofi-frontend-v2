import React from 'react'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import { Button } from 'uikit'
import elements from './elements'

export default function MyComponent() {
  const { openLightbox } = useLightbox()
  return (
    <div className="col-lg-5 px-0">
      <Button onClick={() => openLightbox()}>Lorem ipsum</Button>
      <SRLWrapper elements={elements} />
    </div>
  )
}