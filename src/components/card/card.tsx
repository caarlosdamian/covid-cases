import './card.scss';

export interface ICard {
  label: string;
  value: number;
}

export const CardComponent = ({ label, value }: ICard) => (
  <div className="card-container" data-testid="card-testing">
    <span className="card-label">{label}</span>
    <p className="card-value">{value}</p>
  </div>
);
