import React from "react"
import { Background } from "./background"

export interface SectionProps {
  backgroundImage?: string
}

export const Section: React.FC<SectionProps> = ({ children, backgroundImage }): JSX.Element => {
  const content = <div>{children}</div>

  return backgroundImage ? <Background image={backgroundImage}>{content}</Background> : content
}
