import style from '@/app/style/common.module.css';
import Image from 'next/image';
import Link from 'next/link';
const Moviecard = (curElem) => {
    const {id,type,title , synopsis} = curElem.jawSummary;
  return (
    <>
    <div className={style.card}>
        <div className={style.card_image}>
          <Image src={curElem.jawSummary.backgroundImage.url} alt="images" width={260} height={200}/>
        </div>
        <div className={style.card_data}>
            <h2>{title.substring(0,18)}</h2>
            <p>{`${synopsis.substring(0,66)} ...`}</p>
            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
        </div>
    </div>
      
    </>
  )
}

export default Moviecard
