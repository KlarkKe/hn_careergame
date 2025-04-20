gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDTitleObjects4= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDBackgroundObjects4= [];
gdjs.MainMenuCode.GDLoadingScreenObjects1= [];
gdjs.MainMenuCode.GDLoadingScreenObjects2= [];
gdjs.MainMenuCode.GDLoadingScreenObjects3= [];
gdjs.MainMenuCode.GDLoadingScreenObjects4= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects4= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects1= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects2= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects3= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects4= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects1= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects2= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects3= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects4= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects1= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects2= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects3= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects4= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects1= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects2= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects3= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects4= [];
gdjs.MainMenuCode.GDRoolsObjects1= [];
gdjs.MainMenuCode.GDRoolsObjects2= [];
gdjs.MainMenuCode.GDRoolsObjects3= [];
gdjs.MainMenuCode.GDRoolsObjects4= [];
gdjs.MainMenuCode.GDGiftsObjects1= [];
gdjs.MainMenuCode.GDGiftsObjects2= [];
gdjs.MainMenuCode.GDGiftsObjects3= [];
gdjs.MainMenuCode.GDGiftsObjects4= [];
gdjs.MainMenuCode.GDNewTextObjects1= [];
gdjs.MainMenuCode.GDNewTextObjects2= [];
gdjs.MainMenuCode.GDNewTextObjects3= [];
gdjs.MainMenuCode.GDNewTextObjects4= [];
gdjs.MainMenuCode.GDleaderButtonObjects1= [];
gdjs.MainMenuCode.GDleaderButtonObjects2= [];
gdjs.MainMenuCode.GDleaderButtonObjects3= [];
gdjs.MainMenuCode.GDleaderButtonObjects4= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects3Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects3});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects3[k] = gdjs.MainMenuCode.GDPlayButtonObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90662092);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects2[k] = gdjs.MainMenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects2[k] = gdjs.MainMenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90663564);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseCharacter", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDleaderButtonObjects2Objects = Hashtable.newFrom({"leaderButton": gdjs.MainMenuCode.GDleaderButtonObjects2});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("leaderButton"), gdjs.MainMenuCode.GDleaderButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDleaderButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90665516);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRoolsObjects3Objects = Hashtable.newFrom({"Rools": gdjs.MainMenuCode.GDRoolsObjects3});
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.MainMenuCode.GDRoolsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRoolsObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRoolsObjects3.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRoolsObjects3[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRoolsObjects3[k] = gdjs.MainMenuCode.GDRoolsObjects3[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRoolsObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90667716);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDRoolsObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDRoolsObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRoolsObjects3[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.MainMenuCode.GDRoolsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRoolsObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDRoolsObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRoolsObjects2[k] = gdjs.MainMenuCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRoolsObjects2.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDRoolsObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRoolsObjects2[k] = gdjs.MainMenuCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90669188);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rools", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGiftsObjects2Objects = Hashtable.newFrom({"Gifts": gdjs.MainMenuCode.GDGiftsObjects2});
gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gifts"), gdjs.MainMenuCode.GDGiftsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGiftsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGiftsObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGiftsObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGiftsObjects2[k] = gdjs.MainMenuCode.GDGiftsObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGiftsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90671276);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGiftsObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGiftsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGiftsObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gifts"), gdjs.MainMenuCode.GDGiftsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGiftsObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDGiftsObjects1[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGiftsObjects1[k] = gdjs.MainMenuCode.GDGiftsObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGiftsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGiftsObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDGiftsObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGiftsObjects1[k] = gdjs.MainMenuCode.GDGiftsObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGiftsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(90672748);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gifts", false);
}}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList2(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList3(runtimeScene);
}


};gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Main menu.ogg", 0, true, 60, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.MainMenuCode.eventsList4(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects1.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects2.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects3.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDRoolsObjects1.length = 0;
gdjs.MainMenuCode.GDRoolsObjects2.length = 0;
gdjs.MainMenuCode.GDRoolsObjects3.length = 0;
gdjs.MainMenuCode.GDRoolsObjects4.length = 0;
gdjs.MainMenuCode.GDGiftsObjects1.length = 0;
gdjs.MainMenuCode.GDGiftsObjects2.length = 0;
gdjs.MainMenuCode.GDGiftsObjects3.length = 0;
gdjs.MainMenuCode.GDGiftsObjects4.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects3.length = 0;
gdjs.MainMenuCode.GDNewTextObjects4.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects1.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects2.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects3.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects4.length = 0;

gdjs.MainMenuCode.eventsList5(runtimeScene);
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects1.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects2.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects3.length = 0;
gdjs.MainMenuCode.GDLoadingScreenObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDRoolsObjects1.length = 0;
gdjs.MainMenuCode.GDRoolsObjects2.length = 0;
gdjs.MainMenuCode.GDRoolsObjects3.length = 0;
gdjs.MainMenuCode.GDRoolsObjects4.length = 0;
gdjs.MainMenuCode.GDGiftsObjects1.length = 0;
gdjs.MainMenuCode.GDGiftsObjects2.length = 0;
gdjs.MainMenuCode.GDGiftsObjects3.length = 0;
gdjs.MainMenuCode.GDGiftsObjects4.length = 0;
gdjs.MainMenuCode.GDNewTextObjects1.length = 0;
gdjs.MainMenuCode.GDNewTextObjects2.length = 0;
gdjs.MainMenuCode.GDNewTextObjects3.length = 0;
gdjs.MainMenuCode.GDNewTextObjects4.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects1.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects2.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects3.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects4.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
