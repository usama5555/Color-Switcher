const buttons = document.querySelectorAll(".button")

const body = document.querySelector('body')

buttons.forEach(function (button){
    button.addEventListener('click', function (e){
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'white';
        }else {
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black'; // Set text color to black for all buttons except blue
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id
        }
    })
    
})