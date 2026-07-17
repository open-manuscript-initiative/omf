import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Open Manuscript Initiative',
        description: 'The homepage browser title',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Open standards for portable scholarly publishing',
        description: 'The homepage meta description',
      })}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.logoWrap}>
            <img
              src="/img/omi-hero-light.svg"
              alt={translate({
                id: 'homepage.logo.alt',
                message: 'Open Manuscript Initiative',
                description: 'Alternative text for the OMI logo',
              })}
              className={styles.logo}
            />
          </div>

          <h1>
            <Translate id="homepage.hero.title">
              Open Manuscript Initiative
            </Translate>
          </h1>

          <p className={styles.kicker}>
            <Translate id="homepage.hero.kicker">
              Open standards for portable scholarly publishing
            </Translate>
          </p>

          <p className={styles.tagline}>
            <Translate id="homepage.hero.tagline">
              Write naturally. Structure once. Publish everywhere.
            </Translate>
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/vision">
              <Translate id="homepage.hero.exploreVision">
                Explore the Vision
              </Translate>
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://github.com/open-manuscript-initiative/omi">
              GitHub
            </Link>
          </div>
        </section>

        <section className={styles.cards}>
          <article className={styles.card}>
            <h2>
              <Translate id="homepage.cards.meaning.title">
                Meaning Before Appearance
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.cards.meaning.description">
                Authors describe what content means, not how it should look.
              </Translate>
            </p>
          </article>

          <article className={styles.card}>
            <h2>
              <Translate id="homepage.cards.functional.title">
                Functional Manuscripts
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.cards.functional.description">
                Structure scholarly concepts such as titles, abstracts,
                citations, figures, tables and references.
              </Translate>
            </p>
          </article>

          <article className={styles.card}>
            <h2>
              <Translate id="homepage.cards.publish.title">
                Publish Everywhere
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.cards.publish.description">
                Generate HTML, PDF, EPUB, JATS XML, Crossref XML and future
                publishing formats from one source.
              </Translate>
            </p>
          </article>
        </section>

        <section className={styles.why}>
          <div className={styles.container}>
            <h2>
              <Translate id="homepage.why.title">
                Why Open Manuscript Initiative?
              </Translate>
            </h2>

            <p>
              <Translate id="homepage.why.fragmentedWorkflow">
                Scholarly publishing still depends on disconnected tools.
                Authors write in word processors, reviewers annotate PDFs,
                editors manage journal systems, and publishers recreate
                manuscripts in XML.
              </Translate>
            </p>

            <p>
              <Translate id="homepage.why.omiSolution">
                OMI replaces this fragmented workflow with a single semantic
                manuscript that accompanies research from the first draft to
                long-term preservation.
              </Translate>
            </p>
          </div>
        </section>

        <section className={styles.workflow}>
          <h2>
            <Translate id="homepage.workflow.title">
              How OMI Works
            </Translate>
          </h2>

          <div className={styles.steps}>
            <div className={styles.step}>
              <h3>
                <Translate id="homepage.workflow.write.title">
                  Write
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.write.description">
                  Create your manuscript naturally.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <h3>
                <Translate id="homepage.workflow.structure.title">
                  Structure
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.structure.description">
                  Capture scholarly meaning instead of formatting.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <h3>
                <Translate id="homepage.workflow.review.title">
                  Review
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.review.description">
                  Collaborate using semantic annotations.
                </Translate>
              </p>
            </div>

            <div className={styles.arrow} aria-hidden="true">
              →
            </div>

            <div className={styles.step}>
              <h3>
                <Translate id="homepage.workflow.publish.title">
                  Publish
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.workflow.publish.description">
                  Export to every scholarly publishing format.
                </Translate>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.docs}>
          <h2>
            <Translate id="homepage.documentation.title">
              Documentation
            </Translate>
          </h2>

          <div className={styles.docGrid}>
            <Link className={styles.docCard} to="/docs/vision">
              <h3>
                <Translate id="homepage.documentation.vision.title">
                  Vision
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.documentation.vision.description">
                  The philosophy behind OMI.
                </Translate>
              </p>
            </Link>

            <Link className={styles.docCard} to="/docs/architecture">
              <h3>
                <Translate id="homepage.documentation.architecture.title">
                  Architecture
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.documentation.architecture.description">
                  System design and core principles.
                </Translate>
              </p>
            </Link>

            <Link className={styles.docCard} to="/docs/document-model">
              <h3>
                <Translate id="homepage.documentation.documentModel.title">
                  Document Model
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.documentation.documentModel.description">
                  The semantic foundation of scholarly writing.
                </Translate>
              </p>
            </Link>

            <Link className={styles.docCard} to="/docs/governance">
              <h3>
                <Translate id="homepage.documentation.governance.title">
                  Governance
                </Translate>
              </h3>

              <p>
                <Translate id="homepage.documentation.governance.description">
                  How the project is organised.
                </Translate>
              </p>
            </Link>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>
            <Translate id="homepage.cta.title">
              Join the Initiative
            </Translate>
          </h2>

          <p>
            <Translate id="homepage.cta.description">
              Whether you are a researcher, editor, developer or publisher,
              your expertise can help shape the future of scholarly
              communication.
            </Translate>
          </p>

          <Link
            className="button button--primary button--lg"
            to="https://github.com/open-manuscript-initiative/omi">
            <Translate id="homepage.cta.github">
              Contribute on GitHub
            </Translate>
          </Link>
        </section>
      </main>
    </Layout>
  );
                }
