export interface ISidenav {
  _id: number
  routeLink: string;
  icon?: string;
  label: string;
  items?: ISidenav[];
}

export const sidenavData: ISidenav[] = [
  {
    _id: 1,
    routeLink: 'measure-system',
    icon: 'solar_power',
    label: 'Dimensionamento',
    items: [
      {
        _id: 1,
        routeLink: 'measure-system/low-voltage',
        label: 'Baixa Tensão'
      },
      {
        _id: 2,
        routeLink: 'measure-system/medium-voltage',
        label: 'Média Tensão'
      }
    ]
  },
  {
    _id: 2,
    routeLink: 'consumption-analysis',
    icon: 'offline_bolt',
    label: 'Analise de consumo'
  },
  {
    _id: 3,
    routeLink: 'power-of-attorney',
    icon: 'gavel',
    label: 'Procuração'
  }
]
