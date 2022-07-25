import AdHeader from "./AdHeader";
import AdPlayer from "./AdPlayer";
import AdFooter from "./AdFooter";
import Modal from "../ModalForm/Modal";
import { useState } from 'react';
import { ethers } from 'ethers';

interface Props {
  account: string;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  adName: string;
  setAdName: React.Dispatch<React.SetStateAction<string>>;
  adURI: string;
  setAdURI: React.Dispatch<React.SetStateAction<string>>;
  hyperlink: string;
  setHyperlink: React.Dispatch<React.SetStateAction<string>>;
  contract: ethers.Contract;
};

const Ad = ({account, setAccount, adName, setAdName, adURI, setAdURI, hyperlink, setHyperlink, contract}: Props) => {

  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <>
      {isModal ? (
      <div className="bg-gradient-to-b from-purple to-black relative m-auto items-center justify-center border border-white
      min-h-[70vh] mt-1 mb-3 rounded-xl shadow-xl max-h-[80vh]
      xxl:max-w-[25vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[100vw] xsm:max-w-[100vw]">
        <Modal 
          setIsModal={setIsModal}
          account={account}
          setAccount={setAccount}
          setAdName={setAdName}
          setAdURI={setAdURI}
          setHyperlink={setHyperlink}
          contract={contract}
        />
      </div> 
      ):(
      <div className="bg-gradient-to-b from-purple to-black relative m-auto items-center justify-center border border-white
                      min-h-[70vh] mt-1 mb-3 rounded-xl shadow-xl max-h-[80vh]
                      xxl:max-w-[25vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[100vw] xsm:max-w-[100vw]">
          <AdHeader/>
          <AdPlayer/>
          <AdFooter
            setIsModal={setIsModal}
          />
      </div> 
      )}
    </>
  )
}

export default Ad;