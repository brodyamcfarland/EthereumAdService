
interface Props {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdButton = ({setIsModal}: Props) => {

  const handleClick = () => {
    setIsModal(true);
  }

  return (
    <div className="text-[13px]">
      <button className="bg-[#3f0544] border-[1px] border-transparent rounded-lg p-1 m-1
                          hover:border-white hover:bg-[#722379] duration-500"
              onClick={handleClick}>
      Click Here
      </button>
    </div>
  )
}

export default AdButton;