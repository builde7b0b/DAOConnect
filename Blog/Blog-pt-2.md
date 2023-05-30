# Building a DataDAO Application: My Hackathon Journey

## Day 2: 

### Developer Notes
Jeezzuss!
Did not expect that to go so well! :)
Took 6 more hours after bootcamp class just to finally get a user logged in and via ceramic so now we have our front-end and backend connected. No Red bulls or energy drinks for me, just lots of Tea and Motivation to build something special everytime I'm coding and working on a project.

it's currently 10pm my time and Class ended around 3pm and I'm just now taking a much needed break.

With just under 18 hours left, I feel good about my progress as this is all uncharted territory for me and being able to do it on my own and get things woring is a HUGE win in my opinion.

No sleep tonight so hopefully my instructors will let me slide with a day where I may be lagging a lot lol

I'm so close to another Realm or level of life that I don't want to stop now. 

The reason it took so long is because of certain libraries and resources being updated and some outdated and figuring out what works where and what changed and if it still works can be a pain in the behing especially when having to parse through technical documentation at every step of the way. To be able to come up with solutions so quickly is truly a talent especially in the way that we as Software Engineers have to double as Expert Researchers often times to find creative answers.

I'm breaking the next two phases up into two 3 Hour Sprints.
I figure I can get it done by morning and take naps throughout my class breaks.

The first Phase will be ..Filecoin and Data Storage

The second phase will be .. Social Interactions






## Focus on Core Functionality:
Prioritize the implementation of core functionality that aligns with the main purpose of your Social DataDAO app.
Ensure that essential features related to user registration, file storage, and basic social interactions are implemented first.
`Essential Features: user Registration, file storage, basic social Interactions.`


## Ceramic Issues 
Had to go back and re-compile our composite into a Javascript file.
Also had to pass resourcess from our Ceramic Client Instance


### Installing FEVM-Hardhat Kit
1. Add Metamask Private Key to .env
2. export PRIVATE_KEY='abcdef'
3. note deployer address: 0x30C5f56f618d28c7Ae66bE74391Ce7a1d04416e9

- Get deployer address: `yarn hardhat get-address`

This will show you the ethereum-style address associated with that private key and the filecoin-style f4 address (also known as t4 address on testnets)! The Ethereum address can now be exclusively used for almost all FEVM tools, including the faucet.

4. Deploy contracts
 `yarn hardhat deploy`

#### Contract Deployed
![Deploy Contracts](/images/Deploy_FEVM.png)


### Interacting with contracts:
Command: `yarn hardhat get-balance --contract 'THE DEPLOYED CONTRACT ADDRESS HERE' --account 'YOUR ETHEREUM ADDRESS HERE'`


- Gonna use it to deploy our contracts
- We need to create a package that prepares our file for storage by turning it into a .car file recording the metadata. We have a submodule written in go that does this but I also want to automate the process of inputting this information into our frontend our contract to our frontend where we make the deal and send the payload to upload an image. Search the web and gather information to assist us in this task and come back with a solution and code example and steps for how to create this custom package in React.

Preparing Data for Storage
Before storing a file with a storage provider, it needs to be prepared by turning it into a .car file and the metadata must be recorded. To do this, the hardhat kit has a tool submodule, written in the language Go, which can do this for you. You can also use the FVM Data Depot website will automatically convert files to the .car format, output all the necessary metadata, and act as an HTTP retrieval point for the storage providers.

I want to use this API for completing the rest of the filecoin upload process, parse this information and find some useful solutions: The primary advantage of the FEVM over other EVM based chains is the ability to access and program around Filecoin storage deals. This can be done in the FEVM via the Filecoin.sol library maintained by Zondax. Note this library is currently in BETA. It is unaudited, and the APIs will likely be changing with time. This repo will be updated as soon as possible when a breaking change occurs.

I want to automate these steps to happen on the backend while our user just sees a loading screen until the image is uploading, they will receive an email later when the file has been uploaded if they have an email setup in their account. We are using ceramic as our database so we can check that here.


### User Auth Done
![Examples](/images/UserAuthDonecopy.png)
