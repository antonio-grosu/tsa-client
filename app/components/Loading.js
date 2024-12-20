import Image from "next/image";
function Loading() {
  return (
    <div className="py-24 px-8 md:px-24 lg:px-36 xl:px-48 2xl:px-72 bg-neutral-950 text-white p-4 min-h-screen flex flex-col  justify-center items-center">
      {/* <Image
        priority
        width={500}
        height={500}
        src="/logo.svg"
        className=" bg-gray-500/10 rounded-md p-4  md:w-1/12 w-5/12 mx-auto animate-[ping_3s_ease-in-out_infinite] transition-all "
      /> */}
      <div className=" flex items-center justify-center md:w-3/12 w-9/12 text-sm rounded-sm animate-[ping_3s_ease-in-out_infinite] bg-green-300/30 border-2 mt-8 border-green-300 text-green-300 p-4 fira ">
        {" "}
        {`    bool loading = true ;`} <br />
      </div>
    </div>
  );
}

export default Loading;
