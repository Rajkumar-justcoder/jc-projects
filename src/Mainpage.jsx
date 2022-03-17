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


// const workshopcard = [
//     {
//         workshopname: 'Git & Github',
//         workshopimg: 'github_session.png',
//         workshoplink: ''
//     }, {
//         workshopname: 'Hacktoberfest',
//         workshopimg: 'hacktoberfest.png',
//         workshoplink: ''
//     }, {
//         workshopname: 'Bug Bounty KickStart',
//         workshopimg: 'web_security_bb.png',
//         workshoplink: ''
//     }, {
//         workshopname: 'Crypto and Blockchain',
//         workshopimg: 'Binance_BUIDLer_Program_3.png',
//         workshoplink: ''
//     },
// ];

// var workRow = document.querySelectorAll('.workrow')[0];
// const mainwork = workRow.attributes.pagename.value;
// for (let i = 0; i < workshopcard.length; i++) {
//     let work = document.createElement('div');
//     work.className = 'workcolums';
//     let imgurl;
//     if (mainwork == 'work-index') {
//         imgurl = 'workshop/images/' + workshopcard[i].workshopimg;
//         work.innerHTML = '<a class="sess_card"><div class="sesscardstext">' + workshopcard[i].workshopname + '</div><div class="sesscardsimg"><img class="sess_img" src="' + imgurl + '" alt=""></div></a>';
//     }
//     else {

//         imgurl = 'images/' + workshopcard[i].workshopimg;
//         work.innerHTML = '<a class="sess_card"><div class="sesscardstext">' + workshopcard[i].workshopname + '</div><div class="sesscardsimg"><img class="sess_img" src="' + imgurl + '" alt=""></div></a>';
//     }
//     workRow.append(work);
// }