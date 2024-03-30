import { useEffect, useRef, useState } from "react";

import style from "./index.module.scss";

window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

function CanvasBg() {
  // const [curvesArray, setCurvesArray] = useState([]);
  const canvasRef = useRef(null);

  const awd_bg_number_of_curves = 64;
  let curvesArray = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function awdCanvasResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    awdCanvasResize();
    window.addEventListener("resize", awdCanvasResize);

    awdCanvas();
    function curve(
      abc1x,
      abc1y,
      abc2x,
      abc2y,
      x,
      y,
      abc1xvx,
      abc1xvy,
      abc1yvx,
      abc1yvy,
      abc2xvx,
      abc2xvy,
      abc2yvx,
      abc2yvy
    ) {
      this.abc1x = abc1x;
      this.abc1y = abc1y;
      this.abc2x = abc2x;
      this.abc2y = abc2y;
      this.x = x;
      this.y = y;

      this.abc1xvx = abc1xvx;
      this.abc1xvy = abc1xvy;
      this.abc1yvx = abc1yvx;
      this.abc1yvy = abc1yvy;

      this.abc2xvx = abc2xvx;
      this.abc2xvy = abc2xvy;
      this.abc2yvx = abc2yvx;
      this.abc2yvy = abc2yvy;
    }

    function awdCanvasInit() {
      for (let i = 0; i < awd_bg_number_of_curves; i++) {
        let abc1x = Math.random() * canvas.width;
        let abc1y = Math.random() * canvas.height;
        let abc2x = Math.random() * canvas.width;
        let abc2y = Math.random() * canvas.height;
        let x = 0;
        let y = 0;

        let abc1xvx = Math.random() * 2 - 1;
        let abc1xvy = Math.random() * 2 - 1;

        let abc1yvx = Math.random() * 2 - 1;
        let abc1yvy = Math.random() * 2 - 1;

        let abc2xvx = Math.random() * 2 - 1;
        let abc2xvy = Math.random() * 2 - 1;

        let abc2yvx = Math.random() * 2 - 1;
        let abc2yvy = Math.random() * 2 - 1;

        curvesArray.push(
          new curve(
            abc1x,
            abc1y,
            abc2x,
            abc2y,
            x,
            y,
            abc1xvx,
            abc1xvy,
            abc1yvx,
            abc1yvy,
            abc2xvx,
            abc2xvy,
            abc2yvx,
            abc2yvy
          )
        );
      }
    }

    function awdCanvasDraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "";

      for (let i = 0; i < curvesArray.length; i++) {
        ctx.beginPath();
        ctx.moveTo(-100, canvas.height + 100);
        ctx.bezierCurveTo(
          curvesArray[i].abc1x,
          curvesArray[i].abc1y,
          curvesArray[i].abc2x,
          curvesArray[i].abc2y,
          canvas.width + 100,
          curvesArray[i].y - 100
        );
        ctx.stroke();

        if (curvesArray[i].abc1x < 0 || curvesArray[i].abc1x > canvas.width) {
          curvesArray[i].abc1x -= curvesArray[i].abc1xvx;
          curvesArray[i].abc1xvx *= -1;
        }
        if (curvesArray[i].abc1y < 0 || curvesArray[i].abc1y > canvas.height) {
          curvesArray[i].abc1y -= curvesArray[i].abc1yvy;
          curvesArray[i].abc1yvy *= -1;
        }

        if (curvesArray[i].abc2x < 0 || curvesArray[i].abc2x > canvas.width) {
          curvesArray[i].abc2x -= curvesArray[i].abc2xvx;
          curvesArray[i].abc2xvx *= -1;
        }
        if (curvesArray[i].abc2y < 0 || curvesArray[i].abc2y > canvas.height) {
          curvesArray[i].abc2y -= curvesArray[i].abc2yvy;
          curvesArray[i].abc2yvy *= -1;
        }

        curvesArray[i].abc1y += curvesArray[i].abc1yvy;
        curvesArray[i].abc1x += curvesArray[i].abc1xvx;
        curvesArray[i].abc2x += curvesArray[i].abc2xvx;
      }
      requestAnimFrame(awdCanvasDraw);
    }

    function awdCanvas() {
      awdCanvasInit();
      awdCanvasDraw();
    }

    return () => window.removeEventListener("resize", awdCanvasResize);
  }, []);

  return (
    <div className={style.canvasBg}>
      <div id="overlay">
        <div className={style.bgHome}></div>
        <div className={style.bgHack}></div>
        <div className={style.bgCv}></div>
        <div className={style.bgConsulting}></div>
        <div className={style.bgDonation}></div>
      </div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default CanvasBg;
