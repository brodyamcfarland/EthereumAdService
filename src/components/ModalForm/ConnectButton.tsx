import React from 'react'
interface Props {
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
}
declare global {
    interface Window {
    ethereum: any;
    web3: any;
  }
}

const ConnectButton = ({account, setAccount}: Props) => {

  const isConnected = Boolean(account);

  const connectAccount = async () => {
     if (window.ethereum) {
         const ethAccount = await window.ethereum.request({
             method: "eth_requestAccounts",
         });
         await setAccount(ethAccount);
     }
   }
   //Check on state
   // console.log("If account present, account state is saved: "+ account);

   const disconnect = async () => {
     setAccount('');
   }

  return (
    <div className='flex flex-col items-center justify-center'>
      {isConnected ? (
      <>
        <button className='bg-[#591baa44] border-[1px] border-transparent rounded-lg p-1
                         hover:border-white hover:bg-[#7825e4] duration-500 w-1/3 text-[13px]' 
                onClick={disconnect} >Disconnect</button>
        <div className='text-[10px] text-[#148f07]'>Connected</div>
        <div className='text-[10px] text-green'>{account[0]}</div>
      </>
      ):(
      <div className='bg-[#591baa] border-[1px] border-transparent text-center rounded-lg p-1 mb-1
                       hover:border-white hover:bg-[#7825e4] duration-500 w-1/3 text-[13px]'
              onClick={connectAccount}>Connect</div>
      )}
    </div>
  )
}

export default ConnectButton;