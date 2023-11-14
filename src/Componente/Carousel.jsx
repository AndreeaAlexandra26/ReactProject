import Carousel from 'react-bootstrap/Carousel';
import  MediumShotPharmacistWorking from "../Media/Imagini/medium-shot-pharmacist-working.jpg"
import CarrrouselImage2 from "../Media/Imagini/8935971.jpg"
import CarrouselImage3 from "../Media/Imagini/8559887.jpg"


function DarkVariantExample() {
  return (

    <div className='CarrouselContainer' style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
       
      
        height:"80vh",
        marginTop:"50px",
      
        marginBottom:"60PX",
        width:"100%"
    }}>
    <Carousel data-bs-theme="dark" >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={ MediumShotPharmacistWorking}
          alt="First slide"
          style= {{
            
            maxWidth: "1800px",
            maxHeight: "80vh",
            margin:"auto",
    
          
      
          }}
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarrrouselImage2}
          alt="Second slide"
          style= {{
            
            maxWidth: "1800px",
            maxHeight: "80vh",
            margin:"auto",
    
          
      
          }}
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarrouselImage3}
          alt="Third slide"
          style= {{
            
            maxWidth: "1800px",
            maxHeight: "80vh",
            margin:"auto",
    
          
      
          }}
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;