// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import draggable from "../../draggable";
import psp from "./dataPartner.json";

const DraggableCard = ({ children }) => {
  const cardRef = useRef(null);

  draggable(cardRef);

  return (
    <div className="modal" ref={cardRef}>
      {children}
    </div>
  );
};

// To store the rank of each spell card to dynamically change the render when someone change the active psp
function getItemsFromSessionStorage() {
  return JSON.parse(sessionStorage.getItem("spellRank"));
}

function setItemsInSessionStorage(data) {
  sessionStorage.setItem("spellRank", JSON.stringify(data));
  return JSON.parse(sessionStorage.getItem("spellRank"));
}

export default function App() {
  const [dataPartner, setDataPartner] = useState({});
  const [toggleBox, setToggleBox] = useState(false);

  const setData = (data) => {
    setDataPartner(data);
    setToggleBox(true);
  };

  return (
    <>
      <PartnerPicker setData={setData} />
      <PartnerBox dataPartner={dataPartner} toggleBox={toggleBox} />
    </>
  );
}
const PartnerPicker = ({ setData }) => {
  return (
    <>
      <h3 className="titleDiv1">Choose a Card</h3>
      <div className="greyTable1">
        <div className="tableSkills0">
          {psp.map((partner) => {
            return (
              <div className="button0" key={psp.indexOf(partner)}>
                <div
                  key={psp.indexOf(partner)}
                  title={partner.cardName}
                  className="pointer"
                  onClick={() => setData(partner)}
                >
                  <img src={partner.buttonImg} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const PartnerBox = ({ dataPartner, toggleBox }) => {
  const [modal, setModal] = useState(false);
  const [spellEffect, setSpellEffect] = useState({});
  if (!dataPartner.cardName && !toggleBox) return null;
  return (
    <>
      <div className="contentDiv">
        <div className="titleDiv">{dataPartner.cardName}</div>
        <div className="contentDiv greyTable">
          <LeftPartnerBox dataPartner={dataPartner} />
          <RightPartnerBox
            dataPartner={dataPartner}
            setSpellEffect={setSpellEffect}
            modal={modal}
            setModal={setModal}
          />
        </div>
      </div>
      <ModalSpellEffect
        spellEffect={spellEffect}
        modal={modal}
        setModal={setModal}
      />
    </>
  );
};

const LeftPartnerBox = ({ dataPartner }) => {
  const [modal, setModal] = useState(true);
  return (
    <div className="partnerDesc">
      <div className="lefCube1">
        <p className="requParr">Information</p>
        <p className="inforPara">Partners</p>
        <div className="miniParIcon">
          <img src={dataPartner.partner1} className="imgParIcon" />
          <img src={dataPartner.partner2} className="imgParIcon" />
          <img src={dataPartner.partner3} className="imgParIcon" />
          <img src={dataPartner.partner4} className="imgParIcon" />
        </div>
        <p className="inforPara2">Resistances</p>
        <div className="resis">
          <div>
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_1.png"
            />{" "}
            {dataPartner.fireRes}%
          </div>
          <div>
            {dataPartner.lightRes}%{" "}
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_3.png"
            />
          </div>
          <div>
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_2.png"
            />{" "}
            {dataPartner.waterRes}%
          </div>
          <div>
            {dataPartner.shadowRes}%{" "}
            <img
              className="resisImg"
              src="https://cdn.olympusgg.com/images/element_4.png"
            />
          </div>
        </div>
      </div>
      <div className="BottomLeftBox">
        <div className="BLBoxTop">
          {(!dataPartner.minieffi || dataPartner.minieffi.length > 0) && (
            <img
              onClick={() => setModal(true)}
              className="button2p"
              src={dataPartner.minieffi[0].img}
            />
          )}
          <img className="pspIcon" src={dataPartner.icon} />
        </div>
        <div className="BLBoxBottom">
          <img className="imgPsp" src={dataPartner.psp} />
        </div>
      </div>
      {(!dataPartner.minieffi || dataPartner.minieffi.length > 0) && (
        <ModalBuffEffect
          spellEffect={dataPartner.minieffi[0]}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};

const RightPartnerBox = ({ dataPartner, setSpellEffect, setModal, modal }) => {
  return (
    <>
      <div className="modalleft">
        <Skills
          dataPartner={dataPartner}
          skillIndex={0}
          setSpellEffect={setSpellEffect}
          setModal={setModal}
          modal={modal}
        />
      </div>
      <div className="modalMid">
        <Skills
          dataPartner={dataPartner}
          skillIndex={1}
          setSpellEffect={setSpellEffect}
          setModal={setModal}
          modal={modal}
        />
      </div>{" "}
      <div className="modalRight">
        <Skills
          dataPartner={dataPartner}
          skillIndex={2}
          setSpellEffect={setSpellEffect}
          setModal={setModal}
          modal={modal}
        />
      </div>
    </>
  );
};

const Skills = ({
  dataPartner,
  skillIndex,
  setSpellEffect,
  setModal,
  modal,
}) => {
  const skillRanks = [
    { rank: "f", color: "#EEE" },
    { rank: "e", color: "#DDE" },
    { rank: "d", color: "#0EF" },
    { rank: "c", color: "#0EF" },
    { rank: "b", color: "#0F9" },
    { rank: "a", color: "#0C0" },
    { rank: "s", color: "#FE0" },
  ];
  const [rIndex, setRIndex] = useState(6);

  const changeSkill = (index, rankIndex) => {
    let temp = getItemsFromSessionStorage();
    temp = temp != null ? temp : [6, 6, 6];
    temp[index] = rankIndex;
    setRIndex(rankIndex);
    sessionStorage.clear();
    setItemsInSessionStorage(temp);
  };
  return (
    <>
      <div className="skillRank">
        {skillRanks.map((skillRank, index) => {
          return (
            <p
              key={index}
              className="skillRank p selected"
              style={{ color: skillRank.color, textTransform: "uppercase" }}
              onClick={() => changeSkill(skillIndex, index)}
            >
              {skillRank.rank}
            </p>
          );
        })}
      </div>
      <Skill
        dataPartner={dataPartner}
        rankIndex={rIndex}
        index={skillIndex}
        setSpellEffect={setSpellEffect}
        setModal={setModal}
        modal={modal}
      />
    </>
  );
};

const Skill = ({
  dataPartner,
  rankIndex,
  index,
  setSpellEffect,
  setModal,
  modal,
}) => {
  const dataSkills = [
    [
      dataPartner.f,
      dataPartner.e,
      dataPartner.d,
      dataPartner.c,
      dataPartner.b,
      dataPartner.a,
      dataPartner.s,
    ],
    [
      dataPartner.f1,
      dataPartner.e1,
      dataPartner.d1,
      dataPartner.c1,
      dataPartner.b1,
      dataPartner.a1,
      dataPartner.s1,
    ],
    [
      dataPartner.f2,
      dataPartner.e2,
      dataPartner.d2,
      dataPartner.c2,
      dataPartner.b2,
      dataPartner.a2,
      dataPartner.s2,
    ],
  ];
  const skill = dataSkills[index][rankIndex][0];
  useEffect(() => {
    setSpellEffect(skill.firsDebuff[0]);
  }, [skill]);

  const renderSpellEffect = (skills) => {
    setModal(!modal);
    setSpellEffect(skills);
  }

  return (
    <>
      <div className="modalNiv">
        <div>
          <div>
            <label className="imgbasePart">
              <img src={skill.img} />
            </label>
            <p className="style-title">{skill.title}</p>
            <p style={{ color: "#FA5" }}>{skill.fairyY}</p>
            <p style={{ color: "#f5c478" }}>{skill.times}</p>
            <p style={{ color: "#f5c478" }}>{skill.ranget}</p>
            <p style={{ color: "#FA5", margin: 0 }}>{skill.dmginc}</p>
            {index == 2 && skill.firsDebuff && skill.firsDebuff.length > 0 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#FA5",
                  }}
                >
                  <button
                    onClick={() => renderSpellEffect(skill.firsDebuff[0])}
                    className="button2"
                    style={{ color: "#FA5", margin: 0 }}
                  >
                    <img src={skill.firsDebuff[0].miniEffe} />
                  </button>
                  {skill.firsDebuff[0].title} {skill.firsDebuff[0].word}
                </div>
              </>
            )}
            {index != 2 && (
              <>
                <p style={{ color: "#FA5", margin: 0 }}>{skill.attackNum}</p>
              </>
            )}
            <p style={{ color: "#FA5", margin: 0 }}>{skill.eleminc}</p>
            {(!skill.secminiEffe || skill.secminiEffe.length == 0) && (
              <>
                <p style={{ color: "#FA5", margin: 0 }}>{skill.attackNum}</p>
              </>
            )}
            <p style={{ color: "#FA5", margin: 0 }}>{skill.chance}</p>
            {index != 2 && skill.firsDebuff && skill.firsDebuff.length > 0 && (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "#FA5",
                  }}
                >
                  <button
                    onClick={() => renderSpellEffect(skill.firsDebuff[0])}
                    className="button2"
                    style={{ color: "#FA5", margin: 0 }}
                  >
                    <img src={skill.firsDebuff[0].miniEffe} />
                  </button>
                  {skill.firsDebuff[0].title} {skill.firsDebuff[0].word}
                </div>
              </>
            )}
            {skill.secDebuff && skill.secDebuff.length > 0 && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => renderSpellEffect(skill.secDebuff[0])}
                  className="button2"
                  style={{ color: "#FA5", margin: 0 }}
                >
                  <img src={skill.secDebuff[0].miniEffe} />
                </button>
                <p style={{ color: "#FA5", margin: 0 }}>
                  {skill.secDebuff[0].title} {skill.secDebuff[0].word2}
                </p>
                {skill.bcard2 && (
                  <div>
                    <p style={{ color: "#FA5", margin: 0 }}>
                      {/* <br /> */}
                      {skill.bcard2}
                    </p>
                  </div>
                )}
              </div>
            )}
            {skill.dmginc2 && skill.thirdDebuff.length > 0 && (
              <div style={{ color: "#FA5" }}>
                {skill.dmginc2}
                <button
                  onClick={() => renderSpellEffect(skill.thirdDebuff[0])}
                  className="button2"
                  style={{ color: "#FA5", margin: 0 }}
                >
                  <img src={skill.thirdDebuff[0].miniEffe} />
                </button>
                {skill.thirdDebuff[0].title}
              </div>
            )}
            {/* <p style={{ color: "#FA5" }}>
              {skill.dmginc && (<>{skill.dmginc} {skill.attackNum}
              <br /></>)}
              {skill.eleminc && (
                <>
                  {skill.eleminc} {skill.attackNum}
                  <br />
                </>
              )}
              {skill.chance && (
                <>
                  {skill.chance}
                  <br />
                </>
              )}
              <button onClick={() => setModal(!modal)} className="button2">
                <img src={skill.firsDebuff[0].miniEffe} />
              </button>
              {skill.bcard2} {skill.word}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

const ModalBuffEffect = ({ spellEffect, modal, setModal }) => {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setModal(false);
  }, [trigger]);

  return (
    <>
      {modal && (
        <div>
          <DraggableCard>
            <button
              onClick={() => setTrigger(!trigger)}
              className="close"
            ></button>
            <label className="imgbase">
              <img src={spellEffect.img} width="30px" height="30px" />
            </label>
            <p className="style-title">{spellEffect.title}</p>
            <p style={{ color: "#FFF" }}>
              {spellEffect.buff}
              <br />
              Level {spellEffect.effiLvL}
              <br />
              <a style={{ color: "#f5c478" }}>{spellEffect.duration}</a>
            </p>
            <p style={{ color: "#FFF" }}>{spellEffect.eleminc}</p>
            <p style={{ color: "#FA5" }}>{spellEffect.dmginc}</p>
          </DraggableCard>
        </div>
      )}
    </>
  );
};

const ModalSpellEffect = ({ spellEffect, modal, setModal }) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setModal(!modal);
  }, [trigger]);

  return (
    <>
      {!modal && (
        <div>
          <DraggableCard>
            <button
              onClick={() => setTrigger(!trigger)}
              className="close"
            ></button>
            <label className="imgbase">
              <img src={spellEffect.miniEffe} width="30px" height="30px" />
            </label>
            <p className="style-title">
              {spellEffect.title} {spellEffect.word}
            </p>
            <p style={{ color: "#FFF" }}>
              {spellEffect.buff}
              <br />
              Level {spellEffect.effiLvL}
              <br />
              <a style={{ color: "#f5c478" }}>{spellEffect.duration}</a>
            </p>
            <p style={{ color: "#FFF" }}>{spellEffect.descEf}</p>
            <p style={{ color: "#FA5" }}>
              {spellEffect.dmginc} {spellEffect.miniBcard}
              <br /> {spellEffect.eleminc} {spellEffect.miniBcard2}
              <br />
              {spellEffect.BcardBuffExtra}
            </p>
          </DraggableCard>
        </div>
      )}
    </>
  );
};
