import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DiscoverStyles from './Discover.module.css'

import bengal from '../../public/assets/images/bengal.jpg'
import selkirk from '../../public/assets/images/selkirk.jpg'
import norwegian from '../../public/assets/images/norwegian.jpg'
import savannah from '../../public/assets/images/savannah.jpg'

const discoverCatData = [
    {
        img: bengal,
        name: 'Bengal',
        link: "/cats/beng",
    },
    {
        img: savannah,
        name: 'Savannah',
        link: "/cats/sava",
    },
    {
        img: norwegian,
        name: 'Norwegian Forest Cat',
        link: "/cats/norw",
    },
    {
        img: selkirk,
        name: 'Selkirk Rex',
        link: "/cats/srex",
    }
]

const Discover = () => {

    /* Had to make a custom component becaause nextjs doesn't allow
    wrapping Image component in Link component directly */
    const ImageLink = React.forwardRef((props, ref) => {

        let discoverCats = discoverCatData.map((item, index) => {
            return (
              <Link key={index} href={item.link} passHref>
                <a ref={ref} {...props}>
                  <Image src={item.img} alt={item.name} className="rounded-3xl" width={297} height={250} />
                  <p className='mt-3 text-lg font-semibold leading-[21.94px]'>{item.name}</p>
                </a>
              </Link>
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
                <Link href='/cats'>
                    <a className="text-brownText uppercase flex justify-between items-center" >See More <FontAwesomeIcon className='w-8 pl-4' icon={faArrowRight} /> </a>
                </Link>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <ImageLink />
            </div>
        </div>
      </section>
    )
}

export default Discover
