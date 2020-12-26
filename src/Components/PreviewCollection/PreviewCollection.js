import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem'

export default function PreviewCollection({title,items}) {
    return (
        <div className = 'collection-preview'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <div className = 'preview'>
            {
                items.filter((item,idx)=>idx<4)
                     .map(({id,...otherCollection}) =>(
                    <CollectionItem key = {id}{...otherCollection} />
                ))
            }
            </div>
        </div>
    )
}
