import React from 'react';
import {
  VscHome,
  VscCalendar,
  VscComment,
  VscBriefcase,
  VscGraphLine,
  VscIssues,
  VscBell,
  VscSettingsGear,
} from 'react-icons/vsc';

import { ISidebarMenuCard, ISidebarMenuItem } from '../../interfaces/index';
import { SidebarMenu } from './SidebarMenu';
import imageProfile from '../../assets/img_cv.jpg';
import './SidebarMenu.scss';

export function SidebarPage() {
  const items: ISidebarMenuItem[] = [
    {
      id: '1',
      label: 'Home',
      icon: VscHome,
      url: '/',
    },
    { id: '2', label: 'Calendar', icon: VscCalendar, url: '/' },
    { id: '3', label: 'Message', icon: VscComment, url: '/' },
    { id: '4', label: 'Projects', icon: VscBriefcase, url: '/' },
    { id: '5', label: 'Progress', icon: VscGraphLine, url: '/' },
    { id: '6', label: 'Goals', icon: VscIssues, url: '/' },
    { id: '7', label: 'Notifications', icon: VscBell, url: '/' },
    { id: '8', label: 'Settings', icon: VscSettingsGear, url: '/' },
  ];

  const card: ISidebarMenuCard = {
    id: 'card01',
    displayName: 'Diego Villaseñor',
    photoUrl: imageProfile,
  };

  return (
    <div className="sidebar-page">
      <SidebarMenu items={items} card={card} />
    </div>
  );
}
