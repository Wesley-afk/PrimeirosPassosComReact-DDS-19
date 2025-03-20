import React from 'react'
import Sp from '../assets/saopaulo.jpg' //renomeando a img 

const Images = () => {
  return (
    <div>
        <h1>Imagens</h1>
        <h2>subtitulo</h2>
        {/* imagens na pasta pública */}
        <img src="./cr7.jpg" width={500} height={300} />

        {/* Imagen da pasta assets */}
        <img src={Sp} width={900} height={500} />
    </div>
  )
}

export default Images;