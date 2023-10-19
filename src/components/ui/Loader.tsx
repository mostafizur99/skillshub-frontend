export const PageLoader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-8 border-t-themeSecondary" />
    </div>
  );
};

export const SectionLoader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="border-gray-300 h-14 w-14 animate-spin rounded-full border-8 border-t-themeSecondary" />
    </div>
  );
};
