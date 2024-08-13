// logo
const existingImage = document.getElementsByTagName('img')[0];
const newDiv = document.createElement('div');
newDiv.style.display = 'flex';
newDiv.style.alignItems = 'center';
newDiv.style.justifyContent = 'center';

const newImg = document.createElement('img');
newImg.style.width = '60px';
newImg.style.height = 'auto';

const newP = document.createElement('p');
newP.textContent = 'This is a new paragraph';
newP.style.fontSize = '25px';
newP.style.color = 'gray';

newImg.src = './images/webyn.png';
newImg.alt = 'Product Logo';
newP.innerHTML = '<strong>Webyn</strong>.ai';

newDiv.appendChild(newImg);
newDiv.appendChild(newP);
const container = document.querySelector('.container');
container.replaceChild(newDiv, existingImage);

// title text
const title = document.getElementsByTagName('h1');
title[0].innerHTML = "Generate <span class='title-more-revenue'>more revenue</span> with your website!";
title[0].style.margin = '5px';
document.querySelector('.title-more-revenue').style.color = '#0ea5e9';

// description
// Get the parent container
const content = document.querySelector('.content');
const description = container.querySelector('.description');
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = '97% of your traffic does not convert. Webyn automatically generates improvements on your website to maximize your conversions.';
para2.textContent = '100% No-Code.';
para1.className = "description";
para1.style.marginBottom = "0px";
para2.className = "description";
para2.style.marginTop = "0px";
content.replaceChild(para1, description);
content.insertBefore(para2, para1.nextSibling);

// button
const butonGroup = document.querySelector('.button-group');
const btn = butonGroup.querySelectorAll('.btn');
btn[0].innerHTML = "Book a demo";
btn[0].style.borderRadius = "25px";
btn[0].style.backgroundColor = '#0ea5e9';
btn[1].innerHTML = "Analyse my website <img src='./images/right-arrow.svg' alt='arrow' height='15' height='20' />";
btn[1].style.borderRadius = "25px";

// #bonus 1: swap card
const container2 = document.querySelector('.container-2');
const container3 = document.querySelector('.container-3');
const parent = container2.parentNode;
parent.insertBefore(container3, container2);
parent.insertBefore(container2, container3.nextSibling);

const divider = document.querySelectorAll('.example-divider')[1];
parent.insertBefore(divider, container2);

// change theme color 
const themeButton = document.querySelector('.sticky-btn');
themeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu').classList.toggle('show-dropdown');
});

// #bonus 2: email input
const existingBtn = document.querySelector('.container .button-group');
const existingBtnParent = existingBtn.parentNode;
const createEmailDiv = document.createElement('div');
createEmailDiv.style.margin = "0 auto";
createEmailDiv.style.display = "flex";
createEmailDiv.style.flexDirection = "row";
createEmailDiv.style.width = "400px";
createEmailDiv.style.justifyContent = "center";
createEmailDiv.style.padding = "20px 0 40px 0";

const createInputEmail = document.createElement('input');
createInputEmail.type = "email";
createInputEmail.placeholder = "tom@mail.com";
createInputEmail.required = true;
createInputEmail.style.width = "100%";
createInputEmail.style.padding = "10px";
createInputEmail.style.textAlign = "right";
createEmailDiv.appendChild(createInputEmail);
existingBtnParent.insertBefore(createEmailDiv, existingBtn);

btn[0].addEventListener('click', (e) => {
    e.preventDefault();
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const value = createInputEmail.value;
    const validEmail =  emailRegex.test(value);
    if (value === "" || !validEmail) {
        console.log('herhehrehrehr');
        createInputEmail.style.borderColor = "red";
    } else {
        createInputEmail.style.borderColor = "green";
        alert(value);
    }
});

createInputEmail.onblur = () => {
    createInputEmail.style.borderColor = "black";
};

createInputEmail.onfocus = () => {
    createInputEmail.style.backgroundColor = ''; // Reset to default background color
};

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        const color = item.getAttribute('data-theme-color');
        const bodyStyle = document.body.style;
        const isDarkMode = color === 'black';
        const isLightMode = color === 'white';

        // Set background color
        bodyStyle.backgroundColor = color === 'auto' || color === 'white' ? '#fff' : color;

        // Set text colors
        const textColor = isDarkMode ? 'white' : 'black';
        document.querySelectorAll('p, h1').forEach(element => {
            element.style.color = textColor;
        });

        // Toggle SVG visibility
        document.querySelector('.moon-svg').style.display = isDarkMode ? 'block' : 'none';
        document.querySelector('.light-svg').style.display = isLightMode ? 'block' : 'none';
        document.querySelector('.half-circle').style.display = (!isDarkMode && !isLightMode) ? 'block' : 'none';

        // Toggle dropdown menu visibility
        document.querySelector('.dropdown-menu').classList.toggle('show-dropdown');
    });
});
