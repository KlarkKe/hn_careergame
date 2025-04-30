gdjs.ChooseCharacterCode = {};
gdjs.ChooseCharacterCode.localVariables = [];
gdjs.ChooseCharacterCode.GDbg_9595characterObjects1= [];
gdjs.ChooseCharacterCode.GDbg_9595characterObjects2= [];
gdjs.ChooseCharacterCode.GDbg_9595characterObjects3= [];
gdjs.ChooseCharacterCode.GDRoolsObjects1= [];
gdjs.ChooseCharacterCode.GDRoolsObjects2= [];
gdjs.ChooseCharacterCode.GDRoolsObjects3= [];
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1= [];
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects2= [];
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects3= [];
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1= [];
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects2= [];
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects3= [];
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1= [];
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2= [];
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects3= [];


gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDLeftArrowButtonObjects1Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1});
gdjs.ChooseCharacterCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0).getAsNumber() - 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) < 1 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1 */
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)).setNumber(3);
}
}}

}


};gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDRightArrowButtonObjects1Objects = Hashtable.newFrom({"RightArrowButton": gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1});
gdjs.ChooseCharacterCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0)).setNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2[i].getVariables().getFromIndex(0).getAsNumber() + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) > 3 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1 */
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].returnVariable(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


};gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDRoolsObjects2Objects = Hashtable.newFrom({"Rools": gdjs.ChooseCharacterCode.GDRoolsObjects2});
gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDbg_95959595characterObjects2Objects = Hashtable.newFrom({"bg_character": gdjs.ChooseCharacterCode.GDbg_9595characterObjects2});
gdjs.ChooseCharacterCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.ChooseCharacterCode.GDRoolsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDRoolsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDRoolsObjects2.length;i<l;++i) {
    if ( !(gdjs.ChooseCharacterCode.GDRoolsObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDRoolsObjects2[k] = gdjs.ChooseCharacterCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105890668);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.ChooseCharacterCode.GDRoolsObjects2 */
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDRoolsObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDRoolsObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.ChooseCharacterCode.GDRoolsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDRoolsObjects2.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDRoolsObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDRoolsObjects2[k] = gdjs.ChooseCharacterCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDRoolsObjects2.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDRoolsObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDRoolsObjects2[k] = gdjs.ChooseCharacterCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105892124);
}
}
}
if (isConditionTrue_0) {
gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length = 0;

{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDbg_95959595characterObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.ChooseCharacterCode.GDRoolsObjects2);
gdjs.copyArray(runtimeScene.getObjects("bg_character"), gdjs.ChooseCharacterCode.GDbg_9595characterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDRoolsObjects2.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDRoolsObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDRoolsObjects2[k] = gdjs.ChooseCharacterCode.GDRoolsObjects2[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDRoolsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[k] = gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.ChooseCharacterCode.GDbg_9595characterObjects2 */
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[i].getBehavior("Opacity").setOpacity(gdjs.ChooseCharacterCode.GDbg_9595characterObjects2[i].getBehavior("Opacity").getOpacity() + (7));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rools"), gdjs.ChooseCharacterCode.GDRoolsObjects1);
gdjs.copyArray(runtimeScene.getObjects("bg_character"), gdjs.ChooseCharacterCode.GDbg_9595characterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDRoolsObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDRoolsObjects1[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDRoolsObjects1[k] = gdjs.ChooseCharacterCode.GDRoolsObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDRoolsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDbg_9595characterObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDbg_9595characterObjects1[k] = gdjs.ChooseCharacterCode.GDbg_9595characterObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105895228);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(((gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(((gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.ChooseCharacterCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDLeftArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChooseCharacterCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ChooseCharacterCode.mapOfGDgdjs_9546ChooseCharacterCode_9546GDRightArrowButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ChooseCharacterCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_character"), gdjs.ChooseCharacterCode.GDbg_9595characterObjects1);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDbg_9595characterObjects1[i].getBehavior("Animation").setAnimationName("character_1");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_character"), gdjs.ChooseCharacterCode.GDbg_9595characterObjects1);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDbg_9595characterObjects1[i].getBehavior("Animation").setAnimationName("character_2");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CharacterSelection"), gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length;i<l;++i) {
    if ( gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariableNumber(gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[k] = gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1[i];
        ++k;
    }
}
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bg_character"), gdjs.ChooseCharacterCode.GDbg_9595characterObjects1);
{for(var i = 0, len = gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length ;i < len;++i) {
    gdjs.ChooseCharacterCode.GDbg_9595characterObjects1[i].getBehavior("Animation").setAnimationName("character_3");
}
}}

}


{


gdjs.ChooseCharacterCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ChooseCharacterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length = 0;
gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length = 0;
gdjs.ChooseCharacterCode.GDbg_9595characterObjects3.length = 0;
gdjs.ChooseCharacterCode.GDRoolsObjects1.length = 0;
gdjs.ChooseCharacterCode.GDRoolsObjects2.length = 0;
gdjs.ChooseCharacterCode.GDRoolsObjects3.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects3.length = 0;

gdjs.ChooseCharacterCode.eventsList3(runtimeScene);
gdjs.ChooseCharacterCode.GDbg_9595characterObjects1.length = 0;
gdjs.ChooseCharacterCode.GDbg_9595characterObjects2.length = 0;
gdjs.ChooseCharacterCode.GDbg_9595characterObjects3.length = 0;
gdjs.ChooseCharacterCode.GDRoolsObjects1.length = 0;
gdjs.ChooseCharacterCode.GDRoolsObjects2.length = 0;
gdjs.ChooseCharacterCode.GDRoolsObjects3.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDRightArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.ChooseCharacterCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects1.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects2.length = 0;
gdjs.ChooseCharacterCode.GDCharacterSelectionObjects3.length = 0;


return;

}

gdjs['ChooseCharacterCode'] = gdjs.ChooseCharacterCode;
