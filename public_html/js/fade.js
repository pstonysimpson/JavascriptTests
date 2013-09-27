function fade( elem, time ) {
    var startOpacity = elem.style.opacity || 1;
    elem.style.opacity = startOpacity;
    alert('fhildhjlka');
    (function go() {
        elem.style.opacity -=startOpacity / ( time / 100);
    })();
}

//not working