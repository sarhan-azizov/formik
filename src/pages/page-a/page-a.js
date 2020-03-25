import React from "react";

import { SarhanButton, SarhanIcon } from 'microfrontend-common-ui';

import styles from './page-a.scss';

const PageA = () => (
    <div className={styles.root}>
        MS A, Page A
        <SarhanButton>SarhanButton</SarhanButton>
        <SarhanIcon>SarhanIcon 2</SarhanIcon>
    </div>
);

export default PageA;