import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const SKILLS = [
  'API Documentation',
  'SDK Documentation',
  'Docs as Code',
  'TypeScript',
  'React',
  'Node.js',
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <p className={styles.heroEyebrow}>Technical Writer Portfolio</p>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Douglas Machado
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Technical Writer & Docs as Code specialist
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            View my portfolio
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://github.com/douglasrmachado">
            GitHub
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            href="https://www.linkedin.com/in/douglasrmachado/">
            LinkedIn
          </Link>
        </div>
        <ul className={styles.skillList}>
          {SKILLS.map((skill) => (
            <li key={skill} className={styles.skillPill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Douglas Machado: Technical Writer"
      description="Technical Writer portfolio: API docs, SDK docs, Docs as Code, and developer documentation.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
