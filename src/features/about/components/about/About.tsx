import { Section } from 'features/layout';
import styles from './About.module.scss';

export function About() {
  return (
    <Section title="About">
      <p className={styles.about}>
        Hi, I'm <strong className={styles.kajText}>Kaj</strong>.{' '}
        <i className={styles.hiddenKaj}> - pronounced like Kai (and rhymes with pie 🥧) </i>
        <br></br>
        <br></br>I'm a recent Computer Engineering graduate based in Vancouver, BC and Toronto, ON. <br></br>I'm
        passionate about the <strong>entire</strong> stack... from computer architecture, to reliable back-end
        infrastructure, and all the way up to brilliant user design.
        <br></br>
        <br></br>Currently, I'm looking for a full-time position in a Software Engineering field. I have experience
        working with large-scale media pipelines, building scalable systems and maintaining core infrastructure.
        <br></br>
        <br></br>Send me an{' '}
        <strong className="underline">
          <a href="mailto:kajgrant@gmail.com">email</a>
        </strong>{' '}
        or explore some of the things I've done below...
      </p>
    </Section>
  );
}
