import './MainContent.css';
import { Container, Row, Col } from 'react-bootstrap';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const MainContent = () => {
    return (
        <main className="main-content">
            <Container className='main-container m-0'>
                <Row>
                    <Col className='left-side p-0'>
                        <LeftSide />
                    </Col>

                    <Col className='right-side right-margin p-0'>
                        <RightSide />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default MainContent;