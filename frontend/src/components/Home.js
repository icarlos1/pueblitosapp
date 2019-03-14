
import React from 'react'
import { Carousel } from 'antd'

import { Button } from 'antd';
import {Link} from 'react-router-dom'





export default function(){
    return(

      
      
      <div className="Back"> 
       <div className ="Back1">
       <img className="Back2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_Pueblo_M%C3%A1gicos.jpg/250px-Logo_Pueblo_M%C3%A1gicos.jpg"></img>
       <div className="boton">
      <Link to="/signup"> <Button type="primary" style={{ backgroundColor:"purple",}}>Crear cuenta</Button></Link>
     <Link to="/login"> <Button type="primary" style={{ backgroundColor:"purple",}}>Entrar</Button></Link>
      </div>

</div>
 
        <div className="index-container">
       
        <div>
            <Carousel autoplay>
                <div><img style={{width:"1000px", height:"400px"}} className="carousel" src="https://cdnblog.mexicodestinos.com/blog/wp-content/uploads/2017/01/Visita-los-Pueblos-M%C3%A1gicos-de-M%C3%A9xico-%C2%A1Te-har%C3%A1n-Feliz.jpg" alt="pueblito" /></div>
                <div><img style={{width:"1000px", height:"400px"}} className="carousel" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-01/shutterstock_134012885.jpg" alt="pueblito2" /></div>
                <div><img style={{width:"1000px", height:"400px"}} className="carousel" src="https://i1.wp.com/www.ntv.com.mx/wp-content/uploads/2018/12/pueblos-magicos-.jpg?fit=864%2C567&ssl=1" alt="pueblito3" /></div>
                <div><img style={{width:"1000px", height:"400px"}} className="carousel" src="https://ep01.epimg.net/verne/imagenes/2016/07/13/mexico/1468365549_484131_1468604895_noticia_normal.jpg" alt="pueblito4" /></div>
                <div><img style={{width:"1000px", height:"400px"}} className="carousel" src="https://i2.wp.com/www.blog.interjet.com/wp-content/uploads/2018/04/pueblos-magicos-de-Guanajuato_Header.jpg?resize=800%2C300&ssl=1" alt="pueblito5" /></div>                
            </Carousel>
        </div>
        
       
        </div>
        </div>
    )
}