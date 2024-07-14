import Header from "../components/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import ImageBanner from "../components/ImageBanner";

import "../css/pages/about.css"

function Work() {
  return (
    <div>
      <Header
        titlePart1="Our"
        titlePart2="Work"
        description="See how we help our clients become the future best versions of themselves each and every day."
        type="1"
      />
    </div>
  )
}

export default Work