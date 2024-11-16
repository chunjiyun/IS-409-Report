new gridjs.Grid({
    columns: [ 
      { name: "Steps", width: '60px', formatter: (cell) => gridjs.html(`<div style="text-align: center;">${cell}</div>`) },
      { name: "Description", width: '400px' }
    ],
    data: [
        ["1", "Mold preparation: The mold should be compatible with the curing temperature which can go as high as 180 ℃. The surface of the mold should be clean and smooth"],
        ["2", "Lay-up: The prepreg sheets are cut to the desired shapes and sizes according to the mold. These prepreg layers are placed on the mold and meet the desired orientation and sequence. During each layer placement, gentle pressure is applied to remove any trapped air bubbles."],
        ["3", 
          gridjs.html(`
            <div style="background-color: lightblue;">
              <p>Vacuum Bagging: After prepreg sheets are laid up on the mold, auxiliary vacuum bagging materials like release film and breather fabric are placed on top of the prepreg lay-up. Then vacuum bagging film is used to create a vacuum bag and enclose the assembly in a sealed environment.</p>
            </div>
          `)],
        ["4", 
          gridjs.html(`
            <div style="background-color: lightblue;">
              <p>Applying vacuum: The vacuum bag is connected to the vacuum tube and the air inside the bag is removed. The pressure difference between the inside and outside of the bag causes it to compress tightly around the prepreg lay-up. This ensures the prepreg lay-up is compact and consolidated.</p>
            </div>
          `)],
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
      ["Price Per Roll (SGD)", "$1592", "5.47"],
      ["Dimensions", gridjs.html(`
        <div>
          <p>Length: 304m<br/>Width: 1.22m<br/>Thickness: 0.0508mm</p>
        </div>
      `), "7.62m per roll"],
      ["Elongation", "450%", "N/A"],
      ["Material", "Nylon", "Synthetic Rubber"]
  ],
}).render(document.getElementById("table-2"));

new gridjs.Grid({
  columns: [ 
    { name: "Material Properties", width: '250px' },
    { name: "SL850 Nylon Benchmark", width: '300px' },
    { name: "Rubber", width: '200px' },
    { name: "Silicone", width: '200px' }
  ],
  data: [
      ["Temperature", "204°C", "82°C", "315°C"],
      ["Elongation", "450%", "Up to 1000%", "Up to 1490%"],
      ["Durability", "Single-use", "Low", "High"]
  ],
}).render(document.getElementById("table-3"));

new gridjs.Grid({
  columns: [ 
    { name: "Silicone Specimen Thickness (mm)", width: '350px' },
    { name: "Elongation At Break (mm) ", width: '300px' },
    { name: "Elongation Rate (%)", width: '300px' },
    { name: "Tensile Strength (kN)", width: '300px' }
  ],
  data: [
      ["0.2", "167", "668", "0.0066"],
      ["0.5", "301", "1200", "0.026433"],
      ["1.2", "190", "760", "0.0324"],
      ["2.0", "179", "716", "0.06055"]
  ],
}).render(document.getElementById("table-4"));

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
