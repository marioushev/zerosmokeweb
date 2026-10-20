import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Smartphone, ShieldCheck, Activity } from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/us/app/zero-smoke/id6743452857';

const features = [
  {
    icon: Activity,
    title: 'Track health gains',
    text: 'See exactly how your body is recovering from the moment you stop smoking.',
  },
  {
    icon: Smartphone,
    title: 'Daily motivation',
    text: 'Get daily tips, quotes, and challenges to keep you motivated on your journey.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy first',
    text: 'Your data is yours. It stays on your device, and we never sell your information.',
  },
];

// Placeholder testimonials. Replace with real user messages (with permission) before publishing.
const testimonials = [
  {
    name: 'Maria K.',
    avatar: '/avatars/01.jpg',
    time: 'Day 30',
    messages: [
      'Day 30 today. The health timeline is the thing that keeps me going, I check it every morning.',
      'Also just realised I have saved 142 euro. Wild.',
    ],
  },
  {
    name: 'Tom',
    avatar: '/avatars/02.jpg',
    time: 'Day 12',
    messages: ['Tried three apps before this one. This is the only one that did not ask me to make an account.'],
  },
  {
    name: 'Daniel R.',
    avatar: '/avatars/03.jpg',
    time: 'Week 3',
    messages: [
      'The widget is a small thing, but logging in one tap is why I actually stuck with it.',
      'Down from 15 a day to 4 in three weeks.',
    ],
  },
  {
    name: 'Ana',
    avatar: '/avatars/04.jpg',
    time: 'Day 8',
    messages: ['Quit date was last Sunday. Still smoke-free. Thank you for building this.'],
  },
  {
    name: 'Jonas',
    avatar: '/avatars/05.jpg',
    time: 'Day 45',
    messages: [
      'The money counter is brutal in a good way. 45 days and it says 310 euro.',
      'That is a weekend trip I did not have before.',
    ],
  },
  {
    name: 'Priya S.',
    avatar: '/avatars/06.jpg',
    time: 'Day 3',
    messages: ['Day 3 is the hardest one so far. The daily check-in helped me get through tonight.'],
  },
  {
    name: 'Luca',
    avatar: '/avatars/07.jpg',
    time: 'Week 6',
    messages: [
      'I went with the cut down plan instead of quitting cold. Zero pressure, just a lower number each week.',
      'Six weeks in and I am at 2 a day.',
    ],
  },
  {
    name: 'Emma W.',
    avatar: '/avatars/08.jpg',
    time: 'Day 21',
    messages: ['Logged a cigarette from Siri while driving. Did not expect that to work so well.'],
  },
  {
    name: 'Nikola',
    avatar: '/avatars/09.jpg',
    time: 'Day 60',
    messages: [
      'Two months. The health timeline says my circulation has improved and I can actually feel it on the stairs.',
    ],
  },
  {
    name: 'Sofia',
    avatar: '/avatars/10.jpg',
    time: 'Day 14',
    messages: ['Vaping, not cigarettes, and the app handles it fine. Tracks puffs and nicotine strength.'],
  },
  {
    name: 'Ben',
    avatar: '/avatars/11.jpg',
    time: 'Day 5',
    messages: [
      'Reset my quit date once already. The app did not make me feel bad about it, it just started counting again.',
    ],
  },
  {
    name: 'Hana K.',
    avatar: '/avatars/12.jpg',
    time: 'Day 90',
    messages: ['90 days today. Still no account, still no ads. Keep it that way.', 'Thank you.'],
  },
];

const ROW_SIZE = 4;
const testimonialRows = Array.from({ length: Math.ceil(testimonials.length / ROW_SIZE) }, (_, i) =>
  testimonials.slice(i * ROW_SIZE, (i + 1) * ROW_SIZE),
);

const Home = () => {
  return (
    <Container>
      <section className="hero">
        <p className="eyebrow">iOS app</p>
        <h1>Quit smoking for good.</h1>
        <p className="lead">
          ZeroSmoke is your personal companion to a smoke-free life. Track your progress, save money, and
          improve your health.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <Button variant="primary" size="lg" href={APP_STORE_URL}>
            Download on the App Store
          </Button>
          <Link to="/support" className="btn btn-outline-primary btn-lg">
            Support
          </Link>
        </div>
      </section>

      <section className="features">
        <Row className="gy-5 stagger">
          {features.map(({ icon: Icon, title, text }) => (
            <Col md={4} key={title}>
              <article className="feature">
                <div className="feature-icon">
                  <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Col>
          ))}
        </Row>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-title">
        <p className="eyebrow">Messages from users</p>
        <h2 id="testimonials-title">What people tell us.</h2>
        {testimonialRows.map((row, rowIndex) => {
          const direction = rowIndex % 2 === 0 ? 'left' : 'right';
          return (
            <div className="marquee" key={rowIndex}>
              <div className="marquee-track" data-direction={direction}>
                {[0, 1].map((copy) => (
                  <div className="marquee-group" aria-hidden={copy === 1 || undefined} key={copy}>
                    {row.map(({ name, time, messages, avatar }) => (
                      <figure className="chat" key={name}>
                        <figcaption className="chat-header">
                          <span className="chat-avatar" aria-hidden="true">
                            {name[0]}
                            <img
                              src={avatar}
                              alt=""
                              width="60"
                              height="60"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </span>
                          <span className="chat-name">{name}</span>
                          <span className="chat-time">{time}</span>
                        </figcaption>
                        <blockquote className="chat-body">
                          {messages.map((m) => (
                            <p className="bubble" key={m}>{m}</p>
                          ))}
                        </blockquote>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <section className="cta-band d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
        <div>
          <h2>Your last smoke starts here.</h2>
          <p>Free to download. No account, no tracking across apps.</p>
        </div>
        <Button className="btn-light-on-dark flex-shrink-0" size="lg" href={APP_STORE_URL}>
          Get ZeroSmoke
        </Button>
      </section>
    </Container>
  );
};

export default Home;
