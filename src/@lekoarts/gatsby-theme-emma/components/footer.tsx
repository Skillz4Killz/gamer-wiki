/** @jsx jsx */
import { Box, Link, Flex, jsx } from "theme-ui";
export const Footer = () => (
  <Box as="footer" variant="layout.footer">
    Copyright &copy; {new Date().getFullYear()}. All rights reserved.
    <br />
    <Flex
      sx={{
        justifyContent: `center`,
        alignItems: `center`,
        mt: 3,
        color: `text`,
        fontWeight: `semibold`,
        a: { color: `text` },
      }}
    />
  </Box>
);

export default Footer;
