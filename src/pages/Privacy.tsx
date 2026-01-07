import { Container } from 'react-bootstrap';

const Privacy = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Privacy Policy</h1>
      <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>

      <h3>1. Information Collection</h3>
      <p>
        We collect information you provide directly to us when you create an account, update your profile, or communicate with us. This may include your name, email address, and smoking habits data.
      </p>

      <h3>2. Use of Information</h3>
      <p>
        We use the information we collect to provide, maintain, and improve our services, such as to track your progress, personalize your experience, and send you technical notices and support messages.
      </p>

      <h3>3. Data Storage</h3>
      <p>
         Your personal progress data is stored securely. We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
      </p>

      <h3>4. Analytics</h3>
      <p>
        We may use third-party analytics services to help us understand how users access and use the App. These tools may use cookies and similar technologies to collect information about your use of the App.
      </p>

      <h3>5. Changes to this Policy</h3>
      <p>
        We may change this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy.
      </p>

      <h3>6. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy, please contact us at privacy@zerosmokeapp.com.
      </p>
    </Container>
  );
};

export default Privacy;
