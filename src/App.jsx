import { useState } from 'react'

import './global.css';
import { Header } from './components/Header';
import { PostTask } from './components/PostTask';

function App() {

  return (
    <div>
    <Header/>
    <PostTask></PostTask>
    </div>
   
  )
}

export default App
