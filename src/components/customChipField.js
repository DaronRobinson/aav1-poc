'use client'
import React from 'react';
import PropTypes from 'prop-types';
import {
  Chip,
} from '@mui/material';


function CustomChipField({ classes, record, onClick }) {
  const {
    firstName, lastName,
  } = record;
  return (
    <Chip className={classes.root} label={`${firstName} ${lastName}`} onClick={onClick} />
  );
}

CustomChipField.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  record: PropTypes.shape({}),
  onClick: PropTypes.func.isRequired,
};

CustomChipField.defaultProps = {
  record: {},
};

export default CustomChipField;