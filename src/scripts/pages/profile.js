document.getElementById('DefaultTab').click();

function openTab(evt, tab) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tabLink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tab).style.display = "flex";
    document.getElementById(tab).style.flexDirection = "column";

    evt.currentTarget.className += " active";
}

function howOlder(age){

}

function controlDateField () {
    var inputDate = document.getElementsByName("dateEditProfile")[0];
    var dateToday = new Date;

    var day = dateToday.getDate();
    var month = dateToday.getMonth() + 1;
    var year = dateToday.getFullYear();

    var dateCompletedMin = `${year - 500}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}`;
    var dateCompletedMax = `${year}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}`;

    inputDate.min = dateCompletedMin;
    inputDate.max = dateCompletedMax;
}