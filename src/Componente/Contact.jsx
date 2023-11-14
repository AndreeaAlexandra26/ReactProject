import { Football } from "phosphor-react";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import LogoTelefon from "../Media/Icons/Logo Tel 2.jpeg";
import LogoEmail from "../Media/Icons/Logo Email.png";
import LogoAdresa from "../Media/Icons/Logo locatie.jpeg";
import LogoProgram from "../Media/Icons/Logo Program.png";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <NavBar isGuest={true} />

      <div className="ContainerPrincipal"
      style={{
        margin:"30px",
        height:"81vh"
      }}>
        <h1> Contact </h1>
        <div
          className="ContainerAdresa"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            margin: "20px",
          }}
        >
          <h3>Adresa</h3>
          <a href="https://maps.app.goo.gl/S9vQ4GARnTKUmS2cA">
            <img
              src={LogoAdresa}
              style={{
                width: "60px",
              }}
            />
          </a>

          <h5>Strada: Zorilor ,Nr: 29 ,Oras : Timisoara</h5>
        </div>

        <div
          className="ContainerTelefon"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            margin: "20px",
          }}
        > <br />
            <h3>Telefon </h3> 
          <a href="tel:+40728323777">
            <img
              src={LogoTelefon}
              style={{
                width: "50px",
              }}
            />
          </a>
          <h5> +40728323777</h5>
        </div> <br />

        <div
          className="ContainerEmail"
          
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            margin: "20px",
          }}
        >
            <h3>Email</h3>
          <a href="mailto:FarmaciaFaviSun@gmail.com">
            <img
              src={LogoEmail}
              style={{
                width: "50px",
              }}
            />
          </a><br />
          <h5> FarmaciaFaviSun@Gmail.com</h5>
        </div> 

        <div
          className="ContainerProgram"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flexstart",
            margin: "20px",
          }}
        >
          <img
            src={LogoProgram}
            style={{
              width: "90px",
              marginLeft:"-20px"
            }}
          />

          <h3>
            Program: <br />
            </h3>
            <br />
            <h5>
            Luni - Vineri : 07 - 22 <br />
            <br />
            Sambata : 08 - 19 <br />
            <br />
            Duminica : Inchis
          </h5>
        </div>
      </div>

      <Footer />
    </>
  );
}
