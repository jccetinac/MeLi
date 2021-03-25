import React from 'react';

export const BreadCrumbs = (categories) => {
    if(categories !== null){
    return (<div className="badge  mb-3 paragraph"  > { categories.categories.map(cat => (<span key={cat} > | { cat } </span>))} </div>)
    }
    else {
        return null
    }
}