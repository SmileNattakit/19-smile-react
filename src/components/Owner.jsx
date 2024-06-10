const Owner = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-[85vh]">
      <div className="flex flex-col items-center  gap-5 mb-10">
        <p className="text-4xl font-bold">Smile - Genmate E - 19</p>
        <img
          src="../../src/assets/user.jpg"
          alt="User Profile"
          className="w-40 h-40 rounded-full my-5"
        />
        <p className="mx-20 md:mx-60 ">
          {`Hey there! 👋 I'm building projects and honing my software development skills
in the GENERATION THAILAND Junior Software Developer Bootcamp #7.`}
        </p>
      </div>
    </div>
  );
};

export default Owner;
