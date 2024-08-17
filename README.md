# Decentralized Job Marketplace

A decentralized platform for employers to post job listings and for job seekers to find and apply to jobs, all managed on the blockchain using Cartesi rollups technology.

## Table of Contents

1. [About the Project](#about-the-project)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Usage](#usage)
   - [Handlers](#handlers)
   - [Job Listing Interaction](#job-listing-interaction)
5. [Project Structure](#project-structure)
6. [Contribution Guidelines](#contribution-guidelines)
7. [License](#license)
8. [Author](#author)

## About the Project

The Decentralized Job Marketplace is a blockchain-powered job board where employers can post jobs and job seekers can apply, all managed in a decentralized way. By leveraging Cartesi rollups, this dApp provides a secure, transparent, and efficient way to manage job listings and applications.

## Tech Stack

This project uses the following technologies and tools:

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Yarn**: Package manager that doubles down as project manager.
- **Cartesi Rollups**: Off-chain computation framework that enhances dApp scalability and versatility.

## Getting Started

Follow these steps to get the dApp running on your local machine.

### Prerequisites

To run this project, you need the following installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [yarn](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Cartesi CLI](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)

Install Cartesi CLI globally:

```bash
npm install -g @cartesi/cli
```

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/johns-collab/Decentralized-Job-Marketplace
   ```

   Navigate into the project directory:

   ```bash
   cd q-jobs-dapp
   ```

2. **Install Dependencies:**

   Using Yarn:

   ```bash
   yarn install
   ```

3. **Build and Run the dApp:**

   Compile the project with Cartesi CLI:

   ```bash
   cartesi build
   ```

   Run the dApp:

   ```bash
   cartesi run
   ```

## Usage

This section explains how to interact with the decentralized job marketplace.

### Handlers

Handlers are responsible for processing specific actions within the dApp. Below are examples of the primary handlers.

#### `createJobListing`

Creates a new job listing.

- **Parameters**: `data` object containing the employer's address, job title, and description.
  
- **Example Request:**

  ```json
  {
    "action": "createJobListing",
    "data": {
      "employer": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "title": "Software Developer",
      "description": "We are looking for a skilled developer."
    }
  }
  ```

- **Hex Representation:**

  ```bash
  0x7b22616374696f6e223a226372656174654a6f624c697374696e67222c202264617461223a7b22656d706c6f796572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20227469746c65223a22536f66747761726520446576656c6f706572222c20226465736372697074696f6e223a22576520617265206c6f6f6b696e6720666f72206120736b696c6c656420646576656c6f7065722e227d7d
  ```

- **CLI Interaction:**

  ```bash
  cartesi send generic \
      --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
      --chain-id=31337 \
      --rpc-url=http://127.0.0.1:8545 \
      --mnemonic-passphrase='test test test test test test test test test test test junk' \
      --input=0x7b22616374696f6e223a226372656174654a6f624c697374696e67222c202264617461223a7b22656d706c6f796572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20227469746c65223a22536f66747761726520446576656c6f706572222c20226465736372697074696f6e223a22576520617265206c6f6f6b696e6720666f72206120736b696c6c656420646576656c6f7065722e227d7d
  ```

- **Example Response:**

  ```json
  {
    "status": "ok",
    "message": "Job listing created successfully!",
    "data": {
      "id": "da06c8ff-18aa-4219-bbb4-0d1cfbfc04c6",
      "employer": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "createdAt": 1690000730000,
      "title": "Software Developer",
      "description": "We are looking for a skilled developer."
    }
  }
  ```

#### `getAllJobListings`

Fetches all job listings stored on the blockchain.

- **Parameters**: None.

- **Example Request:**

  ```json
  {
    "action": "getAllJobListings"
  }
  ```

- **Hex Representation:**

  ```bash
  0x7b22616374696f6e223a22676574416c6c4a6f624c697374696e6773227d
  ```

- **CLI Interaction:**

  ```bash
  cartesi send generic \
      --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
      --chain-id=31337 \
      --rpc-url=http://127.0.0.1:8545 \
      --mnemonic-passphrase='test test test test test test test test test test test junk' \
      --input=0x7b22616374696f6e223a22676574416c6c4a6f624c697374696e6773227d
  ```

- **Example Response:**

  ```json
  [
    {
      "id": "da06c8ff-18aa-4219-bbb4-0d1cfbfc04c6",
      "employer": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
      "createdAt": 1690000730000,
      "title": "Software Developer",
      "description": "We are looking for a skilled developer."
    }
    ...
  ]
  ```

## Project Structure

The repository is organized as follows:

- **src/**: Contains the source code.
  - **controller/**: Handles the logic for job creation, retrieval, and management.
  - **models/**: Contains the job listing model definition.
  - **services/**: Manages interaction with Cartesi Rollups and other services.
  - **utils/**: Utility functions for hex encoding, date formatting, etc.
  - **index.js**: Entry point of the dApp, handles the request dispatching.
  
- **dist/**: Directory where the compiled files are stored.

## Contribution Guidelines

If you're interested in contributing to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

Please ensure your code follows the existing code style and includes relevant test coverage.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Author

Developed by Ifeatu johnson. For more projects and contributions, visit my [GitHub](https://github.com/johns-collab).