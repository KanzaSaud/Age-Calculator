function calculate(){
    var dob = (document.getElementById('DoB').value);
    var calculate = (document.getElementById('calculate'));

    const DoB = new Date(dob);
    const now = new Date();

    var age = now.getFullYear() - DoB.getFullYear();

    if(DoB.getMonth() == now.getMonth() && DoB.getDate() > now.getDate()){
        if(age!=0){
            age--;
        }
    }
    
    calculate.innerHTML = `You are ${age} years old.`;
}
function refresh(){
    document.getElementById('DoB').value=null;
    document.getElementById('calculate').innerHTML=null;
}