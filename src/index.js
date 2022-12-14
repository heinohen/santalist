import "./style.css";
import checklist from "./assets/checklist.svg";
import { listFunctionality, listMain, listElementContainer } from "./listFunctionality";

const first = () => {
    
    const containerHeader = document.createElement('div');
    containerHeader.setAttribute('id', 'headerContainer');
    const containerLogo = document.createElement('div');
    const headerLogo = document.createElement('img');
    headerLogo.src = checklist;
    containerLogo.setAttribute('id','logoContainer');
    containerLogo.appendChild(headerLogo);
    containerHeader.appendChild(containerLogo);

    const headerTextArea = document.createElement('div');
    headerTextArea.setAttribute('id', 'textContainer');
    headerTextArea.textContent = "LOL";
    containerHeader.appendChild(containerLogo);
    containerHeader.appendChild(headerTextArea);

    return containerHeader;
}

const mainArea = () => {
    

    const container = document.createElement('div');
    container.setAttribute('id','mainContainer');

    const right = document.createElement('div');
    const h1Right = document.createElement('h1');
    right.setAttribute('id','rightMain');
    h1Right.textContent = "Have you been naughty or nice?"
    right.appendChild(h1Right);
    
    //list input here
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id','listContainer');
    right.appendChild(listContainer);
    listContainer.appendChild(listFunctionality());
    listContainer.appendChild(listMain());
    //list ends here

    container.appendChild(right);

    return container;
}
const bodyContainer = document.createElement('div');
bodyContainer.setAttribute('id','bodyContainer');
bodyContainer.appendChild(first());
bodyContainer.appendChild(mainArea());
document.body.appendChild(bodyContainer);

window.addEventListener('load', () => {
    const form = document.querySelector('#add-new-task');
    const inp = document.querySelector('#new-task-input');
    const listElements = document.querySelector('#tasks');

    form.addEventListener('submit', (e)  => {
        e.preventDefault(); //prevents the whole page load on submit press

        const inputNotEmpty = inp.value;

        if (!inputNotEmpty) {
            console.log("is empty");
            return;
        }
        
        const containerOfoneMessage = listElementContainer(inputNotEmpty, listElements);

        //add one row, delete is bound to deletebutton
        listElements.appendChild(containerOfoneMessage);

        //this resets the input field, so user has to write new input
        e.target.reset();
    })

})
