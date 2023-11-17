# SakaGPT: AI-powered WhatsApp Integration on the ICP Blockchain

SakaGPT is a platform that seamlessly integrates artificial intelligence (AI) with WhatsApp, utilizing the power of the Internet Computer (ICP) blockchain. This project aims to enhance user interactions on WhatsApp by leveraging advanced AI capabilities.

## Features

- **AI-powered Responses:** Utilizes state-of-the-art natural language processing (NLP) models to generate intelligent and context-aware responses very fast.
  
- **Decentralized Infrastructure:** Leverage the ICP blockchain for a decentralized and secure platform, ensuring privacy and reliability.

- **Smart Conversations:** Enables dynamic and intelligent conversations by incorporating machine learning to understand user intents and provide relevant information or even take specific approved actions.

- **Scalability:** Benefit from the scalability of the ICP blockchain, allowing the platform to handle a large number of users and messages efficiently.

## Installation
Follow these steps to set up SakaGPT on your local environment:

### Prerequisites

- A connection to the internet.
- A command line interface.
- [Node.js](https://nodejs.org/en) (v18 or later downloaded and installed.)
- [DFINITY IC SDK,](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
```bash
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```
- dfx
  ```bash
  DFX_VERSION=0.14.1 sh -ci "$(curl -sSL https://internetcomputer.org/install.sh)"
  ```
   
### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/emmanuelhaggai/SakaGPT.git
   cd SakaGPT
   ```
   
2. **Install Dependencies:**

   ```bash
   npm install
   ```
3. **Deploy to Internet Computer:**

   ```bash
   dfx start --clean --background
   dfx deps deploy
   dfx deploy
   ```
 
### Contact
For any inquiries or issues, please feel free to contact me or email me via emmanuelhaggai@gmail.com
   

   
   






