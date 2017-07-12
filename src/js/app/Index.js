import React from 'react'

import Button from '../signup/Button'
import Image from './user/Image'

const Index = () => (
  <section id="main">
    <Image image="avatar.jpg" />
    <Button text="Sign Up" link="/signup" />
    <Button text="Come In" link="/home" />
    <hr />
  </section>
)

export default Index