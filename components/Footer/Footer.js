import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import FooterStyles from './Footer.module.css'
import logoWhite from '../../public/assets/images/logoWhite.svg'

const Footer = () => {
    return (
        <footer className='bg-black rounded-tl-[42px] rounded-tr-[42px] py-10'>
            <div className='mx-auto w-[85%] text-white flex justify-between'>
                <div>
                    <Image src={logoWhite} alt="logoWhite" />
                </div>
                <div>
                    <p>&copy; &nbsp; created by &nbsp;
                        <Link href="https://github.com/ZaidKhan144"><a target="_blank" className="font-bold underline">Zaid</a></Link>&nbsp;
                        - devChallenge.io 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer