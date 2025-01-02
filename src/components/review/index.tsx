import starRate from '../../images/star.svg'
import noRate from "../../images/notStar.svg"
import styles from './index.module.css'
import { ReviewType } from '../../types'

type Props = {
    review: ReviewType
}


export default function Review({ review }: Props) {

    return (
        <div className={styles.rewiew}>
                <h3>{review.from ? review.from : 'Your Name...'}</h3>
                <div className={styles.rate}>
                {[1, 2, 3, 4, 5].map((rate) => (
                    <img key={rate} src={review.rating >= rate ? starRate : noRate} alt=""/>
                ))}
                </div>
                <p>{review.description ? review.description : 'Write anythink...'}</p>
        </div>
    )
}