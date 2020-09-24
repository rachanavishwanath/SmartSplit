import React from 'react';

const HomePage = () => {
    return (  
        <>
            <div className="home-page">
                <img src={window.splash} alt="splash"/>
            </div>
            <p className="app-line">Share expenses with anyone hassle free.</p>
            <p className="app-line2">Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
            <p className="app-line3">Free for iPhone,Android, and web.</p>  
        </>
    )
}

export default HomePage;