import React from 'react';
import PersonBlock from './PersonBlock';
import twoDigit from '../../commonFunctions/twoDigit';

export default function PersonsSection({ info }) {

    function showPersons(persons){
        if(persons){
            var counter = 1;
            return persons.sort((a, b) => a.order - b.order).map(pers => {
                let num = twoDigit(counter);
                let isLeft = counter % 2 > 0
                counter++;
                return <PersonBlock key={pers._id} number={ num } isLeft={ isLeft } person={ pers } />
            })
        }
    }

    return (
        <section className="about__persons-wrapper">
            { showPersons(info) }
        </section>
    )
}
