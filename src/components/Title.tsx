import clsx from 'clsx'

interface TitleProps {
  title: string
  des: string
  className?: string
  lineClass?: string
}

const Title = ({ title, des, className,lineClass }: TitleProps) => {
  return (
    <>
      <div className={clsx('flex items-center gap-3', className)}>
        <div
          className={clsx(
            'w-[0.1px] h-[23px] bg-gray-500 bg-opacity-40',
            lineClass
          )}
        />
        <div>
          <p className="text-[#BBC3FF] text-[16px] font-semibold">{title}</p>
          <p className="text-[11px] text-[#ffff] font-medium">{des}</p>
        </div>
      </div>
    </>
  )
}

export default Title
