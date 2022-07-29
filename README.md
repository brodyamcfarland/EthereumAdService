# Ethereum Ad Service (EAS)

## Tools
- React w/ Typescript
- Solidity
- Infura API
- Ethers.js
- ReactIcons
- Tailwind CSS
- IPFS Http Client

### Summary
Ethereum Ad Service (EAS) allows the owner of the adspace to set the following parameters in the smart contract for the ad:
- Ad Time - How long the ad runs for
- Ad Cost - How much ether the ad costs
EAS is powered by smart contracts and is live on the Rinkeby Ethereum Test Network.
Users can then purchase ad slots by clicking the main button and inputting their information. When a user clicks submit, their image is sent to IPFS, then a smart contract instance from Meta Mask will appear to pay the fee for the Ad.
- Uploading to IPFS may take several minutes.

## Steps
1) Make sure you have MetaMask downloaded and are connected to the Rinkeby Test Network
2) Click the "Click Here" Button
3) Enter the display name of the ad, the hyperlink for the ad, and choose the image you want.
4) Click the Connect Button
5) Click the Submit Button
6) May the MetaMask fee of 0.1 Ether and wait for your image to display on the main screen.
- You may need to refresh multiple times and wait several minutes for IPFS to discover your image
