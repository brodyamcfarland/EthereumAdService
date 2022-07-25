import AdButton from "./AdButton";

interface Props {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdFooter = ({setIsModal}: Props) => {
  return (
      <div className="flex flex-col p-1 items-center">
          <p className='text-[14px] font-light'>Interesting in purchasing your own Ad slot?</p>
          <AdButton
            setIsModal={setIsModal}
          />
      </div>
  )
}

export default AdFooter;