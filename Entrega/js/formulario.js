
function validateForm(){

    const name = document.getElementById('nombre').value;
    const age = document.getElementById('edad').value;
    let isValid = true;


    if (name.trim() === '') {

        showError()
    }

}    


function showError(fieldId, message){
    const errorElement = document.getElementById
}