gdjs.EndScreenCode = {};
gdjs.EndScreenCode.localVariables = [];
gdjs.EndScreenCode.GDbg_9595endScreenObjects1= [];
gdjs.EndScreenCode.GDbg_9595endScreenObjects2= [];
gdjs.EndScreenCode.GDChooseInternshipObjects1= [];
gdjs.EndScreenCode.GDChooseInternshipObjects2= [];
gdjs.EndScreenCode.GDAgainObjects1= [];
gdjs.EndScreenCode.GDAgainObjects2= [];
gdjs.EndScreenCode.GDmenuButtonObjects1= [];
gdjs.EndScreenCode.GDmenuButtonObjects2= [];


gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDChooseInternshipObjects1Objects = Hashtable.newFrom({"ChooseInternship": gdjs.EndScreenCode.GDChooseInternshipObjects1});
gdjs.EndScreenCode.asyncCallback106091212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.window.openURL("https://hnrus.com/career/", runtimeScene);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback106091212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ChooseInternship"), gdjs.EndScreenCode.GDChooseInternshipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDChooseInternshipObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(106090724);
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


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDAgainObjects1Objects = Hashtable.newFrom({"Again": gdjs.EndScreenCode.GDAgainObjects1});
gdjs.EndScreenCode.asyncCallback106092412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback106092412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList3 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(106092036);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{ //Subevents
gdjs.EndScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.mapOfGDgdjs_9546EndScreenCode_9546GDmenuButtonObjects1Objects = Hashtable.newFrom({"menuButton": gdjs.EndScreenCode.GDmenuButtonObjects1});
gdjs.EndScreenCode.asyncCallback106094764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.EndScreenCode.localVariables.length = 0;
}
gdjs.EndScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndScreenCode.asyncCallback106094764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndScreenCode.eventsList5 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(106094196);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{ //Subevents
gdjs.EndScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.EndScreenCode.eventsList6 = function(runtimeScene) {

{


gdjs.EndScreenCode.eventsList1(runtimeScene);
}


{


gdjs.EndScreenCode.eventsList3(runtimeScene);
}


{


gdjs.EndScreenCode.eventsList5(runtimeScene);
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
gdjs.EndScreenCode.GDChooseInternshipObjects1.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects2.length = 0;
gdjs.EndScreenCode.GDAgainObjects1.length = 0;
gdjs.EndScreenCode.GDAgainObjects2.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects1.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects2.length = 0;

gdjs.EndScreenCode.eventsList6(runtimeScene);
gdjs.EndScreenCode.GDbg_9595endScreenObjects1.length = 0;
gdjs.EndScreenCode.GDbg_9595endScreenObjects2.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects1.length = 0;
gdjs.EndScreenCode.GDChooseInternshipObjects2.length = 0;
gdjs.EndScreenCode.GDAgainObjects1.length = 0;
gdjs.EndScreenCode.GDAgainObjects2.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects1.length = 0;
gdjs.EndScreenCode.GDmenuButtonObjects2.length = 0;


return;

}

gdjs['EndScreenCode'] = gdjs.EndScreenCode;
