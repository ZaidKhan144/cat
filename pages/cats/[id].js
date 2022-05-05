import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import CatStatusBar from '../../components/CatStatusBar/CatStatusBar';

const Cat = ({ data }) => {
  // accessing the first breed data
  const [cat] = data[0].breeds;

  console.log ('Data', data)

  const images = data.map((imgStuff) => {
    return { url: imgStuff.url, width: imgStuff.width, height: imgStuff.height }
  })

  return (
    <div>
      <Head><title>{cat.name} | Cat Wiki</title></Head>
      <section className='w-full'>
        <div className="flex mx-auto w-[85%] font-Montserrat">
          <div>
            <Image
              src={images[0].url}
              alt={cat.name}
              width={371}
              height={371}
              className="rounded-3xl"
            />
          </div>
          <div className='pl-28'>
            <h3 className='text-4xl font-semibold mb-6'>{cat.name}</h3>
            <p className='mb-8 max-w-2xl'>{cat.description}</p>
            <p className='mb-8'><strong>Temperament: </strong> {cat.temperament}</p>
            <p className='mb-8'><strong>Origin: </strong> {cat.origin}</p>
            <p className='mb-8'><strong>Life Span: </strong>{cat.life_span} years</p>
            <div>
              <CatStatusBar title="Adaptability" level={cat.adaptability} />
              <CatStatusBar title="Affection Level" level={cat.affection_level} />
              <CatStatusBar title="Child Friendly" level={cat.child_friendly} />
              <CatStatusBar title="Grooming" level={cat.grooming} />
              <CatStatusBar title="Intelligence" level={cat.intelligence} />
              <CatStatusBar title="Health issues" level={cat.health_issues} />
              <CatStatusBar title="Social needs" level={cat.social_needs} />
              <CatStatusBar title="Stranger friendly" level={cat.stranger_friendly} />
            </div>
          </div>
        </div>
        <div className='pt-20 pb-44'>
          <h3 className='text-4xl mb-10'>Other photos</h3>
          <div className=''>
            <div className='flex flex-wrap gap-11'>
              {
                images.map((img, index) => {
                  if(index === 0) return;

                  return (
                    <div key={index}>
                      <Image
                        className='rounded-3xl'
                        src={img.url}
                        alt={cat.name}
                        width={375}
                        height={375}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cat

// On the cat id we got, we are searching images of that cat. And having a limit of 9

// getStaticProps returns necessary data for the cats with id
export async function getStaticProps ({ params }) {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${params.id}&limit=9`);

  const data = await response.json();

  return {
    props: { data: data }
  }
}

// getStaticPaths returns an array of possible values for id
export async function getStaticPaths () {
  const response = await fetch('https://api.thecatapi.com/v1/breeds?api_key=e3bd9ee7-02be-445a-966e-ad339d3a9ff8')

  const data = await response.json()

  const paths = data.map((cat) => {
    return {
      params: {
        id: cat.id
      }
    };
  })

  return {
    paths,
    fallback: false,
  };
}