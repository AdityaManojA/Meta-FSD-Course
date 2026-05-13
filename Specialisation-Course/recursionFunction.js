let counter =3;
function recurs(){
    console.log(counter);
    counter=counter-1;
    if (counter===0){
        return; //once return statement is called the function call is exited
    }
    recurs();
}
recurs()