import React from 'react'
import regex from '..//assets/portfolio/regex.png'
import pos from '..//assets/portfolio/pos.png'
import habiteer from '..//assets/portfolio/habiteer.png'

const portfolio = () => {
    const portfolio = [
        {
            id:1,
            src:habiteer,
            href:'https://github.com/CMPUT301F21T30/Habiteer',
            title:'Habit Tracking App'
        },
        {
            id:2,
            src:regex,
            href:'https://github.com/UOFA-INTRO-NLP-F21/assn1_fsa_regex-parz1val-13',
            title: 'Regex'
        },
        {
            id:3,
            src:pos,
            href:'https://github.com/UOFA-INTRO-NLP-F21/f2021-asn4-parz1val-13',
            title: 'Hmm and POS Tagging'
        },
        
    ]
  return (
    <div name = 'portfolio' className = 'bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-300 border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>
                    Check out some of my work right here.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolio.map(({id,src,href,title})=>(
                    <div key ={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <div className='flex items-center justify-center'>
                        <p className='py-1 text-gray-200'>{title}</p>
                    </div>
                    <img src = {src} alt = '' className='rounded-md duration-200 hover:scale-105'/>
                   

                    <div className='flex items-center justify-center'>
                        <a href = {href}><button  className='w-1/2 px-6 m-8 duration-200 hover:scale-105'>Code</button></a>
                    </div>
                </div>  
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default portfolio