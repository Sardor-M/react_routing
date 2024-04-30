import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function FooterNew() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
        bgcolor: "#171717",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "#ffffff" }}
              fontSize={"24px"}
            >
              About Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              Run-With-Us, dedicated to providing the best service to our users.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "#ffffff" }}
              fontSize={"24px"}
            >
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              123 Yongsan, Seoul, South Korea
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              Email: sardor0968@gmail.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              Phone: +323 23023 23 232
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ color: "#ffffff" }}
              fontSize={"24px"}
            >
              Follow Us
            </Typography>
            <Link
              href="https://www.facebook.com/"
              color="inherit"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.twitter.com/"
              color="inherit"
              gutterBottom
              sx={{ color: "#ffffff" }}
            >
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            gutterBottom
            sx={{ color: "#ffffff" }}
          >
            {"Sardor-M © "}
            <Link color="inherit" href="https://sardor-m.dev/">
              Personal Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
