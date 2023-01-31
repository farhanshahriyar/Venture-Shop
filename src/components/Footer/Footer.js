import { Container, Grid } from '@mui/material';
import React from 'react';
import logo from '../../images/logo-footer.png';
import styles from './Styles.module.scss'
import { IoCallOutline } from 'react-icons/io5'
import List from './List';
import payments from "../../images/payments.png"
const Footer = () => {
  return (
    <Container>
      <div className={styles.main}>
        <Grid container spacing={2}>
          <Grid item sm={6} lg={3} className={styles.grid1} paddingX={"16px"}>
            <img src={logo} alt="logo" />
            <p>high-quality electronics supplier. We've been offering consumers with the latest technology at accessible costs for 10 years. Our team is dedicated to excellent client service and shopping. Smartphones, laptops, home appliances, and gaming systems—we have it all.</p>
            <div className={styles.call}>
              <IoCallOutline />
              <h5>Got Question? Call us 24/7<br />
                <span>+019 8944 xxx</span>
              </h5>
            </div>
          </Grid>
          <Grid item sm={6} lg={3} className={styles.grids} paddingX={"16px"}>
            <List title="Useful Links" content={["About Venture", "Our Services", "How to shop on Venture", "FAQ", "Contact us"]}/>
          </Grid>
          <Grid item sm={6} lg={3} className={styles.grids} paddingX={"16px"}>
            <List title="Customer Service" content={["Payment Methods", "Money-back guarantee!", "Returns", "Shipping", "Terms and conditions", "Privacy Policy"]}/>
          </Grid>
          <Grid item sm={6} lg={3} className={styles.grids} paddingX={"16px"}>
            <List title="My Account" content={["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"]}/>
          </Grid>
        </Grid>
        <hr />
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>Copyright © 2023 Ventures Store. All Rights Reserved.</p>
        <img src={payments} alt="payment" />
      </div>
    </Container>
  );
}

export default Footer;
