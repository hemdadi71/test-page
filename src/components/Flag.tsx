import clsx from 'clsx'

interface FlagProps {
  country: string
  des?: string
  className?: string
}
const Flag = ({ country, des, className }: FlagProps) => {
  return (
    <>
      <div className={clsx('flex flex-col gap-1 pl-3', className)}>
        <div className="flex items-center gap-2">
          <img src="/images/flag.jpg" alt="flag" />
          <p className="text-[16px] font-semibold text-[#BBC3FF]">{country}</p>
        </div>
        <p className="text-[11px] font-medium text-[#ffff]">{des}</p>
      </div>
    </>
  )
}

export default Flag
