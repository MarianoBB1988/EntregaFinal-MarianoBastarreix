import { FaLinkedin } from "react-icons/fa";

export default function FooterComponent() {

    const footerEstilo = {
        backgroundColor: '#f8e264',
        fontSize: '12px'
    }
    const imgEstilo = {
        width: '90px',
        height: '22px',

        marginLeft: '10px'
    }
    return (
        <>

         
            <footer className="text-center text-lg-start" style={footerEstilo}>

                <div className="text-center p-3" >
                    API rest obtenida de:
                    <img style={imgEstilo} src='https://seeklogo.com/images/M/mercadolibre-logo-D691B14746-seeklogo.com.png' />

                    <strong>   &nbsp;<div className="vr"></div>&nbsp; Desarrollado por: </strong>Mariano Bastarreix    <a style={{fontSize:'17px'}} href="https://www.linkedin.com/in/mariano-bastarreix/" target="blank">
                        <FaLinkedin />
                        </a>&nbsp; <div className="vr">
                      

                    </div> &nbsp; <strong> Curso:</strong>&nbsp;React&nbsp;
                    <a className="text-body" href="https://www.coderhouse.com/"><img style={{width:'90px', height:'25px'}} src='https://emprelatam.com/wp-content/uploads/2019/10/logos-coderhouse-01.png' /></a>
                   
                </div>

            </footer>
        </>
    );

}
