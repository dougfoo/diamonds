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
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export function SecondaryListItems()  {  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpenAboutDiamonds = () => {
    setOpen(true);
  };

  const handleCloseAboutDiamonds = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseAboutDiamonds}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">About Diamonds</h2>
            <p id="transition-modal-description">This site utilizes various technologies and data sources as a semi classic MERN.</p>
            <ul>
              <li>React.js front end (Material-UI)</li>
              <li>Victory Visulization (React Component)</li>
              <li>Express.js backend</li>
              <li>MongoDB object persistance</li>
              <li>Azure Machine Learning webservice</li>
            </ul>
            <p>Env: {process.env.NODE_ENV}</p>
          </div>
        </Fade>
    </Modal>
    <ListItem button>
        <ListItemIcon>
          <PeopleIcon/>
        </ListItemIcon>
        <ListItemText primary="Contributors (TBD)" />
      </ListItem>
      <ListItem button onClick={handleOpenAboutDiamonds}>
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
