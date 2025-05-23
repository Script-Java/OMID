import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AutoSlider from "../components/autoSlider";
import AutoCard from "../components/autoCards";
import Areas from "../components/areas";
import Satisfaction from "../components/satisfaction";

export default function AutoPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <AutoSlider></AutoSlider>
      <AutoCard></AutoCard>
      <Areas></Areas>
      <Satisfaction></Satisfaction>
      <Footer></Footer>
    </div>
  );
}
