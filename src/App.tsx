import React from 'react';
import { ProposalBuilder } from '../src/ProposalBuilder/ProposalBuilder'
import './App.scss';
import siramaLogo from './sirmasa logo gray only logo.svg'
import { Link, Typography } from '@material-ui/core';

export function App() {
  return (
    <div className="App">
      <div className="content">
        <Typography align="center" variant="h2" component="h1" gutterBottom>
          Proposal builder
        </Typography>
        <ProposalBuilder />
      </div>
      <footer className="footer">
        <Link
          className="footer__logo"
          color="inherit"
          href="https://siramasa.top"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer__logo-image"
            alt="SiraMasa logo"
            src={siramaLogo}
          />
        </Link>
        <span className="footer__copyright">
          © {new Date().getFullYear()} proposal builder, by&nbsp;
          <Link color="inherit" href="https://siramasa.top" target="_blank" rel="noreferrer">
            SiraMasa
          </Link>
        </span>
      </footer>
    </div>
  );
}

