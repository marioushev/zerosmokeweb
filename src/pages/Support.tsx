import { Container } from 'react-bootstrap';
import EmailButton from '../components/EmailButton';

const Support = () => {
  return (
    <Container className="prose">
      <h1>Support</h1>

      <h3>Contact</h3>
      <p>
        For questions, bug reports or feedback, email us. We answer as soon as we can.
      </p>
      <p>
        <EmailButton />
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
