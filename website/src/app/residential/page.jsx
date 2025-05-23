import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ResSlider from "../components/resSlider";
import ResCard from "../components/resCards";
import Areas from "../components/areas";
import Satisfaction from "../components/satisfaction";

export default function ResidentialPage() {
  return (
    <div className="">
      <Navbar></Navbar>
        <ResSlider></ResSlider>
        <ResCard></ResCard>
        <Areas></Areas>
        <Satisfaction></Satisfaction>
      <Footer></Footer>
    </div>
  );
}
