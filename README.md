# Qubic-ers CHallenge 4: QR Code Payment
## Our end product(MVP) :

![5116320486907817593](https://github.com/user-attachments/assets/88edf0bc-7e6f-480c-adf2-6d7e10e5415d)
![5116320486907817597](https://github.com/user-attachments/assets/78c67c0c-064a-44f5-932d-298ffc881421)
![5116320486907817599](https://github.com/user-attachments/assets/0716870b-a86a-40dc-b7ce-e589b73af36d)
![5116320486907817596](https://github.com/user-attachments/assets/93273db9-87b1-47ba-a402-8d904deae758)
![5116320486907817595](https://github.com/user-attachments/assets/ce53e235-ea36-4eae-91f7-fe24e0cb6dac)
![5116320486907817598](https://github.com/user-attachments/assets/2cfd3dc4-daa6-490c-afb0-17d33a4cdbfc)
![5116320486907817594](https://github.com/user-attachments/assets/4f00f745-2197-4987-b5a7-1cf075cd3e92)

In terms of design, we seek simplicity and interactivity, with multiple components accessible to the user, while maintaining the goal of creating a payment gateway dedicated not only to businesses but also to individuals looking for security when sending their cryptocurrencies.

The web application includes three methods: sending, receiving, and paying people within the application and businesses partnered with the organization. We ensure protection through smart contracts that are digitally signed by the user who sends or pays and by the company or person who receives, preventing money loss and protecting their data.

## Dificulties :
After deploying the contract on the blockchain, we had to interact with it. First, we tried using qubic-cli and realized that to add new functionalities to the contract, we had to modify an argument file that allows the CLI to understand the new functionalities of the contract. After many hours dedicated to this, we decided to use JavaScript via requests, where we signed the transactions and sent them to the blockchain. So far, we have little implemented, but we now understand how to use JavaScript libraries to achieve this.

## Our smart contract :
Smart Contract Funcnalities:
Apart from build-in functions (i.e. Burn and Echo), we have created following some extra functions.
1. SetPrice Function:
   This function allowes to enter an price, and existing price will be updated.
   Note: We will also include the product details alongwith price, which we have not yet included.
2. SetSeller:
   This function is dedicated to assign a unique ID in the blockchain to the seller of the specific product.
3. setSender:
   Similar to setSeller sender, this function also store the ID of the sender/Buyer in Blockchain.
4. processPayments:
   This is the important function of the contract, as it handle the payments.
   This function ensure the transfer to amount to the seller account.It also verifies that the amount must not be less than the price of the product.
   Note: In future we will add the functionalities which will fetch real time exchange rate (Euro to Qubic) and transaction will be done in cryptocurrency.

   
## How to deploy in your local machine: 
Once our testnet node is running,in this case ours has IP 5.39.221.235

pnpm install

pnpm start

When the project generates the Webpack files, it will be hosted on port: localhost:3000
