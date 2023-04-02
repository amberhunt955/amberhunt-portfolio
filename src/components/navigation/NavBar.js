import { Link as PageLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { useState } from "react";
import { Button, Menu, MenuItem, Fade } from "@mui/material";

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav">
      <section className="left">
        <div className="home-nav">
          <PageLink to="/" style={{ textDecoration: "none" }}>
            <Button style={{ color: "black" }}
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Home
            </Button>
          </PageLink>

          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem>
              <ScrollLink onClick={handleClose} to="welcome-section" spy={true} smooth={true} duration={500}>
                Top of page
              </ScrollLink>
            </MenuItem>
            
            <MenuItem>
              <ScrollLink onClick={handleClose} to="projects-section" spy={true} smooth={true} offset={-30} duration={500}>
                Projects
              </ScrollLink>
            </MenuItem>

            <MenuItem>
              <ScrollLink onClick={handleClose} to="about-section" spy={true} smooth={true} offset={-30} duration={500}>
                About
              </ScrollLink>
            </MenuItem>

            <MenuItem>
              <ScrollLink onClick={handleClose} to="contact-section" spy={true} smooth={true} offset={-30} duration={500}>
                Contact
              </ScrollLink>
            </MenuItem>
          </Menu>
        </div>
      </section>

      <section className="right">
        <PageLink to="/media" style={{ textDecoration: "none" }}>
          <Button id="fade-button" style={{ color: "black" }}>Media</Button>
        </PageLink>

        <PageLink to="/blog" style={{ textDecoration: "none" }}>
          <Button id="fade-button" style={{ color: "black" }}>Blog</Button>
        </PageLink>
      </section>
    </nav>
  );
}

export default NavBar;