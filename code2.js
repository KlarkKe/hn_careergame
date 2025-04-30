gdjs.RoolsCode = {};
gdjs.RoolsCode.localVariables = [];
gdjs.RoolsCode.GDNewSpriteObjects1= [];
gdjs.RoolsCode.GDNewSpriteObjects2= [];
gdjs.RoolsCode.GDNewSpriteObjects3= [];
gdjs.RoolsCode.GDLeftArrowObjects1= [];
gdjs.RoolsCode.GDLeftArrowObjects2= [];
gdjs.RoolsCode.GDLeftArrowObjects3= [];


gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.RoolsCode.GDLeftArrowObjects2});
gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.RoolsCode.GDNewSpriteObjects2});
gdjs.RoolsCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.RoolsCode.GDLeftArrowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDLeftArrowObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( !(gdjs.RoolsCode.GDLeftArrowObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDLeftArrowObjects2[k] = gdjs.RoolsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.RoolsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105842764);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RoolsCode.GDLeftArrowObjects2 */
{for(var i = 0, len = gdjs.RoolsCode.GDLeftArrowObjects2.length ;i < len;++i) {
    gdjs.RoolsCode.GDLeftArrowObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.RoolsCode.GDLeftArrowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( gdjs.RoolsCode.GDLeftArrowObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDLeftArrowObjects2[k] = gdjs.RoolsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.RoolsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( gdjs.RoolsCode.GDLeftArrowObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDLeftArrowObjects2[k] = gdjs.RoolsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.RoolsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105844236);
}
}
}
if (isConditionTrue_0) {
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;

{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.RoolsCode.mapOfGDgdjs_9546RoolsCode_9546GDNewSpriteObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.RoolsCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.RoolsCode.GDNewSpriteObjects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.RoolsCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.RoolsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.RoolsCode.GDLeftArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.RoolsCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( gdjs.RoolsCode.GDLeftArrowObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDLeftArrowObjects2[k] = gdjs.RoolsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.RoolsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.RoolsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDNewSpriteObjects2[k] = gdjs.RoolsCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.RoolsCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.RoolsCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.RoolsCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.RoolsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").setOpacity(gdjs.RoolsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").getOpacity() + (7));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.RoolsCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.RoolsCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDLeftArrowObjects1.length;i<l;++i) {
    if ( gdjs.RoolsCode.GDLeftArrowObjects1[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDLeftArrowObjects1[k] = gdjs.RoolsCode.GDLeftArrowObjects1[i];
        ++k;
    }
}
gdjs.RoolsCode.GDLeftArrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolsCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.RoolsCode.GDNewSpriteObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.RoolsCode.GDNewSpriteObjects1[k] = gdjs.RoolsCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.RoolsCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105847548);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.RoolsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "cf0fc01247f4fc1.mp3", 0, true, 90, 1);
}}

}


{


gdjs.RoolsCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.RoolsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects3.length = 0;
gdjs.RoolsCode.GDLeftArrowObjects1.length = 0;
gdjs.RoolsCode.GDLeftArrowObjects2.length = 0;
gdjs.RoolsCode.GDLeftArrowObjects3.length = 0;

gdjs.RoolsCode.eventsList1(runtimeScene);
gdjs.RoolsCode.GDNewSpriteObjects1.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects2.length = 0;
gdjs.RoolsCode.GDNewSpriteObjects3.length = 0;
gdjs.RoolsCode.GDLeftArrowObjects1.length = 0;
gdjs.RoolsCode.GDLeftArrowObjects2.length = 0;
gdjs.RoolsCode.GDLeftArrowObjects3.length = 0;


return;

}

gdjs['RoolsCode'] = gdjs.RoolsCode;
