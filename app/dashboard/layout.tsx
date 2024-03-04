import SidePanel from "./SidePanel";

const DashboardLayout: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-screen h-screen justify-center border ">
      <main className="w-1/2">{children}</main>
    </div>
  );
};

export default DashboardLayout;
