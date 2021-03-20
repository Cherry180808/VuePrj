let obj = {
  name: "name",
  type: 1,
  children: [1, 2, 3],
  func() {
    return "func";
  }
};

let newObjAssign = Object.assign({}, obj); //如果obj的某个属性的值仍未object,Object.assign无法拷贝
newObjAssign.name = "newObjAssign";
newObjAssign.children[0] = "a1";
console.log("1", obj);
console.log("1", newObjAssign);
//-----result
// 1 {
//     name: 'name',
//     type: 1,
//     children: [ 'a1', 2, 3 ],
//     func: [Function: func]
//   }
// 1 {
//     name: 'newObjAssign',
//     type: 1,
//     children: [ 'a1', 2, 3 ],
//     func: [Function: func]
// }

let newObjJson = JSON.parse(JSON.stringify(obj)); //JSON.parse&JSON.stringfy无法拷贝undefined,null,function
newObjJson.name = "newObjJson";
newObjJson.children[0] = "a2";
console.log("2", obj);
console.log("2", newObjJson);
// -----result
// 2 {
//     name: 'name',
//     type: 1,
//     children: [ 'a1', 2, 3 ],
//     func: [Function: func]
//   }
// 2 { name: 'newObjJson', type: 1, children: [ 'a2', 2, 3 ] }

//---递归拷贝
function deepClone(objData) {
  let newObj = Array.isArray(obj) ? {} : [];
  if (typeof objData != "object") {
    //obj为基本类型
    return (newObj = objData);
  }
  if (objData instanceof Array) {
    for (let i = 0; i < objData.length; i++) {
      newObj[i] = objData[i];
      if (typeof newObj[i] == "object") {
        deepClone(newObj[i]);
      }
    }
  } else {
    for (let key in objData) {
      if (objData.hasOwnProperty(key)) {
        if (typeof objData[key] == "object") {
          newObj[key] = deepClone(objData[key]);
        } else {
          newObj[key] = objData[key];
        }
      }
    }
  }
  return newObj;
}

let newDeepCloneObj = deepClone(obj);
newDeepCloneObj.name = "newDeepCloneObj";
newDeepCloneObj.children[0] = "a3";
console.log("3", obj);
console.log("3", newDeepCloneObj);
// -----result
// 3 {
//     name: 'name',
//     type: 1,
//     children: [ 'a1', 2, 3 ],
//     func: [Function: func]
//   }
// 3 [
//     name: 'newDeepCloneObj',
//     type: 1,
//     children: [ 'a3', 2, 3 ],
//     func: [Function: func]
// ]
