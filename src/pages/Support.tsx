import { Container } from 'react-bootstrap';
import { SUPPORT_EMAIL } from '../config';

const Support = () => {
  return (
    <Container className="prose">
      <h1>Support</h1>

      <h3>Contact</h3>
      <p>
        For questions, bug reports or feedback, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We answer
        as soon as we can.
      </p>

      <h3>Subscriptions</h3>
      <p>
        To restore a purchase, open the app and go to <strong>Settings → Restore purchases</strong>. To cancel or change
        a subscription, open the iPhone <strong>Settings → your name → Subscriptions</strong>.
      </p>

      <h3>Your data</h3>
      <p>
        Your data is stored only on your device. To delete it, open the app and go to{' '}
        <strong>Settings → Delete all my data</strong>.
      </p>
    </Container>
  );
};

export default Support;
