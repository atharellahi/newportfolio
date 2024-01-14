import { useEffect } from 'react';
import styles from './project.module.css'

const Projects = () => {

    useEffect(() => {
        const projectnodes = [...document.querySelectorAll(`.${styles.project}`)]
        console.log(projectnodes)
        projectnodes.map((node, index) => {
            setTimeout(() => {
                node.style.opacity = '1'
                node.style.top = '0'
            }, 500 * (index + 1));
        })

    }, [])

    const array = '12345678'.split('')
    return (
        <>
            <div className={styles.parent}>
                {array.map((item, index) => {
                    return (
                        <div key={index} className={styles.project}
                            onClick={(e) => { e.stopPropagation() }}
                        >{item}</div>
                    )
                })
                }
            </div >
        </>
    )
}

export default Projects;