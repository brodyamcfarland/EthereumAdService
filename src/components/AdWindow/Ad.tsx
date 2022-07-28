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
  hyperlink: string;
  setHyperlink: React.Dispatch<React.SetStateAction<string>>;
  contract: ethers.Contract;
  file: File | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined >>;
};

const Ad = ({account, setAccount, adName, setAdName, hyperlink, setHyperlink, contract, file, setFile}: Props) => {

  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <>
      {isModal ? (
      <div className="bg-gradient-to-b from-purple to-black relative m-auto items-center justify-center border border-white
      min-h-[70vh] mt-1 mb-3 rounded-xl shadow-xl
      xxl:max-w-[25vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[100vw] xsm:max-w-[100vw]">
        <Modal 
          setIsModal={setIsModal}
          account={account}
          setAccount={setAccount}
          setAdName={setAdName}
          adName={adName}
          setHyperlink={setHyperlink}
          hyperlink={hyperlink}
          contract={contract}
          file={file}
          setFile={setFile}
        />
      </div> 
      ):(
      <div className="bg-gradient-to-b from-purple to-black relative m-auto items-center justify-center border border-white
                      sm:min-h-[70vh] xsm:min-h-[80vh] mt-1 mb-3 rounded-xl shadow-xl
                      xxl:max-w-[25vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[60vw] sm:max-w-[100vw] xsm:max-w-[100vw]">
          <AdHeader
            contract={contract}
          />
          <AdPlayer
            contract={contract}
          />
          <AdFooter
            setIsModal={setIsModal}
          />
      </div> 
      )}
    </>
  )
}

export default Ad;