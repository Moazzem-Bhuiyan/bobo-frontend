import CycleHeroSection from "@/components/shared/Navber/CycleHeroSection";
import CycleForm from "../CycleOne/CycleForm";
import CycleThreeForm from "./CyclethreeForm";

const CycleThree = () => {
  return (
    <div>
      <section>
        <CycleHeroSection bgImage="/herothree.png" />
      </section>

      <CycleThreeForm></CycleThreeForm>
    </div>
  );
};

export default CycleThree;
