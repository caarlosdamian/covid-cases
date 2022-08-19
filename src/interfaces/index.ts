import { IconType } from 'react-icons';

export type Irow = {
  date: number;
  states: number;
  positive: null | number;
  negative: null | number;
  pending: null | number;
  hospitalizedCurrently: null | number;
  hospitalizedCumulative: null | number;
  inIcuCurrently: null | number;
  inIcuCumulative: null | number;
  onVentilatorCurrently: null | number;
  onVentilatorCumulative: null | number;
  dateChecked: string;
  death: null | number;
  hospitalized: null | number;
  totalTestResults: number;
  lastModified: string;
  recovered: null | number;
  total: number;
  posNeg: number;
  deathIncrease: number;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
  hash: string;
};

export interface IFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

export interface ISidebarMenuItem {
  id: string;
  label: string;
  icon: IconType;
  url: string;
}

export interface ISidebarMenuCard {
  id: string;
  displayName: string;
  photoUrl: string;
}
