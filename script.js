const inputBoxElement = document.getElementById("input");
inputBoxElement.addEventListener("change", () => {
  let outputCommand = "firebase deploy --only ";
  const arrayOfLines = inputBoxElement.value.split("\n");
  arrayOfLines.shift();
  arrayOfLines.pop();
  for (const [i,f] of arrayOfLines.entries()) {
    const fName = f.split('(')[0];
    outputCommand = `${outputCommand}functions:${fName.trim()}${i < arrayOfLines.length -1 && ","}`;
  }
  document.querySelector('#output').innerHTML = outputCommand;
});
