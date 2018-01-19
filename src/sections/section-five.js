import React, { Component } from "react";
import "../App.css";
import web3 from "../web3";
import votingsystem from "../votingsystem";
import plusicon from "../images/plusicon.png";

class SectionFive extends Component {
  state = {
    statement: "",
    votesAgainst: "",
    votesFor: "",
    errorMessage: "",
    statusMessage: ""
  };

  async componentDidMount() {
    try {
      const statement = await votingsystem.methods.statement().call();
      const votesAgainst = await votingsystem.methods.votesAgainst().call();
      const votesFor = await votingsystem.methods.votesFor().call();

      this.setState({ statement, votesAgainst, votesFor });
    } catch (err) {
      alert(
        "Vær sikker på at du har sat MetaMask til at køre på Ropsten netværket og er logget ind."
      );
    }
  }

  handleAgainstVote = async () => {
    this.setState({
      errorMessage: ""
    });
    this.setState({
      statusMessage:
        "Venter på bekræftelse fra andre computere på Ethereums blockchain..."
    });

    try {
      const accounts = await web3.eth.getAccounts();

      await votingsystem.methods.vote(1).send({
        from: accounts[0],
        value: web3.utils.toWei("0.01", "ether")
      });

      this.setState({
        statusMessage:
          "Transaktionen var succesfuld. Hvis du reloader siden kan du se en ændring i stemmerne."
      });
    } catch (err) {
      console.log(err);
      this.setState({ statusMessage: "" });
      this.setState({
        errorMessage:
          "Noget gik galt. Vær sikker på, at du har fulgt instruktionerne i videoen ovenover."
      });
    }
  };

  handleForVote = async () => {
    this.setState({
      errorMessage: ""
    });
    this.setState({
      statusMessage:
        "Venter på bekræftelse fra andre computere på Ethereums blockchain..."
    });

    try {
      const accounts = await web3.eth.getAccounts();

      await votingsystem.methods.vote(0).send({
        from: accounts[0],
        value: web3.utils.toWei("0.01", "ether")
      });
      this.setState({
        statusMessage:
          "Transaktionen var succesfuld. Hvis du reloader siden kan du se en ændring i stemmerne."
      });
    } catch (err) {
      this.setState({ statusMessage: "" });
      this.setState({
        errorMessage:
          "Noget gik galt. Vær sikker på, at du har fulgt instruktionerne i videoen ovenover."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container fifth-section">
          <div className="row">
            <div className="twelwe columns">
              <p className="title">Stem nu</p>
            </div>
          </div>
          <div className="row dvote">
            <div className="votecon four columns">
              <div className="voteAddBox">
                <p>Stemmer for ny junglebane</p>
                <p className="line" />
                <div className="votesAgainstText">
                  {this.state.votesAgainst}
                </div>
                <div>
                  <img
                    onClick={this.handleAgainstVote}
                    className="addAgainstVote"
                    src={plusicon}
                  />
                </div>
              </div>
            </div>

            <div className="voteBox four columns">
              <div className="statementBox">
                <p className="statement">{this.state.statement}</p>
                <p className="errorMessage">{this.state.errorMessage}</p>
                <p className="statusMessage">{this.state.statusMessage}</p>
              </div>
            </div>

            <div className="votecon four columns">
              <div className="voteAddBox">
                <p>Stemmer for ny karakter</p>
                <p className="line" />
                <div className="votesForText">{this.state.votesFor}</div>
                <div>
                  <img
                    onClick={this.handleForVote}
                    className="addAgainstVote"
                    src={plusicon}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="faq eight columns">
              <p className="title">FAQ:</p>
              <div>
                <p className="question">Hvad er blockchain?</p>
                <p className="answer">
                  Blockchain-teknologien blev for første gang i praksis
                  introduceret i 2008 af Satoshi Nakamoto i form af Bitcoin.
                  Tanken bag blockchain er følgende: I stedet for at dataen
                  ligger på et decentraliseret- eller centraliseret netværk,
                  ligger det på et distribueret netværk. Alle på netværket har
                  derfor adgang til dataen, og alle har en kopi. Det betyder
                  også, at flertallet skal blive enige om det, for at en
                  transaktion kan blive godkendt på blockchain. Når
                  transaktionen er blevet godkendt, bliver den bagefter
                  forseglet. Forseglingen sørger for, at der skal enorme
                  computerkræfter til for nogensinde at ændre i dataen.
                  <br />
                  <br />
                  Man beskriver derfor også blockchain som en distribueret
                  “hovedbog” af transaktioner. Hver side er så en blok med data,
                  og via nogle forseglings algoritmer er de kædet sammen. Derfra
                  kommer begrebet blockchain.
                </p>
              </div>
              <div>
                <p className="question">Hvad er Ethereum og Ether?</p>
                <p className="answer">
                  Ethereum er en platform bygget på blockchain-teknologien, som
                  udmærker sig ved, at man kan lave og bruge smart contracts på
                  den. Ethereum har et “cryptocurrency” token kaldet Ether, der
                  bruges til at betale netværket for opbevaring og transport af
                  transaktioner. Ideen bag Ethereum blev lavet af dengang 19
                  årige Vitalik Buterin i 2013 og har siden da vokset dag for
                  dag.
                </p>
              </div>
              <div>
                <p className="question">
                  Hvordan har vi lagt vores stemmesystem på Ethereum blockchain?
                </p>
                <p className="answer">
                  Det har vi gjort via smart contracts. En smart contract er et
                  stykke kode, man kan lægge op på blockchain. Når smart
                  contracten så er blevet lagt op på blockchain, kan den via
                  nogle regler beskrevet i koden administrere både Ether og
                  data. Et eksempel kunne være, at der skulle modtages 10 Ether
                  fra minimum 7 personer inden for 30 minutter for at starte et
                  virtuelt væddeløb. Hvis der så kun var 6 der havde betalt
                  efter de 30 minutter, ville smart contracten selv give pengene
                  tilbage til dem, som havde betalt. Vores stemmesystem “d:Vote”
                  er styret af en smart contract, som vi har kodet i Ethereums
                  specielt udviklede sprog for udviklingen af smart contracts:
                  Solidity.
                </p>
              </div>
              <div>
                <p className="question">Hvorfor hedder det d:Vote?</p>
                <p className="answer">
                  Vores app er som sagt et distribueret stemmesystem, da alle
                  stemmerne ligger på Ethereum blockchain. Derfor har vi valgt
                  at kalde vores produkt d:Vote, da det er en sammentrækning af
                  distribueret og vote. Også fordi det lyder sejt ;)
                </p>
              </div>
              <div>
                <p className="question">
                  Hvorfor har vi valgt at lave d:Vote som produkt?
                </p>
                <p className="answer">
                  Vi synes, at fremfor kun at finde viden om blockchain, ville
                  det være sjovere og mere udfordrende at lave noget på selve
                  blockchain. På den måde ville vi lærer en masse og samtidig
                  vise en af de mange måder, blockchain kan bruges på. Efter
                  lang tids mindstorm kom vi til sidst op med d:Vote, som er et
                  simpelt stemmesystem integreret i en hjemmeside.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="all-footer">
          <div className="footer-box">
            <div className="">
              <div className="footer">
                <p>
                  &copy;Copyright 2018 <br />
                  <br />Publiceret under MIT licensen<br />
                  <br />Lavet af: Anker Bach Ryhl og Rasmus Elmsted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFive;
