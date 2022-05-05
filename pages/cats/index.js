import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


const CatList = ({ catList }) => {

  console.log('Ct=atlist', catList)

  const ImageLink = React.forwardRef((props, ref) => {

    let allCats = catList.map((cat, index) => {
      return (
        <Link key={index} href={`/cats/${cat.id}`} passHref>
          <a ref={ref} {...props}>
            <Image
              src={cat.image && cat.image.url ? cat.image.url : '/assets/images/nopreview.png'}
              alt={cat.name} width={297} height={300} className="rounded-3xl" />
              <p className='mt-3 text-lg font-semibold leading-[21.94px]'>{cat.name}</p>
          </a>
        </Link>
      )
    })

    return allCats
})

  return (
    <div>
      <Head>Full Breed List | Cat Wiki</Head>

      <div className='pt-10 pb-28'>
        <h1 className='text-4xl'>Breed List</h1>
        <div className='bg-sBrown rounded-[77px] w-14 h-1 mt-1 mb-14'></div>
        <div className='flex flex-wrap gap-11'>
          <ImageLink />
        </div>
      </div>
    </div>
  )
}

export default CatList

export async function getStaticProps() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds?api_key=e3bd9ee7-02be-445a-966e-ad339d3a9ff8')

  const data = await response.json()

  return {
    props: { catList: data }
  }
}