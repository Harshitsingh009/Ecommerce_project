import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <>
      <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda aliquam expedita earum veritatis provident, modi, numquam deleniti qui nemo quas minus illum blanditiis! Dolor debitis voluptatem fugiat blanditiis aliquam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestias unde distinctio, eveniet quod reiciendis, quasi odit quia illum rerum deserunt, eum natus eos! Ipsum architecto doloribus error possimus necessitatibus.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, aspernatur animi vel ut quae laudantium quisquam illum eum minima culpa atque accusantium, neque quidem quasi! Distinctio adipisci velit perspiciatis dolorum!</p>
          </div>
        </div>
          <div className='text-xl py-4'>
              <Title text1={'WHY'} text2={'CHOOSE US'} />
          </div>

          <div className='flex flex-col justify-between md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-1 flex-col gap-5'>
              <b>Quality Assurance</b>
              <p className='text-gray-600'>We meticuosly select and vet each product to ensure it meets our stringent quality standards </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-1 flex-col gap-5'>
              <b>Convenience</b>
              <p className='text-gray-600'>We meticuosly select and vet each product to ensure it meets our stringent quality standards </p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-1 flex-col gap-5'>
              <b>Exceptional Customer Service</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem perferendis iusto excepturi quasi iure corrupti quaerat, illum natus modi ex quo sit deleniti in, fuga aliquam? Veritatis accusamus alias dicta. elit. Enim, ducimus n debitis.</p>
            </div>

          </div>

          <NewsLetterBox />
      </div>

    </>
  )
}

export default About