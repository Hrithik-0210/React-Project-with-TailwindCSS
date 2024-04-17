export const Shimmer = () => {
  return (
    <div className="flex flex-row flex-wrap gap-4 mx-3  ">
      {console.log("shimmer loading")}

      {Array(10)
        .fill("")
        .map((e) => (
          <div className="w-80 h-96 bg-slate-50 flex shadow-lg rounded-lg border mt-24 "></div>
        ))}
    </div>
  );
};

export const ShimmerRestaurantMenu = () => {
  return (
    <div className="shimmer-menu-container">
      {Array(8)
        .fill("")
        .map((e) => (
          <div className="shimmer-menu-card"></div>
        ))}
    </div>
  );
};
