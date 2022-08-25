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

import { ISidebarMenuItem } from '../interfaces/index';

export const items: ISidebarMenuItem[] = [
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
