import React from 'react'
import classes from './hero.module.css'

const Hero = () => {
  return (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <h2 className={classes.title}>
        Find your books here
      </h2>
      <p className={classes.desc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et unde quaerat dolor odio laudantium, illum atque quam eligendi explicabo molestias quod, culpa aut fugit quidem doloremque voluptatibus aperiam laboriosam aspernatur?
      </p>
      <div className={classes.inputContainer}>
        <input type="email" placeholder='john@gmail.com'/>
        <button>Send</button>
      </div>
    </div>
  </div>
  )
}

export default Hero