import React, { Component } from 'react';

class About extends Component {
  state = {};
  render() {
    return (
      <div id='about'>
        <div className='container content-lg'>
          <div className='row'>
            <div className='col-sm-3 sm-margin-b-30'>
              <div className='text-right sm-text-left'>
                <h2 className='margin-b-0'>Intro</h2>
                <p>What I am all about.</p>
              </div>
            </div>
            <div className='col-sm-8 col-sm-offset-1'>
              <div className='margin-b-60'>
                <p>
                  I'm Prasad Babu, a developer with 2+ years of experience in
                  web development. Worked in complete life cycle of projects.
                </p>
                <p>
                  Started my career as an hardware engineer then migrated myself
                  to an <b>Web Developer</b>. In the early stages worked as an
                  PHP developer for few months then completely moved to{' '}
                  <b>JavaScript</b>. Interesting part is when i started learning{' '}
                  i thought it would take <b>6 months</b> to get maximum out of
                  it. But actually it's not because i'm still learning{' '}
                  <b>JavaScript</b> and i'm trying to put my best.
                </p>
              </div>

              <div className='progress-box'>
                <h5>
                  HTML-CSS <span className='color-heading pull-right'>70%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='70'
                  ></div>
                </div>
              </div>

              <div className='progress-box'>
                <h5>
                  Core JavaSript{' '}
                  <span className='color-heading pull-right'>85%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='85'
                  ></div>
                </div>
              </div>
              <div className='progress-box'>
                <h5>
                  Socket-Io{' '}
                  <span className='color-heading pull-right'>75%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='75'
                  ></div>
                </div>
              </div>
              <div className='progress-box'>
                <h5>
                  Angular 6{' '}
                  <span className='color-heading pull-right'>64%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='64'
                  ></div>
                </div>
              </div>

              <div className='progress-box'>
                <h5>
                  React-Js <span className='color-heading pull-right'>80%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='80'
                  ></div>
                </div>
              </div>
              <div className='progress-box'>
                <h5>
                  Node-Js <span className='color-heading pull-right'>76%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='76'
                  ></div>
                </div>
              </div>
              <div className='progress-box'>
                <h5>
                  Git <span className='color-heading pull-right'>80%</span>
                </h5>
                <div className='progress'>
                  <div
                    className='progress-bar bg-color-base'
                    role='progressbar'
                    data-width='80'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
