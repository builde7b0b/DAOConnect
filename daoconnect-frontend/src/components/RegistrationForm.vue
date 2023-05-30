

<template>
  

    <form @submit="registerUser">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" required>
  
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required>
  
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" required>
  
      <button @click="registerUser" type="button">Register</button>
    </form>
    <button @click="getViewer" type="button">Register</button>
  </template>
  
  <script>
  // import axios from 'axios';
  // import { ComposeClient } from '@composedb/client';
  
import { ComposeClient } from '@composedb/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
// import { ethers } from 'ethers';
import { DIDSession } from 'did-session'
import Web3 from 'web3';
import { definition } from '/Users/wealthybeans/GIT/FEVM-Hackathon/runtime-composite.js'



  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
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
  
  async getViewer() {
    try {
      const response = await fetch('http://localhost:49552/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: 'query GetViewer { viewer { id } }',
        }),
      });

      const data = await response.json();
      console.log('Viewer ID:', data.data.viewer.id);
    } catch (error) {
      console.error(error);
    }
  },
  async registerUser() {
  try {
    const query = `
      mutation CreateSimpleProfile($input: CreateSimpleProfileInput!) {
        createSimpleProfile(input: $input) {
          document {
            id
            displayName
          }
        }
      }
    `;

    const variables = {
      input: {
        content: {
          displayName: this.username,
        },
      },
    };

    const response = await fetch('http://localhost:49552/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const data = await response.json();
    const { createSimpleProfile } = data.data;

    console.log('User input saved:', createSimpleProfile);
    console.log('User profile created:', createSimpleProfile);
    
    this.connectToBackend();
  } catch (error) {
    console.error(error); // Optional: Handle error response
  }
}

}
  };
  </script>
  
