interface DescriptionProps {
  children?: React.ReactNode
}
const Description = ({ children }: DescriptionProps) => {
  return (
    <>
      <div className="pl-7 text-[12px] font-medium text-[#ffff]">
        <ul className=" list-disc">
          <li>Debug, diagnose, and resolve software defects within</li>
          <li>Test and verify bug fixes to ensure the issues are resolved</li>
        </ul>
        <p>Collaborate with the development team to implement.</p>
        {children}
      </div>
    </>
  )
}

export default Description
