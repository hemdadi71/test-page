const CardHeader = () => {
  return (
    <>
      <div className="flex gap-3">
        <div>
          <img src="./images/cardImage.jpg" className="border" alt="image" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <p className="text-[16px] font-semibold text-[#ffff]">
              Kayley Gunner
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
          <div className="h-[2.63px] w-[96.5%] bg-[#BBC3FF] rounded-bl-3xl rounded-br-3xl rounded-full relative">
            <div className="w-[85%] rounded-full rounded-bl-3xl rounded-br-3xl h-full bg-gradient-to-r from-[#00E4FF] to-[#0357FF] absolute top-0 left-0"></div>
          </div>
          <div>
            <p className="text-[11px] font-medium">Bug Fixing in VB.NET Financial Tech Project</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHeader
