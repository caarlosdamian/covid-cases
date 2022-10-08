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

export type CovidMxData = {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  confirmed_diff: number;
  deaths_diff: number;
  recovered_diff: number;
  last_update: string;
  active: number;
  active_diff: number;
  fatality_rate: number;
  region: {
    iso: string;
    name: string;
    province: string;
    lat: null | string;
    long: null | string;
  };
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
  component?: JSX.Element;
  collapse?: boolean;
}

export interface ISidebarMenuCard {
  id: string;
  displayName: string;
  photoUrl: string;
}

export interface State {
  api: {
    queries: {};
    mutations: {};
    provided: {};
    subscriptions: {};
    config: {
      online: boolean;
      focused: boolean;
      middlewareRegistered: boolean;
      refetchOnFocus: boolean;
      refetchOnReconnect: boolean;
      refetchOnMountOrArgChange: boolean;
      keepUnusedDataFor: number;
      reducerPath: string;
    };
  };
  login: {
    token: string;
    isLogged: boolean;
  };
  toggle: {
    isOpen: boolean;
  };
}
