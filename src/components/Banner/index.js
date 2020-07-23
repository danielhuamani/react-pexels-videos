import React from "react"
import { BannerImg } from "./style"

const Banner = (props) => (
  <div>
    <BannerImg src={props.img}></BannerImg>
  </div>
)
export default Banner
