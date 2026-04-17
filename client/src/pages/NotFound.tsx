import BackBtn from "@/shared/components/BackBtn";

function NotFound() {
  return (
    <div className="layout-container flex-center flex-col text-center">
      <h1 className="text-[8rem] md:text-[12rem] font-bold text-on-background/20 select-none -mb-8">
        404
      </h1>
      <h2 className="md:text-display-md text-display-sm font-normal text-on-background mb-6">
        Fragment Not Found.
      </h2>
      <p className="text-body-lg md:text-xl font-light text-on-surface-variant max-w-md mb-12">
        The page you are looking for has been archived, moved, or never existed
        in this collection.
      </p>
      <BackBtn label="take me home" />
    </div>
  );
}

export default NotFound;
