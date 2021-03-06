import React, { useState } from 'react';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

import './App.css';

const App = () => {
  const [navChange, setnavChange] = useState(false);

  const changePosition = 200;
  let position = useWindowScrollPosition();
  if (position.y > changePosition && !navChange) {
    setnavChange(true);
  }
  if (position.y <= changePosition && navChange) {
    setnavChange(false);
  }

  let style = {
    backgroundColor: navChange ? `#2C3E50` : ``,
    paddingTop: navChange ? 0 : ``,
    paddingBottom: navChange ? 0 : ``
  };

  return (
    <div>
      <nav
        className='navbar navbar-expand-lg  text-uppercase fixed-top'
        id='mainNav'
        style={style}
      >
        <div className='container'>
          <a
            className='navbar-brand js-scroll-trigger  cssanimation leFadeInTop sequence hvr-buzz-out'
            href='#page-top'
          >
            Start Bootstrap
          </a>
          <button
            className='navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu
            <i className='fa fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger hvr-buzz-out cssanimation leFadeInTop sequence'
                  href='#portfolio'
                >
                  Portfolio
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger hvr-buzz-out cssanimation leFadeInTop sequence'
                  href='#about'
                >
                  About
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger hvr-buzz-out cssanimation leFadeInTop sequence'
                  href='#contact'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        className='masthead bg-primary text-white text-center'
        id='page-top'
      >
        <div className='container d-flex align-items-center flex-column'>
          <img
            className='masthead-avatar mb-5'
            src='https://picsum.photos/200/300'
            alt=''
          />

          <h1 className='masthead-heading text-uppercase mb-0'>
            Start Bootstrap
          </h1>

          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <p className='masthead-subheading font-weight-light mb-0'>
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </header>

      <section className='page-section portfolio' id='portfolio'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0 cssanimation hu__hu__ sequence'>
            Portfolio
          </h2>

          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal1'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  className='img-fluid'
                  src='https://picsum.photos/200/300'
                  alt=''
                />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal2'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  className='img-fluid'
                  src='https://picsum.photos/200/300'
                  alt=''
                />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal3'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  className='img-fluid'
                  src='https://picsum.photos/200/300'
                  alt=''
                />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal4'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  className='img-fluid'
                  src='https://picsum.photos/200/300'
                  alt=''
                />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal5'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  className='img-fluid'
                  src='https://picsum.photos/200/300'
                  alt=''
                />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal6'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img
                  className='img-fluid'
                  src='https://picsum.photos/200/300'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='page-section bg-primary text-white mb-0 ' id='about'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-white cssanimation leSnake sequence'>
            About
          </h2>

          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-lg-4 ml-auto '>
              <p className='lead hvr-pulse'>
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div className='col-lg-4 mr-auto '>
              <p className='lead hvr-pulse'>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>

          <div className='text-center mt-4'>
            <a className='btn btn-xl btn-outline-light hvr-buzz-out' href=''>
              <i className='fa fa-download mr-2'></i>
              Free Download!
            </a>
          </div>
        </div>
      </section>

      <section className='page-section' id='contact'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-secondary mb-0 cssanimation leWaterWave sequence'>
            Contact Us
          </h2>

          <div className='divider-custom'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <form name='sentMessage' id='contactForm' novalidate='novalidate'>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Name</label>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Name'
                      required='required'
                      data-validation-required-message='Please enter your name.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Email Address</label>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      placeholder='Email Address'
                      required='required'
                      data-validation-required-message='Please enter your email address.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Phone Number</label>
                    <input
                      className='form-control'
                      id='phone'
                      type='tel'
                      placeholder='Phone Number'
                      required='required'
                      data-validation-required-message='Please enter your phone number.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Message</label>
                    <textarea
                      className='form-control'
                      id='message'
                      rows='5'
                      placeholder='Message'
                      required='required'
                      data-validation-required-message='Please enter a message.'
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <br />
                <div id='success'></div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-xl'
                    id='sendMessageButton'
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Location</h4>
              <p className='lead mb-0'>
                No 388/5 Dekatana road
                <br />
                Nagas junction, Mandawala
              </p>
            </div>

            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Follow us on</h4>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-facebook-f'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-twitter'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-linkedin'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-dribbble'></i>
              </a>
            </div>

            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>About Freelancer</h4>
              <p className='lead mb-0'>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href='http://startbootstrap.com'>Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <section className='copyright py-4 text-center text-white'>
        <div className='container'>
          <small>Copyright &copy; Your Website 2020</small>
        </div>
      </section>

      <div className='scroll-to-top d-lg-none position-fixed '>
        <a
          className='js-scroll-trigger d-block text-center text-white rounded'
          href='#page-top'
        >
          <i className='fa fa-chevron-up'></i>
        </a>
      </div>

      <div
        className='portfolio-modal modal fade'
        id='portfolioModal1'
        tabindex='-1'
        role='dialog'
        aria-labelledby='portfolioModal1Label'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='fa fa-times'></i>
              </span>
            </button>
            <div className='modal-body text-center'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                      Log Cabin
                    </h2>
                    <div className='divider-custom'>
                      <div className='divider-custom-line'></div>
                      <div className='divider-custom-icon'>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='divider-custom-line'></div>
                    </div>
                    <img
                      className='img-fluid rounded mb-5 '
                      src='https://picsum.photos/200/300'
                      alt=''
                    />
                    <p className='mb-5 '>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i className='fa fa-times fa-fw'></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='portfolio-modal modal fade'
        id='portfolioModal2'
        tabindex='-1'
        role='dialog'
        aria-labelledby='portfolioModal2Label'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='fa fa-times'></i>
              </span>
            </button>
            <div className='modal-body text-center'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                      Tasty Cake
                    </h2>
                    <div className='divider-custom'>
                      <div className='divider-custom-line'></div>
                      <div className='divider-custom-icon'>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='divider-custom-line'></div>
                    </div>
                    <img
                      className='img-fluid rounded mb-5'
                      src='https://picsum.photos/200/300'
                      alt=''
                    />
                    <p className='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i className='fa fa-times fa-fw'></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='portfolio-modal modal fade'
        id='portfolioModal3'
        tabindex='-1'
        role='dialog'
        aria-labelledby='portfolioModal3Label'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='fa fa-times'></i>
              </span>
            </button>
            <div className='modal-body text-center'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                      Circus Tent
                    </h2>
                    <div className='divider-custom'>
                      <div className='divider-custom-line'></div>
                      <div className='divider-custom-icon'>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='divider-custom-line'></div>
                    </div>
                    <img
                      className='img-fluid rounded mb-5'
                      src='https://picsum.photos/200/300'
                      alt=''
                    />
                    <p className='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i className='fa fa-times fa-fw'></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='portfolio-modal modal fade'
        id='portfolioModal4'
        tabindex='-1'
        role='dialog'
        aria-labelledby='portfolioModal4Label'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='fa fa-times'></i>
              </span>
            </button>
            <div className='modal-body text-center'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                      Controller
                    </h2>
                    <div className='divider-custom'>
                      <div className='divider-custom-line'></div>
                      <div className='divider-custom-icon'>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='divider-custom-line'></div>
                    </div>
                    <img
                      className='img-fluid rounded mb-5'
                      src='https://picsum.photos/200/300'
                      alt=''
                    />
                    <p className='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i className='fa fa-times fa-fw'></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='portfolio-modal modal fade'
        id='portfolioModal5'
        tabindex='-1'
        role='dialog'
        aria-labelledby='portfolioModal5Label'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='fa fa-times'></i>
              </span>
            </button>
            <div className='modal-body text-center'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                      Locked Safe
                    </h2>
                    <div className='divider-custom'>
                      <div className='divider-custom-line'></div>
                      <div className='divider-custom-icon'>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='divider-custom-line'></div>
                    </div>
                    <img
                      className='img-fluid rounded mb-5'
                      src='https://picsum.photos/200/300'
                      alt=''
                    />
                    <p className='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i className='fa fa-times fa-fw'></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className='portfolio-modal modal fade'
        id='portfolioModal6'
        tabindex='-1'
        role='dialog'
        aria-labelledby='portfolioModal6Label'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-xl' role='document'>
          <div className='modal-content'>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>
                <i className='fa fa-times'></i>
              </span>
            </button>
            <div className='modal-body text-center'>
              <div className='container'>
                <div className='row justify-content-center'>
                  <div className='col-lg-8'>
                    <h2 className='portfolio-modal-title text-secondary text-uppercase mb-0'>
                      Submarine
                    </h2>
                    <div className='divider-custom'>
                      <div className='divider-custom-line'></div>
                      <div className='divider-custom-icon'>
                        <i className='fa fa-star'></i>
                      </div>
                      <div className='divider-custom-line'></div>
                    </div>
                    <img
                      className='img-fluid rounded mb-5'
                      src='https://picsum.photos/200/300'
                      alt=''
                    />
                    <p className='mb-5'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia neque assumenda ipsam nihil, molestias magnam,
                      recusandae quos quis inventore quisquam velit asperiores,
                      vitae? Reprehenderit soluta, eos quod consequuntur itaque.
                      Nam.
                    </p>
                    <button
                      className='btn btn-primary'
                      href='#'
                      data-dismiss='modal'
                    >
                      <i className='fa fa-times fa-fw'></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
