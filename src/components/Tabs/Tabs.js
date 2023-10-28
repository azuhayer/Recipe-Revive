import React from 'react';
import styles from './Tabs.module.css';

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className={styles.tabs}>
      {/* Tab for Saved Recipes */}
      <button
        className={activeTab === 'saved' ? styles.activeTab : styles.tab}
        onClick={() => setActiveTab('saved')}
      >
        Saved Recipes
      </button>
      {/* Tab for Created Recipes */}
      <button
        className={activeTab === 'created' ? styles.activeTab : styles.tab}
        onClick={() => setActiveTab('created')}
      >
        Created Recipes
      </button>
    </div>
  );
}
