import React from 'react'
import Meal from '../components/Meal'

import './MainResults.scss'

export default function MainResults({ mainResults }) {

    return (
        <main>
            <h2>Results</h2>
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