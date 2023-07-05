import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Evitar from './Components/QueSon/Evitar';
import Testimonios from './Components/Testimonios/Testimonios'
import Denunciar from './Components/Denunciar/Denunciar'
import './App.css'

function App() {
  return (
    <>
    <Header className="header"/>
    <div className='main'>
      <h2 className="h2">¿Qué es el ciberbullying?</h2>
      <div className='main-contend'>
        <div className='main-text'>
          <p>El ciberbullying, también denominado ciberacoso o acoso virtual, es el uso de medios digitales 
          para molestar o acosar a una o varias personas mediante ataques personales, divulgación de información
          personal o falsa entre otros medios.Es el maltrato que sufre un chico o chica menor de edad
          por parte de otros chicos o chicas menores de edad a través de internet u otros medios electrónicos.
          En el ciberbullying la persona menor de edad es amenazada,
          humillada o molestada mediante la publicación de textos, imágenes, videos o audios.
          Para ello se utilizan medios electrónicos como telefonía móvil, correo electrónico,
          mensajería instantánea, redes sociales, juegos online, etc.
          Hay diferentes tipos de ciberbullying:</p>
          <ul>
            <li>Hostigamiento</li>
            <li>Stalking</li>
            <li>Difusión de imágenes sin consentimiento</li>
            <li>Fraping</li>
            <li>Perfiles falsos</li>
            <li>Exclusión y cancelación</li>
            <li>Filtración de información</li>
            <li>Grooming</li>
          </ul>
        </div>
        <div className='main-img'>
          <img className="img1" src="https://www.erasmusmobilityacademy.com/wp-content/uploads/2022/06/Cyberbullying_featured_image-770x450.jpg" alt="" />
        </div>
      </div>
    </div>
    <Evitar/>
    <Testimonios/>
    <Denunciar/>
    <Footer/>
    </>
  )
}

export default App
