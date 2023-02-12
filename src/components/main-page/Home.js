import React from 'react';
import Categories from "./Categories"
import SlideCard from './SlideCard';

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container d_flex">
                    <Categories></Categories>
                    <SlideCard></SlideCard>
                </div>
            </section>
        </>
    );
};

export default Home;