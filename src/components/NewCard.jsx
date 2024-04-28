import React from 'react'
import '../App.css'
const NewCard = () => {
  return (
    <div
      className="parallax"
      style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8UX1eUiLUGQMHg47FaW_kUaf9lfOWgt2_g&usqp=CAU")`,
        minHeight: '800px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    ></div>
  )
}

export default NewCard