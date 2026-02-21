import Parallax from 'parallax-js/src/parallax';

window.Parallax = Parallax;

// Function to change shape illustrations on landing page

const shapeArray = ['hand', 'fortune-cookie', 'orange-peel', 'cow', 'bird', 'olive-branch', 'fish'];

function changeShape(eventTarget) {
    const el = eventTarget.firstElementChild;
    const siblingEl = eventTarget.nextElementSibling.firstElementChild;

    const currentShape = el.getAttribute("href").replace('-outline', '').replace('#', '');
    const currentIndex = shapeArray.indexOf(currentShape);

    const getNewIndex = () => {
        if (currentIndex == shapeArray.length - 1) return shapeArray[0]
        else return shapeArray[currentIndex + 1]
    } 

    el.setAttribute('href', `#${getNewIndex()}-outline`)
    siblingEl.setAttribute('href', `#${getNewIndex()}`)
}

document.querySelectorAll('.outline-landing').forEach((el) => el.addEventListener('click', (e) => changeShape(e.target)))
