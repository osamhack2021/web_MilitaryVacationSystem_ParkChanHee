import React, { Component, Fragment } from 'react';
import { Badge, Container, Row, Col } from 'reactstrap';

class Contents extends Component {
    render() {
        return (
            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
                        <Col className="py-5 mb-5 py-md-0 mb-md-0">
                            <Fragment>
                                <div className="position-relative">

                                    <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                                        Project 1
                                        <Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>
                                            New
                                        </Badge>
                                    </span>

                                    <span className="d-block pb-4 h2 text-dark border-bottom border-gray">React Project</span>

                                    <article className="pt-5 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                                        React를 이용한 포트플리오 프로젝트입니다.
                                    </article>

                                </div>
                            </Fragment>
                        </Col>
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Contents;