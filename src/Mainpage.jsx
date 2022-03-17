import React from 'react'
import Forofor from './components/404/app';
import Team from './components/my team page/Team';
import { Link } from 'react-router-dom';
import f404ss from './components/404/Screenshot_2022-03-13_17-33-26.png'
import './Card.css';

function Mainpage() {
    return (
        <>
            <div className="main-container">
                <div id="cardsmain" class="card_div p-tb">
                    <section class="cardsection">
                        <div class="cardrows" pagename="work-page">
                            <div className="cardscolums">
                                <Link to='/404-page' class="sess_card">
                                    <div class="sesscardsimg">
                                        <img class="sess_img" src={f404ss} />
                                    </div>
                                    <div class="sesscardstext">404 Not Found</div>
                                </Link>
                            </div>
                            {/* <div className="cardscolums">
                                <Link to='/my-team-page' class="sess_card">
                                    <div class="sesscardsimg">
                                        <img class="sess_img" src={f404ss} />
                                    </div>
                                    <div class="sesscardstext">My Team Page</div>
                                </Link>
                            </div> */}

                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default Mainpage