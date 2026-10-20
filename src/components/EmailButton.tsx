import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { SUPPORT_EMAIL_PARTS } from '../config';

// First click copies the support address to the clipboard and shows it.
// Second click opens the mail app.
const EmailButton = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    const email = SUPPORT_EMAIL_PARTS.join('@');

    if (address) {
      window.location.href = `mailto:${email}`;
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard blocked: still show the address so people can read it.
    }
    setAddress(email);
  };

  return (
    <Button variant="outline-primary" size="sm" className="email-button" onClick={handleClick}>
      {address ? `${copied ? 'Copied email' : address} · Click to send email` : 'Copy email address'}
    </Button>
  );
};

export default EmailButton;
