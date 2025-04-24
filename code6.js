gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.GDbg_9595endScreenObjects1= [];
gdjs.EndScreenCode.GDbg_9595endScreenObjects2= [];
gdjs.EndScreenCode.GDbg_9595endScreenObjects3= [];
gdjs.EndScreenCode.GDChooseInternshipObjects1= [];
gdjs.EndScreenCode.GDChooseInternshipObjects2= [];
gdjs.EndScreenCode.GDChooseInternshipObjects3= [];
gdjs.EndScreenCode.GDAgainObjects1= [];
gdjs.EndScreenCode.GDAgainObjects2= [];
gdjs.EndScreenCode.GDAgainObjects3= [];
gdjs.EndScreenCode.GDmenuButtonObjects1= [];
gdjs.EndScreenCode.GDmenuButtonObjects2= [];
gdjs.EndScreenCode.GDmenuButtonObjects3= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDChooseInternshipObjects2Objects = Hashtable.newFrom({"ChooseInternship": gdjs.EndScreenCode.GDChooseInternshipObjects2});
gdjs.EndScreenCode.asyncCallback94553796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback94553796(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.userFunc0x23d50c8 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.location.href = "https://hnrus.com/career/";

};
gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{


gdjs.EndScreenCode.userFunc0x23d50c8(runtimeScene);

}


};gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ChooseInternship"), gdjs.EndScreenCode.GDChooseInternshipObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDChooseInternshipObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(94152516);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{ //Subevents
gdjs.EndScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDAgainObjects1Objects = Hashtable.newFrom({"Again": gdjs.EndScreenCode.GDAgainObjects1});
gdjs.EndScreenCode.asyncCallback94442876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback94442876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Again"), gdjs.EndScreenCode.GDAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDAgainObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(94003196);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{ //Subevents
gdjs.EndScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDmenuButtonObjects1Objects = Hashtable.newFrom({"menuButton": gdjs.EndScreenCode.GDmenuButtonObjects1});
gdjs.EndScreenCode.asyncCallback94743332 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback94743332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("menuButton"), gdjs.EndScreenCode.GDmenuButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDmenuButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95236284);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{ //Subevents
gdjs.EndScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.eventsList7 = function(runtimeScene) {

{


gdjs.EndScreenCode.eventsList2(runtimeScene);
}


{


gdjs.EndScreenCode.eventsList4(runtimeScene);
}


{


gdjs.EndScreenCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.EndScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndScreenCode.GDbg_9595endScreenObjects1.length = 0;
gdjs.EndScreenCode.GDbg_9595endScreenObjects2.length = 0;
gdjs.EndScreenCode.GDbg_9595endScreenObjects3.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects1.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects2.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects3.length = 0;
gdjs.EndScreenCode.GDAgainObjects1.length = 0;
gdjs.EndScreenCode.GDAgainObjects2.length = 0;
gdjs.EndScreenCode.GDAgainObjects3.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects1.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects2.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects3.length = 0;

gdjs.EndScreenCode.eventsList7(runtimeScene);
gdjs.EndScreenCode.GDbg_9595endScreenObjects1.length = 0;
gdjs.EndScreenCode.GDbg_9595endScreenObjects2.length = 0;
gdjs.EndScreenCode.GDbg_9595endScreenObjects3.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects1.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects2.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects3.length = 0;
gdjs.EndScreenCode.GDAgainObjects1.length = 0;
gdjs.EndScreenCode.GDAgainObjects2.length = 0;
gdjs.EndScreenCode.GDAgainObjects3.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects1.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects2.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects3.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
