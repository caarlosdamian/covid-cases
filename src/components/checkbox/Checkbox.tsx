import './Checkbox.scss';

export interface ICheckbox {
  labelCheckbox: string;
}

export const Checkbox = ({ labelCheckbox }: ICheckbox) => (
  <div>
    <label
      htmlFor="input-id"
      className="container"
      data-testid="checkbox-testing"
    >
      {labelCheckbox}
      <input
        id="input-id"
        className="label-input-checkbox"
        type="checkbox"
        data-testid="INPUT_ID"
      />
      <span className="checkmark" />
    </label>
  </div>
);
