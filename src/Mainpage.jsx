import React from 'react'
import { Link } from 'react-router-dom';
import f404ss from './page/404/Screenshot_2022-03-13_17-33-26.png';
import jta from './assets/jta.png';
import notebear from './assets/notebear.png';

import './Card.css';

function Mainpage() {
    return (
        <>
            <div className="main-container w-100 height">
                <div id="cardsmain" className="card_div p-tb">
                    <section className="cardsection">
                        <div className="cardrows" pagename="work-page">
                            <div className="cardscolums">
                                <Link to='/404-page' className="sess_card">
                                    <div className="sesscardsimg">
                                        <img className="sess_img" src={f404ss} />
                                    </div>
                                    <div className="sesscardstext">404 Not Found</div>
                                </Link>
                            </div>
                            {/* <div className="cardscolums">
                                <Link to='/tic' className="sess_card">
                                    <div className="sesscardsimg">
                                        <img className="sess_img" src={f404ss} />
                                    </div>
                                    <div className="sesscardstext">My Team Page</div>
                                </Link>
                            </div> */}

                            <div className="cardscolums">
                                <a className="sess_card" href='https://just-text-analyzer.vercel.app/'>
                                    <div className="sesscardsimg">
                                        <img className="sess_img" src={jta} />
                                    </div>
                                    <div className="sesscardstext">Just Text Analyzer</div>
                                </a>
                            </div>

                            <div className="cardscolums">
                                <a className="sess_card" href='https://notebear.vercel.app/'>
                                    <div className="sesscardsimg">
                                        <img className="sess_img" src={notebear} />
                                    </div>
                                    <div className="sesscardstext">NoteBear</div>
                                </a>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Mainpage