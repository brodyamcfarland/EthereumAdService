import EASLOGOSIMPLE from '../../assets/EASLogoSimple.png';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
interface Props {
  contract: ethers.Contract;
};

const AdHeader = ({contract}: Props) => {
  //========AD-UPLOAD ---- SMART CONTRACT FUNCTION==========//
  const [adNameFromSC, setAdNameFromSC] = useState<string>('');

  const showAdName = async () => {
    let scName = await contract.getAdName();
    setAdNameFromSC(scName);    
  }

  useEffect(() => {
    showAdName();
  }, [])

  return (
    <div className="flex flex-row top-[0px] text-center border-b-[1px] p-1 gap-1 items-center">
        <img src={EASLOGOSIMPLE} alt='easlogo-simple' className="max-h-[70px] max-w-[100px] shadow-sm"/>
        <p className='pl-3 text-[15px] font-light'>Sponsored by: {adNameFromSC}</p>
        <p className=''></p>
    </div>
  )
}

export default AdHeader;