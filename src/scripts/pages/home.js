function searchDate (textDate) {
    var date = textDate.value;

    if(date.length == 2 || date.length == 5){
        date = date + '/';
        document.forms[0].date.value = date;
    }
}

function priorityCard () {

    var isChecked = document.getElementsByName("priorityCard");
    
    for(var i = 0; i < isChecked.length; i++){
        if(isChecked[i].checked == true) {
            isChecked[i].parentNode.classList.add("priorityCard");
        } else {
            isChecked[i].parentNode.classList.remove("priorityCard");
        }
    }
    
}

function isDone () {

    var isDone = document.getElementsByName("isDone");
    
    for(var i = 0; i < isDone.length; i++){
        if(isDone[i].checked == true) {
            isDone[i].parentNode.parentNode.classList.add("addIsDone");
        } else {
            isDone[i].parentNode.parentNode.classList.remove("addIsDone");
        }
    }
    
}

function controlDateField () {
    var inputDate = document.getElementsByName("dateCreateCard")[0];
    var dateToday = new Date;

    var day = dateToday.getDate();
    var month = dateToday.getMonth() + 1;
    var year = dateToday.getFullYear();

    var dateCompletedMin = `${year}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}`;
    var dateCompletedMax = `${year + 5}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}`;

    inputDate.min = dateCompletedMin;
    inputDate.max = dateCompletedMax;
}

function clearInputModal () {
    var clear = document.getElementsByClassName("clear");

    for(var i = 0; i < clear.length; i++) {
        clear[i].value = "";
    }
}