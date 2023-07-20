import logo from './logo.svg';
import './App.css';
import React from 'react';
import groupApplause from "./assets/animated-small-group-applause.wav"
import achBell from "./assets/achievement-bell.wav"
import magical2 from "./assets/magical2.wav"
import whoosh from "./assets/whoosh.wav"
import fairyWin from "./assets/fairy-win.wav"

function App() {

    function handleClick(el) {
        if (el.classList.toString().includes('card-blur')) {
            el.classList.toggle('card-blur');
            turnCard(el);
            playSound(el.id);
        }
        else {
            soundAudio.pause();
        }       
    }

    var soundAudio = new Audio(achBell);
    const cardDetails = [
        {
            id: "crd22",
            soundEffect: magical2,
            image: "card22.jpg",
        },
        {
            id: "crd16",
            soundEffect: magical2,
            image: "card16.jpg",
        },
        {
            id: "crd17",
            soundEffect: magical2,
            image: "card17.jpg",
        },
        {
            id: "crd23",
            soundEffect: magical2,
            image: "card23.jpg",
        },
        {
            id: "crd8",
            soundEffect: fairyWin,
            image: "card8.jpg",
        },
        {
            id: "crd9",
            soundEffect: magical2,
            image: "card9.jpg",
        },
        {
            id: "crd5",
            soundEffect: magical2,
            image: "card5.jpg",
        },
        {
            id: "crd20",
            soundEffect: magical2,
            image: "card20.jpg",
        },
        {
            id: "crd10",
            soundEffect: magical2,
            image: "card10.jpg",
        },
        {
            id: "crd11",
            soundEffect: magical2,
            image: "card11.jpg",
        },
        {
            id: "crd6",
            soundEffect: groupApplause,
            image: "card6.jpg",
        },
        {
            id: "crd12",
            soundEffect: magical2,
            image: "card12.jpg",
        },
        {
            id: "crd13",
            soundEffect: magical2,
            image: "card13.jpg",
        },
        {
            id: "crd4",
            soundEffect: achBell,
            image: "card4.jpg",
        },
        {
            id: "crd14",
            soundEffect: magical2,
            image: "card14.jpg",
        },
        {
            id: "crd2",
            soundEffect: whoosh,
            image: "card2.jpg",
        },
        {
            id: "crd19",
            soundEffect: magical2,
            image: "card19.jpg",
        },
        {
            id: "crd15",
            soundEffect: magical2,
            image: "card15.jpg",
        },

        {
            id: "crd3",
            soundEffect: magical2,
            image: "card3.jpg",
        },
        ,
        {
            id: "crd25",
            soundEffect: magical2,
            image: "card25.jpg",
        },
        {
            id: "crd1",
            soundEffect: magical2,
            image: "card1.jpg",
        },
        {
            id: "crd18",
            soundEffect: magical2,
            image: "card18.jpg",
        },
        {
            id: "crd21",
            soundEffect: magical2,
            image: "card21.jpg",
        },
        {
            id: "crd24",
            soundEffect: magical2,
            image: "card24.jpg",
        }
    ];

    function turnCard(el) {
        cardDetails.map((crd) => {
            if (crd.id == el.id) {
                el.src = crd.image;
            }
        });
    }

    function playSound(id) {
        soundAudio.pause();
        cardDetails.map((crd) => {
            if (crd.id == id) {
                soundAudio = new Audio(crd.soundEffect);
                soundAudio.play();
            }
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
             

            </header>

            <div className="body-background">
                <div>
                    <div className="four-pointed-star"></div>
                    <div className="label-div">
                        <label>Click on any tile and see the magic !</label>
                    </div>
                </div>

                <div>
                    <div>
                        {cardDetails.map((crd) => {
                            return (
                                <img key={crd.id} id={crd.id} src="card0.jpg" className="card-block card-blur" onClick={({ target }) => handleClick(target)} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
