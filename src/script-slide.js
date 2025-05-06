const scrollBox = document.querySelector('article .line .stripe');

let isDown = false;
let startX;
let scrollLeft;

scrollBox.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollBox.classList.add('active');
    startX = e.pageX - scrollBox.offsetLeft;
    scrollLeft = scrollBox.scrollLeft;
});

scrollBox.addEventListener('mouseleave', () => {
    isDown = false;
    scrollBox.classList.remove('active');
});

scrollBox.addEventListener('mouseup', () => {
    isDown = false;
    scrollBox.classList.remove('active');
});

scrollBox.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollBox.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    scrollBox.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile
scrollBox.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollBox.offsetLeft;
    scrollLeft = scrollBox.scrollLeft;
});

scrollBox.addEventListener('touchend', () => {
    isDown = false;
});

scrollBox.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - scrollBox.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    scrollBox.scrollLeft = scrollLeft - walk;
});
