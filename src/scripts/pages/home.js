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

