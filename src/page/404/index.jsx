import React from 'react'
import './style.css';
import image from './Scarecrow.png'
function app() {
    return (
        <>
            <div className="maincont">
                <div className='head-main'>
                    <div className='fnf'>404 NOT FOUND</div>
                </div>
                <div className="container d-flex">
                    <div className='d-flex w-100'>
                        <div className='left-side w-100'>
                            <div className='img-sec'>
                                <img className='img' src={image} alt="Scarecrow" />
                            </div>
                        </div>

                        <div className='right-side w-100 d-flex flex-column justify-content-center align-items-start'>
                            <div className='main-div'>

                                <div>I have bad news for you</div>

                            </div>
                            <div className='mid-div'>

                                <div>The page you are looking for might be removed or is temporarily unavailable</div>

                            </div>
                            <div className='btn-div'>

                                <div className='btn-main d-flex flex-column justify-content-center align-items-center'><a href='/'>Back to homepage</a></div>

                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center mt-auto py-3 ">
                    <div className="container">
                        <span className="text-muted">created by <a href="https://github.com/rajkumar-justcoder">Rajkumar Khistariya | JustCoder</a> - <a href="https://devchallenges.io/">devChallenges.io</a> </span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default app