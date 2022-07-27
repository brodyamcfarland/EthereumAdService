import './App.css';
import Header from './components/Header';
import Ad from '../src/components/AdWindow/Ad';
import { useState } from 'react';
import { ethers } from 'ethers';

//======================================CONTRACT CONNECTION============================================================================//
//====Provider - Read Access=====Signer - Read/Write Access=========//
const INFURA_ID = process.env.REACT_APP_API_KEY;
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${INFURA_ID}`);

const ABI = [
  "function receiveAdPayment(string memory _currentAdName, string memory _currentURI, string memory _currentHyperlink) payable public",
  "function getTimeLeft() public view returns(uint)",
  "function getAdName() public view returns(string memory)",
  "function getURI() public view returns(string memory)",
  "function getHyperlink() public view returns(string memory)",
  "function getRunNumber() public view returns (uint)"
]

const address = '0x0c4CF9Cb0fC19512Def68b898d4f5Ed491e94DA8'; //AdEth v2

const contract = new ethers.Contract(address, ABI, provider);

const main = async () => {
  console.log(`\nSmart Contract Connected: ${address}`);
  // const getTimeLeft = await contract.getTimeLeft();
  // let vertTime = Number(getTimeLeft);
  // console.log(`\nTime Remianing on current Ad: ${vertTime}`);
};

main();
//======================================CONTRACT CONNECTION END==========================================================================//

const App = () => {

  const [account, setAccount] = useState<string>('');
  const [adName, setAdName] = useState<string>('');
  const [file, setFile] = useState<File | undefined>();
  const [adURI, setAdURI] = useState<string>('');
  const [hyperlink, setHyperlink] = useState<string>('');

  return (
    <div className='bg-gradient-to-t from-[#3f0544] to-[#000000ee] min-h-screen'>
      <Header/>
      <Ad
        account={account}
        setAccount={setAccount}
        adName={adName}
        setAdName={setAdName}
        file={file}
        setFile={setFile}
        adURI={adURI}
        setAdURI={setAdURI}
        hyperlink={hyperlink}
        setHyperlink={setHyperlink}
        contract={contract}
      />
    </div>
  );
}

export default App;
