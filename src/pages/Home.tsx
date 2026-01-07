import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Smartphone, ShieldCheck, Activity } from 'lucide-react';

const Home = () => {
  return (
    <Container>
      <section className="text-center py-5 mb-5">
        <h1 className="display-4 fw-bold mb-3">Quit Smoking for Good</h1>
        <p className="lead text-muted mb-4">
          ZeroSmoke is your personal companion to a smoke-free life. 
          Track your progress, save money, and improve your health.
        </p>
        <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="lg">Download on iOS</Button>
            {/* Android folder was removed per memory, focusing on iOS */}
        </div>
      </section>

      <Row className="gy-4 mb-5">
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm text-center p-4">
            <div className="mx-auto mb-3 text-primary">
              <Activity size={48} />
            </div>
            <Card.Title>Track Health Gains</Card.Title>
            <Card.Text>
              See exactly how your body is recovering from the moment you stop smoking.
            </Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm text-center p-4">
            <div className="mx-auto mb-3 text-success">
              <Smartphone size={48} />
            </div>
            <Card.Title>Daily Motivation</Card.Title>
            <Card.Text>
              Get daily tips, quotes, and challenges to keep you motivated on your journey.
            </Card.Text>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm text-center p-4">
            <div className="mx-auto mb-3 text-info">
              <ShieldCheck size={48} />
            </div>
            <Card.Title>Privacy First</Card.Title>
            <Card.Text>
              Your data is yours. We value your privacy and do not sell your information.
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
