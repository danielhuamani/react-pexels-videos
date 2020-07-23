import React from "react"
import { Header, HeaderContainer } from "./style"
import Logo from "../../images/uxlab.svg"
const HeaderMenu = () => (
  <Header>
    <HeaderContainer>
      <img src={Logo} width="60" alt="" />
    </HeaderContainer>
  </Header>
)
export default HeaderMenu
