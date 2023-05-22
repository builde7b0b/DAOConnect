import { ComposeClient } from '@composedb/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { ComposeClient } from '@composed/client'
import {ethers } from 'ethers';


const provider = new ethers.providers.JsonRpcProvider('');

// Request Ethereum accounts from the provider 
const addresses = await provider.send('eth_requestAccounts', []);

//Get the first accounts ID
const accountId = await getAccountId(provider, addresses[0]);

//Get the Ethereum auth method 
const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);

// create a composeClient instance
const client = new ComposeClient()

//Authorize the session using the AuthMethod 
const session = await DIDSession.authorize(authMethod, { resources: ComposeClient.resources});

// Set the DID for the Compose Client
ComposeClient.setDID(session.did);

