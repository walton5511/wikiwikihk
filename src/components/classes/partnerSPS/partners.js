import React, { useRef, useState } from 'react';
import draggable from '../../draggable';
import psp from './dataPartner.json';

const DraggableCard = ({ children }) => {
    const cardRef = useRef(null);
    draggable(cardRef);

    return (
        <div className="modal" ref={cardRef}>
            {children}
        </div>
    );
};

function App() {
    {/*Complete Table*/ }
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changeContent = (change) => {
        setpopupcontent([change]);
        setpopuptogle(!popuptogle);
    }
    {/*First Buff/Debuff Modal*/ }
    const [popupcontentFB, setpopupcontentFB] = useState([]);
    const [popuptogleFB, setpopuptogleFB] = useState(false);
    const changeContentFB = (firsDebuff) => {
        setpopupcontentFB([firsDebuff]);
        setpopuptogleFB(!popuptogleFB);
    }
    {/*Second Buff/Debuff Modal*/ }
    const [popupcontentSB, setpopupcontentSB] = useState([]);
    const [popuptogleSB, setpopuptogleSB] = useState(false);
    const changeContentSB = (firsDebuff) => {
        setpopupcontentSB([firsDebuff]);
        setpopuptogleSB(!popuptogleSB);
    }
    {/*Second Buff/Debuff1.0 Modal*/ }
    const [popupcontentmini, setpopupcontentmini] = useState([]);
    const [popuptoglemini, setpopuptoglemini] = useState(false);
    const changeContentmini = (firsDebuff) => {
        setpopupcontentmini([firsDebuff]);
        setpopuptoglemini(!popuptoglemini);
    }
    {/*Third Buff/Debuff Modal*/ }
    const [popupcontentRB, setpopupcontentRB] = useState([]);
    const [popuptogleRB, setpopuptogleRB] = useState(false);
    const changeContentRB = (firsDebuff) => {
        setpopupcontentRB([firsDebuff]);
        setpopuptogleRB(!popuptogleRB);
    }
    {/*Third2.0 Buff/Debuff Modal*/ }
    const [popupcontent2RB, setpopupcontent2RB] = useState([]);
    const [popuptogle2RB, setpopuptogle2RB] = useState(false);
    const changeContent2RB = (secDebuff) => {
        setpopupcontent2RB([secDebuff]);
        setpopuptogle2RB(!popuptogle2RB);
    }
    {/*Third3.0 Buff/Debuff Modal*/ }
    const [popupcontent3RB, setpopupcontent3RB] = useState([]);
    const [popuptogle3RB, setpopuptogle3RB] = useState(false);
    const changeContent3RB = (thirdDebuff) => {
        setpopupcontent3RB([thirdDebuff]);
        setpopuptogle3RB(!popuptogle3RB);
    }
    {/*Left Modal*/ }
    const [popupcontentL, setpopupcontentL] = useState([]);
    const [popuptogleL, setpopuptogleL] = useState(false);
    const changeContentL = (s) => {
        setpopupcontentL([s]);
        setpopuptogleL(!popuptogleL);
    }
    {/*Mid Modal*/ }
    const [popupcontentM, setpopupcontentM] = useState([]);
    const [popuptogleM, setpopuptogleM] = useState(false);
    const changeContentM = (s1) => {
        setpopupcontentM([s1]);
        setpopuptogleM(!popuptogleM);
    }
    {/*Right Modal*/ }
    const [popupcontentR, setpopupcontentR] = useState([]);
    const [popuptogleR, setpopuptogleR] = useState(false);
    const changeContentR = (s2) => {
        setpopupcontentR([s2]);
        setpopuptogleR(!popuptogleR);
    }
    {/*Right Modal*/ }
    const [popupcontentex, setpopupcontentex] = useState([]);
    const [popuptogleex, setpopuptogleex] = useState(false);
    const changeContentex = (s2) => {
        setpopupcontentex([s2]);
        setpopuptogleex(!popuptogleex);
    }
    return (
        <div>
            <div className='titleDiv1'><b>Choose a Card</b></div>
            <div className='greyTable1'>
                <div className='tableSkills0'>
                    {
                        psp.map(psp => {
                            return (
                                <div className='button0'>
                                    {
                                        psp.change.map(change => {
                                            return (
                                                <div title={change.cardName} className='pointer' hover={change.cardName} onClick={() => changeContent(change)} ><img src={change.buttonImg} /></div>
                                            )
                                        })}
                                </div>

                            )
                        })
                    }

                </div>
            </div>
            <div>
                {
                    popupcontent.map(pop1 => {
                        return (
                            <div className='contentDiv'>
                                <div className='titleDiv'>{pop1.cardName}</div>
                                <div className='contentDiv greyTable'>
                                    <div className='partnerDesc'>
                                        <div className='lefCube1'>
                                            <p className='requParr'>Information</p>
                                            <p className='inforPara'>Partners</p>
                                            <div className='miniParIcon'>
                                                <a className='imgParIcon'><img src={pop1.partner1} /></a>
                                                <a className='imgParIcon'><img src={pop1.partner2} /></a>
                                                <a className='imgParIcon'><img src={pop1.partner3} /></a>
                                                <a className='imgParIcon'><img src={pop1.partner4} /></a>
                                            </div>
                                            <p className='inforPara2'>Resistances</p>
                                            <div className='resis' >
                                                <p><img className='resis' src='https://cdn.olympusgg.com/images/element_1.png' /> {pop1.fireRes}%</p>
                                                <p><img className='resis' src='https://cdn.olympusgg.com/images/element_2.png' /> {pop1.waterRes}%</p>
                                                <p><img className='resis' src='https://cdn.olympusgg.com/images/element_3.png' /> {pop1.lightRes}%</p>
                                                <p><img className='resis' src='https://cdn.olympusgg.com/images/element_4.png' /> {pop1.shadowRes}%</p>
                                            </div>
                                        </div>
                                        {
                                            pop1.minieffi.map(mini => {
                                                return (
                                                    <button onClick={() => changeContentex(mini)} className='button2p'><img src={mini.img} /></button>
                                                )
                                            })
                                        }
                                        <p className='pspIcon'><img src={pop1.icon} /></p>
                                        <p className='imgPsp'><img src={pop1.psp} /></p>
                                    </div>
                                    {/*Left Modal*/}
                                    <div className='modalleft'>
                                        <div className='skillRank'>
                                            {
                                                [pop1.f.map(f => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#EEE' }} onClick={() => changeContentL(f)}>F</p>
                                                    )
                                                }),
                                                pop1.e.map(e => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#DDE' }} onClick={() => changeContentL(e)}>E</p>
                                                    )
                                                }),
                                                pop1.d.map(d => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0EF' }} onClick={() => changeContentL(d)}>D</p>
                                                    )
                                                }),
                                                pop1.c.map(c => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0EF' }} onClick={() => changeContentL(c)}>C</p>
                                                    )
                                                }),
                                                pop1.b.map(b => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0F9' }} onClick={() => changeContentL(b)}>B</p>
                                                    )
                                                }),
                                                pop1.a.map(a => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0C0' }} onClick={() => changeContentL(a)}>A</p>
                                                    )
                                                }),
                                                pop1.s.map(s => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#FE0' }} onClick={() => changeContentL(s)}>S</p>
                                                    )
                                                })]
                                            }
                                        </div>
                                        <div className='modalNiv'>
                                            {
                                                popupcontentL.map(popL => {
                                                    return (
                                                        <div>
                                                            <div>
                                                                <label class="imgbasePart"><img src={popL.img} /></label>
                                                                <p class="style-title">{popL.title}</p>
                                                                <p style={{ color: '#FA5' }}>{popL.fairyY}</p>
                                                                <p style={{ color: '#f5c478' }}>{popL.times}</p>
                                                                <p style={{ color: '#f5c478' }}>{popL.ranget}</p>
                                                                <p style={{ color: '#FA5' }}>{popL.dmginc} {popL.attackNum} {popL.attackNumL}<br />{popL.eleminc} {popL.attackNum} {popL.attackNumL1}<br />{popL.chance}<br />
                                                                    {
                                                                        popL.firsDebuff.map(firsDebuff => {
                                                                            return (
                                                                                <button onClick={() => changeContentFB(firsDebuff)} className='button2'><img src={popL.miniEffe} /></button>
                                                                            )
                                                                        })}
                                                                    {popL.bcard2} {popL.word} </p>
                                                                <p style={{ color: '#FA5' }}></p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    {/*Mid Modal*/}
                                    <div className='modalMid'>
                                        <div className='skillRank'>
                                            {
                                                [pop1.f1.map(f1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#EEE' }} onClick={() => changeContentM(f1)}>F</p>
                                                    )
                                                }),
                                                pop1.e1.map(e1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#DDE' }} onClick={() => changeContentM(e1)}>E</p>
                                                    )
                                                }),
                                                pop1.d1.map(d1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0EF' }} onClick={() => changeContentM(d1)}>D</p>
                                                    )
                                                }),
                                                pop1.c1.map(c1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0EF' }} onClick={() => changeContentM(c1)}>C</p>
                                                    )
                                                }),
                                                pop1.b1.map(b1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0F9' }} onClick={() => changeContentM(b1)}>B</p>
                                                    )
                                                }),
                                                pop1.a1.map(a1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0C0' }} onClick={() => changeContentM(a1)}>A</p>
                                                    )
                                                }),
                                                pop1.s1.map(s1 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#FE0' }} onClick={() => changeContentM(s1)}>S</p>
                                                    )
                                                })]
                                            }
                                        </div>
                                        <div className='modalNiv'>
                                            {
                                                popupcontentM.map(popM => {
                                                    return (
                                                        <div>
                                                            <div>
                                                                <label class="imgbasePart"><img src={popM.img} /></label>
                                                                <p class="style-title">{popM.title}</p>
                                                                <p style={{ color: '#FA5' }}>{popM.fairyY}</p>
                                                                <p style={{ color: '#f5c478' }}>{popM.times}</p>
                                                                <p style={{ color: '#f5c478' }}>{popM.ranget}</p>
                                                                <p style={{ color: '#FA5' }}>{popM.dmginc} {popM.attackNum}<br />{popM.eleminc} {popM.attackNum}<br />{popM.chance}<br />
                                                                    {
                                                                        popM.firsDebuff.map(firsDebuff => {
                                                                            return (
                                                                                <button onClick={() => changeContentSB(firsDebuff)} className='button2'><img src={popM.miniEffe} /></button>
                                                                            )
                                                                        })}
                                                                    {popM.bcard2} {popM.word} </p>
                                                                <p style={{ color: '#FA5' }}></p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                    {/*Right Modal*/}
                                    <div className='modalRight'>
                                        <div className='skillRank'>
                                            {
                                                [pop1.f2.map(f2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#EEE' }} onClick={() => changeContentR(f2)}>F</p>
                                                    )
                                                }),
                                                pop1.e2.map(e2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#DDE' }} onClick={() => changeContentR(e2)}>E</p>
                                                    )
                                                }),
                                                pop1.d2.map(d2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0EF' }} onClick={() => changeContentR(d2)}>D</p>
                                                    )
                                                }),
                                                pop1.c2.map(c2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0EF' }} onClick={() => changeContentR(c2)}>C</p>
                                                    )
                                                }),
                                                pop1.b2.map(b2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0F9' }} onClick={() => changeContentR(b2)}>B</p>
                                                    )
                                                }),
                                                pop1.a2.map(a2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#0C0' }} onClick={() => changeContentR(a2)}>A</p>
                                                    )
                                                }),
                                                pop1.s2.map(s2 => {
                                                    return (
                                                        <p className='skillRank p selected' style={{ color: '#FE0' }} onClick={() => changeContentR(s2)}>S</p>
                                                    )
                                                })]
                                            }
                                        </div>
                                        <div className='modalNiv'>
                                            {
                                                popupcontentR.map(popR => {
                                                    return (
                                                        <div>
                                                            <div>
                                                                <label class="imgbasePart"><img src={popR.img} /></label>
                                                                <p class="style-title">{popR.title}</p>
                                                                <p style={{ color: '#FA5' }}>{popR.fairyY}</p>
                                                                <p style={{ color: '#f5c478' }}>{popR.times}</p>
                                                                <p style={{ color: '#f5c478' }}>{popR.ranget}</p>
                                                                <p style={{ color: '#FA5' }}>{popR.dmginc}
                                                                    {
                                                                        popR.firsDebuff.map(firsDebuff => {
                                                                            return (
                                                                                <button onClick={() => changeContentRB(firsDebuff)} className='button2'><img src={popR.secminiEffe} /></button>
                                                                            )
                                                                        })}
                                                                    {popR.attackNum}{popR.attackNum1} {popR.word}<br />{popR.eleminc} <br />{popR.chance}
                                                                    {
                                                                        popR.secDebuff.map(secDebuff => {
                                                                            return (
                                                                                <button onClick={() => changeContent2RB(secDebuff)} className='button2'><img src={popR.miniEffe} /></button>
                                                                            )
                                                                        })}
                                                                    {popR.bcard2} {popR.word2}<br />{popR.dmginc2}
                                                                    {
                                                                        popR.thirdDebuff.map(thirdDebuff => {
                                                                            return (
                                                                                <button onClick={() => changeContent3RB(thirdDebuff)} className='button2'><img src={popR.miniEffe2} /></button>
                                                                            )
                                                                        })} {popR.bcard3}
                                                                </p>
                                                                <p style={{ color: '#FA5' }}></p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })
                }
                {/*Content of the First Effe*/}
                {popuptogleFB &&
                    <div>
                        {
                            popupcontentFB.map(popFB => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContentFB} className='close'></button>
                                            <label class="imgbase"><img src={popFB.miniEffe} width="30px" height="30px" /></label>
                                            <p class="style-title">{popFB.title} {popFB.word}</p>
                                            <p style={{ color: '#FFF' }}>{popFB.buff}<br />Level {popFB.effiLvL}<br /><a style={{ color: '#f5c478' }}>{popFB.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{popFB.descEf}</p>
                                            <p style={{ color: '#FA5' }}>{popFB.dmginc} {popFB.miniBcard}<br /> {popFB.eleminc} {popFB.miniBcard2}<br />{popFB.BcardBuffExtra}</p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
                {/*Content of the Second Effe*/}
                {popuptogleSB &&
                    <div>
                        {
                            popupcontentSB.map(popSB => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContentSB} className='close'></button>
                                            <label class="imgbase"><img src={popSB.miniEffe} width="30px" height="30px" /></label>
                                            <p class="style-title">{popSB.title} {popSB.word}</p>
                                            <p style={{ color: '#FFF' }}>{popSB.buff}<br />Level {popSB.effiLvL}<br /><a style={{ color: '#f5c478' }}>{popSB.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{popSB.eleminc}</p>
                                            <p style={{ color: '#FA5' }}>{popSB.dmginc}
                                                {
                                                    popSB.effi.map(effi => {
                                                        return (
                                                            <button onClick={() => changeContentmini(effi)} className='button2'><img src={effi.miniEffe} /></button>
                                                        )
                                                    })
                                                }{popSB.cause}
                                            </p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
                {/*Content of the Second 1.0 Effe*/}
                {popuptoglemini &&
                    <div>
                        {
                            popupcontentmini.map(popmini => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContentmini} className='close'></button>
                                            <label class="imgbase"><img src={popmini.miniEffe} width="30px" height="30px" /></label>
                                            <p class="style-title">{popmini.title}</p>
                                            <p style={{ color: '#FFF' }}>{popmini.buff}<br /><a style={{ color: '#f5c478' }}>{popmini.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{popmini.eleminc}</p>
                                            <p style={{ color: '#FA5' }}>{popmini.dmginc}</p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
                {/*Content of the Third Effe*/}
                {popuptogleRB &&
                    <div>
                        {
                            popupcontentRB.map(popRB => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContentRB} className='close'></button>
                                            <label class="imgbase"><img src={popRB.miniEffe} width="30px" height="30px" /></label>
                                            <p class="style-title">{popRB.title} {popRB.word}</p>
                                            <p style={{ color: '#FFF' }}>{popRB.buff}<br />Level {popRB.effiLvL}<br /><a style={{ color: '#f5c478' }}>{popRB.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{popRB.eleminc}</p>
                                            <p style={{ color: '#FA5' }}>{popRB.dmginc} <img className='imgEfeStyle' src={popRB.miniImg} /> {popRB.dmginc2}<br />{popRB.BcardBuffExtra} <img className='imgEfeStyle' src={popRB.miniImg2} /> {popRB.dmginc3}{popRB.extrabcard}</p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
                {/*Content of the Third2.0 Effe*/}
                {popuptogle2RB &&
                    <div>
                        {
                            popupcontent2RB.map(pop2RB => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContent2RB} className='close'></button>
                                            <label class="imgbase"><img src={pop2RB.miniEffe} width="30px" height="30px" /></label>
                                            <p class="style-title">{pop2RB.title} {pop2RB.word2}</p>
                                            <p style={{ color: '#FFF' }}>{pop2RB.buff}<br />Level {pop2RB.effiLvL}<br /><a style={{ color: '#f5c478' }}>{pop2RB.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{pop2RB.eleminc}</p>
                                            <p style={{ color: '#FA5' }}>{pop2RB.dmginc}</p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
                {/*Content of the Third3.0 Effe*/}
                {popuptogle3RB &&
                    <div>
                        {
                            popupcontent3RB.map(pop3RB => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContent3RB} className='close'></button>
                                            <label class="imgbase"><img src={pop3RB.miniEffe} width="30px" height="30px" /></label>
                                            <p class="style-title">{pop3RB.title} {pop3RB.word2}</p>
                                            <p style={{ color: '#FFF' }}>{pop3RB.buff}<br />Level {pop3RB.effiLvL}<br /><a style={{ color: '#f5c478' }}>{pop3RB.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{pop3RB.eleminc}</p>
                                            <p style={{ color: '#FA5' }}>{pop3RB.dmginc}</p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
                {/*Content Minibuff*/}
                {popuptogleex &&
                    <div>
                        {
                            popupcontentex.map(popex => {
                                return (
                                    <div>
                                        <DraggableCard>
                                            <button onClick={changeContentex} className='close'></button>
                                            <label class="imgbase"><img src={popex.img} width="30px" height="30px" /></label>
                                            <p class="style-title">{popex.title}</p>
                                            <p style={{ color: '#FFF' }}>{popex.buff}<br />Level {popex.effiLvL}<br /><a style={{ color: '#f5c478' }}>{popex.duration}</a></p>
                                            <p style={{ color: '#FFF' }}>{popex.eleminc}</p>
                                            <p style={{ color: '#FA5' }}>{popex.dmginc}</p>
                                        </DraggableCard></div>
                                )
                            })}
                    </div>
                }
            </div>
        </div>
    )
}
export default App;