import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SUPPORT_EMAIL } from '../config';

const Privacy = () => {
  return (
    <Container className="prose">
      <h1>Privacy Policy</h1>
      <p className="updated">Last updated: October 20, 2026</p>

      <p>
        ZeroSmoke ("we", "our" or "the app") is committed to protecting your privacy. This Privacy Policy explains
        what information the app uses, where it is stored, and what is shared with third parties.
      </p>

      <h3>1. Summary</h3>
      <ul>
        <li>Your habits, entries, plans and moods are stored <strong>only on your device</strong>.</li>
        <li>ZeroSmoke has <strong>no account</strong> and does <strong>not track you</strong> across apps or websites.</li>
        <li>We collect <strong>anonymous usage statistics</strong> that contain no health data. You can turn them off in Settings.</li>
        <li>Purchases are handled by Apple and RevenueCat.</li>
      </ul>

      <h3>2. Information Stored on Your Device</h3>
      <p>To help you track your journey, the app stores the following on your device:</p>
      <ul>
        <li>
          <strong>Habit setup</strong>: the habits you track (cigarettes, vape, cannabis), the amount you used per day,
          pack or device cost, device type or measurement unit
        </li>
        <li>
          <strong>Usage log</strong>: entries you log (time, amount, optional nicotine or THC strength), including
          entries added from the Home Screen widget or Siri
        </li>
        <li>
          <strong>Plans</strong>: your mode (quit now or cut down gradually), start date, quit date and daily starting
          amount
        </li>
        <li><strong>Daily check-ins and moods</strong> you record in the calendar</li>
      </ul>
      <p>
        This data never leaves your device. It is not sent to us or to any third party. Widgets and Siri Shortcuts read
        and write it through an app group container on the same device.
      </p>

      <h3>3. Information Shared with Third Parties</h3>
      <h5>Anonymous usage statistics (PostHog)</h5>
      <p>
        We use PostHog (EU servers) to understand which features are used, for example "an onboarding step was viewed"
        or "an entry was logged from the widget". These events:
      </p>
      <ul>
        <li>contain <strong>no health data</strong> (no habits, amounts, counts, strengths, dates or moods)</li>
        <li>are <strong>not linked to your identity</strong> and do not create a user profile</li>
        <li>do not include session recordings or screen content</li>
      </ul>
      <p>
        You can turn anonymous usage statistics off at any time in <strong>Settings → Anonymous usage statistics</strong>.
      </p>
      <h5>Purchases (Apple and RevenueCat)</h5>
      <p>
        Subscriptions are processed by Apple. We use RevenueCat to check whether you have an active subscription.
        RevenueCat receives an anonymous app user ID and your purchase history. See RevenueCat's privacy policy at{' '}
        <a href="https://www.revenuecat.com/privacy">https://www.revenuecat.com/privacy</a>.
      </p>

      <h3>4. Your Rights</h3>
      <ul>
        <li>
          <strong>Access and correction</strong>: you can see and edit every entry in the app (Calendar and Stats
          screens).
        </li>
        <li>
          <strong>Deletion</strong>: <strong>Settings → Delete all my data</strong> deletes all data from your device.
          You can also remove a single habit and its history from the habit's plan settings.
        </li>
        <li><strong>Opt out of analytics</strong>: <strong>Settings → Anonymous usage statistics</strong>.</li>
      </ul>

      <h3>5. Children's Privacy</h3>
      <p>
        Our app is not intended for children under 13 years of age, and we do not knowingly collect personal information
        from children under 13.
      </p>

      <h3>6. Changes to this Policy</h3>
      <p>
        We may update this Privacy Policy from time to time. We will post the new Privacy Policy on this page and update
        the "Last updated" date.
      </p>

      <h3>7. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or see our <Link to="/support">Support</Link> page.
      </p>
    </Container>
  );
};

export default Privacy;
