"use strict";

function playSound(sound){
    sound.play();
}

function transformDOM(wide, inside, insideBg){
    wide.style.width = "130px";
    wide.style.height = "130px";
    wide.style.border = "5px solid #ffc600";
    inside.style.height = "90px";
    insideBg.style.padding = "10px 40px";
    insideBg.style.marginTop = "0px";
}

function resetDOM(wide, inside, insideBg){
    wide.style.width = "110px";
    wide.style.height = "110px";
    wide.style.border = "4px solid #fff";
    inside.style.height = "70px";
    insideBg.style.padding = "0px 30px";
    insideBg.style.marginTop = "5px";
}

window.document.addEventListener("keydown", function(event){
    if(event.keyCode === 65){
        transformDOM(clapBtn, clapInside, clapInsideBg);
        playSound(playClap);
    } else if(event.keyCode === 83){
        transformDOM(handClapBtn, handClapInside, handClapInsideBg);
        playSound(playHandsClap);
    } else if(event.keyCode === 68){
        transformDOM(clavesBtn, clavesInside, clavesInsideBg);
        playSound(playClaves);
    } else if(event.keyCode === 70){
        transformDOM(congaBtn, congaInside, congaInsideBg);
        playSound(playConga);
    } else if(event.keyCode === 71){
        transformDOM(cowbellBtn, cowbellInside, cowbellInsideBg);
        playSound(playCowbell);
    } else if(event.keyCode === 72){
        transformDOM(crashBtn, crashInside, crashInsideBg);
        playSound(playCrash);
    } else if(event.keyCode === 74){
        transformDOM(tomBtn, tomInside, tomInsideBg);
        playSound(playTom);
    } else if(event.keyCode === 75){
        transformDOM(highTomBtn, highTomInside, highTomInsideBg);
        playSound(playHighTom);
    } else if(event.keyCode === 76){
        transformDOM(hiHatBtn, hiHatInside, hiHatInsideBg);
        playSound(playHiHat);
    } else if(event.keyCode === 90){
        transformDOM(hornBtn, hornInside, hornInsideBg);
        playSound(playHorn);
    } else if(event.keyCode === 88){
        transformDOM(kickBtn, kickInside, kickInsideBg);
        playSound(playKick);
    } else if(event.keyCode === 67){
        transformDOM(openHiHatBtn, openHiHatInside, openHiHatInsideBg);
        playSound(playOpenHiHat);
    } else if(event.keyCode === 86){
        transformDOM(shifterBtn, shifterInside, shifterInsideBg);
        playSound(playShifter);
    } else if(event.keyCode === 66){
        transformDOM(snareBtn, snareInside, snareInsideBg);
        playSound(playSnare);
    } else if(event.keyCode === 78){
        transformDOM(synthBtn, synthInside, synthInsideBg);
        playSound(playSynth); 
    } else if(event.keyCode === 77){
        transformDOM(vocalsBtn, vocalsInside, vocalsInsideBg);
        playSound(playVocals); 
    }
});

window.document.addEventListener("keyup", function(event){
    if(event.keyCode === 65){
        resetDOM(clapBtn, clapInside, clapInsideBg);
    } else if(event.keyCode === 83){
        resetDOM(handClapBtn, handClapInside, handClapInsideBg);
    } else if(event.keyCode === 68){
        resetDOM(clavesBtn, clavesInside, clavesInsideBg);
    } else if(event.keyCode === 70){
        resetDOM(congaBtn, congaInside, congaInsideBg);
    } else if(event.keyCode === 71){
        resetDOM(cowbellBtn, cowbellInside, cowbellInsideBg);
    } else if(event.keyCode === 72){
        resetDOM(crashBtn, crashInside, crashInsideBg);
    } else if(event.keyCode === 74){
        resetDOM(tomBtn, tomInside, tomInsideBg);
    } else if(event.keyCode === 75){
        resetDOM(highTomBtn, highTomInside, highTomInsideBg);
    } else if(event.keyCode === 76){
        resetDOM(hiHatBtn, hiHatInside, hiHatInsideBg);
    } else if(event.keyCode === 90){
        resetDOM(hornBtn, hornInside, hornInsideBg);
    } else if(event.keyCode === 88){
        resetDOM(kickBtn, kickInside, kickInsideBg);
    } else if(event.keyCode === 67){
        resetDOM(openHiHatBtn, openHiHatInside, openHiHatInsideBg);
    } else if(event.keyCode === 86){
        resetDOM(shifterBtn, shifterInside, shifterInsideBg);
    } else if(event.keyCode === 66){
        resetDOM(snareBtn, snareInside, snareInsideBg);
    } else if(event.keyCode === 78){
        resetDOM(synthBtn, synthInside, synthInsideBg);
    } else if(event.keyCode === 77){
        resetDOM(vocalsBtn, vocalsInside, vocalsInsideBg);
    }
});
