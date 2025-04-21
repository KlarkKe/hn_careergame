gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDTitleObjects3= [];
gdjs.MainMenuCode.GDTitleObjects4= [];
gdjs.MainMenuCode.GDTitleObjects5= [];
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDBackgroundObjects3= [];
gdjs.MainMenuCode.GDBackgroundObjects4= [];
gdjs.MainMenuCode.GDBackgroundObjects5= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects3= [];
gdjs.MainMenuCode.GDPlayButtonObjects4= [];
gdjs.MainMenuCode.GDPlayButtonObjects5= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects1= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects2= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects3= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects4= [];
gdjs.MainMenuCode.GDRedCandyParticleObjects5= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects1= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects2= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects3= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects4= [];
gdjs.MainMenuCode.GDGreenCandyParticleObjects5= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects1= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects2= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects3= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects4= [];
gdjs.MainMenuCode.GDYellowCandyParticleObjects5= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4= [];
gdjs.MainMenuCode.GDPurpleCandyParticleObjects5= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects1= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects2= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects3= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects4= [];
gdjs.MainMenuCode.GDAquaCandyParticleObjects5= [];
gdjs.MainMenuCode.GDRoolsObjects1= [];
gdjs.MainMenuCode.GDRoolsObjects2= [];
gdjs.MainMenuCode.GDRoolsObjects3= [];
gdjs.MainMenuCode.GDRoolsObjects4= [];
gdjs.MainMenuCode.GDRoolsObjects5= [];
gdjs.MainMenuCode.GDGiftsObjects1= [];
gdjs.MainMenuCode.GDGiftsObjects2= [];
gdjs.MainMenuCode.GDGiftsObjects3= [];
gdjs.MainMenuCode.GDGiftsObjects4= [];
gdjs.MainMenuCode.GDGiftsObjects5= [];
gdjs.MainMenuCode.GDheaderObjects1= [];
gdjs.MainMenuCode.GDheaderObjects2= [];
gdjs.MainMenuCode.GDheaderObjects3= [];
gdjs.MainMenuCode.GDheaderObjects4= [];
gdjs.MainMenuCode.GDheaderObjects5= [];
gdjs.MainMenuCode.GDleaderButtonObjects1= [];
gdjs.MainMenuCode.GDleaderButtonObjects2= [];
gdjs.MainMenuCode.GDleaderButtonObjects3= [];
gdjs.MainMenuCode.GDleaderButtonObjects4= [];
gdjs.MainMenuCode.GDleaderButtonObjects5= [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDNewSpriteObjects3= [];
gdjs.MainMenuCode.GDNewSpriteObjects4= [];
gdjs.MainMenuCode.GDNewSpriteObjects5= [];
gdjs.MainMenuCode.GDscore_9595bgObjects1= [];
gdjs.MainMenuCode.GDscore_9595bgObjects2= [];
gdjs.MainMenuCode.GDscore_9595bgObjects3= [];
gdjs.MainMenuCode.GDscore_9595bgObjects4= [];
gdjs.MainMenuCode.GDscore_9595bgObjects5= [];
gdjs.MainMenuCode.GDNewSprite3Objects1= [];
gdjs.MainMenuCode.GDNewSprite3Objects2= [];
gdjs.MainMenuCode.GDNewSprite3Objects3= [];
gdjs.MainMenuCode.GDNewSprite3Objects4= [];
gdjs.MainMenuCode.GDNewSprite3Objects5= [];
gdjs.MainMenuCode.GDscoreDisplayObjects1= [];
gdjs.MainMenuCode.GDscoreDisplayObjects2= [];
gdjs.MainMenuCode.GDscoreDisplayObjects3= [];
gdjs.MainMenuCode.GDscoreDisplayObjects4= [];
gdjs.MainMenuCode.GDscoreDisplayObjects5= [];
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects1= [];
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects2= [];
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects3= [];
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects4= [];
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects5= [];
gdjs.MainMenuCode.GDrankObjects1= [];
gdjs.MainMenuCode.GDrankObjects2= [];
gdjs.MainMenuCode.GDrankObjects3= [];
gdjs.MainMenuCode.GDrankObjects4= [];
gdjs.MainMenuCode.GDrankObjects5= [];
gdjs.MainMenuCode.GDNewSprite2Objects1= [];
gdjs.MainMenuCode.GDNewSprite2Objects2= [];
gdjs.MainMenuCode.GDNewSprite2Objects3= [];
gdjs.MainMenuCode.GDNewSprite2Objects4= [];
gdjs.MainMenuCode.GDNewSprite2Objects5= [];


gdjs.MainMenuCode.userFunc0x5e399e0 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function () {
  const tg = window.Telegram && window.Telegram.WebApp;

  if (!tg) {
    console.log("❌ Telegram WebApp API недоступен");
    return;
  }

  tg.ready();

  setTimeout(function () {
    const data = tg.initDataUnsafe;

    if (data && data.user) {
      const game = runtimeScene.getGame().getVariables();

      game.get("PlayerName").setString(data.user.first_name || "");
      game.get("Username").setString(data.user.username || "");

      console.log("✅ Имя:", data.user.first_name);
      console.log("✅ Username:", data.user.username);
    } else {
      console.warn("⚠️ Нет данных пользователя");
    }
  }, 500);
})();

};
gdjs.MainMenuCode.asyncCallback99649428 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(11).getChild("score"));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(12).getChild("rank"));
}gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://hn-careergame.ru/rank/" + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback99649428(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback78459708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://hn-careergame.ru/score/" + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString(), "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback78459708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.asyncCallback95366108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainMenuCode.localVariables);

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MainMenuCode.localVariables.length = 0;
}
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MainMenuCode.asyncCallback95366108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.userFunc0x5e399e0(runtimeScene);

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getGame().getVariables().getFromIndex(11), "score");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("scoreDisplay"), gdjs.MainMenuCode.GDscoreDisplayObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDscoreDisplayObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDscoreDisplayObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(11).getChild("score").getChild("score").getAsNumber()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.variableChildExists(runtimeScene.getGame().getVariables().getFromIndex(11), "rank");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("rank"), gdjs.MainMenuCode.GDrankObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDrankObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDrankObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(12).getChild("rank").getChild("rank").getAsNumber()));
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects2Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects2});
gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayButtonObjects2[k] = gdjs.MainMenuCode.GDPlayButtonObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayButtonObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(104120900);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDPlayButtonObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayButtonObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayButtonObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ChooseCharacter", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDleaderButtonObjects2Objects = Hashtable.newFrom({"leaderButton": gdjs.MainMenuCode.GDleaderButtonObjects2});
gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13844324);
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


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRoolsObjects2Objects = Hashtable.newFrom({"Rools": gdjs.MainMenuCode.GDRoolsObjects2});
gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.MainMenuCode.GDRoolsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDRoolsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDRoolsObjects2.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDRoolsObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDRoolsObjects2[k] = gdjs.MainMenuCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(99616356);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDRoolsObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDRoolsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDRoolsObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rools", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGiftsObjects1Objects = Hashtable.newFrom({"Gifts": gdjs.MainMenuCode.GDGiftsObjects1});
gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Gifts"), gdjs.MainMenuCode.GDGiftsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDGiftsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDGiftsObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDGiftsObjects1[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDGiftsObjects1[k] = gdjs.MainMenuCode.GDGiftsObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDGiftsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(93150540);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDGiftsObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDGiftsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDGiftsObjects1[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gifts", false);
}}

}


};gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList4(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList5(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList6(runtimeScene);
}


{


gdjs.MainMenuCode.eventsList7(runtimeScene);
}


};gdjs.MainMenuCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Main menu.ogg", 0, true, 60, 1);
}
{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.eventsList8(runtimeScene);
}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDTitleObjects5.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects5.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects5.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDRoolsObjects1.length = 0;
gdjs.MainMenuCode.GDRoolsObjects2.length = 0;
gdjs.MainMenuCode.GDRoolsObjects3.length = 0;
gdjs.MainMenuCode.GDRoolsObjects4.length = 0;
gdjs.MainMenuCode.GDRoolsObjects5.length = 0;
gdjs.MainMenuCode.GDGiftsObjects1.length = 0;
gdjs.MainMenuCode.GDGiftsObjects2.length = 0;
gdjs.MainMenuCode.GDGiftsObjects3.length = 0;
gdjs.MainMenuCode.GDGiftsObjects4.length = 0;
gdjs.MainMenuCode.GDGiftsObjects5.length = 0;
gdjs.MainMenuCode.GDheaderObjects1.length = 0;
gdjs.MainMenuCode.GDheaderObjects2.length = 0;
gdjs.MainMenuCode.GDheaderObjects3.length = 0;
gdjs.MainMenuCode.GDheaderObjects4.length = 0;
gdjs.MainMenuCode.GDheaderObjects5.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects1.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects2.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects3.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects4.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects5.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects5.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects1.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects2.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects3.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects4.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects5.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects3.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects4.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects5.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects1.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects2.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects3.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects4.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects5.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects1.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects2.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects3.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects4.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects5.length = 0;
gdjs.MainMenuCode.GDrankObjects1.length = 0;
gdjs.MainMenuCode.GDrankObjects2.length = 0;
gdjs.MainMenuCode.GDrankObjects3.length = 0;
gdjs.MainMenuCode.GDrankObjects4.length = 0;
gdjs.MainMenuCode.GDrankObjects5.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects4.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects5.length = 0;

