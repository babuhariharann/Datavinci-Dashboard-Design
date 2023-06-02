const Dashboard = ({
  dashboard,
  Listing,
  Revenue,
  SaleProgress,
  revenue,
  saleProgress,
}) => {
  return (
    <>
      <div className="mt-8 mx-10 w-auto">
        <Listing dashboard={dashboard} />
        <div className="grid sm:grid-cols-1 xl:grid-cols-2">
          <Revenue revenue={revenue} />
          <SaleProgress saleProgress={saleProgress} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
