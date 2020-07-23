import React from "react"
import LayoutDefault from "../layout/Default"
import Banner from "../components/Banner"
import BannerImage from "../images/banner.png"

const Home = () => (
  <LayoutDefault>
    <Banner img={BannerImage}></Banner>
  </LayoutDefault>
)

export default Home