gdjs.MainMenuCode.eventsList9(runtimeScene);
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDTitleObjects3.length = 0;
gdjs.MainMenuCode.GDTitleObjects4.length = 0;
gdjs.MainMenuCode.GDTitleObjects5.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects3.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects4.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects5.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects3.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects4.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects5.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDRedCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDGreenCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDYellowCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDPurpleCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects1.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects2.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects3.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects4.length = 0;
gdjs.MainMenuCode.GDAquaCandyParticleObjects5.length = 0;
gdjs.MainMenuCode.GDRoolsObjects1.length = 0;
gdjs.MainMenuCode.GDRoolsObjects2.length = 0;
gdjs.MainMenuCode.GDRoolsObjects3.length = 0;
gdjs.MainMenuCode.GDRoolsObjects4.length = 0;
gdjs.MainMenuCode.GDRoolsObjects5.length = 0;
gdjs.MainMenuCode.GDGiftsObjects1.length = 0;
gdjs.MainMenuCode.GDGiftsObjects2.length = 0;
gdjs.MainMenuCode.GDGiftsObjects3.length = 0;
gdjs.MainMenuCode.GDGiftsObjects4.length = 0;
gdjs.MainMenuCode.GDGiftsObjects5.length = 0;
gdjs.MainMenuCode.GDheaderObjects1.length = 0;
gdjs.MainMenuCode.GDheaderObjects2.length = 0;
gdjs.MainMenuCode.GDheaderObjects3.length = 0;
gdjs.MainMenuCode.GDheaderObjects4.length = 0;
gdjs.MainMenuCode.GDheaderObjects5.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects1.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects2.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects3.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects4.length = 0;
gdjs.MainMenuCode.GDleaderButtonObjects5.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects3.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects4.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects5.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects1.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects2.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects3.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects4.length = 0;
gdjs.MainMenuCode.GDscore_9595bgObjects5.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects3.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects4.length = 0;
gdjs.MainMenuCode.GDNewSprite3Objects5.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects1.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects2.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects3.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects4.length = 0;
gdjs.MainMenuCode.GDscoreDisplayObjects5.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects1.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects2.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects3.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects4.length = 0;
gdjs.MainMenuCode.GDleaderBoard_9595bgObjects5.length = 0;
gdjs.MainMenuCode.GDrankObjects1.length = 0;
gdjs.MainMenuCode.GDrankObjects2.length = 0;
gdjs.MainMenuCode.GDrankObjects3.length = 0;
gdjs.MainMenuCode.GDrankObjects4.length = 0;
gdjs.MainMenuCode.GDrankObjects5.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects1.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects2.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects3.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects4.length = 0;
gdjs.MainMenuCode.GDNewSprite2Objects5.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
