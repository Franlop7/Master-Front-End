import { css } from 'emotion';

export const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  column-gap: 10px;
  row-gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
    column-gap: 5px;
  }

  div:last-child {
    margin-top: 10px;
    align-self: flex-end;
  }
`;

export const select = css`
  width: 170px;
`;
