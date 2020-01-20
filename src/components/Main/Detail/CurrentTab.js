
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {theme} from '../../.'

// const useStyles= makeStyles(theme =>({
//     root:{
//       indicatorColor: '#689F38',
//       textColor: '#689F38',
//       primary: '#689F38',
//       secondary: '#689F38'
//     }
// }));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// const theme = createMuiTheme({
//   palette: {
//        primary: '#00bcd4',
//        secondary: '#ff4081'
//      }
//    });

export default function CurrentTab() {
  const [value, setValue] = React.useState(2);
  // const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        TabIndicatorProps={{style:{background: '#689F38'}}} 
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"

      >
        <Tab label="과거력" />

        <Tab label="사회력" />

        <Tab label="가족력" />

      </Tabs>
      <TabPanel value={value} index={0}>
        흡연 30년
      </TabPanel>
      <TabPanel value={value} index={1}>
        매드캠프 참여
      </TabPanel>
      <TabPanel value={value} index={2}>
        여심폭격기
      </TabPanel>
    </Paper>

  );
}
{/* <Tab label="Disabled" disabled /> */ }