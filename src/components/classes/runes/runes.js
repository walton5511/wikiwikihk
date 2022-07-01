import React, { useState, useRef } from 'react';
import rune from './dataRune.json';
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
    const changeContent = (effect) => {
        setpopupcontent([effect]);
        setpopuptogle(!popuptogle);
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
            <div className='titleDivR'><b>Choose Rune Power</b></div>
            <div className='greyTableR'>
                <div className='blackTableR'>
                    <div>
                        {
                            rune.map(rune => {
                                return (
                                    <div className='buttonR'>
                                        {
                                            rune.effect.map(effect => {
                                                return (
                                                    <div title={effect.title} className='pointer' onClick={() => changeContent(effect)} ><img width="33px" src={effect.image} /></div>
                                                )
                                            })}
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
            <div>
            <div>
                {
                    popupcontent.map(pop1 => {
                        return (
                            <div className='modalGenR'>
                                <div className='nivbotTab'>
                                    <div className='sumContR'>
                                        {[
                                            pop1.lvl1.map(lvl1 => {
                                                return (
                                                    <div className='miniSumR miniSum:hover' onClick={() => changeContentS(lvl1)} ><span className='inSum'>Lvl 1</span></div>
                                                )
                                            }),
                                            pop1.lvl2.map(lvl2 => {
                                                return (
                                                    <div className='miniSumR miniSum:hover' onClick={() => changeContentS(lvl2)} ><span className='inSum'>Lvl 2</span></div>
                                                )
                                            }),
                                            pop1.lvl3.map(lvl3 => {
                                                return (
                                                    <div className='miniSumR miniSum:hover' onClick={() => changeContentS(lvl3)} ><span className='inSum'>Lvl 3</span></div>
                                                )
                                            }),
                                            pop1.lvl4.map(lvl4 => {
                                                return (
                                                    <div className='miniSumR miniSum:hover' onClick={() => changeContentS(lvl4)} ><span className='inSum'>Lvl 4</span></div>
                                                )
                                            }),
                                            pop1.lvl5.map(lvl5 => {
                                                return (
                                                    <div className='miniSumR miniSum:hover' onClick={() => changeContentS(lvl5)} ><span className='inSum'>Lvl 5</span></div>
                                                )
                                            }),
                                            pop1.lvl6.map(lvl6 => {
                                                return (
                                                    <div className='miniSumR miniSum:hover' onClick={() => changeContentS(lvl6)} ><span className='inSum'>Lvl 6</span></div>
                                                )
                                            }),
                                        ]}
                                    </div>
                                </div>
                                {
                                    popupcontentS.map(pop2 => {
                                        return (
                                            <div>
                                                <img className='imgbaseR' src={pop2.image} />
                                                <p class="style-titleR">{pop2.title}</p>
                                                <p>{pop2.bufflvl}<a style={{ color: '#f5c478' }}>{pop2.time}</a></p>
                                                <p>{pop2.desc}</p>
                                                <p style={{ color: '#FA5' }}>{pop2.bcard} {
                                                    pop2.minibuff.map(minibuff => {
                                                        return (
                                                            <button className='button2' onClick={() => changeContentMini(minibuff)}><img src={minibuff.img} /></button>
                                                        )
                                                    })} {pop2.bcard2}</p>
                                            </div>
                                        )
                                    })
                                }
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
                                                        </DraggableCard>
                                                    </div>
                                                )
                                            })}
                                    </div>}
                            </div>
                        )
                    })}<i>Select the level to see the values*</i></div>
            </div>
        </div>

    )

}
export default App;