//let myGlobalVariable = 0; //Global Variable
"use strict"; //precommand 
//self executing anonymous funcation
//IIFE - immediately Invoked Funcation Excepration
(function(){
    let myFuncationVariable = 0;

    function Start() {
        let startVariable = 0;
        
        console.log("App Started...");

        console.log("%cApp Started...",
                    " font-size: 20px; color:blue");
        console.info("%cApp Started...",
                    " font-size: 20px; color:blue");
        console.warn("%cApp Started...",
                    " font-size: 20px; color:blue");
        console.error("%cApp Started...",
                    " font-size: 20px; color:blue");
    }

    // let Start = function(){
    //     let startVariable = 0;
    //     console.log("%cApp Started..."," font-size: 20px; color:blue");
    // }

    // let Start = function(){
    //     let startVariable = 0;
    //     console.log(`%cApp Started...${startVariable}`," font-size: 20px; color:blue"); //inject variable
    // }

    window.addEventListener("load", Start);
})();