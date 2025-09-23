import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      NavBar: &nbsp;

      {/* Old approach: do complete reload of entire page-> inefficient */}
      {/* <a href='/'>Home</a>
      <a href='/about'>About</a> */}

        {/* New Approach: using Link from React-Router-DOM */}
      <Link to='/'>Home</Link>&#9769;
      <Link to='/about'>About</Link>&#9769;
      <Link to='/api'>API</Link>&nbsp;
    </div>
  )
}
