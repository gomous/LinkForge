import { createThirdwebClient, getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";

// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
// const clientId = import.meta.env.VITE_TEMPLATE_CLIENT_ID;

export const client = createThirdwebClient({
  clientId: "9e4364f15cc239886fa15423241dc36f",
  secretKey: "saauupwMHUV_pXlZxfLb3QXArgk4XCE4Cdbfkam5tR6YYeV3PdoXIrOfGZSqe8n-UyMzahE6RGgSK1-8VnHO_w"
});

export const contract = getContract({
  client,
  chain: sepolia,
  address: "0x567cF2a5e3afAC51820d4E4e214bb131A64866e6",
  // optional ABI
  abi: [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "opportunityId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OpportunityStored",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_opportunityId",
          "type": "uint256"
        }
      ],
      "name": "getData",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "opportunityCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "_dataArray",
          "type": "string[]"
        }
      ],
      "name": "storeData",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
 });
