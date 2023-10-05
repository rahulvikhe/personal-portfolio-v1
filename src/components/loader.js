import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
`;

const Loader = ({ finishLoading }) => {
  // Simply call finishLoading when the component mounts
  React.useEffect(() => {
    finishLoading();
  }, []);

  return (
    <StyledLoader className="loader">
      <Helmet bodyAttributes={{ class: 'hidden' }} />
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
