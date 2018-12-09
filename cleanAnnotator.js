(function() {
    var myAnnotator = $('body')
        .annotator()
        .data('annotator');
    if (myAnnotator) {
        var hlText = document.getElementsByClassName('annotator-hl');
        while (hlText[0]) {
            hlText[0].classList.remove('annotator-hl');
        }
        var hlAndTemp = document.getElementsByClassName(
            'annotator-hl annotator-hl-temporary'
        );
        while (hlAndTemp[0]) {
            hlAndTemp[0].classList.remove(hlAndTemp[0].classList.item(0));
        }
        var hlTemp = document.getElementsByClassName('annotator-hl-temporary');
        while (hlTemp[0]) {
            hlTemp[0].classList.remove('annotator-hl-temporary');
        }
        myAnnotator.plugins.Offline.store.clear();
    }

    var anonotatorOuter = document.querySelectorAll(
        '.annotator-outer.annotator-editor.annotator-hide'
    )[0];
    anonotatorOuter.parentNode.removeChild(anonotatorOuter);

    var annotatorAdder = document.querySelector('.annotator-adder');
    annotatorAdder.parentNode.removeChild(annotatorAdder);

    var els = document.getElementsByClassName('annotator-wrapper');
    els[0].classList.remove('annotator-wrapper');
    while (els[0]) {
        els[0].classList.remove('annotator-wrapper');
    }

    var temp = document.querySelector(
        '.annotator-outer.annotator-viewer.annotator-hide'
    );
    temp.parentNode.removeChild(temp);

    // var annotationId = document.querySelectorAll('span[data-annotation-id]');
    // for (var i = 0; i < annotationId.length; i++) {
    //     annotationId[i].removeAttribute('data-annotation-id');
    // }
}.call(this));
