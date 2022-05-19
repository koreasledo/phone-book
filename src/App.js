import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  // 1. 연락처 생성
  // 2. 연락처에는 이름 / 전화번호 정보
  // 3. 연락처 리스트를 볼 수 있다
  // 4. 이름으로 연락처를 검색할 수 있다.

  return (
    <div className="App">
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col >
            <ContactForm />
          </Col>
          <Col className='partition'>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
