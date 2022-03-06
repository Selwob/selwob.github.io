function emailDisplay() {
    let user = "bowlessw";
    let host = "gmail.com";
    let link = user + "@" + host;
    return "<a hre" + "f=mai" + "lto:" + user + "@" + host + "><b>" + link + "</b></a>";
}

function phoneDisplay() {
    let num1 = "070";
    let num2 = "2808";
    let num3 = "6160"
}

document.querySelector('#contactEmail').innerHTML = emailDisplay();
