import Following from "../others/following";
import Footer from "../others/footer";

const ExploreWid = () => {
  return (
    <div className="pl-20">
    <div className=" bg-black text-white flex">
      {/* Sidebar Container */}
      <div className="w-[350px] bg-black">
        <Following />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default ExploreWid;
