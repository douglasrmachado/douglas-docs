import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {Mail} from 'lucide-react';
import {
  GithubIcon,
  LinkedinIcon,
} from '@site/src/components/HomepageFeatures/BrandIcons';
import styles from './styles.module.css';

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/douglasrmachado',
    Icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/douglasrmachado/',
    Icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:douglasroqmachado@gmail.com',
    Icon: Mail,
  },
];

export default function Footer(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.inner)}>
        <span className={styles.text}>
          Douglas Machado, Technical Writer. Built with Docusaurus.
        </span>
        <div className={styles.socials}>
          {SOCIALS.map(({label, href, Icon}) => (
            <Link
              key={label}
              href={href}
              className={styles.socialLink}
              aria-label={label}>
              <Icon className={styles.socialIcon} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
