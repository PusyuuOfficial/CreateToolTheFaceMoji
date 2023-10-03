/*****************************************
  *----------------------------------
  |  ThisStyleVersion: 1.1.0      |
  |  © 2021-2023 By Pusyuu        |
  |  LastUpdate: 2023-09-15       |
  |  License: MIT License         |
  |  (^U^)KaomjiJsDesu            |
----------------------------------*
******************************************/

// 入力フィールドのIDのリスト
const inputFieldIds = ["lefthand", "outline", "lefteyes", "nose", "righteyes", "righthand", "comment"];

// 入力フィールドの要素を格納するオブジェクト
const inputFields = {};

// 各入力フィールドの要素を取得し、イベントリスナーを設定
for (let i = 0; i < inputFieldIds.length; i++) {
  const inputFieldId = inputFieldIds[i];
  inputFields[inputFieldId] = document.getElementById(inputFieldId);
  inputFields[inputFieldId].addEventListener("input", updateFace);
}

// スペースのチェックボックスを取得
const spaceCheckbox = document.getElementById("space");
spaceCheckbox.addEventListener("change", updateFace);

// 顔を生成する関数
function createFace() {
  const lefthand = inputFields["lefthand"].value;
  const outline = inputFields["outline"].value;
  const lefteyes = inputFields["lefteyes"].value;
  const nose = inputFields["nose"].value;
  const righteyes = inputFields["righteyes"].value;
  const righthand = inputFields["righthand"].value;
  const space = spaceCheckbox.checked ? " " : "";
  const comment = inputFields["comment"].value;

  const face = lefthand + outline.substring(0, 1) + lefteyes + nose + righteyes + outline.substring(1) + righthand + space + comment;
  document.getElementById("faceContainer").innerHTML = face;
}

// 入力フィールドが変更されたときに顔を生成する関数を呼び出す
function updateFace() {
  createFace();
}