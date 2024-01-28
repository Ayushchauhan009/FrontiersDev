import React from "react";
// import './Preloader.css'

export default function Preloader() {
  return (
    <div className="bg-[#1a1a1a">
      <div class="wrapper">
        <div class="box-wrap">
          <div class="box one"></div>
          <div class="box two"></div>
          <div class="box three"></div>
          <div class="box four"></div>
          <div class="box five"></div>
          <div class="box six"></div>
        </div>
        <h1 className="text-white text-base text-center">Loading...</h1>
      </div>
    </div>
  );
}
