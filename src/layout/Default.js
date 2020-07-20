import React from "react"
import HeaderMenu from "../components/Header"

const LayoutDefault = (props) => (
  <>
    <HeaderMenu></HeaderMenu>
    <main>{props.children}</main>
  </>
)

export default LayoutDefault
