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
import { ISidebarMenuItem } from '../interfaces';
import { DataGrid } from '../pages/datagrid/DataGrid';
import { Calendar } from '../pages/calendar/Calendar';
import { Overview } from '../pages/overview/Overview';

export const items: ISidebarMenuItem[] = [
  {
    id: '1',
    label: 'Home',
    icon: VscHome,
    url: '/',
    component: <DataGrid />,
  },
  {
    id: '2',
    label: 'Calendar',
    icon: VscCalendar,
    url: '/calendar',
    component: <Calendar />,
  },
  {
    id: '3',
    label: 'Overview',
    icon: VscComment,
    url: '/overview',
    component: <Overview />,
  },
  { id: '4', label: 'Projects', icon: VscBriefcase, url: '/' },
  { id: '5', label: 'Progress', icon: VscGraphLine, url: '/' },
  { id: '6', label: 'Goals', icon: VscIssues, url: '/' },
  { id: '7', label: 'Notifications', icon: VscBell, url: '/' },
  { id: '8', label: 'Settings', icon: VscSettingsGear, url: '/' },
];
