/** @jsx jsx */
import { Footer as ThemeFooter, Flex, jsx } from "theme-ui";

const Footer = () => (
  <ThemeFooter>
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    <br />
    <Flex
      sx={{
        justifyContent: `center`,
        alignItems: `center`,
        mt: 3,
        color: `text`,
        fontWeight: `semibold`,
        a: { color: `text` }
      }}
    />
  </ThemeFooter>
);

export default Footer;
