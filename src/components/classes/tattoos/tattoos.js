import React, { useState, useRef } from 'react';
import pat from './tattoos.json';
import draggable from '../../draggable';

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

    {/*Tattoo Table*/ }
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState(false);
    const changeContent = (pattern) => {
        setpopupcontent([pattern]);
        setpopuptogle(!popuptogle);
    }
    {/* Table*/ }
    const [popupcontentT, setpopupcontentT] = useState([]);
    const [popuptogleT, setpopuptogleT] = useState(false);
    const changeContentT = (tatu1) => {
        setpopupcontentT([tatu1]);
        setpopuptogleT(!popuptogleT);
    }
    {/*Suma Table*/ }
    const [popupcontentS, setpopupcontentS] = useState([]);
    const [popuptogleS, setpopuptogleS] = useState(false);
    const changeContentS = (cero) => {
        setpopupcontentS([cero]);
        setpopuptogleS(!popuptogleS);
    }
    {/*Suma Table*/ }
    const [popupcontentMini, setpopupcontentMini] = useState([]);
    const [popuptogleMini, setpopuptogleMini] = useState(false);
    const changeContentMini = (popMin) => {
        setpopupcontentMini([popMin]);
        setpopuptogleMini(!popuptogleMini);
    }
    return (
        <div>
            <div className='titleDivP'><b>Choose a Tattoo Pattern</b></div>
            <div className='greyTableP'>
                <div className='blackTableP'>
                    <div>
                        {
                            pat.map(pat => {
                                return (
                                    <div className='buttonP'>
                                        {
                                            pat.pattern.map(pattern => {
                                                return (
                                                    <div title={pattern.title} className='pointer' onClick={() => changeContent(pattern)} ><img src={pattern.image} /></div>
                                                )
                                            })}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <div>
                {
                    popupcontent.map(pop1 => {
                        return (
                            <div>
                                <div className='titleDivT'><b>Tattoos</b></div>
                                <div className='greyTableT'>
                                    <div className='blackTableT'>
                                        <div >
                                            {
                                                [pop1.tatu1.map(tatu1 => {
                                                    return (
                                                        <a title={tatu1.title} onClick={() => changeContentT(tatu1)} className='buttonT' ><img src={tatu1.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu2.map(tatu2 => {
                                                    return (
                                                        <a title={tatu2.title} onClick={() => changeContentT(tatu2)} className='buttonT'><img src={tatu2.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu3.map(tatu3 => {
                                                    return (
                                                        <a title={tatu3.title} onClick={() => changeContentT(tatu3)} className='buttonT'><img src={tatu3.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu4.map(tatu4 => {
                                                    return (
                                                        <a title={tatu4.title} onClick={() => changeContentT(tatu4)} className='buttonT'><img src={tatu4.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu5.map(tatu5 => {
                                                    return (
                                                        <a title={tatu5.title} onClick={() => changeContentT(tatu5)} className='buttonT'><img src={tatu5.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu6.map(tatu6 => {
                                                    return (
                                                        <a title={tatu6.title} onClick={() => changeContentT(tatu6)} className='buttonT'><img src={tatu6.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu7.map(tatu7 => {
                                                    return (
                                                        <a title={tatu7.title} onClick={() => changeContentT(tatu7)} className='buttonT'><img src={tatu7.image} /></a>
                                                    )
                                                }),
                                                pop1.tatu8.map(tatu8 => {
                                                    return (
                                                        <a title={tatu8.title} onClick={() => changeContentT(tatu8)} className='buttonT'><img src={tatu8.image} /></a>
                                                    )
                                                })
                                                ]
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {
                                        popupcontentT.map(pop1 => {
                                            return (
                                                <div className='nivbotTab'>                                               
                                                    <div className='sumCont'>
                                                        {[
                                                            pop1.cero.map(cero => {
                                                                return (
                                                                    <div className='miniSum miniSum:hover' onClick={() => changeContentS(cero)} ><span className='inSum'>+0</span></div>
                                                                )
                                                            }),
                                                            pop1.mas1.map(mas1 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas1)} ><span className='inSum'>+1</span></div>
                                                                )
                                                            }),
                                                            pop1.mas2.map(mas2 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas2)}><span className='inSum'>+2</span></div>
                                                                )
                                                            }),
                                                            pop1.mas3.map(mas3 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas3)}><span className='inSum'>+3</span></div>
                                                                )
                                                            }),
                                                            pop1.mas4.map(mas4 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas4)}><span className='inSum'>+4</span></div>
                                                                )
                                                            }),
                                                            pop1.mas5.map(mas5 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas5)}><span className='inSum'>+5</span></div>
                                                                )
                                                            }),
                                                            pop1.mas6.map(mas6 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas6)}><span className='inSum'>+6</span></div>
                                                                )
                                                            }),
                                                            pop1.mas7.map(mas7 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas7)}><span className='inSum'>+7</span></div>
                                                                )
                                                            }),
                                                            pop1.mas8.map(mas8 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas8)}><span className='inSum'>+8</span></div>
                                                                )
                                                            }),
                                                            pop1.mas9.map(mas9 => {
                                                                return (
                                                                    <div className='miniSum' onClick={() => changeContentS(mas9)}><span className='inSum'>+9</span></div>
                                                                )
                                                            })
                                                        ]}
                                                    </div>
                                                    <div className='modalGen'>
                                                        <img className='imgbase' src={pop1.image} />
                                                        <p class="style-title">{pop1.title} {
                                                            popupcontentS.map(popS => {
                                                                return (
                                                                    <a style={{ color: '#f5c478' }}>{popS.mas}</a>
                                                                )
                                                            })
                                                        }</p>
                                                        <p>{pop1.buff}<br /><a style={{ color: '#f5c478' }}>{pop1.duration} {
                                                            popupcontentS.map(popS => {
                                                                return (
                                                                    <a style={{ color: '#f5c478' }}>{popS.time}</a>
                                                                )
                                                            })}</a></p>
                                                        <p>{pop1.desc}</p>
                                                        <p style={{ color: '#FA5' }}>{pop1.bcard1} {
                                                            popupcontentS.map(popS => {
                                                                return (
                                                                    <a style={{ color: '#FA5' }}>{popS.value1}</a>
                                                                )
                                                            })}
                                                            <br /><a style={{ color: '#f5c478' }}>{pop1.sideEff}</a>{pop1.bcard2} {
                                                                popupcontentS.map(popS => {
                                                                    return (
                                                                        <a style={{ color: '#FA5' }}>{popS.value2}</a>
                                                                    )
                                                                })} {pop1.bcard3} {
                                                                pop1.minibuff.map(minibuff => {
                                                                    return (
                                                                        <button onClick={() => changeContentMini(minibuff)} className='button2'><img src={minibuff.img} /></button>
                                                                    )
                                                                })
                                                            } {pop1.bcard4} {
                                                                popupcontentS.map(popS => {
                                                                    return (
                                                                        <a style={{ color: '#FA5' }}>{popS.level}</a>
                                                                    )
                                                                })}
                                                        </p>
                                                    </div>
                                                    <i>Select the optimisation to see the values*</i>
                                                    {popuptogleMini &&
                                                        <div>
                                                            {
                                                                popupcontentMini.map(popMin => {
                                                                    return (
                                                                        <div>
                                                                            <DraggableCard>
                                                                                <button onClick={changeContentMini} className='close'></button>
                                                                                <img class="imgbase" src={popMin.img} />
                                                                                <p class="style-title">{popMin.title} {
                                                                                    popupcontentS.map(popS => {
                                                                                        return (
                                                                                            <a style={{ color: '#f5c478' }}>{popS.minilev}</a>
                                                                                        )
                                                                                    })}</p>
                                                                                <p>{popMin.buff}{
                                                                                    popupcontentS.map(popS => {
                                                                                        return (
                                                                                            <a style={{ color: '#fff' }}>{popS.debuff}</a>
                                                                                        )
                                                                                    })}<br /><a style={{ color: '#f5c478' }}>{popMin.duration}</a></p>
                                                                                <p>{popMin.desc}</p>
                                                                                <p style={{ color: '#FA5' }}>{popMin.bcard}</p>
                                                                                <p>{
                                                                                    popupcontentS.map(popS => {
                                                                                        return (
                                                                                            <a style={{ color: '#f5c478' }}>{popS.side}<a style={{ color: '#FA5' }}>{popS.bcard}</a></a>
                                                                                        )
                                                                                    })}</p>
                                                                            </DraggableCard>
                                                                        </div>
                                                                    )
                                                                })}
                                                        </div>}
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>

    )

}
export default App;