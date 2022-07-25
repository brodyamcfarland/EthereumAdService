import EASLOGO from '../assets/EASLogo.png';
import {FaGithub} from 'react-icons/fa';

const Header = () => {
  return (
    <>
        <div className='flex flex-col text-center pt-1 items-center'>
            <div className=''>
                <img src={EASLOGO} alt='eas-logo' className="m-auto max-h-[5rem]"/>
                <p className="text-[11px] text-gray">On-chain advertisement slots settled in Ethereum</p>
            </div>
        </div>
        <div className="absolute top-[3rem] right-[1rem] sm:right-1/4 md:right-1/3">
            <a href="https://github.com/brodyamcfarland" rel="noreferrer" target="_blank" id="Githubbtn"><FaGithub fill='gray' className='scale-150 text-white'/></a>
        </div>
    </>
  )
}

export default Header;