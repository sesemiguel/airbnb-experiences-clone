import React from 'react';
import ExperienceCard from './components/card/ExperienceCard';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import HeroText from './components/HeroText';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import star from './images/star.png';

const App = (
    <div>
        <Header />
        <HeroImage />
        <HeroText />
        <ExperienceCard 
            mainImg={img1}
            starImg={star}
            reviewRating={5.0}
            numberOfReviews={57}
            location='PH'
            experienceTitle='Life lessons with Katie Zaferes'
            cost={136}
        />
        <ExperienceCard 
            mainImg={img2}
            starImg={star}
            reviewRating={5.0}
            numberOfReviews={30}
            location='PH'
            experienceTitle='Learn wedding photography'
            cost={125}
        />
        <ExperienceCard 
            mainImg={img3}
            starImg={star}
            reviewRating={5.0}
            numberOfReviews={57}
            location='PH'
            experienceTitle='Life lessons with Katie Zaferes'
            cost={136}
        />
        <Footer />
    </div>
)

export default App;