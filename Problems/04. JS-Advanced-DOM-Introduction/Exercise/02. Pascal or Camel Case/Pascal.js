function solve() {
  let givenText = document.getElementById('text').value;
  let command = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  const splited = givenText.split(' ')

  let st = '';

  if (command == 'Pascal Case') {
    for (let i = 0; i < splited.length; i++) {
        st += splited[i][0].toUpperCase() + splited[i].slice(1, splited[i].length).toLowerCase();
    }
    result.textContent = st

  } else if (command == 'Camel Case') {
    st += splited[0][0].toLowerCase() + splited[0].slice(1, splited[0].length).toLowerCase();

    for (let i = 1; i < splited.length; i++) {
      st += splited[i][0].toUpperCase() + splited[i].slice(1, splited[i].length).toLowerCase();
    
      result.textContent = st
    }

  } else {
    result.textContent = 'Error!'
  }
}