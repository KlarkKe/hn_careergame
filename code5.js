gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardObjects2= [];
gdjs.LeaderboardCode.GDplayerNameObjects1= [];
gdjs.LeaderboardCode.GDplayerNameObjects2= [];
gdjs.LeaderboardCode.GDuserNameObjects1= [];
gdjs.LeaderboardCode.GDuserNameObjects2= [];
gdjs.LeaderboardCode.GDtgObjects1= [];
gdjs.LeaderboardCode.GDtgObjects2= [];


gdjs.LeaderboardCode.userFunc0x721e658 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function () {
  const tg = window.Telegram && window.Telegram.WebApp;

  if (!tg) {
    console.log("Telegram WebApp API недоступен");
    return;
  }

  tg.ready();

  setTimeout(function () {
    const data = tg.initDataUnsafe;
    const rawData = tg.initData; // строка с данными, для подписи

    if (data && data.user) {
      const game = runtimeScene.getGame().getVariables();
      if (data.user.first_name) {
        game.get("PlayerName").setString(data.user.first_name);
        console.log("Имя:", data.user.first_name);
      }
      if (data.user.username) {
        game.get("Username").setString(data.user.username);
        console.log("Username:", data.user.username);
      }

      // Передадим initData как строку в переменную
      game.get("InitData").setString(rawData);
    } else {
      console.log("Нет данных пользователя");
    }
  }, 500);
})();

};
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.LeaderboardCode.userFunc0x721e658(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("playerName"), gdjs.LeaderboardCode.GDplayerNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("tg"), gdjs.LeaderboardCode.GDtgObjects1);
gdjs.copyArray(runtimeScene.getObjects("userName"), gdjs.LeaderboardCode.GDuserNameObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDplayerNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDplayerNameObjects1[i].getBehavior("Text").setText("Привеет, " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() + ", !");
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDuserNameObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDuserNameObjects1[i].getBehavior("Text").setText("Твой username " + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDtgObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDtgObjects1[i].getBehavior("Text").setText("Твой tg" + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects1.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects2.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects1.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects2.length = 0;
gdjs.LeaderboardCode.GDtgObjects1.length = 0;
gdjs.LeaderboardCode.GDtgObjects2.length = 0;

gdjs.LeaderboardCode.eventsList0(runtimeScene);
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardObjects2.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects1.length = 0;
gdjs.LeaderboardCode.GDplayerNameObjects2.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects1.length = 0;
gdjs.LeaderboardCode.GDuserNameObjects2.length = 0;
gdjs.LeaderboardCode.GDtgObjects1.length = 0;
gdjs.LeaderboardCode.GDtgObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
