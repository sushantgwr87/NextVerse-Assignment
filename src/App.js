import React from 'react'
import Post from './components/Post'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='section_padding'>
        <Post />
      </div>
    </div>
  )
}

export default App