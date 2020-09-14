import React from "react";
import { useParams } from "react-router-dom";
import Projects from "../projects.json";
import LazyImage from "./LazyImage";
import ImageContainer from "./image-container";

function Project() {
  let { nameProject } = useParams();

  return (
    <div className="popup">
      {Projects.filter((prod) => prod.parentName === nameProject).map(
        (filtered) => (
          <div>
            <div className="wrapperPopup container">
              <div className="inwrapper">
                <div>
                  <ImageContainer
                    src={"/image/top/" + filtered.top + ".jpg"}
                    thumb={"/image/top/" + filtered.top + ".jpg"}
                    height="600"
                    width="800"
                    alt="baby in a diaper on a gray bed"
                    url=""
                  />
                  {/* <img
                    className="imgTopPopUp"
                    src={"/image/top/" + filtered.top + ".jpg"}
                    alt="Kambiz Jalali"
                  /> */}
                </div>
                <div className="handletitlepopup">
                  <h1>
                    {filtered.name}
                    <span>Built in {filtered.built}</span>
                  </h1>
                </div>
                <div>
                  <p>{filtered.description}</p>
                </div>
                <div className="handleallimagepopup">
                  {filtered.popup.map((img) => (
                    <LazyImage
                      className="demo imgTopPopUp mfhddb"
                      aspectRatio={16 / 9}
                      lqip="data:image/jpeg;base64,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"
                      src={"/image/popup/" + img.name + ".jpg"}
                      alt="a woman covering face with frosted glass"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Project;
