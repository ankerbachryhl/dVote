import web3 from "./web3";

//For rinkeby network

// const address = "0x36b1F0116AB2a28946D5Fc668077E19f0673660b";
// const abi = [
//   {
//     constant: false,
//     inputs: [{ name: "decision", type: "uint256" }],
//     name: "vote",
//     outputs: [],
//     payable: true,
//     stateMutability: "payable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [{ name: "", type: "uint256" }],
//     name: "votersAddresses",
//     outputs: [{ name: "", type: "address" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "getAllVoters",
//     outputs: [{ name: "", type: "address[]" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "moderator",
//     outputs: [{ name: "", type: "address" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [{ name: "toAddress", type: "address" }],
//     name: "sendFundsToAddress",
//     outputs: [],
//     payable: true,
//     stateMutability: "payable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "votesAgainst",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "minAmount",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "resetVotes",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "statement",
//     outputs: [{ name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "getTotalFunds",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "votesFor",
//     outputs: [{ name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function"
//   },
//   {
//     inputs: [{ name: "choosenStatement", type: "string" }],
//     payable: true,
//     stateMutability: "payable",
//     type: "constructor"
//   }
// ];

//Ropsten

const address = "0x536aaF1A2cC48f832Ac2A5FD52F560a3dD56Ad48";
const abi = [
  {
    constant: false,
    inputs: [{ name: "decision", type: "uint256" }],
    name: "vote",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "votersAddresses",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getAllVoters",
    outputs: [{ name: "", type: "address[]" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "moderator",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "toAddress", type: "address" }],
    name: "sendFundsToAddress",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "votesAgainst",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "minAmount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "resetVotes",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "statement",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getTotalFunds",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "votesFor",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "choosenStatement", type: "string" }],
    payable: true,
    stateMutability: "payable",
    type: "constructor"
  }
];

export default new web3.eth.Contract(abi, address);
