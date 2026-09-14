import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type CardItem = {
  icon: string;
  title: string;
  description: ReactNode;
  to?: string;
  href?: string;
  linkLabel?: string;
};

type CardGroup = {
  title: string;
  description?: string;
  items: CardItem[];
};

const GROUPS: CardGroup[] = [
  {
    title: 'Get to Know Me',
    description: 'Who I am and the background I bring to documentation work.',
    items: [
      {
        icon: '👋',
        title: 'About Me',
        description:
          'A Technical Writer with a software development background, and how that shapes the way I write docs.',
        to: '/docs/about-me',
      },
      {
        icon: '🧭',
        title: 'Experience',
        description:
          'The kind of work I do day to day: APIs, SDKs, SaaS products, and developer-facing documentation.',
        to: '/docs/experience',
      },
    ],
  },
  {
    title: 'What I Do',
    description: 'The core of my documentation practice.',
    items: [
      {
        icon: '✍️',
        title: 'Technical Writing',
        description:
          'API references, SDK guides, quickstarts, and the writing principles behind them.',
        to: '/docs/technical-writing',
      },
      {
        icon: '🔀',
        title: 'Docs as Code',
        description:
          'Git, GitHub, pull requests, and automated checks: documentation managed like software.',
        to: '/docs/docs-as-code',
      },
      {
        icon: '🧰',
        title: 'Technical Stack',
        description:
          'The languages, frameworks, and documentation platforms I work with, including this site.',
        to: '/docs/technical-stack',
      },
      {
        icon: '📁',
        title: 'Projects',
        description:
          'A closer look at real projects: what they are, and the API endpoints I documented for them.',
        to: '/docs/category/projects',
      },
    ],
  },
  {
    title: 'Connect',
    description: "Where to find me, or to see this site's source.",
    items: [
      {
        icon: '💻',
        title: 'GitHub',
        description: 'Code, docs projects, and this site’s source.',
        href: 'https://github.com/douglasrmachado',
        linkLabel: 'Open profile',
      },
      {
        icon: '🔗',
        title: 'LinkedIn',
        description: 'Full role history, companies, and a way to reach out.',
        href: 'https://www.linkedin.com/in/douglasrmachado/',
        linkLabel: 'Open profile',
      },
      {
        icon: '✉️',
        title: 'Email',
        description: 'douglas@writechoice.io for direct contact.',
        href: 'mailto:douglas@writechoice.io',
        linkLabel: 'Send email',
      },
    ],
  },
];

// Keeps a group's cards evenly filling full rows instead of leaving an
// orphan card alone on the last row (e.g. 4 items would strand 1 under a
// col--4 row of 3).
function colClassForCount(count: number): string {
  if (count % 4 === 0) return 'col--3';
  if (count % 2 === 0) return 'col--6';
  return 'col--4';
}

function Card({icon, title, description, to, href, linkLabel, colClassName}: CardItem & {colClassName: string}) {
  return (
    <div className={clsx('col', colClassName)}>
      <div className={clsx('card', styles.featureCard)}>
        <div className="card__body">
          <div className={styles.featureIcon} aria-hidden="true">
            {icon}
          </div>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className={styles.cardButton} to={to} href={href}>
            {linkLabel ?? 'Learn more'}
            <span className={styles.cardButtonArrow} aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {GROUPS.map((group) => {
          const colClassName = colClassForCount(group.items.length);
          return (
            <div key={group.title} className={styles.group}>
              <Heading as="h2">{group.title}</Heading>
              {group.description && (
                <p className={styles.groupDescription}>{group.description}</p>
              )}
              <div className="row">
                {group.items.map((item) => (
                  <Card key={item.title} {...item} colClassName={colClassName} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
