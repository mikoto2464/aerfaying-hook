let hookXhrOpen = XMLHttpRequest.prototype.open;
let hookXhrSrh = XMLHttpRequest.prototype.setRequestHeader;

XMLHttpRequest.prototype.open = function(method, url, syn) {
    if (url == "/WebApi/Projects/CloudSpace") {
        url = "http://127.0.0.1:8080/api/hook";
        method = "POST";
        syn = true;
        console.log(method);
        console.log(url);
    }
    hookXhrOpen.apply(this, [method, url, syn]);
}

XMLHttpRequest.prototype.setRequestHeader = function(header, value) {
    if (header == "Origin" && value == "https://aerfaying.com") {
        hookXhrSrh.apply(this, [header, "http://127.0.0.1"])
    }
}