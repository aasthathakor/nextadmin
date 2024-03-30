"use client";
import React from 'react'
import styles from "./sidebar.module.css";
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings,
MdHelpCenter, MdLogout, MdMenu} from "react-icons/md";
import MenuLink from './menuLink/menuLink';
import Image from 'next/image';
import Link from 'next/link';



const menuItems = [
  {
    title: "pages",
    list: [
      {
       title: "Dashboard",
       path: "/dashboard",
       icon: <MdDashboard />
      },

      {
        title: "Owner",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle/>
      },


      {
        title: "Property",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },

      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      },
    ],
  },

  {
    title: "Analytics",
    list:[
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />  
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      },
    ],
  },

{
  title: "User",
  list: [
    {
      title: "Settings",
      path: "/dashboard/settings",
      icon: <MdOutlineSettings />
    },
    {
      title: "Help",
      path: "/dashboard/help",
      icon: <MdHelpCenter />
    },
  ],
},
];



const Sidebar = () => {
  return (
    <>
    <MdMenu className=' text-white' />
    <div className={styles.container}>
    <div className={styles.user}>
      <Image className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
      <div className={styles.userDetail}>
      <span className={styles.username}>Super Admin</span>
      <span className={styles.userTitle}>Developer</span>
      </div>
    </div>
    <ul className={styles.list}>
    {menuItems.map((cat) => (
    <li key={cat.title}>
    <span className={styles.cat}>{cat.title}</span>
    {cat.list.map((item) => (
      <MenuLink item={item} key={item.title} />
    ))}
    </li>
    ))}
    </ul>
    <button className={styles.logout}>
    <MdLogout />
    Logout
    </button>
    </div>
    </>
  );
};

export default Sidebar