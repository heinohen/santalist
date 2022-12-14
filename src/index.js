import "./style.css";
import checklist from "./assets/checklist.svg";
import gitcat from "./assets/git-cat.png";
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
    headerTextArea.textContent = "Have you been naughty or nice? - A webpack 5 & js demoproject";
    containerHeader.appendChild(containerLogo);
    containerHeader.appendChild(headerTextArea);

    return containerHeader;
}
  
const mainArea = () => {
    

    const container = document.createElement('div');
    container.setAttribute('id','mainContainer');

    const right = document.createElement('div');
    right.setAttribute('id','rightMain');    
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

const footer = () => {

    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('id', 'footerContainer');
    
    //authbox
    const authorContainer = document.createElement('div');
    authorContainer.setAttribute('id','authorContainer');
    const authorPara = document.createElement('p');
    authorPara.setAttribute('id','authorPara');
    authorPara.textContent = "© heinohen 2022 "
    const footerGitLink = document.createElement('a');
    footerGitLink.href = "https://www.github.com/heinohen"
    const footerGitImg = document.createElement('img');
    footerGitImg.src = gitcat;
    footerGitImg.alt = "Gitcat";
    footerGitLink.appendChild(footerGitImg);
    authorContainer.appendChild(authorPara);
    authorContainer.appendChild(footerGitLink);
    
    //bg copyrightbox
    const copyrightContainer = document.createElement('div');
    // Photo by <a href="https://unsplash.com/@olesichka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olesia Buyar</a> on <a href="https://unsplash.com/s/photos/christmas-present?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    const copyPara = document.createElement('a');
    copyPara.setAttribute('id', 'copyPara');
    copyPara.href = "https://unsplash.com/@olesichka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
    copyPara.textContent = "Photo by Olesia Buyar @ unsplash.com";

    copyrightContainer.appendChild(copyPara);


    //add to footer
    footerContainer.appendChild(authorContainer);
    footerContainer.appendChild(copyrightContainer);

    return footerContainer;
}
const bodyContainer = document.createElement('div');
bodyContainer.setAttribute('id','bodyContainer');
bodyContainer.appendChild(first());
bodyContainer.appendChild(mainArea());
bodyContainer.appendChild(footer());
document.body.appendChild(bodyContainer);


window.addEventListener('load', () => {
    const form = document.querySelector('#add-new-task');
    const inp = document.querySelector('#new-task-input');
    const listElements = document.querySelector('#tasks');

    form.addEventListener('submit', (e)  => {
        e.preventDefault(); //prevents the whole page load on submit press

        const inputNotEmpty = inp.value;

        if (!inputNotEmpty) {
            return;
        }
        
        const containerOfoneMessage = listElementContainer(inputNotEmpty, listElements);

        //add one row, delete is bound to deletebutton
        listElements.appendChild(containerOfoneMessage);

        //this resets the input field, so user has to write new input
        e.target.reset();
    })

})
