let inputStr="";
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let buttonValue = e.target.innerHTML;
        
        if (buttonValue === "=") {
            try {
                let result = eval(inputStr);
                inputStr = result;
                document.getElementById("input").value = inputStr;
            } catch (error) {
                document.getElementById("input").value = "Error";
                inputStr = "";
            }
        } else if (buttonValue === "AC") {
            inputStr = "";
            document.getElementById("input").value = inputStr;
        } else if (buttonValue === "DEL") {
            inputStr = inputStr.slice(0, -1);
            document.getElementById("input").value = inputStr;
        } else {
            inputStr += buttonValue;
            document.getElementById("input").value = inputStr;
        }
    });
});
