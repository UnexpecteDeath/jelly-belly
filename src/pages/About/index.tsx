import styles from './index.module.css'
import funFacts from './facts.json'
import flavors  from './Flavors.json'
import Reviews from '../../components/reviews'
import ReviewForm from '../../components/reviewForm'


export default function About() {



    return (
        <>
        <section className={ styles.section }>
            <h1>Jelly Belly: The Bean That Makes You Smile</h1>
            <p>Jelly Belly is a global candy brand known for its unique, delicious, and exciting flavors. Get ready to taste the rainbow!</p>
        </section>
        <section className={ styles.section2 }>
            <h1>100+ Delicious Flavors</h1>
            <div className={ styles.container }>
                {flavors.map((flav) => {
                    return (
                <div key={`flavorkey=${flav.id}`}>
                    <h3>{flav.name}</h3>
                    <p>{flav.description}</p>
                </div>
                    )
                })}
            </div>
        </section>
        <section className={ styles.section3 }>
            <h1> Fun Facts and Trivia</h1>
            <div className={ styles.contFacts }>
                {funFacts.map((fact) => {
                    return (
                    <div className={styles.facts} key={`funFactkey=${fact.id}`}>
                        <h3>Jelly Belly</h3>
                        <p>The iconic Jelly Belly brand was originally known as "Goelitz Confectionery Company" before changing its name in 1976.</p>
                    </div>)
                })}
            </div>
        </section>
        <Reviews />
        <ReviewForm />
        </>
    )
}