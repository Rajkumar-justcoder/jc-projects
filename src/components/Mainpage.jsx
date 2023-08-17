import React from 'react'
import { Link } from 'react-router-dom';
import f404ss from '../page/404/Screenshot_2022-03-13_17-33-26.png';
import jta from '../assets/jta.png';
import notebear from '../assets/notebear.png';

import './Card.css';

function Mainpage() {
    return (
        <>
            <div className="main-container w-full h-screen">
                <div id="cardsmain" className="card_div">
                    <section className="cardsection">
                        <div className="cardrows" pagename="work-page">
                            <div className="cardscolums">
                                <Link to='/404-page' className="sess_card">
                                    <div className="sesscardsimg">
                                        <img className="sess_img" alt='404 page' src={f404ss} />
                                    </div>
                                    <div className="sesscardstext">404 Not Found</div>
                                </Link>
                            </div>

                            <div className="cardscolums">
                                <a className="sess_card" href='https://just-text-analyzer.vercel.app/'>
                                    <div className="sesscardsimg">
                                        <img className="sess_img" alt='jta' src={jta} />
                                    </div>
                                    <div className="sesscardstext">Just Text Analyzer</div>
                                </a>
                            </div>

                            <div className="cardscolums">
                                <a className="sess_card" href='https://notebear.vercel.app/'>
                                    <div className="sesscardsimg">
                                        <img className="sess_img" alt='notebear' src={notebear} />
                                    </div>
                                    <div className="sesscardstext">NoteBear (under Devlopment)</div>
                                </a>
                            </div>
                            <div className="cardscolums">
                                <Link to='/login' className="sess_card">
                                    <div className="sesscardsimg">
                                        {/* <img className="sess_img" alt='loginpng' src={login} /> */}
                                    </div>
                                    <div className="sesscardstext">Login Page</div>
                                </Link>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Mainpage