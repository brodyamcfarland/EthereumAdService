import React, { useState, useEffect } from 'react'
import ReturnButton from './ReturnButton'
import { ethers } from 'ethers';
import EASLOGOSIMPLE from '../../assets/EASLogoSimple.png';
import ConnectButton from './ConnectButton';
import { CID, create } from 'ipfs-http-client'

//========================================================//
interface Props {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    account: string;
    setAccount: React.Dispatch<React.SetStateAction<string>>;
    adName: string;
    setAdName: React.Dispatch<React.SetStateAction<string>>;
    adURI: string;
    setAdURI: React.Dispatch<React.SetStateAction<string>>;
    hyperlink: string;
    setHyperlink: React.Dispatch<React.SetStateAction<string>>;
    contract: ethers.Contract;
    file: File | undefined;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

const Modal = ({setIsModal, account, setAccount, adName, setAdName, adURI, setAdURI, hyperlink, setHyperlink, file, setFile}: Props) => {

    const isConnected = Boolean(account);
    const [error, setError] = useState<boolean>(false);
    const [urlArr, setUrlArr] = useState<string>(''); //<--- Check Type

//==============MAIN FORM SUBMISSION==================//
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (isConnected && adName && hyperlink && file) {
            e.preventDefault();
            setError(false);
            console.log(adName);
            console.log(file);
            console.log(hyperlink);
            sendToIPFS(e);
        } else {
            e.preventDefault();
            setError(true);
        }
    }
//===================================================//
//==================IPFS SUBMISSION==================//

    const sendToIPFS = async (e: React.FormEvent<HTMLFormElement>) => {
        const ipfs = await create({ host: 'ipfs.infura.io', port: 5001, protocol: 'http', timeout: '2m' });
        const { cid } = await ipfs.add({ path: '--only-hash', content: file });
        const cidString = cid.toString();
        console.log("Added File: ", cid.toString())
        setUrlArr(`https://ipfs.io/ipfs/${cidString}`);//<--- CID is now saved to state
    };
    console.log(urlArr);
    
//========AD-UPLOAD ---- SMART CONTRACT FUNCTION==========//
    const ABI = ["function receiveAdPayment(string memory _currentAdName, string memory _currentURI, string memory _currentHyperlink) payable public"]
    const smartContractFunction = async () => {
        console.log(account[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract('0x0c4CF9Cb0fC19512Def68b898d4f5Ed491e94DA8', ABI, provider.getSigner());
        console.log(contract.interface);
        await contract.receiveAdPayment(adName, urlArr, hyperlink, { value: ethers.utils.parseUnits("0.1", "ether")});
    }

    useEffect(() => {
      smartContractFunction();      
    }, [urlArr])
    

  return (
    <>  
        <div>
            <div className='text-center border-b-[1px] border-white'>
                <img src={EASLOGOSIMPLE} alt='easlogo-simple' className="max-h-[70px] max-w-[100px] shadow-sm m-auto pt-1"/>
                <a href="https://rinkeby.etherscan.io/address/0x0c4cf9cb0fc19512def68b898d4f5ed491e94da8" target="_blank" rel="noreferrer" className='text-[12px] text-gray hover:text-white duration-200'>0x0c4CF9Cb0fC19512Def68b898d4f5Ed491e94DA8</a>
                <p className='text-center text-bermuda text-[10px] pb-1'>[ SMART CONTRACT ADDRESS : RINKEBY ]</p>
            </div>
            <div className='p-1 border-b-[1px] border-white'>
                <p className='text-[13px] flex flex-row text-gray'>Ad Time: <span className='text-[13px] pl-1'>3 Minutes [ demo ]</span> </p>
                <p className='text-[13px] flex flex-row text-gray'>Remaining Time Left: <span className='text-[13px] pl-1'>3 Minutes</span> </p>
                <p className='text-[13px] flex flex-row text-gray'>Price Per Ad: <span className='text-[13px] pl-1'>0.1 ETH</span> </p>
            </div>
            <form className='flex flex-col p-1'
                  onSubmit={handleSubmit}>
                {error && <div className='text-center text-[#cf4848] text-[12px] p-[3px]'>Error! Please enter all information and connect to Metamask.</div>}
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[12px] pl-[12px] shadow-lg mr-1'>1</span>
                    Enter the display name of the Ad 
                </div>
                <div className='text-[12px] text-gray'>* Max Characters - 22, will be shown above ad</div>
                <input className='bg-black text-white border-[1px] border-white hover:bg-[#161616] text-[15px] mb-1 flex-grow pl-1'
                       onChange={(e) => setAdName(e.target.value)}
                       maxLength={22}
                />      
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[11px] pl-[11px] shadow-lg mr-1'>2</span>
                    Enter your website Hyperlink
                </div>
                <div className='text-[12px] text-gray'>ex. https://www.ethereumadservice.com/ </div>
                <input className='bg-black text-white border-[1px] border-white hover:bg-[#161616] text-[15px] mb-1 flex-grow pl-1'
                       onChange={(e) => setHyperlink(e.target.value)}/>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[11px] pl-[11px] shadow-lg mr-1'>3</span>
                    Choose your file to be displayed
                </div>
                <div className='text-[12px] text-gray'>* File types: .png, .jpeg, .gif</div>
                <div className='text-[12px] text-gray'>* Recommended resolution: ~530 x 560</div>
                <div className='text-[12px] text-gray'>Stored on IPFS and referenced by Smart Contract</div>
                <input className='bg-black text-white border-[1px] border-white hover:bg-[#161616] text-[13px] mb-1 flex-grow'
                       type="file"
                       onChange={(e: any) => setFile(e.target.files[0])}/>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[12px] pl-[10px] shadow-lg mr-1'>4</span>
                    Connect to MetaMask (Rinkeby)
                </div>
                <ConnectButton
                    account={account}
                    setAccount={setAccount}
                />
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[12px] pl-[10px] shadow-lg mr-1'>5</span>
                    Submit and Pay
                </div>
                <button className='bg-[#09582a] border-[1px] border-transparent rounded-lg p-1 mb-1 m-auto
                       hover:border-white hover:bg-[#0ba049] duration-500 w-1/3 text-[13px]'>Submit</button>
            </form>
        </div>
        <ReturnButton
            setIsModal={setIsModal}
        />
    </>
  )
}

export default Modal;