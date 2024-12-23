import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-between gap-5 mb-5 md:flex-row">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72} />}
        ></DashboardCard>
         <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={72} />}
        ></DashboardCard>
         <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={72} />}
        ></DashboardCard>
         <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={72} />}
        ></DashboardCard>
      </div>
    </>
  );
}
