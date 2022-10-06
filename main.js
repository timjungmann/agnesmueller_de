const hereElements = document.getElementsByClassName("js-here-elem");

Array.from(hereElements).forEach((el) => {
    el.onclick = function () {
        el.classList.add("underline");
    };
    el.onauxclick = function () {
        el.classList.add("underline");
    };
});
