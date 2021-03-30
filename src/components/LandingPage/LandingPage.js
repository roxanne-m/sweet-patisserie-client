import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pastryPhoto from '../Images/pastryPhoto.jpg';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <img
            className='landing-page-photo'
            src={pastryPhoto}
            alt='Holding a pastry in front of a pastry shop'
          />
          <div className='button-style'>
            <Link to='/register'>
              <button className='get-started-button'>Get Started</button>
            </Link>
          </div>
        </div>
        <div className='group'>
          <div className='item'>
            <h2 className='about-styling'>About Sweet Patisserie</h2>
            <p>
              Sweet Patisserie was created for users who find joy and are caught
              in a love affair with pastries. Sweets are life's sweet little
              joys that humanity can indulge in; and much like our love for
              them, there is always love baked within them. Recipes come with
              all sorts of love and secret ingredients, that's what makes them
              so special.
            </p>
            <p>
              Sweet Patisserie was designed to help you store those lovely
              recipes in order to revisit them time and time again. As a new
              user, you may register to create an account, or as a returning
              user, you may log back in, then be able to view your personal
              dashboard with your saved recipes, and are also able to store
              them! To create and store a new recipe, simply click on the "Add
              Recipe" tab, create a title, add an optional description, list
              your ingredients, and enter the directions/steps; it's that
              simple!
            </p>

            <p>
              If you would like to try out the app, you can either register as a
              new user or use the sample user below.
            </p>
            <p>Username: testUser</p>
            <p>Password: pass</p>
            <p>
              I hope you enjoy saving your recipes as much as others love to
              enjoy them.
            </p>
            <p>XoXo, Sweet Patisserie</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
