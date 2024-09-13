'use client'
import Link from 'next/link';
import React from 'react';
import styles from '@public/styles/home/ProductStudent.module.css'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const ProductStudent: React.FC = () => {
    return (
        <>
            <Container className={styles.container}>
                <section className={styles.header}>
                    <div className={styles.headerLeft}>
                        <div className={styles.headerLeft__borderImg}>
                            <Image src="/img/Document.svg" alt="" className={styles.headerLeft__img} />
                        </div>
                        <h1 className={styles.headerLeft__title}>Sản phẩm học viên</h1>
                    </div>
                    <Link href={'/'} className={styles.headerRight}>
                        <h2 className={styles.headerRight__title}>Xem thêm</h2>
                        <Image src="/img/arrowRightBlue.svg" alt="" className={styles.headerRight__img} />
                    </Link>
                </section>
                <Row md={12} className={styles.main}>
                    <Col className={styles.mainContainer}>
                        <Card className={styles.mainContainer__box}>
                            <Card.Img src="/img/post1.png" alt="" className={styles.head__img} />
                            <Card.Body className={styles.containerBody}>
                                <Card.Title className={styles.containerBody__title}>
                                    Bộ công nghệ thông tin vừa ra mắt robot 5.0
                                </Card.Title>
                                <section className={styles.content}>
                                    <div className={styles.leftContent}>
                                        <Image src="/img/Calendarblue.svg" alt="" className={styles.leftContent__img} />
                                        <Card.Text className={styles.leftContent__text}>
                                            28/08/2024
                                        </Card.Text>
                                    </div>
                                    <div className={styles.rightContent}>
                                        <Card.Text className={styles.rightContent__text}>
                                            999
                                        </Card.Text>
                                        <Image src="/img/eyeYellow.svg" alt="" className={styles.rightContent__img} />
                                    </div>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  className={styles.mainContainer}>
                        <Card className={styles.mainContainer__box}>
                            <Card.Img src="/img/post2.png" alt="" className={styles.head__img} />
                            <Card.Body className={styles.containerBody}>
                                <Card.Title className={styles.containerBody__title}>
                                    Bộ công nghệ thông tin vừa ra mắt robot 5.0
                                </Card.Title>
                                <section className={styles.content}>
                                    <div className={styles.leftContent}>
                                        <Image src="/img/Calendarblue.svg" alt="" className={styles.leftContent__img} />
                                        <Card.Text className={styles.leftContent__text}>
                                            28/08/2024
                                        </Card.Text>
                                    </div>
                                    <div className={styles.rightContent}>
                                        <Card.Text className={styles.rightContent__text}>
                                            999
                                        </Card.Text>
                                        <Image src="/img/eyeYellow.svg" alt="" className={styles.rightContent__img} />
                                    </div>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col  className={styles.mainContainer}>
                        <Card className={styles.mainContainer__box}>
                            <Card.Img src="/img/post3.png" alt="" className={styles.head__img} />
                            <Card.Body className={styles.containerBody}>
                                <Card.Title className={styles.containerBody__title}>
                                    Bộ công nghệ thông tin vừa ra mắt robot 5.0
                                </Card.Title>
                                <section className={styles.content}>
                                    <div className={styles.leftContent}>
                                        <Image src="/img/Calendarblue.svg" alt="" className={styles.leftContent__img} />
                                        <Card.Text className={styles.leftContent__text}>
                                            28/08/2024
                                        </Card.Text>
                                    </div>
                                    <div className={styles.rightContent}>
                                        <Card.Text className={styles.rightContent__text}>
                                            999
                                        </Card.Text>
                                        <Image src="/img/eyeYellow.svg" alt="" className={styles.rightContent__img} />
                                    </div>
                                </section>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductStudent;