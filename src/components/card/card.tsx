import './card.scss';

export interface ICard {
  label: string;
  value: number;
}

export const CardComponent = ({ label, value }: ICard) => (
  <div className="card-container">
    <div className="card-item" data-testid="card-testing">
      <div className="card-content-info">
        <span className="card-label">{label}</span>
        <p className="card-value">{value}</p>
      </div>
    </div>
  </div>
);