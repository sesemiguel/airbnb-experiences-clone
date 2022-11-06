
import React from 'react';

export default function ExperienceCard(props){
    return (
        <div className='card'>
            <img src={props.mainImg} alt='' className='card-image'/>
            <div className='card-stats'>
                <img src={props.starImg} alt='' className='star-image'/>
                <span>
                    {props.reviewRating} 
                    ({props.numberOfReviews})
                </span>
                <span> . </span>
                <span>{props.location}</span>
            </div>
            <p>{props.experienceTitle}</p>
            <p><span className='bold'>From ${props.cost}</span> / person</p>
        </div>
    )
}