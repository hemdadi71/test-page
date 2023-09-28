import clsx from 'clsx'

interface ButtonProps {
  children: React.ReactNode
  className: string
}

const Button = ({ children, className }: ButtonProps) => {
  return (
    <>
      <button className={clsx('text-[16px] font-semibold', className)}>{children}</button>
    </>
  )
}

export default Button
