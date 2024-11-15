new gridjs.Grid({
    columns: [ 
      { name: "Steps", width: '100px', formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
      { name: "Description", width: '400px' }
    ],
    data: [
        ["1", "Mold preparation: The mold should be compatible with the curing temperature which can go as high as 180 ℃. The surface of the mold should be clean and smooth"],
        ["2", "Lay-up: The prepreg sheets are cut to the desired shapes and sizes according to the mold. These prepreg layers are placed on the mold and meet the desired orientation and sequence. During each layer placement, gentle pressure is applied to remove any trapped air bubbles."],
        ["3", "Vacuum Bagging: After prepreg sheets are laid up on the mold, auxiliary vacuum bagging materials like release film and breather fabric are placed on top of the prepreg lay-up. Then vacuum bagging film is used to create a vacuum bag and enclose the assembly in a sealed environment."],
        ["4", "Applying vacuum: The vacuum bag is connected to the vacuum tube and the air inside the bag is removed. The pressure difference between the inside and outside of the bag causes it to compress tightly around the prepreg lay-up. This ensures the prepreg lay-up is compact and consolidated."],
        ["5", "Curing: The vacuum sealed prepreg assembly is placed inside a high temperature autoclave (or an oven). This fully cures the resin, bonding the fiber layers together."],
        ["6", "Demolding: When the curing is complete, the vacuum bag and the auxiliary materials are removed. Then the composite part is carefully removed from the mold."],
    ],
}).render(document.getElementById("table-1"));

new gridjs.Grid({
  columns: [ 
    { name: "", formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
    { name: "Conventional Vacuum Bagging Film", width: '350px' },
    { name: "Sealant Tape", width: '300px' }
  ],
  data: [
      ["Product Name",  
        gridjs.html(`
        <div style="text-align: center;">
          <p>Airtech Stretchlon Bagging Film SL850</p>
          <img src="assets/bagging-film.png" alt="Bagging Film" style="width:200px; height:200px;">
        </div>
      `), 
      gridjs.html(`
        <div style="text-align: center;">
          <p>Airtech Sealant Tape <br/>AT-200Y</p>
          <img src="assets/sealant-tape.png" alt="Bagging Film" style="width:200px; height:200px;">
        </div>
      `)],
  ],
}).render(document.getElementById("table-2"));

class TableComponent extends HTMLElement {
    static get observedAttributes() {
        return ["subtitle"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, _, newValue) {
        this[name] = newValue;
    }

    render() {
        const div = document.createElement("div");
        div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

        this.shadowRoot.appendChild(div);
    }
}

customElements.define("table-component", TableComponent);
