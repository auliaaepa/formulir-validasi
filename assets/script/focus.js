var fixedfocus = {
    init: function(fixedElem) {
        fixedfocus.fixedElem = fixedElem;
        document.body.addEventListener('focusin', fixedfocus.adjust);
    },
    
    adjust: function(e) {
        var fixedBottomPos = fixedfocus.fixedElem.getBoundingClientRect().bottom;
        var rect = e.target.getBoundingClientRect();
        if (rect.top < fixedBottomPos + 60) {
            window.scrollBy(0, rect.top - fixedBottomPos - 30);
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    fixedfocus.init(document.querySelector('header'));
});