import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

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

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Contributors (TBD)" />
    </ListItem>
    <ListItem button component="a" href="http://foostack.ai/">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>

  </div>
);
