import Categories from "./component/Categories";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-100 to-orange-100 h-[100vh] pt-10 flex flex-col justify-center items-center space-y-5">
      <div className=" mt-20 space-y-4 ">
        <h1 className=" text-center md:text-5xl text-2xl font-bold">
          Student Learning Stages
        </h1>
        <p className=" text-center font-semibold md:text-2xl">
          Explore key learning areas, behaviors, and improvements by cycle level
        </p>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
