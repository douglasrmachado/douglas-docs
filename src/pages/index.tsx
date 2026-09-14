import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Douglas Machado
        </Heading>
        <p className={styles.heroTagline}>
          Technical Writer & Fullstack Developer, focused on documentation
          for APIs and SaaS products.
        </p>
        <Link className={styles.ctaPrimary} to="/docs/intro">
          <span className={styles.ctaLabel}>View my portfolio</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Douglas Machado: Technical Writer"
      description="Technical Writer portfolio: API docs, Docs as Code, and developer documentation.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
