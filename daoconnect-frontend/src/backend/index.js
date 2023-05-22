import { ComposeClient } from '@composedb/client';
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum';
import { ComposeClient } from '@composed/client'
import {ethers } from 'ethers';


const provider = new ethers.providers.JsonRpcProvider('');



const client = new ComposeClient()