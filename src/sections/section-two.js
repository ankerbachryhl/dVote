import React from "react";
import Button from "../components/button";
import Particles from "react-particles-js";
import "../App.css";

//Images
import distributed from "../images/distributed.png";
import security from "../images/security.png";
import anon from "../images/anon.png";
// import trust from "../images/trust.png";

const SectionTwo = props => {
  return (
    <div className="container second-section">
      <div className="row first-sec">
        <div className="six columns why-box">
          <img className="image" src={distributed} />
          <p className="title">Pålidigt</p>
          <p className="desc">
            Vores voting-system er bygget på en blockchain. Det betyder at alt
            dataen ligger på et fordelt-netværk. Så skulle den enkelte bruger
            miste noget af dataen, ville det være muligt at få den tilbage. Det
            skyldes at dataen ligger på netværket, og alle der er tilsluttet
            netvæket har en kopi. Derfor vil stemmer i vores system aldrig kunne
            forsvinde.
          </p>
        </div>
        <div className="six columns why-box">
          <img className="image anon" src={anon} />
          <p className="title">Anonymt</p>
          <p className="desc">
            Vores voting-system er bygget på en blockchain. Det betyder at alt
            dataen ligger på et fordelt-netværk. Så skulle den enkelte bruger
            miste noget af dataen, ville det være muligt at få den tilbage. Det
            skyldes at dataen ligger på netværket, og alle der er tilsluttet
            netvæket har en kopi. Derfor vil stemmer aldrig kunne forsvinde.
          </p>
        </div>
      </div>

      <div className="row second-sec">
        <div className="six columns why-box left">
          <img className="image security" src={security} />
          <p className="title">Sikkert</p>
          <p className="desc">
            Vores voting-system er bygget på en blockchain. Det betyder at alt
            dataen ligger på et fordelt-netværk. Så skulle den enkelte bruger
            miste noget af dataen, ville det være muligt at få den tilbage. Det
            skyldes at dataen ligger på netværket, og alle der er tilsluttet
            netvæket har en kopi. Derfor vil stemmer aldrig kunne forsvinde.
          </p>
        </div>
        <div className="six columns why-box right">
          <img className="image" src={distributed} />
          <p className="title">Ingen mellemmand</p>
          <p className="desc">
            Vores voting-system er bygget på en blockchain. Det betyder at alt
            dataen ligger på et fordelt-netværk. Så skulle den enkelte bruger
            miste noget af dataen, ville det være muligt at få den tilbage. Det
            skyldes at dataen ligger på netværket, og alle der er tilsluttet
            netvæket har en kopi. Derfor vil stemmer aldrig kunne forsvinde.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
