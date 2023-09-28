import Button from './Button'

const CardFooter = () => {
  return (
    <>
      <footer className="flex items-center justify-center w-full">
        <div className="flex items-center justify-between w-[70%]">
          <Button className="text-[#00FF00]">ACCEPT</Button>
          <Button className="text-[#FFFFFF]">EDIT</Button>
          <Button className="text-[#FF0000]">DELETE</Button>
        </div>
      </footer>
    </>
  )
}

export default CardFooter
