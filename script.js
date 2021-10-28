const openedItems = document.querySelector('.icons');
const shareElem = document.getElementById('open');
const removeBtn = document.getElementById('remove-icon');
const lastIcon = document.querySelector('.share-icon');


shareElem.addEventListener('click', () => {
 openedItems.classList.toggle('clicked')
});

removeBtn.addEventListener('click', () => {
    openedItems.classList.remove('clicked')
});

shareElem.addEventListener('click', () => {
    lastIcon.classList.toggle('touched')
});

removeBtn.addEventListener('click', () => {
    lastIcon.classList.remove('touched')
});