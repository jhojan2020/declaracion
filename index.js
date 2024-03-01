const yesbtn = document.querySelector('#yesbtn');

yesbtn.addEventListener('click',function() {
    alert('Sabia que ibas a decir que si <3')
});

const nobtn = document.querySelector('nobtn');

nobtn.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()+100);
    const randomY = parseInt(Math.random()*100);
    nobtn.Style.setProperty('top',randomY+'%');
    nobtn.Style.setProperty('left',randomX+'%');
    nobtn.Style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})