import "./Sidebar.css";
import Logo from "../Logo/Logo";
import { SidebarSectionItem, type SidebarItemType } from "../../types";
import SidebarItem from "./SidebarItem";
import SidebarTitle from "./SidebarTitle";
import { useStore } from "../../store/useStore";
import {
  TbChartPie,
  TbUrgent,
  TbReportSearch,
  TbBookmark,
  TbSettings,
  TbLogout,
} from "react-icons/tb";

const Sidebar = () => {
  const isCollapsed = useStore((state) => state.isSidebarCollapsed);
  const logout = useStore((state) => state.logout);

  const sections = [
    {
      title: "Logging & Monitoring",
      items: [
        { title: "Dashboard", icon: TbChartPie, link: "/" },
        { title: "Logs", icon: TbReportSearch, link: "/logs" },
        { title: "Alert Queue", icon: TbUrgent, link: "/alerts" },
      ],
    },
    {
      title: "Threat Intelligence",
      items: [{ title: "Virus Total", icon: TbBookmark, link: "/virustotal" }],
    },
    {
      title: "System & Settings",
      items: [
        { title: "Settings", icon: TbSettings, link: "/settings" },
        { title: "Logout", icon: TbLogout, link: "/logout", action: logout },
      ],
    },
  ];

  const sectionItem = (section: SidebarSectionItem) => {
    return (
      <div key={section.title}>
        <SidebarTitle title={section.title} />
        {section.items.map((item: SidebarItemType) => {
          return sidebarItem(item);
        })}
      </div>
    );
  };

  const sidebarItem = (item: SidebarItemType) => {
    return (
      <SidebarItem
        key={item.title}
        title={item.title}
        icon={item.icon}
        link={item.link}
        action={item.action}
      />
    );
  };

  return (
    <div className={`sidebar ${!isCollapsed ? "sidebar-appear" : ""}`}>
      <Logo />
      <div className="items">
        {sections.map((section) => sectionItem(section))}
      </div>
    </div>
  );
};

export default Sidebar;
