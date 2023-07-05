import './Testimonios.css'
import { useEffect, useState } from 'react'
import upLogo from '../assets/bx-chevron-up.svg'
import downLogo from '../assets/bx-chevron-down.svg'

function Testimonios() {
   const [pasar, setPasar] = useState(0);
   const [testimonios, setTestimonios] = useState([]);


   function getTestimonios() {
      fetch('/src/Components/apis/testimonios.json')
         .then((res) => res.json())
         .then((data) => {
            setTestimonios(data)
         })
         .catch(err => {
            console.log(err)
         })
   }

   useEffect(() => {
      getTestimonios()
      console.log(testimonios)
   }, [testimonios])


   function clickAbajo() {
      if (pasar < 4) {
         setPasar(pasar + 1);
      } else {
         setPasar(pasar - 4)
      }
   }

   function clickArriba() {
      if (pasar <= 4 && pasar > 0) {
         setPasar(pasar - 1)
      } if (pasar == 0) {
         setPasar(pasar + 4)
      }
   }

   return (
      <>
         <div className='testiTodo'>
            <h2 className='testiTitulo'>Testimonios:</h2>
            <div className='testimonioCarta'>
               <button
                  className='botonTesti'
                  onClick={clickArriba}>
                  <img src={upLogo} alt="" />
               </button>
               <div className='textoCarta'>
                  {testimonios.map((testimonio, index) => {
                     return (
                        <div key={index} style={{ display: index === pasar ? 'block' : 'none' }}>
                           <h5>{testimonio.nombre}</h5><hr />
                           <p>{testimonio.testimonio}</p>
                           <p className='subidoChico'>
                              <small>{testimonio.subido}</small>
                           </p>
                        </div>
                     )
                  })}
               </div>

               <button className='botonTesti' onClick={clickAbajo}><img src={downLogo} alt="" /></button>
            </div>
         </div>
      </>
   )
}

export default Testimonios;
