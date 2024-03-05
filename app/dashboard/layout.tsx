import SidePanel from "./SidePanel";

const DashboardLayout: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-screen h-screen justify-center border ">
      <aside>
        <SidePanel />
      </aside>
      <main className="w-1/2 border border-green">{children}</main>
    </div>
  );
};

export default DashboardLayout;
