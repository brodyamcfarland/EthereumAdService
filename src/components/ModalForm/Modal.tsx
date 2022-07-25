import React from 'react'
import ReturnButton from './ReturnButton'
import { ethers } from 'ethers';
import EASLOGOSIMPLE from '../../assets/EASLogoSimple.png';
import ConnectButton from './ConnectButton';

interface Props {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
    account: string;
    setAccount: React.Dispatch<React.SetStateAction<string>>;
    setAdName: React.Dispatch<React.SetStateAction<string>>;
    setAdURI: React.Dispatch<React.SetStateAction<string>>;
    setHyperlink: React.Dispatch<React.SetStateAction<string>>;
    contract: ethers.Contract;
}

const Modal = ({setIsModal, account, setAccount, setAdName, setAdURI, setHyperlink}: Props) => {
  return (
    <>  
        <div>
            <div className='text-center border-b-[1px] border-white'>
                <img src={EASLOGOSIMPLE} alt='easlogo-simple' className="max-h-[70px] max-w-[100px] shadow-sm m-auto pt-1"/>
                <a href="https://rinkeby.etherscan.io/address/0x0c4cf9cb0fc19512def68b898d4f5ed491e94da8" target="_blank" rel="noreferrer" className='text-[12px] text-gray hover:text-white duration-200'>0x0c4CF9Cb0fC19512Def68b898d4f5Ed491e94DA8</a>
                <p className='text-center text-[#a03636] text-[10px] pb-1'>[ SMART CONTRACT ADDRESS : RINKEBY ]</p>
            </div>
            <div className='p-1 border-b-[1px] border-white'>
                <p className='text-[13px] flex flex-row text-gray'>Ad Time: <span className='text-[13px] pl-1'>3 Minutes [ demo ]</span> </p>
                <p className='text-[13px] flex flex-row text-gray'>Remaining Time Left: <span className='text-[13px] pl-1'>3 Minutes</span> </p>
                <p className='text-[13px] flex flex-row text-gray'>Price Per Ad: <span className='text-[13px] pl-1'>0.1 ETH</span> </p>
            </div>
            <form className='flex flex-col p-1'>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[12px] pl-[12px] shadow-lg mr-1'>1</span>
                    Enter the display name of the Ad 
                </div>
                <div className='text-[12px] text-gray'>* Will be shown next to Sponsored by:</div>
                <input className='bg-black text-white border-[1px] border-white hover:bg-[#161616] text-[15px] mb-1 flex-grow pl-1'></input>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[11px] pl-[11px] shadow-lg mr-1'>2</span>
                    Enter your website Hyperlink
                </div>
                <div className='text-[12px] text-gray'>ex. https://www.ethereumadservice.com/ </div>
                <input className='bg-black text-white border-[1px] border-white hover:bg-[#161616] text-[15px] mb-1 flex-grow pl-1'></input>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[11px] pl-[11px] shadow-lg mr-1'>3</span>
                    Choose your file to be displayed
                </div>
                <div className='text-[12px] text-gray'>* File types: .png, .jpeg, .gif</div>
                <div className='text-[12px] text-gray'>* Recommended resolution: ~530 x 560</div>
                <div className='text-[12px] text-gray'>Stored on IPFS and referenced by Smart Contract</div>
                <input className='bg-black text-white border-[1px] border-white hover:bg-[#161616] text-[15px] mb-1 flex-grow pl-1'></input>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[12px] pl-[10px] shadow-lg mr-1'>4</span>
                    Connect to MetaMask (Rinkeby)
                </div>
                <ConnectButton/>
                <div className='text-[15px] pb-1'>
                    <span className='bg-[#ce3c3c] rounded-full text-[12px] p-[7px] pr-[12px] pl-[10px] shadow-lg mr-1'>5</span>
                    Submit and Pay
                </div>
                <button className='bg-[#09582a] border-[1px] border-transparent rounded-lg p-1 mb-1 m-auto
                       hover:border-white hover:bg-[#0ba049] duration-500 w-1/4 text-[13px]'>Submit</button>
            </form>
        </div>
        <ReturnButton
            setIsModal={setIsModal}
        />
    </>
  )
}

export default Modal;