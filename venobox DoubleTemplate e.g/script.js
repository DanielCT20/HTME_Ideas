$(document).ready(function() {
    $('.venobox').venobox({
        bgcolor: 'white',
        border: '10px', // default: '0'
        share: ['facebook', 'twitter', 'linkedin'], // default: []
        titleattr: 'image',
    });
});

/* ---------------------- template ---------------------- */

const template = document.createElement("template");
tr = template.innerHTML = `
<div class="hideVenobox" style="display:none;">
<img class="srcFile" src="" />
</div>
`

/* ---------------- new venobox template ---------------- */
const templateNew = document.createElement("template");
templateNew.innerHTML = `
<div class="cboxTemplate d-flex justify-content-center" >
    <div class="cBox">

        <a class="venobox copyVen copyVen2" data-gall="gallery01" data-vbtype="inline" title="frutas" data-title="Frutas" href=".hideVenobox">
            <img  src="" />
            <div class="hideVenobox"></div>
        </a>

    </div>
</div>
`;


class newVenobox extends HTMLElement {

    constructor() {
        super();
        this.appendChild(templateNew.content.cloneNode(true));
        this.querySelector('img').src = this.getAttribute('src-nv');


    }
    connectedCallback() {
        // this.querySelector(".copyVen").appendChild(template.content.cloneNode(true));
        // this.querySelector('.srcFile').src = this.getAttribute('src-nv');
        // console.log(this)
    }

}
window.customElements.define('new-venobox', newVenobox);

function copy() {
    let nodeList = document.querySelectorAll(".copyVen");
    let nodeListB = document.querySelectorAll(".copyVen2")
    let elements = Array.from(nodeList);
    var fragment = new DocumentFragment()
    for (var i = 0; i < elements.length; i++) {
        fragment.appendChild(elements[i]);
        nodeListB.appendChild(elements[i]);
    }

    // console.log(fragment)
}

// copy()


// console.log(this.querySelector(".hideVenobox").dataset.name)
// this.querySelector(".hidediv").appendChild()
// var selectorA = this.getAttribute('src-nv');
// var selectorB = this.querySelector(".nevB")
// var node = document.createElement("div")
// var nodeimg = document.createElement("img")

// selectorB.appendChild(node).appendChild(nodeimg).src = selectorA

// this.querySelector('.copyVen') trmplate1