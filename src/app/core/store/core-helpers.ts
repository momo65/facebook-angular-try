export function initializeST(){//initialize suggestionsTypes
  let sTs=["profiles","pages","groups","public publications","friends publications","pages publications",
  "groups publications"];
  let indexes:number[];
  for(let i=0;i<5;i++){ //5 cauz max of sugestions types that FB display is 5
    let newST=false;
    while(newST==false){ // this loop to keep getting random numbers until they don't belong to the indexes's values
      newST=true;
      let index=Math.floor(Math.random()*sTs.length);
      for(let k=0;k<indexes.length;k++){
        if(indexes[k]==index){
          newST=false;
        }
      }
      if(newST==true){
        indexes.push(index);
      }
    }
  }
  indexes.sort((a,b)=>{ //check if this works correctly else change to function & try it
    return a-b;
  });
  console.log(indexes);
  let subSTs=[];
  for(let j=0;j<5;j++){
    subSTs.push(sTs[indexes[j]]);
  }
  return [...subSTs];//to assure immutability
}
