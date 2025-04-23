gdjs.GiftsCode = {};
gdjs.GiftsCode.localVariables = [];
gdjs.GiftsCode.GDNewSpriteObjects1= [];
gdjs.GiftsCode.GDNewSpriteObjects2= [];
gdjs.GiftsCode.GDNewSpriteObjects3= [];
gdjs.GiftsCode.GDNewSprite2Objects1= [];
gdjs.GiftsCode.GDNewSprite2Objects2= [];
gdjs.GiftsCode.GDNewSprite2Objects3= [];
gdjs.GiftsCode.GDLeftArrowObjects1= [];
gdjs.GiftsCode.GDLeftArrowObjects2= [];
gdjs.GiftsCode.GDLeftArrowObjects3= [];


gdjs.GiftsCode.mapOfGDgdjs_9546GiftsCode_9546GDLeftArrowObjects2Objects = Hashtable.newFrom({"LeftArrow": gdjs.GiftsCode.GDLeftArrowObjects2});
gdjs.GiftsCode.mapOfGDgdjs_9546GiftsCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.GiftsCode.GDNewSpriteObjects2});
gdjs.GiftsCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.GiftsCode.GDLeftArrowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GiftsCode.mapOfGDgdjs_9546GiftsCode_9546GDLeftArrowObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( !(gdjs.GiftsCode.GDLeftArrowObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed") ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDLeftArrowObjects2[k] = gdjs.GiftsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.GiftsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105871828);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GiftsCode.GDLeftArrowObjects2 */
{for(var i = 0, len = gdjs.GiftsCode.GDLeftArrowObjects2.length ;i < len;++i) {
    gdjs.GiftsCode.GDLeftArrowObjects2[i].getBehavior("Animation").setAnimationName("Pressed");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonsClick.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.GiftsCode.GDLeftArrowObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( gdjs.GiftsCode.GDLeftArrowObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDLeftArrowObjects2[k] = gdjs.GiftsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.GiftsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( gdjs.GiftsCode.GDLeftArrowObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDLeftArrowObjects2[k] = gdjs.GiftsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.GiftsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105873300);
}
}
}
if (isConditionTrue_0) {
gdjs.GiftsCode.GDNewSpriteObjects2.length = 0;

{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 0, 0, 0.5);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GiftsCode.mapOfGDgdjs_9546GiftsCode_9546GDNewSpriteObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.GiftsCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GiftsCode.GDNewSpriteObjects2[i].setZOrder(2);
}
}{for(var i = 0, len = gdjs.GiftsCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GiftsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.GiftsCode.GDLeftArrowObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GiftsCode.GDNewSpriteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDLeftArrowObjects2.length;i<l;++i) {
    if ( gdjs.GiftsCode.GDLeftArrowObjects2[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDLeftArrowObjects2[k] = gdjs.GiftsCode.GDLeftArrowObjects2[i];
        ++k;
    }
}
gdjs.GiftsCode.GDLeftArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.GiftsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").getOpacity() < 255 ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDNewSpriteObjects2[k] = gdjs.GiftsCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.GiftsCode.GDNewSpriteObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GiftsCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.GiftsCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.GiftsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").setOpacity(gdjs.GiftsCode.GDNewSpriteObjects2[i].getBehavior("Opacity").getOpacity() + (7));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrow"), gdjs.GiftsCode.GDLeftArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GiftsCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDLeftArrowObjects1.length;i<l;++i) {
    if ( gdjs.GiftsCode.GDLeftArrowObjects1[i].getBehavior("Animation").getAnimationName() == "Pressed" ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDLeftArrowObjects1[k] = gdjs.GiftsCode.GDLeftArrowObjects1[i];
        ++k;
    }
}
gdjs.GiftsCode.GDLeftArrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GiftsCode.GDNewSpriteObjects1.length;i<l;++i) {
    if ( gdjs.GiftsCode.GDNewSpriteObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.GiftsCode.GDNewSpriteObjects1[k] = gdjs.GiftsCode.GDNewSpriteObjects1[i];
        ++k;
    }
}
gdjs.GiftsCode.GDNewSpriteObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(105876612);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.GiftsCode.eventsList1 = function(runtimeScene) {

{


gdjs.GiftsCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GiftsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GiftsCode.GDNewSpriteObjects1.length = 0;
gdjs.GiftsCode.GDNewSpriteObjects2.length = 0;
gdjs.GiftsCode.GDNewSpriteObjects3.length = 0;
gdjs.GiftsCode.GDNewSprite2Objects1.length = 0;
gdjs.GiftsCode.GDNewSprite2Objects2.length = 0;
gdjs.GiftsCode.GDNewSprite2Objects3.length = 0;
gdjs.GiftsCode.GDLeftArrowObjects1.length = 0;
gdjs.GiftsCode.GDLeftArrowObjects2.length = 0;
gdjs.GiftsCode.GDLeftArrowObjects3.length = 0;

gdjs.GiftsCode.eventsList1(runtimeScene);
gdjs.GiftsCode.GDNewSpriteObjects1.length = 0;
gdjs.GiftsCode.GDNewSpriteObjects2.length = 0;
gdjs.GiftsCode.GDNewSpriteObjects3.length = 0;
gdjs.GiftsCode.GDNewSprite2Objects1.length = 0;
gdjs.GiftsCode.GDNewSprite2Objects2.length = 0;
gdjs.GiftsCode.GDNewSprite2Objects3.length = 0;
gdjs.GiftsCode.GDLeftArrowObjects1.length = 0;
gdjs.GiftsCode.GDLeftArrowObjects2.length = 0;
gdjs.GiftsCode.GDLeftArrowObjects3.length = 0;


return;

}

gdjs['GiftsCode'] = gdjs.GiftsCode;
