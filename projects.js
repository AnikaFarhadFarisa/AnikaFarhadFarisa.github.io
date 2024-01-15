
let rot = 45;
let show = false;

function rotate(i_d){
    document.getElementById(i_d).style = `transform: rotate(` + rot + `deg)`;
    rot += 45;
};

function desPro1(i_d){
    if(!show){
        document.getElementById(i_d).style.display = "block";
        show = true;
    }
    else{
        document.getElementById(i_d).style.display = "none";
        show = false;
    }
    
}


