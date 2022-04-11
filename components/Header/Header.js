import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import HeaderStyles from './Header.module.css'
import logo from '../../public/assets/images/logo.svg'

/* Had to make a custom component becaause nextjs doesn't allow
 wrapping Image component in Link component directly */

const ImageLink = React.forwardRef((props, ref) => {
    return (
        <a ref={ref} {...props}>
            <Image 
                src={logo}
                alt="logo"
                width="127"
                height="42"
            /> 
        </a>
    )
}) 

const Header = () => {

    return (
        <header>
            <div className="py-6">
                <Link href="/" passHref>                
                    <ImageLink />
                </Link>
            </div>
            
        </header>
    )
}

export default Header