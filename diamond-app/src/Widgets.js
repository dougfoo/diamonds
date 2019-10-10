import React from 'react';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}


export function SmallCheckbox(props) {
    const { className, checked, onChange, value } = props;

    return (
      <Checkbox 
          style={{ width: 3, height: 3 }}
          icon={<CheckBoxOutlineBlankIcon style={{ fontSize: 16 }} />}
          checkedIcon={<CheckBoxIcon style={{ fontSize: 16 }} />}
          className={className} onChange={onChange} value={value} 
          checked={checked}  
      />
    );
}


export function ValueLabelComponent(props) {
    const { children, open, value } = props;
    const popperRef = React.useRef(null);
  
    React.useEffect(() => {
      if (popperRef.current) {
        popperRef.current.update();
      }
    });
  
    return (
      <Tooltip
        PopperProps={{
          popperRef,
        }}
        open={open}
        enterTouchDelay={0}
        placement="top"
        title={value}
      >
        {children}
      </Tooltip>
    );
  }
  
  ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
  };
  
