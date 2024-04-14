document.querySelectorAll('.btn-accordion').forEach((item) => {
    item.addEventListener('click', (e) => {
        const accordionItem =
            e.target.parentElement.parentElement.parentElement;
        setAccordionIcon();
        closeAccordionItems();
        accordionItem.querySelector('.expand-accordion').style.display =
            'block';

        accordionItem.querySelector('img').src = './assets/icon-minus.svg';
    });
});

function setAccordionIcon() {
    document
        .querySelectorAll('.icon-accordion')
        .forEach((item) => (item.src = './assets/icon-plus.svg'));
}

function closeAccordionItems() {
    document.querySelectorAll('.expand-accordion').forEach((item) => {
        item.style.display = 'none';
        console.log('el item hidden: ' + item);
    });
}
