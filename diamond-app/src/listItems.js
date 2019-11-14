import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import GpsNotFixedIcon from '@material-ui/icons/GpsNotFixed';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { faVial, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export function MainListItems (props) {
  return (
    <div>
      <Tooltip placement='right' title="4 Cs">
        <ListItem button onClick={props.aboutOpen('Cs')}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="The 4C's" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="Carat">
        <ListItem button onClick={props.aboutOpen('Carat')}>
          <ListItemIcon>
            <BubbleChartIcon />
          </ListItemIcon>
          <ListItemText primary="Carat" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="Color">
        <ListItem button onClick={props.aboutOpen('Color')}>
          <ListItemIcon>
            <ColorLensIcon/>
          </ListItemIcon>
          <ListItemText primary="Color" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="Cut">
        <ListItem button onClick={props.aboutOpen('Cut')}>
          <ListItemIcon>
            <GpsNotFixedIcon />
          </ListItemIcon>
          <ListItemText primary="Cut" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="Clarity">
        <ListItem button onClick={props.aboutOpen('Clarity')}>
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText primary="Clarity" />
        </ListItem>
      </Tooltip>
    </div>
  )
}

export function SecondaryListItems(props)  {  
  return (
    <div>
      <Tooltip placement='right' title="Blog">
        <ListItem button component="a" href="https://towardsdatascience.com/full-stack-machine-learning-on-azure-f0f6b77be07e">
           <ListItemIcon>
             <FontAwesomeIcon icon={faMedium} size="2x" />
           </ListItemIcon>
           <ListItemText primary="Notebooks" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="Notebooks">
        <ListItem button component="a" href="https://nbviewer.jupyter.org/github/dougfoo/machineLearning/blob/master/diamonds/Diamond-Analysis-4.ipynb">
          <ListItemIcon>
             <FontAwesomeIcon icon={faVial} size="2x" />
          </ListItemIcon>
          <ListItemText primary="Notebooks" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="About Diamonds">
        <ListItem button onClick={props.aboutOpen('About')}>
          <ListItemIcon>
            <FontAwesomeIcon icon={faInfoCircle} size="2x" />
          </ListItemIcon>
          <ListItemText primary="About Diamonds" />
        </ListItem>
      </Tooltip>
      <Tooltip placement='right' title="About Foo">
        <ListItem button component="a" href="http://foostack.ai/">
          <ListItemIcon>
            <ThreeSixtyIcon />
          </ListItemIcon>
          <ListItemText primary="About Foo" />
        </ListItem>
      </Tooltip>
    </div>
  );
}
