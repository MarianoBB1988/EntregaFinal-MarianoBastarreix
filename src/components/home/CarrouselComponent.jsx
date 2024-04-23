import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function CarrouselComponent() {

    return (
        <>

            <section className='d-flex align-items-center'>
              

                    <MDBCarousel showControls interval={2000} className='d-block w-100 h-100'>
                        <MDBCarouselItem itemId={1}>
                             <img src={'https://raw.githubusercontent.com/MarianoBB1988/EntregaFinal-MarianoBastarreix/main/src/assets/banner1.gif'} style={{width:'100%'}}  alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={2}>
                             <img src={'https://raw.githubusercontent.com/MarianoBB1988/EntregaFinal-MarianoBastarreix/main/src/assets/banner2.gif'} style={{width:'100%'}}  alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={3}>
                             <img src={'https://raw.githubusercontent.com/MarianoBB1988/EntregaFinal-MarianoBastarreix/main/src/assets/banner3.gif'} style={{width:'100%'}}  alt='...' />
                        </MDBCarouselItem>
                    </MDBCarousel>


             
            </section>


        </>
    );

}
