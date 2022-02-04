// Sin SHADOW

/*function create(){
	const user=document.createElement("tag-name");
	const host=document.querySelector(".nam2")
	host.appendChild(user)
	
	user.classList.add('MyClass');
	user.dataset.cancion="meninaVeneno"

	console.log(host)

}

create()

class customTag extends HTMLElement{
	constructor(){
		super();
		this.innerHTML=`Agregago inside the tag-nam
		<style>
			tag-name {
				color:red;
			}
		</style>


		 `;

		// this.textContent=`hola`
		// this.innerText="holatext"
		// this.innerHTML=`holaHTML`
		
		console.log(`${this.getAttribute('data-cancion')}`);


	}
}
customElements.define("tag-name",customTag)
*/





/*Second Example*/

/*Making a Template*/
const template = document.createElement('template');
template.innerHTML = `
  <style>
  .user-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}

	.user-card img {
		width: 100%;
	}

	.user-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}

  </style>

  <div class="user-card">
    <img />
    <div>
      <h3></h3>
      <div class="info">
        <div><slot name="email" /></div>
        <div><slot name="phone" /></div>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>

`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if(this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('user-card', UserCard);