

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { Link } from "react-router-dom"; 
// Images
import bgImage from "assets/images/annie-spratt-hCb3lIB8L8E-unsplash.jpg";


//Button
// @mui material components
import MKButton from "components/MKButton";

// TO-DO: Align the page according to different devices
function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          route: "/pages/authentication/sign-in", 
          label: "Get Started",
          color: "info",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 12, lg: 7 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          minHeight: "28vh", // Ensures the card stretches downwards
          display: "flex", // Flexbox layout
          flexDirection: "column", // Column direction
          justifyContent: "center", // Center content vertically

        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="dark"
              mt={-5}
              mb={2}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Project Teammate Finder{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="dark"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Looking to collaborate with like-minded people?
You are at the right place!

            </MKTypography>
            <Link to="/pages/authentication/sign-in" style={{ textDecoration: "none" }}>
            <MKButton variant="gradient" color="info" sx={{ mt: 2 }}>
              Les goooo
            </MKButton>
            </Link>
          </Grid>
        </Container>
      
        
        
        
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
