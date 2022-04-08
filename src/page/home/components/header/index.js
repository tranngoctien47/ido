import {
  StyledHeader,
  Menu,
  Logo,
  Span,
  Nav,
  StyledButton,
  MenuMoblie,
  IconMenu,
  NavMoblie,
  NavMoblieItem,
  StyledButtonMoblie,
  Item,
} from "./Header.styled";
import { listHeader } from "./Data";
import Image from "asset/svg/logo.svg";
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

function Header() {
  const wrapperRef = useRef();
  const [menu, setMenu] = useState(false);
  const [transparent, setTransparent] = useState(false);

  const handleMenuMoblie = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleUserScrolling);
    return () => {
      window.removeEventListener("scroll", handleUserScrolling);
    };
  }, [transparent]);

  const handleUserScrolling = () => {
    if (wrapperRef && wrapperRef.current) {
      const BOUNDARY_OF_TRANSPARANT_BG = wrapperRef.current.clientHeight;
      const scrollPosition = document.documentElement.scrollTop;
      if (scrollPosition > BOUNDARY_OF_TRANSPARANT_BG) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    }
  };
  return (
    <StyledHeader bg={menu ? menu : transparent} ref={wrapperRef}>
      <Container>
        <Nav>
          <Logo src={Image} />
          <Menu>
            {listHeader?.map((e, i) => (
              <Span key={i}>{e?.title}</Span>
            ))}
          </Menu>
          <StyledButton>WALLET CONNECT</StyledButton>
          <MenuMoblie onClick={handleMenuMoblie}>
            <IconMenu />
          </MenuMoblie>
        </Nav>
        <NavMoblie menu={menu && "active"}>
          <NavMoblieItem>
            {listHeader?.map((e, i) => (
              <Item key={i}>{e?.title}</Item>
            ))}
            <StyledButtonMoblie>WALLET CONNECT</StyledButtonMoblie>
          </NavMoblieItem>
        </NavMoblie>
      </Container>
    </StyledHeader>
  );
}

export default Header;
