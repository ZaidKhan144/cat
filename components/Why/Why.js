import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import WhyStyles from './Why.module.css'
import catWhy1 from '../../public/assets/images/catWhy1.png'
import catWhy2 from '../../public/assets/images/catWhy2.png'
import catWhy3 from '../../public/assets/images/catWhy3.png'

const Why = () => {
    return (
        <section className='w-full py-28'>
            <div className='flex w-[85%] mx-auto gap-7'>
                <div className='font-Montserrat flex-[0_0_40%] flex flex-col justify-center'>
                    <div className='bg-sBrown w-16 h-1 rounded-[77px] mb-4'></div>
                    <h2 className='font-bold text-5xl leading-[59px] max-w-md mb-11'>Why should you have a cat?</h2>
                    <p className='text-lg max-w-[430px] leading-[22px] mb-16'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    <Link href='/'>
                        <a className="text-brownText font-bold uppercase flex justify-between items-center max-w-[130px]" >Read More <FontAwesomeIcon className='w-8 pl-4' icon={faArrowRight} /> </a>
                    </Link>
                </div>
                <div className='flex-[0_0_30%] flex flex-col gap-7'>
                    <Image className='' src={catWhy1} alt="cat why 1" />
                    <div className='self-end'>
                        <Image className='' src={catWhy2} alt="cat why 2" />
                    </div>
                    
                </div>
                <div>
                    <Image src={catWhy3} alt="cat why 3" />
                </div>
                
            </div>
        </section>
    )
}

export default Why