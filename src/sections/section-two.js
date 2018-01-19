import React from "react";
import Button from "../components/button";
import Particles from "react-particles-js";
import "../App.css";

//Images
import distributed from "../images/distributed.png";
import security from "../images/security.png";
import anon from "../images/anon.png";
import middleman from "../images/mellemmand.png";

// import trust from "../images/trust.png";

const SectionTwo = props => {
  return (
    <div className="container second-section">
      <div className="row first-sec">
        <div className="six columns why-box">
          <img className="image" src={distributed} />
          <p className="title">Pålideligt</p>
          <p className="desc">
            Vores voting-system er bygget på en blockchain. Det betyder, at al
            dataen ligger på et distribueret netværk. Skulle den enkelte bruger
            miste noget af dataen, vil det være muligt at få den tilbage. Det
            skyldes, at dataen ligger på netværket, og alle der er tilsluttet
            netvæket har en kopi. Derfor vil stemmer i vores system aldrig kunne
            forsvinde.
          </p>
        </div>
        <div className="six columns why-box">
          <img className="image anon" src={anon} />
          <p className="title">Anonymt</p>
          <p className="desc">
            Når du sender en stemme, er det via din adresse. Adressen du sender
            fra er en genereret kode på 64 bogstaver og tal. Så du vil altid
            kunne vise, at du er ejeren af adressen, men du vil ikke kunne
            spores.
          </p>
        </div>
      </div>

      <div className="row second-sec">
        <div className="six columns why-box left">
          <img className="image security" src={security} />
          <p className="title">Sikkert</p>
          <p className="desc">
            Da systemet er integreret i en blockchain, er det tilknyttet et
            distirbueret netværk. Når du lægger noget op på blockchain, bliver
            det forseglet, så ingen kan ændre i det. Så når du stemmer, vil din
            data blive forseglet. Da den er forseglet, vil det ikke være muligt
            for nogen at gå tilbage og ændre dit svar.
          </p>
        </div>
        <div className="six columns why-box right">
          <img className="image middleman middleman-box" src={middleman} />
          <p className="title">Ingen mellemmand</p>
          <p className="desc">
            Det distribuerede netværk gør, at alle har direkte forbindelse til
            hinanden. Så når du sender din data, kommer det direkte op på det
            fælles netværk. Derfor er der ikke nogen mellemmand, der skal
            kontrollere eller indberette dit svar. Så du kan være sikker på, at
            der ikke er nogen, der ændrer i din stemme. Du behøver ikke stole på
            andre end dig selv.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
