import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactimage from '../assets/react.png'
import git from '../assets/github.png'
import python from '../assets/python.png'
import java from '../assets/java.png'
import c from '../assets/c.png'
import mongodb from '../assets/mongodb.png'

const Experience = () => { 
    const techs = [
        {
            id:1,
            src:python,
            title: 'Python',
            style: 'shadow-yellow-400',
        },
        {
            id:2,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id:3,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id:4,
            src:javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id:5,
            src:reactimage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id:6,
            src:java,
            title: 'Java',
            style: 'shadow-red-500',
        },
        {
            id:7,
            src:c,
            title: 'C',
            style: 'shadow-blue-400',
        },
        {
            id:8,
            src:git,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
        {
            id:9,
            src:mongodb,
            title: 'MongoDB',
            style: 'shadow-green-400',
        },
    ]
  return (
    <div name = 'experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-fit'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-300 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map(({id,src,title,style}) => (
                        <div key ={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src = {src} alt = '' className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }

            </div>
        </div>

    </div>
  )
}

export default Experience