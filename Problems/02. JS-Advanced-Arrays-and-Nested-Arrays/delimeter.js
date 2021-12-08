function delimeter(arr, str) {
    let delim = str;
    let newArr = [];
    for (let i in arr){
        if (i < arr.length - 1){
            newArr.push(arr[i], delim);

        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(''));
}

delimeter (['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
);