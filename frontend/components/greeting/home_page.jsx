import React from 'react';

const HomePage = () => {
    return (  
        <>
            <div className="home-page">
                {/* <img src={window.bkg} alt="splash"/> */}
                <section>
                    <p className="app-line">Share expenses with anyone hassle free.</p>
                    <p className="app-line2">Keep track of your shared expenses and balances with housemates, trips, friends, and family.</p>
                </section>
                <section>
                    <img src={window.plates} alt="plates"/>
                </section>
            </div>
        </>
    )
}

export default HomePage;