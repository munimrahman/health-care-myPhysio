import React from 'react';
import AdvantagesAndAsk from '../AdvantagesAndAsk/AdvantagesAndAsk';
import ClientReview from '../ClientReview/ClientReview';
import HeroSection from '../HeroSection/HeroSection';
import HomeContactInfo from '../HomeContactInfo/HomeContactInfo';
import HomeServices from '../HomeServices/HomeServices';
import LatestNews from '../LatestNews/LatestNews';
import MeetTeam from '../MeetTeam/MeetTeam';
import NewsLetter from '../NewsLetter/NewsLetter';
import ShortStory from '../ShortStory/ShortStory';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <HomeContactInfo></HomeContactInfo>
            <HomeServices></HomeServices>
            <ShortStory></ShortStory>
            <AdvantagesAndAsk></AdvantagesAndAsk>
            <ClientReview></ClientReview>
            <MeetTeam></MeetTeam>
            <NewsLetter></NewsLetter>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;