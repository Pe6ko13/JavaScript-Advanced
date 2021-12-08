function solve() {

    let lectureInput = document.querySelector('input[name="lecture-name"]');
    let lectureDate = document.querySelector('input[name="lecture-date"]');
    let lectureModule = document.querySelector('select[name="lecture-module"]');
         // let [lecName, lecDate, lecModule] = document.querySelectorAll('.form-control');

    let buttonAdd = document.querySelector('.admin-view .action button' );
    let trainings = {};

    buttonAdd.addEventListener('click', (ev) => {
        ev.preventDefault();
        
        if(!lectureInput.value || !lectureDate.value || lectureModule.value == 'Select module') {
            return;
        }

        if (!trainings[lectureModule.value]) {
            trainings[lectureModule.value] = [];
        }

        let currentTraining = { nmae: lectureInput.value, date: formatDate(lectureDate.value)};
        trainings[lectureModule.value].push(currentTraining);

        createTrainings(trainings);
    });

    function createTrainings(train) {
        for (const tr in train) {
            let lectures = train[tr];

            lectures.sort((a, b) => a.date.localeCompare(b.date));
        }
        
        let divEl = document.createElement('div');
        divEl.classList.add('module');

        let moduleHeading = document.createElement('h3');
        moduleHeading.textContent = `${(lectureModule.value).toUpperCase()}-MODULE`;
        divEl.appendChild(moduleHeading);

        let lectList = document.createElement('ul');


        let liEl = document.createElement('li');
        liEl.classList.add('flex');

        let courseHeadEl = document.createElement('h4');
        courseHeadEl.textContent = `${lectureInput.value} - ${formatDate(lectureDate.value)}`;
        
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Del';

        liEl.appendChild(courseHeadEl);
        liEl.appendChild(deleteBtn);


        lectList.appendChild(liEl);
        divEl.appendChild(lectList);

        let modulesElem = document.querySelector('.modules');
        modulesElem.appendChild(divEl);
    }

    function formatDate(dateInput) {
        let [date, time] = dateInput.split('T');
        date = date.replace(/-/g, '/');
        return `${date} - ${time}`;
    }
};

// function solve() {
 
//     let addButton = document.querySelector('.form-control button')
//     addButton.addEventListener('click', onClick)
 
//     function onClick(e){
//         e.preventDefault()
//         let inputs = Array.from(e.target.parentElement.parentElement.children).map(div => div.lastElementChild).slice(0, -1)
//         if (inputs[0].value && inputs[1].value && inputs[2].value !== 'Select module'){
//             let trainings = document.querySelector('.modules')
//             let [date, hour] = inputs[1].value.split('T')
//             date = date.split('-').join('/')
            
//             let lecture = {
//                 'div': creatEl('div', 'module', undefined),
//                 'h3': creatEl('h3', undefined, `${inputs[2].value.toUpperCase()}-MODULE`),
//                 'ul': creatEl('ul', undefined, undefined),
//                 'li': creatEl('li', 'flex', undefined),
//                 'h4': creatEl('h4', undefined, `${inputs[0].value} - ${date} - ${hour}`),
//                 'button': creatEl('button', 'red', 'Del'),
 
//             }
//             lecture.div.appendChild(lecture.h3)
//             lecture.li.appendChild(lecture.h4), lecture.li.appendChild(lecture.button)
//             lecture.ul.appendChild(lecture.li)
//             lecture.div.appendChild(lecture.ul)
 
//             let isModuleExists = Array.from(trainings.children).filter(l => l.children[0].textContent == `${inputs[2].value.toUpperCase()}-MODULE`)
//             if (isModuleExists.length == 1){
//                 let ul = isModuleExists[0].children[1]
//                 // lecture.h3.remove()
//                 ul.appendChild(lecture.li)
//                 Array.from(ul.children).sort((a, b) => a.firstElementChild.textContent.split(' - ')[1].localeCompare(b.firstElementChild.textContent.split(' - ')[1])).forEach(li => ul.appendChild(li))
//                 // console.log(isModuleExists)
//             }else{
//                 // console.log(isModuleExists)
//                 trainings.appendChild(lecture.div)
            
//             }
 
 
//             lecture.button.addEventListener('click', del)
 
//             function del(e){
//                 lecture.li.remove()
//                 if(Array.from(lecture.div.children[1].children).length == 0){
//                     lecture.div.remove()
//                 }
//             }
 
//             function creatEl(tag, classContent, content){
//                 let t = document.createElement(tag)
//                 if (classContent !== undefined){
//                     t.setAttribute('class', classContent)
//                 }if (content !== undefined){
//                     t.textContent = content
//                 }
//                 return t
 
//             }
 
//         }
//     }
 
// }