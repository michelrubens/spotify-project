import React from 'react'
import { Link } from 'react-router-dom'

const SongItem = ({ image, name, duration, artist, audio, id, index }) => {
  return (
    <Link to={`/song/${id}`} className='song-item'>
      <div className='song-item__number-album'>
        <p>{index + 1}</p>
        <div className='song-item__album'>
          <img
            src={image}
            alt={`Imagem do Artista ${artist}`}
            className='song-item__image'
          />
          <p className="song-tem__name">{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  )
}

export default SongItem
