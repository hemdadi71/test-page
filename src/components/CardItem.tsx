import CardArticle from './CardArticle'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'

const CardItem = () => {
  return (
    <>
      <div className="2xl:w-[471px] 2xl:h-[803px] bg-[#08004D] p-4 bg-opacity-[80%] backdrop-blur-[50px] text-[#FFFFFF] flex flex-col gap-5">
        <CardHeader />
        <CardArticle />
        <CardFooter />
      </div>
    </>
  )
}

export default CardItem
