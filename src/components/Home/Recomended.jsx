import moviePoster from "../../img/movie poster.jpg";

const Recomended = () => {
  return (
    <section>
      <div className="w-4/5 container mx-auto mt-5">
        <h2 className="flex justify-start text-2xl text-white font-normal mb-5">Recommended for you</h2>
        <div className="main">
          <div className="card flex flex-col">
            <div>
              <img src={moviePoster} alt="" width={270} />
            </div>
            <div>
              <div className="flex mt-1">
                <p className="mr-1 text-white text-xs font-semibold">2019 -</p>
                <p className="mr-1 text-white text-xs font-semibold">Movie -</p>
                <p className=" text-white text-xs font-semibold">PG</p>
              </div>
              <div>
                <p className="text-white text-xl font-bold">Joker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomended;
