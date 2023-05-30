<template>
    <div>
      <h1>Filecoin File Upload</h1>
  
      <form @submit.prevent="uploadFile">
        <label for="file">Choose a file:</label>
        <input type="file" id="file" name="file" ref="fileInput" />
  
        <button type="submit">Upload</button>
      </form>
  
      <p v-if="uploadProgress !== null">
        Upload Progress: {{ uploadProgress }}%
      </p>
    </div>
  </template>
  
  <script>
  // You would import your Filecoin library here, depending on what you're using
  // import Filecoin from 'filecoin-library';
  import { ref } from "vue";
import { ethers } from "ethers";
import { AiOutlineQuestionCircle } from "vue-ionicons/dist/vue-ionicons.common";
import Spinner from "bootstrap-vue/es/components/spinner";


const CID = require("cids");

// Replace this address with the address of own instance of the deal client contract
const contractAddress = "0xf4E0C74D76Bf324293bB3B3DA184d164d06F7664";
const contractABI = contract.abi;
let dealClient;
let cid;


  export default {
    data() {
      return {
        uploadProgress: null,
      };
    },
    methods: {
        
        setup() {
    const commP = ref(
      "baga6ea4seaqkp2pjlh6avlvee6ib2maanav5sc35l5glf3zm6rd6hmfgcx5xeji"
    );
    const carLink = ref(
      "https://data-depot.lighthouse.storage/api/download/download_car?fileId=862fb115-d24a-4ff1-a1c8-eadbbbfd19cf.car"
    );
    const errorMessageSubmit = ref("");
    const pieceSize = ref("32768");
    const carSize = ref("18445");
    const txSubmitted = ref("");
    const dealID = ref("");
    const proposingDeal = ref(false);
    const network = ref("");

    const handleChangeCommP = (event) => {
      commP.value = event.target.value;
    };

    const handleChangeCarLink = (event) => {
      // validate input data here
      carLink.value = event.target.value;
    };

    const handleChangePieceSize = (event) => {
      pieceSize.value = event.target.value;
    };

    const handleChangeCarSize = (event) => {
      carSize.value = event.target.value;
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(commP.value);
      console.log(carLink.value);
      console.log(pieceSize.value);
      console.log(carSize.value);

      try {
        errorMessageSubmit.value = "";
        cid = new CID(commP.value);
        const { ethereum } = window;
        if (ethereum) {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({method: 'eth_requestAccounts'});

          const provider = web3.currentProvider
          const signer = provider.getSigner();
          dealClient = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          const extraParamsV1 = [
            carLink.value,
            carSize.value,
            false, // taskArgs.skipIpniAnnounce,
            false, // taskArgs.removeUnsealedCopy
          ];
          const DealRequestStruct = [
            cid.bytes, //cidHex
            pieceSize.value, //taskArgs.pieceSize,
            false, //taskArgs.verifiedDeal,
            commP.value, //taskArgs.label,
            520000, // startEpoch
            1555200, // endEpoch
            0, // taskArgs.storagePricePerEpoch,
            0, // taskArgs.providerCollateral,
            0, // taskArgs.clientCollateral,
            1, //taskArgs.extraParamsVersion,
            extraParamsV1,
          ];
          console.log(dealClient.interface);
          const transaction = await dealClient.makeDealProposal(
            DealRequestStruct
          );
          console.log("Proposing deal...");
          proposingDeal.value = true;
          const receipt = await transaction.wait();
          console.log(receipt);
          proposingDeal.value = false;
          txSubmitted.value = "Transaction submitted! " + receipt.hash;

          dealClient.on("DealProposalCreate", (id, size, verified, price) => {
            console.log(id, size, verified, price);
          });

          console.log("Deal proposed! CID: " + cid);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
        errorMessageSubmit.value =
          "Something went wrong. " + error.name + " " + error.message;
        return;
      }
        }
    },





      async uploadFile() {
        const file = this.$refs.fileInput.files[0];
        if (!file) {
          alert('No file selected');
          return;
        }

        // Define the endpoint and credentials
      const apiKey = '2QAsRxaA59akt9ucqLB2I8vxFcs';
      const endpoint = 'https://filecoin.infura.io';
      const auth = {
        username: apiKey,
        password: '50d4c1993c5ecf0f27518e254cca03fd',
      };

      // Create the request data
const requestData = {
  id: 0,
  jsonrpc: '2.0',
  method: 'Filecoin.ChainHead',
  params: [],
};

      const formData = new FormData();
      formData.append('file', file);
         try {
        const response = await axios.get(endpoint, requestData);

        console.log('Upload complete:', response.data);
      } catch (err) {
        console.error('Error uploading file:', err);
      }


  
        // File validation would go here
  
        // Convert the file into a suitable format for storage on Filecoin
  
        // Connect to Filecoin and upload the file
        // This will depend on the specific Filecoin library you're using
        /*
        const filecoin = new Filecoin(apiKey, secretKey);
        const upload = await filecoin.upload(file);
  
        // Monitor the upload progress
        upload.on('progress', (progress) => {
          this.uploadProgress = Math.round(progress * 100);
        });
  
        upload.on('error', (err) => {
          // Handle the error
          console.error(err);
        });
  
        upload.on('done', () => {
          // The file has been successfully uploaded
          console.log('Upload complete');
        });
        */
  
        // Store file metadata in your application's database
        // This will depend on your application's specifics
  
        // Implement encryption and security measures
  
        // Test the file upload functionality
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add any styles you want here */
  </style>
  