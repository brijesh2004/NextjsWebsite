import React from 'react'
import style from '@/app/style/common.module.css';
import Image from 'next/image';
export default async function page({params}) { 
    const id = params.id; 
        const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e199eb79a5msh863f8d802968f23p113302jsn233aef2f5cce',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
      };
      const res = await fetch(url , options);
      const data = await res.json();

      const main_data = data[0].details;
  
  return (
    <>
     <div className={style.container}>
      <h2 className={style.movie_title}> Netflix\ <span>{main_data.type}</span></h2>
       <div className={style.card_section}>
         <div>
            <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300}/>
         </div>
         <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
         </div>
       </div>

     </div>
    </>
  )
}

// export default page;
