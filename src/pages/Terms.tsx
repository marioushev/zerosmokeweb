import { Container } from 'react-bootstrap';

const Terms = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Terms of Service</h1>
      <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By accessing and using the ZeroSmoke mobile application ("App"), you accept and agree to be bound by the terms and provision of this agreement.
      </p>

      <h3>2. Description of Service</h3>
      <p>
        ZeroSmoke provides tools for tracking smoking habits and health improvements. The App is for informational purposes only and does not constitute medical advice.
      </p>

      <h3>3. User Conduct</h3>
      <p>
        You agree to use the App only for lawful purposes. You are solely responsible for your conduct and any data, text, information, usernames, graphics, photos, profiles, audio and video clips, links and other content that you submit, post, and display on the App.
      </p>

      <h3>4. Disclaimer</h3>
      <p>
        The App is provided "as is". ZeroSmoke makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>

      <h3>5. Limitations</h3>
      <p>
        In no event shall ZeroSmoke or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the App.
      </p>
      
      <h3>6. Contact Us</h3>
      <p>
        If you have any questions about these Terms, please contact us at support@zerosmokeapp.com.
      </p>
    </Container>
  );
};

export default Terms;
