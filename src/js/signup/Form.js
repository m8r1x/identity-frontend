import React from 'react'

import Button from './Button'
import Input from './Input'

const Form = () => {
  const social = ['twitter', 'github', 'linkedin'].map(acc => {
    return <Input type="text" key={acc} id={acc}/>
  })
  return (
    <form method="post" action="#">
      <Input type="text" name="name" id="name" />
      <Input type="email" name="email" id="email" />
      { social }
      <Button text="Get Started" link="/" />
    </form>
  )
}

export default Form