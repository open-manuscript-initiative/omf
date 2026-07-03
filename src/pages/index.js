import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';

export default function Home() {
  const {colorMode} = useColorMode();

  const heroLogo =
    colorMode === 'dark'
      ? '/img/omi-hero-dark.svg'
      : '/img/omi-navbar-light.svg';

  return (
    <Layout
      title="Open Manuscript Initiative"
      description="Open standards for portable scholarly publishing">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <img
              src={heroLogo}
              alt="Open Manuscript Initiative"
              className={styles.logo}
            />

            <h1>Open Manuscript Initiative</h1>

            <p className={styles.kicker}>
              Open standards for portable scholarly publishing
            </p>

            <p className={styles.tagline}>
              Write naturally. Structure once. Publish everywhere.
            </p>

            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/vision">
                Explore the Vision
              </Link>

              <Link
                className="button button--secondary button--lg"
                to="https://github.com/open-manuscript-initiative/omf">
                GitHub
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cards}>
          <article className={styles.card}>
            <h2>Meaning Before Appearance</h2>
            <p>
              Authors describe what content means, not how it should look.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Functional Manuscripts</h2>
            <p>
              Structure scholarly concepts such as titles, abstracts,
              citations, figures, tables and references.
            </p>
          </article>

          <article className={styles.card}>
            <h2>Publish Everywhere</h2>
            <p>
              Generate HTML, PDF, EPUB, JATS XML, Crossref XML and future
              publishing formats from one source.
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
}
