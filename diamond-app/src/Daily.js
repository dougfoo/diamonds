/* eslint-disable no-script-url */

import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Daily() {
  const classes = useStyles();

  const remoteUrl = 'http://localhost:4000/diamonds/daily/';   // qa mode limited size request
  const webpackUrl = '/diamonds/daily/';
  const apiurl = process.env.NODE_ENV === 'production' ? webpackUrl : remoteUrl;

  const [diamond, setDiamond] = useState({
    price: 0.0, carat: 0.0, color: '', cut: '', clarity: '', skus: ''
  });

  useEffect(() => {
    console.log('axios ...', apiurl);
    axios.get(apiurl)
        .then(response => {
            setDiamond({
              price: response.data.price,
              color: response.data.color,
              cut: response.data.cut,
              clarity: response.data.clarity,
              carat: response.data.carat,
              skus: response.data.skus,
            });
            console.log(response.data);
          })
        .catch(function (error){
            console.log(error);
        })
  },[]);

  let skuref = 'https://www.bluenile.com/diamond-details/'+ diamond.skus;

  return (
    <React.Fragment>
      <Title>Random Diamond Featured</Title>
      <Typography component="p" variant="h4">{diamond.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Typography>
      <Typography component="p" variant="subtitle2">Carat: {diamond.carat}</Typography>
      <Typography component="p" variant="subtitle2">Color: {diamond.color}</Typography>
      <Typography component="p" variant="subtitle2">Clarity: {diamond.clarity}</Typography>
      <Typography component="p" variant="subtitle2">Cut: {diamond.cut}</Typography>        
      <Typography color="textSecondary" className={classes.depositContext}>
        Go buy it on BlueNile <a target='_blank' href={skuref}>{diamond.skus}</a>
      </Typography>
    </React.Fragment>
  );
}
