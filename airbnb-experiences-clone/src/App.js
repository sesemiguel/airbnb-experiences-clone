import React from 'react';
import ExperienceCard from './components/card/ExperienceCard';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import HeroText from './components/HeroText';
import experiences from './experiences';

function App() {

    const experienceCards = experiences.map(experienceCard => 
        <ExperienceCard 
            key={experienceCard.id}
            experienceCard={experienceCard}
        />
    )

    return(
        <>
            <Header />
            <HeroImage />
            <HeroText />
            <>
                {experienceCards}
            </>
            <Footer />
        </>
    );
}

export default App;