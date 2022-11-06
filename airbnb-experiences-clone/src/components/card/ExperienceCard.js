
import React from 'react';

export default function ExperienceCard(props){
    let badgeText;
    
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    else if(props.location === 'Online'){
        badgeText = "ONLINE";
    }
    else {
        badgeText = "";
    }
    return (
        <div className='card'>
            {<div className='card-soldout'>{badgeText}</div>}
            <img src={props.experienceCard.mainImg} alt='' className='card-image'/>
            <div className='card-stats'>
                <img src={props.experienceCard.starImg} alt='' className='star-image'/>
                <span>
                    {props.experienceCard.reviewRating} 
                    ({props.experienceCard.numberOfReviews})
                </span>
                <span> . </span>
                <span>{props.experienceCard.location}</span>
            </div>
            <p>{props.experienceCard.experienceTitle}</p>
            <p><span className='bold'>From ${props.experienceCard.cost}</span> / person</p>
        </div>
    )
}