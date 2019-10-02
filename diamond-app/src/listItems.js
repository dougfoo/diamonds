import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import Filter7Icon from '@material-ui/icons/Filter7';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Pricing  (TBD)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Filter7Icon/>
      </ListItemIcon>
      <ListItemText primary="Data (TBD)" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports  (TBD)" />
    </ListItem>
    <ListItem button component="a" href="https://nbviewer.jupyter.org/github/dougfoo/machineLearning/blob/master/diamonds/Diamond-Analysis-1.ipynb">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Notebooks (Beta)" />
    </ListItem>
  </div>
);

export function SecondaryListItems(props)  {  
  return (
    <div>
    <ListItem button>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Contributors (TBD)" />
      </ListItem>
      <ListItem button onClick={props.aboutOpen}>
        <ListItemIcon>
          <HelpOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="About Diamonds" />
      </ListItem>
      <ListItem button component="a" href="http://foostack.ai/">
        <ListItemIcon>
          <ThreeSixtyIcon />
        </ListItemIcon>
        <ListItemText primary="About Foo" />
      </ListItem>
    </div>
  );
}
