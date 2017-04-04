import React from 'react';
import styles from '../../styles/App.scss';
import MemberTable from './MemberTable';
import Editor from './Editor';
import members from '../../../data/members.json';

const App = () => (
  <div className={styles.app}>
    <div className={styles.editor}>
      <Editor />
    </div>
    <div className={styles.memberTable}>
      <MemberTable members={members} />
    </div>
  </div>
);

export default App;
