import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

interface Props {
  contract: ethers.Contract;
};

const AdPlayer = ({contract}: Props) => {
  //========AD-UPLOAD ---- SMART CONTRACT FUNCTION==========//
  const [uriFromSC, setUriFromSC] = useState<string>('');
  const [isLoading, setIsLoading]= useState<boolean>(true);

  const playAd = async () => {
    let scURI = await contract.getURI();
    setUriFromSC(scURI);
    setIsLoading(false);    
  }

  useEffect(() => {
    playAd();
  }, [])

  return (
    <div className="border-b-[1px] min-h-[60vh] text-center">
      {isLoading ? (<div className='text-sm text-gray pt-6'>Loading from IPFS...</div>):(
      <img src={uriFromSC} alt='ad_from_smart_contract' className="object-contain min-h-[60vh] max-h-[60vh] m-auto"/>)
      }
    </div>
  )
}

export default AdPlayer;