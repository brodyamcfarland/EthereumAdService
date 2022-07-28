import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

interface Props {
  contract: ethers.Contract;
};

const AdPlayer = ({contract}: Props) => {
  //========AD-UPLOAD ---- SMART CONTRACT FUNCTION==========//
  const [uriFromSC, setUriFromSC] = useState<string>('');

  const playAd = async () => {
    let scURI = await contract.getURI();
    setUriFromSC(scURI);    
  }

  useEffect(() => {
    playAd();
  }, [])

  return (
    <div className="border-b-[1px] min-h-[60vh]">
      <img src={uriFromSC} alt='ad_from_smart_contract' className="object-contain min-h-[60vh] max-h-[60vh] m-auto"/>
    </div>
  )
}

export default AdPlayer;