import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GetToKnowStyles from './GetToKnow.module.css'
import heroImageOrig from '../../public/assets/images/HeroImagelg.png'
import logoWhite from '../../public/assets/images/logoWhite.svg'
import searchIcon from '../../public/assets/images/search.svg'
import heroImage from '../../public/assets/images/heroImageCrop.png'
import AutoSuggest from '../AutoSuggest'

const GetToKnow = ({ catsData }) => {

  const [ breedData, setBreedData ] = useState([])
  const [ searchInput, setSearchInput ] = useState('');
  const router = useRouter();

  useState(() => {
    // sets cats data (id, name) into breed data
    setBreedData(
      catsData.map((cat) => {
        return {
          id: cat.id,
          name: cat.name,
        }
      })
    )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    // Checking the typed breed matches the breed data
    const selectedCat = breedData.find((cat) =>
      cat.name.toLowerCase().includes(searchInput.toLowerCase())
    )

    if(selectedCat) {
      router.push(`/cats/${selectedCat.id}`);
    }
  }

  return (
    <section className='w-full bg-black rounded-tl-[42px] rounded-tr-[42px]'>
      <div className="flex mx-auto justify-between w-[85%] items-center font-Montserrat">
        <div>
          <Image
            src={logoWhite}
            alt="logoWhite"
            width={300}
            height={100}
          />
          <p className='max-w-[80%] text-white text-2xl'>Get to know more about your cat breed</p>
          <form className='flex relative mt-10' onSubmit={handleSubmit}>
            {/* Passing breed data and input to AutoSuggest */}
            <AutoSuggest
              breedData={breedData}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
            <button
              className='cursor-pointer absolute right-7 top-6 z-10'
              type='submit'>
                <Image
                  src={searchIcon}
                  alt="searchIcon"
                  width={22}
                  height={22}
                />
              </button>
          </form>
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
