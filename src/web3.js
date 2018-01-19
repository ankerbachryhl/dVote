import Web3 from "web3";

let web3;

if (typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/cSZu9N7nI6E9BOEkNEeX"
  );
  web3 = new Web3(provider);
}

export default web3;
