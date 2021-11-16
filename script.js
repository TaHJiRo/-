let buttonsBlock = $("#buttons_block");
let outputBlock = $("#output_block");

let buttonsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '='];

buttonsArray.map(item => {
    buttonsBlock.append(`
        <div class="button_item">
            ${item}
        </div>
    `);
})

let buttons = document.querySelectorAll(".button_item");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', (event) => {
        let buttonValue = event.currentTarget.innerText;
        if(buttonValue === '='){
            let outputBlockValue = outputBlock.text();
            let result = eval(outputBlockValue);
            outputBlock.empty();
            outputBlock.append(result);
        }else{
            outputBlock.append(buttonValue);
        }
    })
}