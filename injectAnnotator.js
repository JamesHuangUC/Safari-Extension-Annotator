var turnOff = true;

var jqueryScript,
    annotatorMin,
    annotatorOffline,
    annotatorCss,
    customRun,
    customRemove;

function getAnswer(theMessageEvent) {
    turnOff = !turnOff;

    if (theMessageEvent.name === 'from-global' && window.top === window) {
        jqueryScript = document.createElement('script');
        annotatorMin = document.createElement('script');
        annotatorOffline = document.createElement('script');
        annotatorCss = document.createElement('link');
        customRun = document.createElement('script');
        jqueryScript.src = safari.extension.baseURI + 'jquery-3.3.1.min.js';
        annotatorMin.src = safari.extension.baseURI + 'annotator-full.min.js';
        annotatorOffline.src =
            safari.extension.baseURI + 'annotator.offline.min.js';
        annotatorCss.rel = 'stylesheet';
        annotatorCss.type = 'text/css';
        // annotatorCss.href = safari.extension.baseURI = 'annotator.min.css';
        annotatorCss.href = 'https://codepen.io/jameshuang/pen/LMPBpR.css';
        customRun.src = safari.extension.baseURI + 'runAnnotator.js';
        document.body.appendChild(jqueryScript);
        document.body.appendChild(annotatorMin);
        document.body.appendChild(annotatorOffline);
        document.head.appendChild(annotatorCss);
        document.body.appendChild(customRun);

        if (turnOff) {
            customRemove = document.createElement('script');
            customRemove.src = safari.extension.baseURI + 'cleanAnnotator.js';
            document.body.appendChild(customRemove);

            jqueryScript.parentNode.removeChild(jqueryScript);
            annotatorMin.parentNode.removeChild(annotatorMin);
            annotatorOffline.parentNode.removeChild(annotatorOffline);
            annotatorCss.parentNode.removeChild(annotatorCss);
            customRun.parentNode.removeChild(customRun);

            var annotatorAdder = document.querySelector('.annotator-adder');
            if (annotatorAdder) {
                annotatorAdder.parentNode.removeChild(annotatorAdder);
            }

            var els = document.getElementsByClassName('annotator-wrapper');
            if (els && typeof els[0] !== 'undefined') {
                els[0].classList.remove('annotator-wrapper');
                while (els[0]) {
                    els[0].classList.remove('annotator-wrapper');
                }
            }

            var anonotatorOuter = document.querySelectorAll(
                '.annotator-outer.annotator-editor.annotator-hide'
            )[0];
            if (typeof anonotatorOuter !== 'undefined') {
                anonotatorOuter.parentNode.removeChild(anonotatorOuter);
            }

            var annotatorNotice = document.querySelector('.annotator-notice');
            if (annotatorNotice) {
                annotatorNotice.parentNode.removeChild(annotatorNotice);
            }

            var temp = document.querySelector(
                '.annotator-outer.annotator-viewer.annotator-hide'
            );
            if (temp) {
                temp.parentNode.removeChild(temp);
            }

            var annotationId = document.querySelectorAll(
                'span[data-annotation-id]'
            );
            for (var i = 0; i < annotationId.length; i++) {
                annotationId[i].removeAttribute('data-annotation-id');
            }
        }
        // else {
        //     if (customRemove !== undefined) {
        //         removeJs(customRemove.src);
        //     }
        // }
    }
}

function initTurnOff(e) {
    turnOff = true;
}

// function removeJs(filename) {
//     var tags = document.getElementsByTagName('script');
//     for (var i = tags.length; i >= 0; i--) {
//         // console.log(tags[i]);
//         if (
//             tags[i] &&
//             tags[i].getAttribute('src') != null &&
//             tags[i].getAttribute('src').indexOf(filename) != -1
//         ) {
//             tags[i].parentNode.removeChild(tags[i]);
//             console.log('remove');
//         }
//     }
// }

safari.self.addEventListener('message', getAnswer, false);

window.addEventListener('load', initTurnOff);
