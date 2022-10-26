import React from 'react';
import Image from './Image';
import Location from './Location';
import Price from './Price';
import StarRating from './StarRating';
import Title from './Title';

export default function ExperienceCard(){
    return (
        <div>
            <Image />
            <StarRating />
            <Location />
            <Title />
            <Price />
        </div>
    )
}