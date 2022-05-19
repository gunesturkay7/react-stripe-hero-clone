import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments Infrastructure for the Internet</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            sunt eum rerum earum? Repellendus obcaecati esse ratione incidunt
            aliquam veniam quo? Eos aut et laudantium error cumque iste corrupti
            enim?
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
