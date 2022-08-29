import React from 'react';
import { ISidebarMenuCard } from '../../interfaces/index';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';
import imageProfile from '../../assets/img_cv.jpg';
import { items } from '../../routes';

export const SidebarPage = () => {
  const card: ISidebarMenuCard = {
    id: 'card01',
    displayName: 'Diego Villaseñor',
    photoUrl: imageProfile,
  };

  return <SidebarMenu items={items} card={card} />;
};
