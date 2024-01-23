import React from 'react'

const RandomPhrase = ({ quote }) => {

  const {author, phrase} = quote

  return (
    <div className='container__phrase'>
      <p className='phrase'>
        {phrase}
      </p>
    </div>
  )
}

export default RandomPhrase