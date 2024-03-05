import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

export default function App() {
  const container = useRef();

  useGSAP(() => {
    gsap.to(".box", { 
      x: "100vw",  
      rotation: "+=360", 
      xPercent: -100,
      duration: 3, 
      yoyo: true, 
      repeat: 5
    })
  }, {scope: container})

  return (
    <div ref={container} className="container">
      <div className="box green"></div>
    </div>
  );
}
