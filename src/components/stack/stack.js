import { useEffect, useRef, useState } from "react";
import styles from "@/components/HomepageSearch/homepagesearch.module.css"
import imageone from "@/public/images/homepagesearch/1.png"
import imagetwo from "@/public/images/homepagesearch/2.png"
import imagethree from "@/public/images/homepagesearch/3.png"
import imagefour from "@/public/images/homepagesearch/4.png"
import imagefive from "@/public/images/homepagesearch/5.png"
import imagesix from "@/public/images/homepagesearch/6.png"


const Stack = () => {
    const imagebg = useRef()
    const changetxt = useRef()
    const placeholdertext = ['Kazo , Only , Forever 21', 'Ajio , Myntra , Tata Cliq', 'Kurtas , Saree , Lehengas', 'Lipstick , Sunscreen , Brushes & Tools', 'Tops , Jeans , Jumpsuits , Jackets', 'https://www.ajio.com/avaasa-mix-n-match-button-down-a-line-kurta-with-woven-motifs/p/441145966_mustard']
    const changetext = [['Find', 'Best Options'], ['Search', 'Stores'], ['Explore', 'Indian Wear'], ['Shop', 'Beauty'], ['Search', 'Western Wear'], ['Search', 'URL']]
    const images = [imageone, imagetwo, imagethree, imagefour, imagefive, imagesix]
    const colors = ['#F6CECF', '#B2E3DD', '#EEBEE4', '#F7C0DF', '#D5BBE2', '#C3C5EC']
    const textcolor = ['#F6627B', '#15B9B6', '#E81DD9', '#FF65C1', '#9E58D2', '#7F84E8']
    const [image, setimage] = useState(imageone)
    const [textone, settextone] = useState(changetext[0][0])
    const [texttwo, settexttwo] = useState(changetext[0][1])
    const [inputplaceholder, setinputplaceholder] = useState(placeholdertext[0])
    const [searchvalue, setsearchvalue] = useState('')
    const [modelOpen, setModalOpen] = useState(false)
    const [fade, setfade] = useState(false)

    // useEffect(() => {

    //     setTimeout(() => {
    //         const stringarr = titles[0].split('')

    //         let placeholder = ''
    //         for (let i = 0; i < stringarr.length; i++) {
    //             setTimeout(() => {
    //                 placeholder = placeholder + stringarr[i]
    //                 setsearchplaceholder(placeholder)

    //             }, 200 * i);
    //         }
    //     }, 0); //Set this for first delay on writing text to appear
    // }, [])

    useEffect(() => {
        const finalindex = images.length - 1
        const currentimageindex = images.findIndex(item => item === image)

        setTimeout(() => {
            setfade(true)
        }, 4000);

        setTimeout(() => {
            if (finalindex === currentimageindex) {
                setinputplaceholder(placeholdertext[0])
                setimage(images[0])
                settextone(changetext[0][0])
                settexttwo(changetext[0][1])
                imagebg.current ? imagebg.current.style.backgroundColor = colors[0] : null
                changetxt.current ? changetxt.current.style.color = textcolor[0] : null
                return
            }
            else {
                setinputplaceholder(placeholdertext[currentimageindex + 1])
                setimage(images[currentimageindex + 1])
                settextone(changetext[currentimageindex + 1][0])
                settexttwo(changetext[currentimageindex + 1][1])
                imagebg.current ? imagebg.current.style.backgroundColor = colors[currentimageindex + 1] : null
                changetxt.current ? changetxt.current.style.color = textcolor[currentimageindex + 1] : null
            }
        }, 5000);

        setTimeout(() => {
            setfade(false)
        }, 6000);



    }, [image])

    // useEffect(() => {
    //     titles.map((item, index) => {
    //         if (item === searchplaceholder) {
    //             if (index + 1 === titles.length) {
    //                 setTimeout(() => {
    //                     const stringarr = titles[0].split('')

    //                     let placeholder = ''
    //                     for (let i = 0; i < stringarr.length; i++) {
    //                         setTimeout(() => {
    //                             placeholder = placeholder + stringarr[i]
    //                             setsearchplaceholder(placeholder)
    //                             setinputplaceholder(examples[0])

    //                         }, 100 * i);
    //                     }


    //                 }, 3000);
    //                 return
    //             }
    //             setTimeout(() => {

    //                 const stringarr = titles[index + 1].split('')

    //                 let placeholder = ''
    //                 for (let i = 0; i < stringarr.length; i++) {
    //                     setTimeout(() => {
    //                         placeholder = placeholder + stringarr[i]
    //                         setsearchplaceholder(placeholder)
    //                     }, 100 * i);
    //                 }

    //                 setinputplaceholder(examples[0])
    //                 setinputplaceholder(examples[index + 1])


    //             }, 3000);
    //         }
    //     })
    // }, [searchplaceholder])

    return (
        <>
            <div className={styles.homesearchparent}>
                <div className={styles.homesearch_main}>
                    <div className={styles.homesearchinputcontainter}>
                        <div ref={changetxt} className={styles.changetext}>
                            <p className={`${styles.innertext} ${fade ? styles.fadedownup : ''}`}>{`${textone} ${texttwo}`}</p>
                        </div>
                        <div className={styles.bannermessage}>
                            <div className={styles.bannermessage_one}>Discover More & Spend Less</div>
                            <div className={styles.bannermessage_two}>Find Prices and Sizes from 100+ Stores</div>
                        </div>
                        <input className={styles.homesearchinput}
                            value={searchvalue}
                            onChange={e => setsearchvalue(e.target.value)}
                            type="text"
                            placeholder={`e.g. ${inputplaceholder}`}
                            onKeyDown={e => { handleonsearch(e) }}
                        />
                    </div>
                    <div className={styles.bannerimage_holder}>
                        <img className={`${styles.bannerimage} ${fade ? styles.fadedownup : ''}`} src={image} alt="banner image" />
                        <div ref={imagebg} className={styles.image_background}></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Stack;