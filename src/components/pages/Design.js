import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import styles from "./Design.module.css";
import axios from "axios";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import DeleteIcon from "@mui/icons-material/Delete";
import BackspaceIcon from "@mui/icons-material/Backspace";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import PreviewIcon from "@mui/icons-material/Preview";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const [canvas, setCanvas] = useState("");
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/pic").then((response) => {
      console.log(response.data);
      setPictures(response.data);
    });
    setCanvas(initCanvas());
  }, []);
  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 343,
      width: 450,
      backgroundColor: "white",
    });

  // var rec = new fabric.Rect();
  const addText = () => {
    canvas.add(
      new fabric.IText("Helllo", {
        left: 20,
        top: 20,
        fill: "goldenrod",
        fontSize: 35,
      })
    );
  };
  var bin;
  var selectedObject;
  const addImage = (url) => {
    fabric.Image.fromURL(
      url,
      function (Img) {
        const oImg = Img.set({
          left: canvas.getWidth() / 2 - 16,
          scaleX: 82 / Img.width,
          scaleY: 82 / Img.height,
          scale: 1,
        });
        canvas.add(oImg);
      },

      { crossOrigin: "anonymous" }
    );

    // canvas.on("object:selected", function (evn) {
    //   selectedObject = evn.target;
    // });
    // canvas.on("mouse:up", function (evn) {
    //   var x = evn.e.offsetX;
    //   var y = evn.e.offsetY;
    //   if (
    //     x > bin.left &&
    //     x < bin.left + bin.width &&
    //     y > bin.top &&
    //     y < bin.top + bin.height
    //   ) {
    //     canvas.remove(selectedObject);
    //   }
    // });
  };

  const deletemage = () => {
    canvas.getActiveObjects().map((obj) => {
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  };

  const save = () => {
    var img = document.getElementById("db");
    img.href = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    // var url = canvas.lowerCanvasEl.toDataURL({
    //   format: "png",
    //   quality: 0.5,
    // });
    img.download = "canvas.png";
    axios
      .post("http://localhost:3001/userdesign", {
        Link: img.href,
      })
      .then((response) => {
        alert(response.data);
      });
  };
  const [link, setLink] = useState("");
  const [status, setStatus] = useState(false);
  const clearField = () => {
    canvas.getObjects().map((obj) => {
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  };
  const preview = () => {
    // var elem = document.getElementById("preview");
    var link = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    setLink(link);
    setStatus(true);
    // clearField();
  };

  return (
    <div className={styles.designContainer}>
      <div className={styles.leftContainer}>
        {pictures.map((item, index) => (
          <div key={index}>
            <img
              src={item.Link}
              onClick={() => {
                addImage(item.Link);
              }}
            />
          </div>
        ))}
      </div>
      <div className={styles.canvasSection}>
        <div>
          <button onClick={addText}>
            <TextFieldsIcon />
            text
          </button>
          {/* <button onClick={addImage}>Add Image</button> */}
          <button onClick={deletemage}>
            <DeleteIcon />
            Delete
          </button>
          <button onClick={clearField}>
            <BackspaceIcon style={{ marginRight: "5px" }} /> Clear
          </button>
        </div>

        {/* <button onClick={onSave}>Save</button> */}
        <canvas id="canvas" />
        <div className={styles.linksa}>
          <a id="db" download="canvas.png" onClick={save}>
            <SaveAltIcon />
            Save
          </a>
          <a id="preview" target="_blank" onClick={preview}>
            <PreviewIcon />
            Preview
          </a>
        </div>
      </div>
      {status && (
        <div className={styles.preview}>
          <CloseIcon
            className={styles.icon}
            onClick={() => {
              setStatus(false);
            }}
          />
          <img src={link} />
        </div>
      )}
    </div>
  );
};
export default App;
