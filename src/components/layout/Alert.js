import React from 'react';
import { connect } from 'react-redux';
import { Alert as MuiAlert } from '@mui/material';

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div key={alert.id}>
      <MuiAlert severity="error">{alert.msg}</MuiAlert>
    </div>
  ));

const mapStateToProps = (state) => ({
  alerts: state.alerts,
});

export default connect(mapStateToProps)(Alert);
