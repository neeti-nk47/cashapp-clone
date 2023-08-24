const MobileLastSection = () => {
  return (
    <section className="h-[100dvh] bg-black snap-start relative overflow-hidden flex justify-center items-center">
      <div className="flex flex-col gap-8 items-center justify-center w-[86dvw]">
        <div>
          <h1 className="text-xl text-white font-Agrandir mob:!text-[16px]">
            Policy terms
          </h1>
          <p className="revsmlap:w-[350px] mob:!w-[86dvw] text-white font-Mulish mob:text-sm smlap:w-[300px]">
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileLastSection;
