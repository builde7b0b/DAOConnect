import { ComposeClient } from '@composedb/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { ComposeClient } from '@composed/client'
import {ethers } from 'ethers';


const provider = new ethers.providers.JsonRpcProvider('https://cloudflare-eth.com');

// Request Ethereum accounts from the provider 
const addresses = await provider.send('eth_requestAccounts', []);

//Get the first accounts ID
const accountId = await getAccountId(provider, addresses[0]);

//Get the Ethereum auth method 
const authMethod = await EthereumWebAuth.getAuthMethod(provider, accountId);

// create a composeClient instance
const client = new ComposeClient()

//Authorize the session using the AuthMethod 
//sessions by default are valid for 7 days.
const session = await DIDSession.authorize(authMethod, { resources: ComposeClient.resources});
//resources array is a scope of permissions user is assigning.
// for composeDB resources are the models inside your composite
// compose.resources is a getter method from compose client.
//This method formats all model streamIDs in composite for did session.

// Set the DID for the Compose Client
ComposeClient.setDID(session.did);

