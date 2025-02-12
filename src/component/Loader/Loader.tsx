import { CSSProperties } from 'react';
import { HashLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  color: '#0E0C07',
  marginTop: '140px',
};

export const Loader = () => {
  return <HashLoader size={100} cssOverride={override} aria-label="Loading Spinner" />;
};
