import React from 'react'
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import { Button } from 'uikit'

interface IElements {
  src: string,
  caption: string,
  height: string
}

interface myComponentProps {
  elements: IElements[]
}

export default function MyComponent({
  elements
}: myComponentProps) {
  const { openLightbox } = useLightbox()
  return (
    <div className="col-lg-5 px-0">
      <Button onClick={() => openLightbox()}>Lorem ipsum</Button>
      <SRLWrapper elements={elements} />
    </div>
  )
}