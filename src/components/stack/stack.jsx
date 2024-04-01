import { useEffect, useRef, useState } from "react";
import styles from "./stack.module.css"
import imageone from "/images/stack/file-type-html.902x1024.png"
import imagetwo from "/images/stack/javascript-js.1024x1024.png"
import imagethree from "/images/stack/react.1024x911.png"
import imagefour from "/images/stack/nextjs.1024x1024.png"
import imagefive from "/images/stack/nodejs.1024x627.png"
import imagesix from "/images/stack/express-original.1024x594.png"


const Stack = () => {
    const imagebg = useRef()
    const changetxt = useRef()
    const changetext = [['HTML5'], ['JavaScript'], ['Reactjs'], ['Nextjs'], ['Nodejs'], ['Expressjs']]
    const images = [imageone, imagetwo, imagethree, imagefour, imagefive, imagesix]
    const colors = ['#c76831', '#a59636', '#73a4ac', '#e0e0e0', '#407728', '#e0e0e0']
    const textcolor = ['#F16529', '#F8E018', '#9ee1ec', '#ffffff', '#77AB60', '#ffffff']
    const [image, setimage] = useState(imageone)
    const [textone, settextone] = useState(changetext[0][0])
    const [fade, setfade] = useState(false)

    useEffect(() => {
        const parent = document.querySelector(`.${styles.homesearchparent}`)
        setTimeout(() => {
            parent.style.opacity = '1'
        }, 500);
    }, [])

    useEffect(() => {
        const finalindex = images.length - 1
        const currentimageindex = images.findIndex(item => item === image)

        setTimeout(() => {
            setfade(true)
        }, 4000);

        setTimeout(() => {
            if (finalindex === currentimageindex) {
                setimage(images[0])
                settextone(changetext[0][0])
                imagebg.current ? imagebg.current.style.backgroundColor = colors[0] : null
                changetxt.current ? changetxt.current.style.color = textcolor[0] : null
                return
            }
            else {
                setimage(images[currentimageindex + 1])
                settextone(changetext[currentimageindex + 1][0])
                imagebg.current ? imagebg.current.style.backgroundColor = colors[currentimageindex + 1] : null
                changetxt.current ? changetxt.current.style.color = textcolor[currentimageindex + 1] : null
            }
        }, 5000);

        setTimeout(() => {
            setfade(false)
        }, 6000);



    }, [image])

    return (
        <>
            <div className={styles.homesearchparent}>
                <div className={styles.homesearch_main}>
                    <div className={styles.homesearchinputcontainter}>
                        <div ref={changetxt} className={styles.changetext}>
                            <p className={`${styles.innertext} ${fade ? styles.fadedownup : ''}`}>{`${textone}`}</p>
                        </div>
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