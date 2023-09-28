import Description from './Description'
import Flag from './Flag'
import Line from './Line'

import Title from './title'

const CardArticle = () => {
  return (
    <>
      <div className="flex flex-col gap-2 pr-4">
        <div className="flex items-center justify-between border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-2">
          <Flag country="Japan" des="Country" />
          <Title title="Full-Time" des="COOPRATION TYPE" />
          <Title title="Designer" des="CATEGORY" className="w-[35%]" />
        </div>
        <div className="flex items-center justify-between border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-2">
          <Flag country="Tokyo" des="City" />
          <Title title="Male" des="gender" className="w-[27%]" />
          <Title
            title="24 Months"
            des="Minimum experience"
            className="w-[35%]"
          />
        </div>
        <div className="flex items-center justify-between border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-2">
          <Flag country="Japanse" des="Native Language" />
          <Title
            title="$ 57.000 Year"
            des="minimum salary"
            className="w-[31%]"
          />
          <Title title="14:00 PM" des="starting hours" className="w-[35%]" />
        </div>
        <div className="relative flex flex-col gap-4 border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-2">
          <div className="flex items-center justify-between border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-2">
            <Title
              title="In Person"
              des="contract type"
              lineClass="hidden"
              className="pl-3 w-[26%]"
            />
            <Title title="$ 129.000 Year" des="maximum salary" />
            <Title title="22:00 PM" des="ending hours" className="w-[35%]" />
          </div>
          <div className="flex justify-between">
            <Flag country="Adobe Photoshop" des="Required skills" />
            <Flag country="Adobe Illustrator" className='w-[53%]' />
          </div>
          <Line />
        </div>
        <div className="flex justify-between border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-2">
          <Title
            title="Azadi, No 12"
            des="company adress"
            lineClass="hidden"
            className="pl-3 "
          />
        </div>
        <div className='flex flex-col gap-4 border-b-[0.16px] border-[#BBC3FF] border-opacity-50 pb-8'>
          <Description />
          <Description />
          <Description>
            <p>Collaborate with the development team to implement.</p>
          </Description>
        </div>
      </div>
    </>
  )
}

export default CardArticle
