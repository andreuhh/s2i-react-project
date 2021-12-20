import React from 'react'
import Meal from '../components/Meal'

import './MainResults.scss'

export default function MainResults({ mainResults }) {
    console.log(mainResults);
    return (
        <main>
            <section className='contResults'>
                {mainResults.map((res) => {
                    return <Meal key={res.id} meal={res} />
                })}
            </section>
        </main>
    )
}
