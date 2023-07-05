import React, { useState } from 'react';
import '../Denunciar/Denunciar.css'
const Denunciar = () => {

      const [nombre, setNombre] = useState('');
      const [telefono, setTelefono] = useState('');
      const [historia, setHistoria] = useState('');
      const [successMessage, setSuccessMessage] = useState('');
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Objeto con los datos del formulario
        const formData = {
          nombre: nombre,
          telefono: telefono,
          historia: historia,
        };
    
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          // Verificar si la solicitud fue exitosa
          if (response.ok) {
            setSuccessMessage('¡Gracias  '+nombre + '  por contarnos tu historia!');
            setNombre('');
            setTelefono('');
            setHistoria('');
            
          } else {
            setSuccessMessage('Error al enviar el formulario');
          }
        } catch (error) {
          setSuccessMessage('Error en la solicitud: ' + error);
        }
    }
    
      return (
      <div className='denuncia-container'>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='    *Nombre'
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    type="text"
                />
                <input
                    placeholder='    *Telefono'
                    type='telefono'
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    
                />
                <textarea
                    placeholder='    *Tú historia'
                    value={historia}
                    onChange={(e) => setHistoria(e.target.value)}
                    cols="30" rows="10"
                ></textarea>
                <button type="submit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbdJREFUSEu91c2rTlEUx/HPMpCSwkCYeRmgjIz8C+YYMUURA24ixcT1kgGK3JGSMJFIeSkjg5uJgbylGCh3JiMmsrS1jx7Hud37PJy760z2Pnt991q/31479Dyi5/jmFpCZD7EJF8sXEZ//NcM/MsjMT1hRg37FFZyNiKlRQW3ATWzHFyyuQb/jGsYj4t2woDZgNy6jgM7jGLbUoD9wGycj4vlsQW3AOrzGVESsLEEycyOOYivm1cCPcSoinswE+stFmVmEXYLVEfGhCZCZa3EYOzC/zj8rINyJiOyCdQEaHe5jLCJeDW7MzJLZGHZhQV17i9NFq4gomv0eXYA9uFT/KKe6ixPtumfmUhzA3ppx2fIR5zAREd/KRBeg0aGd8YMKmmxltKhmcwjL6tqbiFg/LKCUrAj7tAVYiOK+UrYGMBkRm6cDNFb9ZSLcw/FpSrQf+4YtUSPyIxyMiBcdIpdylIMMijyO67MRubHpmoh4P2DTVTiCnSPbNDM34GVvFy0zG4vewIU+WsUtbOtodldx5n80u9KWlw+064narksbH2m0m13xeLlo/Tw4Ix1xhk1z+yb3kcFPGYS2GV8uxoIAAAAASUVORK5CYII="/> Denunciar</button>
            {successMessage && <p className='respuesta'>{successMessage}</p>}
            </form>
            
        </div>
      );
    };

export default Denunciar;
