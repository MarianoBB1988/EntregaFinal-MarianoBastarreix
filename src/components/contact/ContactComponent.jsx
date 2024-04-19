import { Link } from "react-router-dom";

export default function ContactComponent() {
  const linkStyle = {

    textDecoration: "none",

    fontSize: '12px',
};

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     
      <div className="container">

        <div className="row justify-content-md-center  ">

          <div className="col col-lg-4 shadow-lg " style={{backgroundImage:'url('+window.location.origin + '/src/assets/contact.jpg)', backgroundSize:'100%'}}>

          </div>
          <div className="col-md-auto col-lg-6 shadow-lg " style={{backgroundColor:'#f9eca1'}}  >
            <form  className="col col-lg-12" style={{ padding:'30px'}}>

              <div data-mdb-input-init className="form-outline mb-4">
                <h4>Contactate</h4>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input type="text" id="form4Example1" className="form-control" />
                <label className="form-label" for="form4Example1">Nombre</label>
              </div>


              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form4Example2" className="form-control" />
                <label className="form-label" for="form4Example2">Email</label>
              </div>


              <div data-mdb-input-init className="form-outline mb-4">
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                <label className="form-label" for="form4Example3">Mensaje</label>
              </div>



              <button data-mdb-ripple-init type="button" className="btn btn-dark btn-block mb-4">Enviar</button>
              <Link style={linkStyle} to={'javascript:history.back()'}> <button data-mdb-ripple-init type="button" className="btn btn-light btn-block mb-4">Cancelar</button>  </Link>
             
            </form>
          </div>
          <div className="col col-lg-4">

          </div>
        </div>
        <div className="row">

          <div className="col-md-auto">

          </div>
          <div className="col col-lg-2">

          </div>
        </div>

      </div>
      <br></br> <br></br> <br></br>
    </>
  );

}
