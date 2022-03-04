const calculateTemp = () => {

  const numberTemp = document.getElementById('temp').value;
  //console.log(numberTemp);
  const tempSelected = document.getElementById('temp_diff');
  const valueTemp = temp_diff.option[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenhit = Math.round((cel*9/5)+32);
    return fahrenhit;
  }


  const fehToCel = (fehr) => {
    let celsius = Math.round((fehr-32)*5/9);
    return celsius;
  }


  let result;

  if (valueTemp == 'cel') {
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result}℉ahrenheit`;
  }
  else {
    result = fehToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `= ${result}℃elsius`;
  }
}
