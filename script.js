function run () {
    let htmlCode = document.getElementById("htmlCode");
    let cssCode = document.getElementById("cssCode");
    let jsCode = document.getElementById("jsCode");
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value);
}