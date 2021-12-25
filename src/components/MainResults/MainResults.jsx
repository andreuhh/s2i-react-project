import React from 'react'
import Meal from '../Meal/Meal'

export default function MainResults({ mainResults }) {

    return (
        <main>
            <section className='contResults'>
                {mainResults.map((res) => {
                    return (
                        <Meal key={res.id} meal={res} />
                    )
                })}
            </section>
        </main>
    )
}
