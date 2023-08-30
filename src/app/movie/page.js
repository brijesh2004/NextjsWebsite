import Link from 'next/link'
import React from 'react'
import Moviecard from '../components/Moviecard';
import style from '@/app/style/common.module.css';


const page = async () => {
  // await new Promise(resolve=> setTimeout(resolve , 2000));
  const url = process.env.RAPID_KEY;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e199eb79a5msh863f8d802968f23p113302jsn233aef2f5cce',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url,options);
const data = await res.json();
// console.log(data);
const main_data = data.titles;
  return (
    <>
      <section className={style.movieSection}>
       <div className={style.container}>
      
      <h1>Series & Movies</h1>
      <div className={style.card_section}>
      {
        main_data.map((curElem)=>{
          return <Moviecard key={curElem.id} {...curElem}/>
        })
      }
      </div>
      </div>
      </section>
    </>
  )
}

export default page
