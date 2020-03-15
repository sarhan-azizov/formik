import React from "react";
import ReactDOM from "react-dom";

import { SarhanButton, SarhanIcon } from 'microfrontend-common-ui';

import styles from './app.scss';

const App = () => (
    <div className={styles.root}>
        App
        <SarhanButton>123</SarhanButton>
        <SarhanIcon>123</SarhanIcon>
        <SarhanIcon>123</SarhanIcon>
        <SarhanIcon>123</SarhanIcon>
        <SarhanIcon>123</SarhanIcon>
        <SarhanIcon>123</SarhanIcon>
        <SarhanIcon>123</SarhanIcon>
    </div>
);

ReactDOM.render(<App />,  document.getElementById("root"));