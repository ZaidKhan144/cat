import React from 'react'
import Image from 'next/image'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GetToKnowStyles from './GetToKnow.module.css'
import heroImageOrig from '../../public/assets/images/HeroImagelg.png'
import logoWhite from '../../public/assets/images/logoWhite.svg'
import searchIcon from '../../public/assets/images/search.svg'
import heroImage from '../../public/assets/images/heroImageCrop.png' 

const GetToKnow = () => {
    return (
        <section className='w-full text-white bg-black rounded-tl-[42px] rounded-tr-[42px]'>
            <div className="flex mx-auto justify-between w-[85%] items-center font-Montserrat">
                <div>
                    <Image 
                        src={logoWhite}
                        alt="logoWhite"
                        width={300}
                        height={100}
                    />
                    <p className='max-w-[80%] text-2xl'>Get to know more about your cat breed</p>
                    <div className='flex relative mt-10'>
                        <input 
                            required type="text" name="search" placeholder='Enter your breed' 
                            className='placeholder:blackText font-medium w-96 py-6 pl-6 rounded-[59px] outline-0' />
                        <button className='cursor-pointer absolute right-7 top-6 z-10' type='submit'> <Image src={searchIcon} alt="searchIcon" width={22} height={22} /></button>
                    </div>
                </div>
                <div>
                    <Image 
                        src={heroImage}
                        alt="Hero Image"
                    />
                </div>
            </div>
        </section>
    )
}

export default GetToKnow