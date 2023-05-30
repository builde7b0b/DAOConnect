# Building a DataDAO Application: My Hackathon Journey

## Introduction
![Examples](/images/FVMDataverse.png)

As a full-stack software engineering bootcamp student, my days are filled with learning Angular, Spring, Java, and JavaScript. Instead of taking a break on the weekend, I decided to challenge myself further by participating in a hackathon. 

After all, what better way to immerse myself in the world of software engineering? The idea that caught my attention for this hackathon project is the concept of a DataDAO.

## Setup
![Day1](/images/Day1.png)
I chose Vue for my frontend due to the ease of use and simple setup for smaller applications.


I wanted to get an MVP up as quickly as possible as I only entered the hackathon just a few days before it was set to end on May 23rd. So basically I entered into a 3-4 Day Sprint.

### Project Ideation
I wanted to build something that the Hackathon organizers Filecoin actually requested and DataDAO's were high on that list. 

Having prior experience being a part of DAO's, it seemed interesting building something based on this new concept or at least it was new to me. The difference lies in that one focuses on the organization itself while the latter focuses on Data more importantly.

## Architecture 
![Flow Chart](/images/FlowChart.png)

### Vue Project Architecture
![Vue Project Architecture](/images/Separation.png)


## User Management & Authentication
![Examples](/images/User_Management_System.png)

During this phase, I found myself diving deep into various decentralized identity solutions. Here are a few that caught my attention:

### uPort
I initially explored uPort for user management, but unfortunately, it didn't align with my project's requirements.

### Selfkey
Next, I considered Selfkey's SDK, which proved to be deprecated. It was a client library for integrating with Selfkey's Browser Extension.

### Ceramic
Finally, I turned to Ceramic and ComposeDB for my user management and authentication needs. After manually setting up and installing the necessary dependencies for Ceramic, I was able to run my server successfully. However, I encountered a peculiar error related to the private key, which led me to investigate the issue further.
#### Vue Frontend Connected to Ceramic
![Vue + Ceramic Connected](/images/BackendConnected.png)

#### Ceramic Server Running
![Ceramic API Server Running](/images/IndexingModelsAuto.png)

With the server up and running, I shifted my focus to the client instance. It's worth mentioning that I initially intended to concentrate on learning Angular, but here I am delving deeper into this new realm of information. It's both fun and exciting, and I'm amazed at how much I'm learning by immersing myself in this hackathon project.

#### Accessing Ceramic Database Examples Models - 
![Examples](/images/ceramic-models.png)

### Creating the composite
![Create Model](/images/CreatedModel.png)

### Login provider functionality via ethers.js
![compile](/images/didprovider.png)

## Indexing and CyberConnect
During the development process, I came across CyberConnect, a platform I found intriguing. To understand its purpose better, I explored its documentation on social graph protocols. It provided valuable insights into the concepts I needed to implement in my DataDAO application.

Additionally, I explored Selfkey, a key player in the identity management space, and their wallet and integration documentation. The information I gathered from Selfkey's resources helped me refine my approach to user management and authentication.

## ComposeDB on Ceramic and LearnWeb3
To enhance my application's functionality, I leveraged ComposeDB on Ceramic. This combination allowed me to efficiently manage data and leverage the benefits of a decentralized infrastructure. I found the official ComposeDB documentation to be an excellent resource in implementing the client-side JavaScript integration.

Furthermore, I discovered LearnWeb3, a platform that utilizes Ceramic DIS. It provided valuable tutorials and resources that enhanced my understanding of integrating Ceramic into my project.

## Conclusion
Participating in this hackathon and working on a DataDAO application has been an enlightening journey. I have been able to apply my knowledge of software engineering while delving into decentralized identity solutions. Exploring platforms like Ceramic, ComposeDB, CyberConnect, and Selfkey has expanded my understanding of cutting-edge technologies and their potential applications.

I am proud of the progress I have made and the insights gained throughout this process. As I continue to refine my application and explore new possibilities, I am grateful for the opportunity to challenge myself and expand my skill set. Building a DataDAO application has opened my eyes to the exciting world of decentralized technologies, and I look forward to the endless possibilities they offer.


## References

- [What is CyberConnect?](https://cyberconnect.me/)
- [What are social graph protocols?](https://docs.cyberconnect.me/)
- Selfkey:
  - [Selfkey Wallet](https://selfkey.org/selfkey-wallet/)
  - [Selfkey Integration Documentation](https://selfkeyfoundation.github.io/selfkey-integration-docs/#introduction)
- Ceramic DIS:
  - [Ceramic Network Documentation](https://developers.ceramic.network/learn/welcome/)
  - [Ceramic Ecosystem on Notion](https://threebox.notion.site/Ceramic-Ecosystem-a3a7a58f81544d33ad3feb84368775d4?p=86b58ca4170146b1b12dfc2bfc281369&pm=s)
- ComposeDB on Ceramic:
  - [ComposeDB Official Website](https://composedb.js.org/)
  - [ComposeDB JavaScript Client Guide](https://composedb.js.org/docs/0.4.x/guides/composedb-client/javascript-client)
- [LearnWeb3 - Utilizes Ceramic DIS](https://learnweb3.io/auth/signin?callbackUrl=https%3A%2F%2Flearnweb3.io)
- To install @composedb/client package:
```
npm install @composedb/client

```