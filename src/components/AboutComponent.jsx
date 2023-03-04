import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../images/digital-library.svg'
import image2 from '../images/distance-learning.svg'


function AboutComponent() {
  return (
    <div className='container mx-auto px-5 xl:px-20'>
      <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 md:flex md:flex-row md:items-center md:border-none md:shadow-none ">
        <img className="rounded-t-lg w-full md:w-1/2 lg:w-1/2 xl:w-[40%]" src={image2} alt="digital-library-illustration" />
        <div className="p-5 sm:p-5">
          <Link to="#">
            <h5 className="mb-2 text-2xl w-full font-bold tracking-tight text-gray-900 dark:text-white lg:py-5">Noteworthy technology acquisitions 2021</h5>
          </Link>
          <p className="mb-3 font-normal leading-relaxed text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid aliquam distinctio commodi deserunt alias laudantium, ipsam quia numquam debitis explicabo unde vero. Nam eos odio esse expedita dolorem at recusandae enim beatae alias nostrum numquam facere totam, rem eaque? Necessitatibus cumque, dolor error officiis, iste placeat ipsum esse commodi consectetur nihil pariatur culpa dolores dolore eius ducimus ipsam quibusdam harum unde. Sunt, harum accusamus delectus, soluta ipsam sint id commodi iusto eius repellat, dolor ab impedit autem in obcaecati illum nobis vitae iure consequatur nostrum quisquam alias! Illum vitae nostrum accusantium nemo dolore cumque quis exercitationem tempore assumenda a?</p>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:flex md:flex-row md:items-center md:border-none md:shadow-none">
        <img className="rounded-t-lg w-full md:w-1/2 lg:w-1/2 xl:w-[50%] md:order-2 " src={image1} alt="online-course-illustration" />
        <div className="p-5 sm:p-5 md:order-1">
          <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white lg:py-5">Noteworthy technology acquisitions 2021</h5>
          </Link>
          <p className="mb-3 font-normal leading-relaxed text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis saepe atque corporis nam nemo consequuntur deleniti et, a id maiores laboriosam soluta minima ullam itaque explicabo, harum eum temporibus voluptatibus reprehenderit voluptas nesciunt excepturi quas! Nam qui quaerat harum fugit ea facilis laboriosam neque illum vero illo iste, temporibus dicta possimus, ipsa inventore! Ex eius accusantium beatae! Id recusandae dolor aut non tempore. Rerum molestias assumenda iste, cumque rem tempora quisquam quis dolore voluptatem cupiditate sit ratione nostrum officia ducimus placeat doloremque tempore doloribus eligendi quia molestiae in officiis unde. Itaque qui numquam eos suscipit autem ea corporis fugiat esse?</p>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent