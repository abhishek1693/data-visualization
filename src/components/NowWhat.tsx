import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from './CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from './Avatar';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
  card: {
    margin: '5% 25%',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <div>
      <form>
        <Select className="MuiSelect-select">
          <option value="waterTemp">waterTemp</option>
          <option value="casingPressure">casingPressure</option>
          <option value="injValveOpen">injValveOpen</option>
          <option value="flareTemp">flareTemp</option>
          <option value="oilTemp">oilTemp</option>
          <option value="tubingPressure">tubingPressure</option>
        </Select>
      </form>
    </div>
  );
};
