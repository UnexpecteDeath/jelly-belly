import Rewiew from '../review'
import styles from './index.module.css'
import starRate from '../../images/star.svg'
import noRate from "../../images/notStar.svg"
import { FormEvent, useState } from 'react'
import { ReviewType } from '../../types'

interface ReviewActionState {
    data: ReviewType,
    error: string | null,
    status: string
}


export default function ReviewForm() {

    const [reviewState, setReviewState] = useState<ReviewActionState>({
        data: {
            reviewId: Date.now(),
            from: "",
            description: "",
            rating: 5
        },
        error: null,
        status: ''
    });

    async function sendReview(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!reviewState.data.from || !reviewState.data.description || !reviewState.data.rating) {
            setReviewState({...reviewState, error: "Enter name and review!!"});
            return;
        }
        try {
            const res = await fetch(`https://47e6fb67e2581e01.mokky.dev/rewiews`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(reviewState.data),
            })
            if(!res.ok) {
                throw new Error(`Server response failed`)
            }
            setReviewState({data: {reviewId: Date.now(), from: "",  description: "", rating: 5}, error: null, status: 'Thanks for feedback!'})
            const data = await res.json();
            return { data: data, error: null }
        } catch(e) {
            setReviewState({ ...reviewState, error: (e as Error).message });
        }
    }


    return (
            <>
            <h1>{reviewState.status ? `${reviewState.status}` : `Leave feedback...`}</h1>
                <section className={ styles.formRewiewSection }>
                    <div className={ styles.reviewInfo }>
                        <h2>Here you can leave a review of Beans</h2>
                        <Rewiew review={reviewState.data}/>
                    </div>
                    <form className={ styles.formReview } onSubmit={(e)=>sendReview(e)}>
                        <h2>{reviewState.error ? `${reviewState.error}` : `Write what you think`}</h2>
                        <label className={styles.labelReview}>
                            Name
                            <input type='text'  placeholder='your name...' name='name' value={reviewState.data.from}
                            onChange={(e)=>setReviewState({...reviewState, data: {...reviewState.data, from: e.target.value}})}/>
                        </label>
                        <div className={styles.rate}>
                        {[1, 2, 3, 4, 5].map((rate) => (
                            <img
                                key={rate}
                                src={reviewState.data.rating >= rate ? starRate : noRate}
                                alt=""
                                onClick={() => setReviewState({ ...reviewState, data: {...reviewState.data, rating: rate }})}
                            />
                        ))}
                        </div>
                        <label className={styles.labelReview}>
                            Rewiew
                            <input type='text'  placeholder='description...' name='description' value={reviewState.data.description}
                            onChange={(e)=>setReviewState({...reviewState, data: {...reviewState.data, description: e.target.value }})}/>
                        </label>
                        <button className={ styles.submitReview } type='submit'>Submit</button>
                    </form>
                </section>
            </>
    )
}