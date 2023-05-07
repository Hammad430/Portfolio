import { useEffect } from "react";
import "./App.css";

function App() {
  const toggleAccordion = (panelToActivate) => {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents =
      panelToActivate.parentElement.querySelectorAll(".accordion-content");

    buttons.forEach((button) => {
      button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content) => {
      content.setAttribute("aria-hidden", true);
    });

    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
    panelToActivate
      .querySelector(".accordion-content")
      .setAttribute("aria-hidden", false);
  };

  useEffect(() => {
    const accordion = document.querySelector(".accordion");
    accordion.addEventListener("click", (e) => {
      const activePanel = e.target.closest(".accordion-panel");
      if (!activePanel) return;
      toggleAccordion(activePanel);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="accordion">
        <div className="accordion-panel">
          <h2 id="panel1-heading">
            <button
              className="accordion-trigger"
              aria-controls="panel1-content"
              aria-expanded="true"
            >
              <span className="accordion-title" id="panel1-title">
                Bio
              </span>
            </button>
          </h2>
          <div
            className="accordion-content"
            id="panel1-content"
            aria-labelledby="panel1-heading"
            aria-hidden="false"
            role="region"
          >
            <p>
              Port mutiny draught handsomely ye furl flogging line shrouds hulk.
              SPirts Plate Fleet code of conduct.
            </p>
            <p className="glitch">
              <span aria-hidden="true">Glitch Text</span>
              <span aria-hidden="true">Glitch Text</span>Glitch Text
            </p>
          </div>
        </div>
        <div className="accordion-panel">
          <h2 id="panel2-heading">
            <button
              className="accordion-trigger"
              aria-controls="panel2-content"
              aria-expanded="false"
            >
              <span className="accordion-title" id="panel2-title">
                Education
              </span>
            </button>
          </h2>
          <div
            className="accordion-content"
            id="panel2-content"
            aria-labelledby="panel2-heading"
            aria-hidden="true"
            role="region"
          >
            <p>
              Port mutiny draught handsomely ye furl flogging line shrouds hulk.
              SPirts Plate Fleet code of conduct.
            </p>
          </div>
        </div>
        <div className="accordion-panel">
          <h2 id="panel3-heading">
            <button
              className="accordion-trigger"
              aria-controls="panel3-content"
              aria-expanded="false"
            >
              <span className="accordion-title" id="panel3-title">
                Experience
              </span>
            </button>
          </h2>
          <div
            className="accordion-content"
            id="panel3-content"
            aria-labelledby="panel3-heading"
            aria-hidden="true"
            role="region"
          >
            <p>
              Port mutiny draught handsomely ye furl flogging line shrouds hulk.
              SPirts Plate Fleet code of conduct.
            </p>
          </div>
        </div>
        <div className="accordion-panel">
          <h2 id="panel4-heading">
            <button
              className="accordion-trigger"
              aria-controls="panel4-content"
              aria-expanded="false"
            >
              <span className="accordion-title" id="panel4-title">
                Technologies
              </span>
            </button>
          </h2>
          <div
            className="accordion-content"
            id="panel4-content"
            aria-labelledby="panel4-heading"
            aria-hidden="true"
            role="region"
          >
            <p>
              Port mutiny draught handsomely ye furl flogging line shrouds hulk.
              SPirts Plate Fleet code of conduct.
            </p>
          </div>
        </div>
        <div className="accordion-panel">
          <h2 id="panel5-heading">
            <button
              className="accordion-trigger"
              aria-controls="panel5-content"
              aria-expanded="false"
            >
              <span className="accordion-title" id="panel5-title">
                Projects
              </span>
            </button>
          </h2>
          <div
            className="accordion-content"
            id="panel5-content"
            aria-labelledby="panel5-heading"
            aria-hidden="true"
            role="region"
          >
            <p>
              Port mutiny draught handsomely ye furl flogging line shrouds hulk.
              SPirts Plate Fleet code of conduct.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
