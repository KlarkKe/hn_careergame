gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDbg_9595leaderObjects1= [];
gdjs.LeaderboardCode.GDbg_9595leaderObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects2= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2= [];
gdjs.LeaderboardCode.GDmenuBackObjects1= [];
gdjs.LeaderboardCode.GDmenuBackObjects2= [];
gdjs.LeaderboardCode.GDLineObjects1= [];
gdjs.LeaderboardCode.GDLineObjects2= [];


gdjs.LeaderboardCode.asyncCallback105904884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}gdjs.LeaderboardCode.localVariables.length = 0;
}
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://hn-careergame.ru/top", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback105904884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects = Hashtable.newFrom({"PlayerNameText": gdjs.LeaderboardCode.GDPlayerNameTextObjects2});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects = Hashtable.newFrom({"PlayerScoreText": gdjs.LeaderboardCode.GDPlayerScoreTextObjects2});
gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(10));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;

gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() < 17);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects, 95, 240 + runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() * 60, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects, 581, 240 + runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() * 60, "");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber()).getChild("fname").getAsString());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerScoreTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(10).getChild(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber()).getChild("sc").getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).add(1);
}}
}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDmenuBackObjects1Objects = Hashtable.newFrom({"menuBack": gdjs.LeaderboardCode.GDmenuBackObjects1});
gdjs.LeaderboardCode.asyncCallback105908100 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}gdjs.LeaderboardCode.localVariables.length = 0;
}
gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback105908100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(10));
}
{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("menuBack"), gdjs.LeaderboardCode.GDmenuBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDmenuBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105908636);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}
{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDbg_9595leaderObjects1.length = 0;
gdjs.LeaderboardCode.GDbg_9595leaderObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDmenuBackObjects1.length = 0;
gdjs.LeaderboardCode.GDmenuBackObjects2.length = 0;
gdjs.LeaderboardCode.GDLineObjects1.length = 0;
gdjs.LeaderboardCode.GDLineObjects2.length = 0;

gdjs.LeaderboardCode.eventsList4(runtimeScene);
gdjs.LeaderboardCode.GDbg_9595leaderObjects1.length = 0;
gdjs.LeaderboardCode.GDbg_9595leaderObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDmenuBackObjects1.length = 0;
gdjs.LeaderboardCode.GDmenuBackObjects2.length = 0;
gdjs.LeaderboardCode.GDLineObjects1.length = 0;
gdjs.LeaderboardCode.GDLineObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
