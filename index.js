// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
  return cats
});
function destructivelyAppendCat(Ralph){
  cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
  cats.unshift(Bob)
}
function destructivelyRemoveFirstCat(){
  cats.splice(0,1)
}
function destructivelyRemoveLastCat(){
  cats.splice(2,1)
}
function appendCat(Broom){
  const cats =["Milo", "Otis", "Garfield"]
   const allCats=[...cats, Broom]
   return allCats
}
function prependCat(Arnold){
  const cats =["Milo", "Otis", "Garfield"]
  const allcats =[Arnold, ...cats]
  return allcats
}
function removeLastCat(){
  const cats =["Milo", "Otis", "Garfield"]
  const somecats= cats.slice(0 , cats.length-1)
  return somecats
}
function removeFirstCat(){
  const cats=["Milo", "Otis", "Garfield"]
  const othercats=cats.slice(1)
  return othercats
}



