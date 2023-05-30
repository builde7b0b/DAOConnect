<template>
  <div>
    <!-- Your component's HTML template -->
  </div>
</template>

<script>

import { ComposeClient } from '@composedb/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
// import { ethers } from 'ethers';
import { DIDSession } from 'did-session'
import Web3 from 'web3';
import { definition } from '/Users/wealthybeans/GIT/FEVM-Hackathon/runtime-composite.js'

export default {
methods: {
  async connectToBackend() {
    let web3;

    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        // Request access to the user's accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      } else {
        const endpoint = 'https://mainnet.infura.io/v3/5d0eacd231594c2e9a74329a70d0cbf7';
        web3 = new Web3(endpoint);
      }

      

      // Get the accounts connected to the provider
      const accounts = await web3.eth.getAccounts();
      const accountId = await getAccountId(web3.currentProvider, accounts[0]);
      const authMethod = await EthereumWebAuth.getAuthMethod(web3.currentProvider, accountId);


      const client = new ComposeClient({ceramic: 'http://localhost:7007', definition});
      const session = await DIDSession.authorize(authMethod, { resources: client.resources });
      client.setDID(session.did);

      console.log('Connected to the backend and initialized ComposeClient');
    } catch (error) {
      console.error('Error connecting to the backend:', error);
    }
  },
},
created() {
  
},
}


</script>
