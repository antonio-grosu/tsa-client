function Loading() {
  return (
    <div className="py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-white p-4 min-h-screen flex flex-col  justify-center items-center">
      <img
        src="/logo.svg"
        className=" bg-gray-500/10 rounded-md p-4  md:w-1/12 w-5/12 mx-auto animate-[ping_3s_ease-in-out_infinite] transition-all "
      />
    </div>
  );
}

export default Loading;
