import CarrouselComponent from "./CarrouselComponent";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import ContactComponent from "../contact/ContactComponent";

export default function HomeComponent() {
  const bannerEstilo = {
    width: '100%',
    marginTop: '10rem',
    position: 'relative',
    display: 'block'

  }



  const imgEstilo = {
    width: '100%',
    height: '100%',
    transition: '0.5s',
    objectFit: 'cover',
    borderRadius: '10px',

  }

  const imgEstilo2 = {
    width: '90%',
    height: '90%',
    transition: '0.5s',

    borderRadius: '50px'
  }

  const btnEstilo = {
    margin: '5px',
    fontSize: '18px',
    padding: '6px 10px',
    borderRadius: '25px',

  }


  return (
    <>





      <CarrouselComponent />

      <br></br>

      <CardGroup style={{ margin: '30px' }}>
        <Card style={{ borderRadius: '5%' }}>
          <Link to={'/products/MLU1051/Celulares y telefonía/'} ><Card.Img style={imgEstilo} onMouseOver={({ target }) => target.style.transform = 'scale(1.1)'} onMouseOut={({ target }) => target.style.transform = 'scale(1)'} variant="top" src={window.location.origin + '/src/assets/smartphones.webp'} /></Link>
          <Card.Body>
            <Card.Title>Celulares y telefonía</Card.Title>
            <Card.Text>
              Todo en celulares y telefonía. Los mejores smartphones y al mejor precio
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Busqueda: iphone, samsung, google pixel</small>
          </Card.Footer>
        </Card >
        <Card style={{ borderRadius: '5%' }}>
          <Link to={'/products/MLU1648/Informática/'}> <Card.Img style={imgEstilo} variant="top" onMouseOver={({ target }) => target.style.transform = 'scale(1.1)'} onMouseOut={({ target }) => target.style.transform = 'scale(1)'} src={window.location.origin + '/src/assets/computadoras.jpg'} /></Link>
          <Card.Body>
            <Card.Title>Informática</Card.Title>
            <Card.Text>
              Computadoras de escritorio, laptops, tablets, impresoras y todo en tecnología.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Busqueda: HP, dell, apple, ipad, macbook</small>
          </Card.Footer>
        </Card>
        <Card style={{ borderRadius: '5%' }}>
          <Link to={'/products/MLU1144/Consolas y video juegos/'}> <Card.Img style={imgEstilo} variant="top" src={window.location.origin + '/src/assets/ps5.jpg'} onMouseOver={({ target }) => target.style.transform = 'scale(1.1)'} onMouseOut={({ target }) => target.style.transform = 'scale(1)'} /></Link>
          <Card.Body>
            <Card.Title>Consolas y video juegos</Card.Title>
            <Card.Text>
              Mundo gammer, todo para el entretenimiento. Consolas, juegos y joysticks.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Busqueda: ps5, xbox, ps4, call of duty</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <br></br>
      <section style={{ backgroundColor: '#f8d303' }}>
        <br></br>  <br></br>
      </section>

      <CardGroup style={{ margin: '30px' }}>
        <div className="card shadow-lg" style={{ borderRadius: '20px', width: '100%' }} >
          <div class="row" >
            <div class="col col-lg-2"  >
              <div   className="ratio ratio-1x1 rounded-circle overflow-hidden" style={{ width: '100%', margin: '10px' }} >
                <img style={{ transition: '0.5s', objectFit: 'cover',}} onMouseOver={({ target }) => target.style.transform = 'scale(2)'} onMouseOut={({ target }) => target.style.transform = 'scale(1)'} src={window.location.origin + '/src/assets/yo.jpg'} className="card-img-top img-cover" alt="Raeesh" />

              </div>
            </div>
            <div class="col">
              <div className="card-body">
                <h6 className="card-title">Desarrollado por:</h6>
                <p className="card-text"><h4>Mariano Bastarreix Blanco</h4></p>

                <a href="#" style={btnEstilo} className="btn btn-primary"><FaLinkedin /></a>

                <a href="#" style={btnEstilo} className="btn btn-dark"><FaGithub /></a>

                <a href="#" style={btnEstilo} className="btn btn-primary"><FaFacebook /></a>

                <a href="#" style={btnEstilo} className="btn btn-danger" ><FaInstagram /></a>

              </div>
            </div>
          </div>
        </div>

        <div className="card shadow-lg" style={{ borderRadius: '20px', width: '100%', marginLeft: '10px' }}>
          <div class="row">
            <div class="col col-lg-2" >
              <div   className="ratio ratio-1x1 rounded-circle overflow-hidden" style={{ width: '100%', margin: '10px' }} >
                <img style={{ transition: '0.5s', objectFit: 'cover', }} onMouseOver={({ target }) => target.style.transform = 'scale(2)'} onMouseOut={({ target }) => target.style.transform = 'scale(1)'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s' className="card-img-top img-cover" alt="Raeesh" />

              </div>
            </div>
            <div class="col">
              <div className="card-body">
                <h6 className="card-title">Desarrollado en:</h6>
                <p className="card-text"><h4>ReactJS</h4></p>
                <p className="card-text">Tecnologías aplicadas en el proyecto</p>
                <a href="#" style={btnEstilo} title="Backend implementado con Firebase" className="btn btn-warning"><SiFirebase /></a>

                <a href="#" style={btnEstilo} title="Frontend desarrollado en ReactJS" className="btn btn-dark" ><FaReact /></a>

                <a href="#" style={btnEstilo} title="Bootstrap como framework de diseño CSS" className="btn btn-primary"><FaBootstrap /></a>

              </div>
            </div>
          </div>

        </div>

      </CardGroup>
      <section style={{ backgroundColor: '#212529', fixed: 'float' }}>
        <br></br> 
      </section>

      <section style={{backgroundImage:'url('+window.location.origin + '/src/assets/bk.jpg)', backgroundSize:'100%'}}>
      <ContactComponent />
      <br></br> <br></br> <br></br>
      </section>
   



    </>
  );

}
