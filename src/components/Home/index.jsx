import React from 'react'
import './home.css'
import logo1 from '../../../src/img/logo1.png'
import star from '../../../src/img/Star.png'
import play from '../../../src/img/play.png'
import left from '../../../src/img/leftimg.png'
import right from '../../../src/img/rightimg.png'

function Home() {
    const logo1png = <img src={logo1} className='logosize' />
    const playpng = <img src={play} className='playsize' />
    const starpng = <img src={star} className='starsize' />
    const leftimg = <img src={left} className='cardimgg' />
    const rightimg = <img src={right} className='cardimgg' />

    return (
        <>
            <div className="homesection">

                <div className="detailsSection">
                    <span className='spanHeading'>CodeBEE - Robotic Course for Kids</span>
                    <h6 className='detaildsHeading'>
                        Where Learning Meets Fun And Innovation
                    </h6>
                    <span className='subheading'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta non ea nisi perspiciatis molestias expedita.
                    </span>
                    <div className="buttonSection">
                        <button className='exploreButton'>Explore the Courses</button>
                        <span className='demospan'>Try Demo</span>
                    </div>
                    <div className="trustedcompaniesSeciton">
                        <h5 className='testheading'>
                            Trusted by several unicorn companies
                        </h5>
                        <div className="conpanisesLogo">
                            {logo1png}
                            {logo1png}
                            {logo1png}
                        </div>
                    </div>

                </div>
                <div className="cardsSection">
                    <div className="leftpane">
                        <div className="how">
                            {playpng}
                            <h5>
                                How it Works?
                            </h5>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing.</span>
                        </div>
                        <div className="cardimg">
                            {leftimg}
                        </div>
                        <div className="totalusers">
                            <span>30K +</span>
                            <h5>Happy Students</h5>
                        </div>

                    </div>
                    <div className="rightpane">
                        <div className="ratingcard">
                            <span>4.8 {starpng} </span>
                            <h5>High Rated</h5>
                        </div>
                        <div className="cardimg">
                            {rightimg}
                        </div>
                        <div className="languagecard">
                            <h5>Language :</h5>
                            <span className="langTitle">
                                English
                            </span>
                            <span className="langTitle">
                                German
                            </span>
                            <span className="langTitle">
                                Spanish
                            </span>
                            <button className='langBUtton'>
                                30+
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home