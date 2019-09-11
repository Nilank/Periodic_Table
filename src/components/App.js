import React, { Component, Fragment } from "react";
import { elements } from "./seed";
import Element from "./Element";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

document.title = "Assessment - Periodic Table";

class App extends Component {
  state = {
    showInfo: false,
    element: {}
  };

  showInfo = num => {
    this.setState({ showInfo: true, element: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  render() {
    let {
      name,
      summary,
      symbol,
      category,
      number,
      source,
      appearence,
      atomic_mass,
      molar_heat,
      density,
      melt,
      boil
    } = this.state.element;

    return (
      <div className="wrapper container">
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <span className="navbar-brand mb-0 h1" id="qSim">
              QSimulate
            </span>
          </nav>
        </div>
        <h1 className="center">Assessment - Periodic Table of Elements</h1>
        <div id="table">
          <Element showInfo={this.showInfo} num="1" />
          <Element showInfo={this.showInfo} num="2" />
          <Element showInfo={this.showInfo} num="3" />
          <Element showInfo={this.showInfo} num="4" />
          {this.state.showInfo ? (
            <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div
                  onClick={this.closeInfo}
                  className="close-button"
                  title="Close Info"
                >
                  Close [&times;]
                </div>
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearence ? (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearence}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="atom_info">
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat ? <span> | Molar Heat: {molar_heat}</span> : ""}
                    {melt ? <span> | Melt: {melt}K</span> : ""}
                    {boil ? <span> | Boil: {boil}K</span> : ""}
                  </div>
                  <div>
                    {summary} ...{" "}
                    <a target="_blank" href={source}>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            ""
          )}
          <Element showInfo={this.showInfo} num="5" />
          <Element showInfo={this.showInfo} num="6" />
          <Element showInfo={this.showInfo} num="7" />
          <Element showInfo={this.showInfo} num="8" />
          <Element showInfo={this.showInfo} num="9" />
          <Element showInfo={this.showInfo} num="10" />
          <Element showInfo={this.showInfo} num="11" />
          <Element showInfo={this.showInfo} num="12" />
          <Element showInfo={this.showInfo} num="13" />
          <Element showInfo={this.showInfo} num="14" />
          <Element showInfo={this.showInfo} num="15" />
          <Element showInfo={this.showInfo} num="16" />
          <ScrollUpButton />
          <Element showInfo={this.showInfo} num="17" />
          <Element showInfo={this.showInfo} num="18" />
          <Element showInfo={this.showInfo} num="19" />
          <Element showInfo={this.showInfo} num="20" />
          <Element showInfo={this.showInfo} num="21" />
          <Element showInfo={this.showInfo} num="22" />
          <Element showInfo={this.showInfo} num="23" />
          <Element showInfo={this.showInfo} num="24" />
          <Element showInfo={this.showInfo} num="25" />
          <Element showInfo={this.showInfo} num="26" />
          <Element showInfo={this.showInfo} num="27" />
          <Element showInfo={this.showInfo} num="28" />
          <Element showInfo={this.showInfo} num="29" />
          <Element showInfo={this.showInfo} num="30" />
          <Element showInfo={this.showInfo} num="31" />
          <Element showInfo={this.showInfo} num="32" />
          <Element showInfo={this.showInfo} num="33" />
          <Element showInfo={this.showInfo} num="34" />
          <Element showInfo={this.showInfo} num="35" />
          <Element showInfo={this.showInfo} num="36" />
          <Element showInfo={this.showInfo} num="37" />
          <Element showInfo={this.showInfo} num="38" />
          <Element showInfo={this.showInfo} num="39" />
          <Element showInfo={this.showInfo} num="40" />
          <Element showInfo={this.showInfo} num="41" />
          <Element showInfo={this.showInfo} num="42" />
          <Element showInfo={this.showInfo} num="43" />
          <Element showInfo={this.showInfo} num="44" />
          <Element showInfo={this.showInfo} num="45" />
          <Element showInfo={this.showInfo} num="46" />
          <Element showInfo={this.showInfo} num="47" />
          <Element showInfo={this.showInfo} num="48" />
          <Element showInfo={this.showInfo} num="49" />
          <Element showInfo={this.showInfo} num="50" />
          <Element showInfo={this.showInfo} num="51" />
          <Element showInfo={this.showInfo} num="52" />
          <Element showInfo={this.showInfo} num="53" />
          <Element showInfo={this.showInfo} num="54" />
          <Element showInfo={this.showInfo} num="55" />
          <Element showInfo={this.showInfo} num="56" />
          <Element showInfo={this.showInfo} num="57" />
          <Element showInfo={this.showInfo} num="72" />
          <Element showInfo={this.showInfo} num="73" />
          <Element showInfo={this.showInfo} num="74" />
          <Element showInfo={this.showInfo} num="75" />
          <Element showInfo={this.showInfo} num="76" />
          <Element showInfo={this.showInfo} num="77" />
          <Element showInfo={this.showInfo} num="78" />
          <Element showInfo={this.showInfo} num="79" />
          <Element showInfo={this.showInfo} num="80" />
          <Element showInfo={this.showInfo} num="81" />
          <Element showInfo={this.showInfo} num="82" />
          <Element showInfo={this.showInfo} num="83" />
          <Element showInfo={this.showInfo} num="84" />
          <Element showInfo={this.showInfo} num="85" />
          <Element showInfo={this.showInfo} num="86" />
          <Element showInfo={this.showInfo} num="87" />
          <Element showInfo={this.showInfo} num="88" />
          <Element showInfo={this.showInfo} num="89" />
          <Element showInfo={this.showInfo} num="104" />
          <Element showInfo={this.showInfo} num="105" />
          <Element showInfo={this.showInfo} num="106" />
          <Element showInfo={this.showInfo} num="107" />
          <Element showInfo={this.showInfo} num="108" />
          <Element showInfo={this.showInfo} num="109" />
          <Element showInfo={this.showInfo} num="110" />
          <Element showInfo={this.showInfo} num="111" />
          <Element showInfo={this.showInfo} num="112" />
          <Element showInfo={this.showInfo} num="113" />
          <Element showInfo={this.showInfo} num="114" />
          <Element showInfo={this.showInfo} num="115" />
          <Element showInfo={this.showInfo} num="116" />
          <Element showInfo={this.showInfo} num="117" />
          <Element showInfo={this.showInfo} num="118" />
          <Element showInfo={this.showInfo} num="119" />
          <Element showInfo={this.showInfo} num="58" />
          <Element showInfo={this.showInfo} num="59" />
          <Element showInfo={this.showInfo} num="60" />
          <Element showInfo={this.showInfo} num="61" />
          <Element showInfo={this.showInfo} num="62" />
          <Element showInfo={this.showInfo} num="63" />
          <Element showInfo={this.showInfo} num="64" />
          <Element showInfo={this.showInfo} num="65" />
          <Element showInfo={this.showInfo} num="66" />
          <Element showInfo={this.showInfo} num="67" />
          <Element showInfo={this.showInfo} num="68" />
          <Element showInfo={this.showInfo} num="69" />
          <Element showInfo={this.showInfo} num="70" />
          <Element showInfo={this.showInfo} num="71" />
          <Element showInfo={this.showInfo} num="90" />
          <Element showInfo={this.showInfo} num="91" />
          <Element showInfo={this.showInfo} num="92" />
          <Element showInfo={this.showInfo} num="93" />
          <Element showInfo={this.showInfo} num="94" />
          <Element showInfo={this.showInfo} num="95" />
          <Element showInfo={this.showInfo} num="96" />
          <Element showInfo={this.showInfo} num="97" />
          <Element showInfo={this.showInfo} num="98" />
          <Element showInfo={this.showInfo} num="99" />
          <Element showInfo={this.showInfo} num="100" />
          <Element showInfo={this.showInfo} num="101" />
          <Element showInfo={this.showInfo} num="102" />
          <Element showInfo={this.showInfo} num="103" />
        </div>
        <br />
        <div className="center">
          <div className="metalCategory">
            <p>
              <a
                className="btn btn-primary"
                data-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
                id="alk"
              >
                Alkali Metals
              </a>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample2"
                aria-expanded="false"
                aria-controls="multiCollapseExample2"
                id="earth"
              >
                Alkaline Earth
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample3"
                aria-expanded="false"
                aria-controls="multiCollapseExample3"
                id="transit"
              >
                Transition Metal
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample4"
                aria-expanded="false"
                aria-controls="multiCollapseExample4"
                id="basic"
              >
                Basic Metal
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample5"
                aria-expanded="false"
                aria-controls="multiCollapseExample5"
                id="semi"
              >
                Semimetal
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample6"
                aria-expanded="false"
                aria-controls="multiCollapseExample6"
                id="non"
              >
                Nonmetal
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample7"
                aria-expanded="false"
                aria-controls="multiCollapseExample7"
                id="halo"
              >
                Halogen
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample8"
                aria-expanded="false"
                aria-controls="multiCollapseExample8"
                id="nob"
              >
                Noble Gas
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample9"
                aria-expanded="false"
                aria-controls="multiCollapseExample9"
                id="lan"
              >
                Lanthanide
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-toggle="collapse"
                data-target="#multiCollapseExample10"
                aria-expanded="false"
                aria-controls="multiCollapseExample10"
                id="act"
              >
                Actinide
              </button>
            </p>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample1"
                >
                  <div className="card card-body">
                    The alkali metals, found in group 1 of the periodic table
                    (formerly known as group IA), are very reactive metals that
                    do not occur freely in nature. These metals have only one
                    electron in their outer shell. Therefore, they are ready to
                    lose that one electron in ionic bonding with other elements.
                    As with all metals, the alkali metals are malleable,
                    ductile, and are good conductors of heat and electricity.
                    The alkali metals are softer than most other metals. Cesium
                    and francium are the most reactive elements in this group.
                    Alkali metals can explode if they are exposed to water.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="http://www.chemicalelements.com/groups/alkali.html">
                        Chemical Elements.com
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <div className="card card-body">
                  The alkaline earth elements are metallic elements found in the
                  second group of the periodic table. All alkaline earth
                  elements have an oxidation number of +2, making them very
                  reactive. Because of their reactivity, the alkaline metals are
                  not found free in nature.
                  <footer className="blockquote-footer">
                    Content Reference{" "}
                    <a href="http://www.chemicalelements.com/groups/alkaline.html">
                      Chemical Elements.com
                    </a>
                  </footer>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample3"
                >
                  <div className="card card-body">
                    The 38 elements in groups 3 through 12 of the periodic table
                    are called "transition metals". As with all metals, the
                    transition elements are both ductile and malleable, and
                    conduct electricity and heat. The interesting thing about
                    transition metals is that their valence electrons, or the
                    electrons they use to combine with other elements, are
                    present in more than one shell. This is the reason why they
                    often exhibit several common oxidation states. There are
                    three noteworthy elements in the transition metals family.
                    These elements are iron, cobalt, and nickel, and they are
                    the only elements known to produce a magnetic field.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="http://www.chemicalelements.com/groups/transition.html">
                        Chemical Elements.com
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample4"
                >
                  <div className="card card-body">
                    Metals, shiny solids, are room temperature (except mercury,
                    which is a shiny liquid element), with characteristic high
                    melting points and densities. Many of the properties of
                    metals, including a large atomic radius, low ionization
                    energy, and low electronegativity, are because the electrons
                    in the valence shell of metal atoms can be removed easily.
                    One characteristic of metals is their ability to be deformed
                    without breaking. Malleability is the ability of a metal to
                    be hammered into shapes.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="https://www.thoughtco.com/properties-basic-metals-element-group-606654">
                        ThoughtCo.
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample5"
                >
                  <div className="card card-body">
                    Semimetals or metalloids are chemical elements that have
                    properties of both metals and nonmetals. Metalloids are
                    important semiconductors, often used in computers and other
                    electronic devices. Metalloids are used to make
                    semiconductors, ceramics, polymers, and batteries.
                    Metalloids tend to be shiny, brittle solids that act as
                    insulators at room temperature but as conductors when heated
                    or combined with other elements.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="https://www.thoughtco.com/semimetals-or-metalloids-list-606662">
                        ThoughtCo.
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample6"
                >
                  <div className="card card-body">
                    Non-metals are the elements in groups 14-16 of the periodic
                    table. Non-metals are not able to conduct electricity or
                    heat very well. As opposed to metals, non-metallic elements
                    are very brittle, and cannot be rolled into wires or pounded
                    into sheets. The non-metals exist in two of the three states
                    of matter at room temperature: gases (such as oxygen) and
                    solids (such as carbon). The non-metals have no metallic
                    luster, and do not reflect light. They have oxidation
                    numbers of ±4, -3, and -2.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="http://www.chemicalelements.com/groups/nonmetals.html">
                        Chemical Elements.com
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample7"
                >
                  <div className="card card-body">
                    The halogens are five non-metallic elements found in group
                    17 of the periodic table. The term "halogen" means
                    "salt-former" and compounds containing halogens are called
                    "salts". All halogens have 7 electrons in their outer
                    shells, giving them an oxidation number of -1. The halogens
                    exist, at room temperature, in all three states of matter:
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="http://www.chemicalelements.com/groups/halogens.html">
                        Chemical Elements.com
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample8"
                >
                  <div className="card card-body">
                    The six noble gases are found in group 18 of the periodic
                    table. These elements were considered to be inert gases
                    until the 1960's, because their oxidation number of 0
                    prevents the noble gases from forming compounds readily. All
                    noble gases have the maximum number of electrons possible in
                    their outer shell (2 for Helium, 8 for all others), making
                    them stable.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="http://www.chemicalelements.com/groups/noblegases.html">
                        Chemical Elements.com
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample9"
                >
                  <div className="card card-body">
                    The lanthanides or F Block elements are a set of elements of
                    the periodic table. While there is some dispute over which
                    elements to include in the group, the lanthanides generally
                    include the following 15 elements.The lanthanides are
                    reactive, silver-colored metals.The most stable oxidation
                    state for lanthanide atoms is +3, but the +2 and +4
                    oxidation states are also common.Although the lanthanides
                    are sometimes called the rare earths, the elements are not
                    particularly rare. However, they are difficult to separate
                    from one another.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="https://www.thoughtco.com/lanthanides-properties-606651">
                        ThoughtCo
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="collapse multi-collapse"
                  id="multiCollapseExample10"
                >
                  <div className="card card-body">
                    The actinides or actinoids are a set of radioactive elements
                    on the periodic table, usually considered ranging from
                    atomic number 89 to atomic number 103. There are 15 actinide
                    elements. The electronic configurations of the actinides
                    utilize the f sublevel, with the exception of lawrencium (a
                    d-block element). Depending on your interpretation of the
                    periodicity of the elements, the series begins with actinium
                    or thorium, continuing to lawrencium.
                    <footer className="blockquote-footer">
                      Content Reference{" "}
                      <a href="https://www.thoughtco.com/actinides-606643">
                        ThoughtCo
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <p>
            &copy; <strong> QSimulate - Periodic Table Of Elements 2019</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
