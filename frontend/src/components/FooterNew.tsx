import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
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
      <Container maxWidth="sm">
        <Box mt={1}>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            gutterBottom
            sx={{ color: "#ffffff" }}
          >
            {" run-with-us © "}
            <Link color="inherit" href="https://sardor-m.dev/">
              sardor-m
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
