import React, { useMemo } from 'react';
import { HeroCard } from './HeroCard';
import { heroes } from '../../data/heroes';
export const ProductList = ({ publisher }) => {


    return (
        <div className="card-columns animate__animated animate__fadeIn">
           {
               heroes.map( hero => (
                   <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                   
               ))
           } 
        </div>
    )
}
