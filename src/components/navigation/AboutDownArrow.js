import { Button } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

import { Link as ScrollLink } from "react-scroll";

function AboutDownArrow() {
  return (
    <footer id="icon-footer">
      <ScrollLink to="contact-section" spy={true} smooth={true} offset={-30} duration={500}>

        <Button id="single-arrow" startIcon={<ArrowDownward fontSize="60px" filter="drop-shadow(0.9px 0.9px 1px #080b13ff)" />}>
        </Button>

      </ScrollLink>
    </footer>
  );
}

export default AboutDownArrow;