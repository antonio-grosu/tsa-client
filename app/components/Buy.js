function Buy(props) {
  return (
    <div className="p-4 w-full md:w-8/12 md:block flex flex-col items-center bg-gray-500/10 border-2 rounded-md border-gray-500/50">
      {" "}
      <h3 className="text-bold text-xl font-bold poppins text-white">
        {/* Achiziționează Cursul pentru BAC! */}
        {props.title}
      </h3>
      <p className="text-sm poppins mt-4">
        {/* Nu rata șansa de a lua nota 10 (zece)! Cumpără acest curs și vezi
          progresul de la o săptămână la alta! */}
        {props.description}
      </p>
      <button
        onClick={props.function}
        className="mt-4 rounded-md w-full px-4 py-2 hover:shadow-md hover:scale-105 transition-all hover:shadow-lime-500 bg-lime-300 font-semibold text-gray-950 poppins"
      >
        {props.english ? "Buy" : "Cumpără"}{" "}
        <span className="font-bold text-xs">{props.price}</span>
      </button>
    </div>
  );
}

export default Buy;
