
<template>
    <div>
      <!-- Your component's HTML template -->
    </div>
  </template>
  
  <script>
g
import { ComposeClient } from '@composedb/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { ethers } from 'ethers';
import { DIDSession } from 'did-session'


export default {
  mounted() {
    // Code to connect to the backend and initialize ComposeClient
    async function connectToBackend() {
      const provider = new ethers.providers.JsonRpcProvider('https://ethereum.publicnode.com');
      const addresses = await provider.send('eth_requestAccounts', []);
      const accountId = await getAccountId(provider, addresses[0]);
      const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);
      const client = new ComposeClient();
      const session = await DIDSession.authorize(authMethod, { resources: ComposeClient.resources });
      client.setDID(session.did);
      
      // You can perform other operations with the ComposeClient here
      
      console.log('Connected to the backend and initialized ComposeClient');
    }

    connectToBackend();
  }
}

  </script>
  