import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DiscoverStyles from './Discover.module.css'
import discoverCat from '../../public/assets/images/discoverCat.jpg'

const discoverCatData = [
    {
        img: discoverCat,
        name: 'Bengal',
    },
    {
        img: discoverCat,
        name: 'Savannah',
    },
    {
        img: discoverCat,
        name: 'Norwegian Forest Cat',
    },
    {
        img: discoverCat,
        name: 'Selkirk Rex',
    }
]

const Discover = () => {

    /* Had to make a custom component becaause nextjs doesn't allow
    wrapping Image component in Link component directly */
    const ImageLink = React.forwardRef((props, ref) => {

        let discoverCats = discoverCatData.map((item, index) => {
            return (
                <a key={index} ref={ref} {...props}>
                    <Image src={item.img} alt={item.name} className="rounded-3xl" width={297} height={250} />
                    <p className='mt-3 text-lg font-semibold leading-[21.94px]'>{item.name}</p>
                </a>
            )
        })
    
        return discoverCats
    })

    return (
        <section className='w-full font-Montserrat bg-cWhite rounded-bl-[42px] rounded-br-[42px]'>
            <div className='mx-auto w-[85%] pt-8 pb-24'>
                <div>
                    <p className='text-lg'>Most Searched Breeds</p>
                    <div className='bg-sBrown rounded-[77px] w-14 h-1 mt-1'></div>
                </div>
                <div className='flex my-9 justify-between items-center'>
                    <h2 className='text-5xl font-bold leading-[58.51px] max-w-md'>66+ Breeds For you to discover</h2>
                    <Link href='/'>
                        <a className="text-brownText uppercase flex justify-between items-center" >See More <FontAwesomeIcon className='w-8 pl-4' icon={faArrowRight} /> </a>
                    </Link>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <Link href="/" passHref>
                        <ImageLink />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Discover