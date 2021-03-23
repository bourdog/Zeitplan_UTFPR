document.getElementById('DefaultTab').click();

function openTab(tab) {
    var tabContent = document.getElementsByClassName("tabContent");

    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tab).style.display = "flex";
    document.getElementById(tab).style.flexDirection = "column";
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