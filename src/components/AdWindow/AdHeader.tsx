import EASLOGOSIMPLE from '../../assets/EASLogoSimple.png';


const AdHeader = () => {
  return (
    <div className="flex flex-row top-[0px] text-center border-b-[1px] p-1 gap-1 items-center">
        <img src={EASLOGOSIMPLE} alt='easlogo-simple' className="max-h-[70px] max-w-[100px] shadow-sm"/>
        <p className='pl-3 text-[15px] font-light'>Sponsored by:</p>
        <p className=''></p>
    </div>
  )
}

export default AdHeader;