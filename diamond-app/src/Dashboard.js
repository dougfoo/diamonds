import React from 'react';
import clsx from 'clsx';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HelpIcon from '@material-ui/icons/Help';
import { MainListItems, SecondaryListItems } from './listItems';
import Daily from './Daily';
import Pricer from './Pricer';
import Chooser from './Chooser';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
// import { createBrowserHistory } from "history";
import { getAppInsights } from './TelemetryService';
import TelemetryProvider from './TelemetryProvider';

// const browserHistory = createBrowserHistory({ basename: '' });
// var reactPlugin = new ReactPlugin();
// var appInsights = new ApplicationInsights({
//     config: {
//         instrumentationKey: '458001d5-9bee-48de-94ba-1b43967aff71',
//         extensions: [reactPlugin],
//         extensionConfig: {
//           [reactPlugin.identifier]: { history: browserHistory }
//         }
//     }
// });
// appInsights.loadAppInsights();


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://foostack.ai/">
        FooStack.Ai
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const theme = createMuiTheme({
  typography: {
    fontSize: 8,
    htmlFontSize: 8,
  },
});

const useStyles = makeStyles(theme => ({
  typography: {
    fontSize: 8,
    htmlFontSize: 8,
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalpaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    maxWidth: '50%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 280,
  },
}));

const aboutInfo = (
  <React.Fragment>
    <h2 id="transition-modal-title">About Diamonds</h2>
    <p id="transition-modal-description">This site utilizes various technologies and data sources as a semi classic MERN.</p>
    <ul>
      <li>React.js front end (Material-UI)</li>
      <li>Victory Visualization (React Component)</li>
      <li>Express.js backend</li>
      <li>MongoDB object persistance (using Mongoose)</li>
      <li>Scikit Learn Machine Learning models</li>
      <li>Azure Machine Learning webservices & hosting</li>
    </ul>
    <p>Env: {process.env.NODE_ENV}</p> 
  </React.Fragment>
);

const aboutCs = {
  Cs: {
    Name: "4-C's",
    Title: "About the 4-C's",
    Desc: "Each of the 4 C’s (Cut, Color, Clarity and Carat) play a role in a diamond’s beauty, though it is difficult to decipher one component by itself. As a comprehensive whole, the 4 C’s interact with one another within each diamond.",
    Desc2: "",
  },
  Color: {
    Name: "Color",
    Title: "About Color",
    Desc: "The finest quality as per color grading is totally colorless, which is graded as D color diamond across the globe, meaning it is absolutely free from any color. The next grade has a very slight trace of color, which can be observed by any expert diamond valuer/grading laboratory. However, when studded in jewellery these very light colored diamonds do not show any color or it is not possible to make out color shades. These are graded as E color or F color diamonds.  Diamonds which show very little traces of color are graded as G or H color diamonds. Slightly colored diamonds are graded as I or J or K color. A diamond can be found in any color in addition to colorless. Some of the colored diamonds, such as pink, are very rare.",
    Desc2: "Color codes go from D (Clear-Best), to E,F,G .. down to K (least desirable)",
  },
  Carat: {
    Name: "Carat",
    Title: "About Carat Weight",
    Desc: "The carat weight measures the mass of a diamond. One carat is defined as 200 milligrams (about 0.007 ounces avoirdupois). The point unit—equal to one one-hundredth of a carat (0.01 carat, or 2 mg)—is commonly used for diamonds of less than one carat. All else being equal, the price per carat increases with carat weight, since larger diamonds are both rarer and more desirable for use as gemstones.",
    Desc2: "",
  },
  Clarity: {
    Name: "Clarity",
    Title: "About Clarity",
    Desc: "Clarity is a measure of internal defects of a diamond called inclusions. Inclusions may be crystals of a foreign material or another diamond crystal, or structural imperfections such as tiny cracks that can appear whitish or cloudy. The number, size, color, relative location, orientation, and visibility of inclusions can all affect the relative clarity of a diamond. The Gemological Institute of America (GIA) and other organizations have developed systems to grade clarity, which are based on those inclusions which are visible to a trained professional when a diamond is viewed under 10× magnification.",
    Desc2: "Clarity ratings range from perfect FL (Flawless), IF (Internally Flawless), to VSS1/2, VS1/2 down to SI1/2 which are the least desireable.",
  },
  Cut: {
    Name: "Cut",
    Title: "About Cut",
    Desc: "Diamond cutting is the art and science of creating a gem-quality diamond out of mined rough. The cut of a diamond describes the manner in which a diamond has been shaped and polished from its beginning form as a rough stone to its final gem proportions. The cut of a diamond describes the quality of workmanship and the angles to which a diamond is cut. Often diamond cut is confused with shape",
    Desc2: "Cut ratings go from vendor specific (like Astor Ideal), and GIA standard Ideal, Excellent, to Very Good, and Good.",
  },
};

function aboutCsHelper(n) {
  console.log('about: ', aboutCs, n);
  return (
    <React.Fragment>
      <h2 id="transition-modal-title" variant="h2">{aboutCs[n].Title}</h2>
      <p id="transition-modal-description">{aboutCs[n].Desc}</p>
      <p id="transition-modal-description">{aboutCs[n].Desc2}</p>
    </React.Fragment>
  )
}


function DiamondDashboard() {
  let appInsights = null;

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [about, setAbout] = React.useState(false);
  const [modal, setModal] = React.useState('About');

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAboutOpen = mKey => event => {
    appInsights.trackEvent({ name: 'aboutClicked '+mKey });
    console.log(mKey);
    setModal(mKey);
    setAbout(true);
  }
  const handleAboutClose = () => {
    setAbout(false);
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <TelemetryProvider after={() => { appInsights = getAppInsights() }}>
      <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={about}
            onClose={handleAboutClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 300,
            }}
          >
            <Fade in={about}>
              <div className={classes.modalpaper}>
                { modal === 'About' ? aboutInfo : aboutCsHelper(modal) }
              </div>
            </Fade>
        </Modal>
        </div>
        <div className={classes.root}>

        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Diamond Analytics
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <HelpIcon onClick={handleAboutOpen('About')} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <MainListItems aboutOpen={handleAboutOpen}/>
          </List>
          <Divider />
          <List>
            <SecondaryListItems aboutOpen={handleAboutOpen}/>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={10} lg={8}>
                <Paper className={classes.paper}>
                  <Pricer/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper className={classes.paper}>
                  <Daily />
                </Paper>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Paper className={classes.paper} >
                  <Chooser/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Copyright />
        </main>
      </div>
    </TelemetryProvider>
  );
}

export default DiamondDashboard;

