import Card from './Card/Card';
import './RightSide.css';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from './Pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';


const RightSide = () => {

    const [cardData, setCardData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(9)

    useEffect(() => {
        axios(`http://online-store.bootcamp.place/api/products`)
        .then(res => {
            setCardData(res.data)
            // console.log(res.data);
        })
    }, [])

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const currentIndex = cardData.slice(firstItemIndex, lastItemIndex)

    const paginate = (pageNuber) => {
        setCurrentPage(pageNuber)
    }

    const nextPage = () => { 
        setCurrentPage(prev => prev+1)
    }

    const prevPage = () => { 
        setCurrentPage(prev => prev-1)
    }

    return (
        <div className="right-side">
            <div className="right-side-top">
                <form>
                    <div className="input-search">
                        <input type="text" placeholder='Search' />
                        <label className='search-icon'>
                            <svg width="19.25" height="19.25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4_402)">
                                    <path d="M11.742 10.344C12.7103 9.0227 13.144 7.3845 12.9563 5.75716C12.7687 4.12982 11.9735 2.63335 10.7298 1.56714C9.48616 0.50093 7.88579 -0.0563875 6.24888 0.00668566C4.61197 0.0697588 3.05923 0.748571 1.90131 1.90732C0.743395 3.06606 0.0656939 4.61929 0.00379204 6.25624C-0.0581098 7.8932 0.500353 9.49317 1.56745 10.7361C2.63455 11.9789 4.13159 12.7731 5.75906 12.9596C7.38654 13.1461 9.02442 12.7112 10.345 11.742H10.344C10.374 11.782 10.406 11.82 10.442 11.857L14.292 15.707C14.4796 15.8946 14.7339 16.0001 14.9992 16.0002C15.2645 16.0003 15.5189 15.895 15.7065 15.7075C15.8942 15.52 15.9997 15.2656 15.9997 15.0004C15.9998 14.7351 15.8946 14.4806 15.707 14.293L11.857 10.443C11.8213 10.4068 11.7828 10.3734 11.742 10.343V10.344ZM12 6.50001C12 7.22228 11.8578 7.93748 11.5814 8.60477C11.305 9.27206 10.8999 9.87837 10.3891 10.3891C9.87841 10.8998 9.27209 11.3049 8.6048 11.5813C7.93751 11.8577 7.22231 12 6.50004 12C5.77777 12 5.06258 11.8577 4.39528 11.5813C3.72799 11.3049 3.12168 10.8998 2.61096 10.3891C2.10023 9.87837 1.69511 9.27206 1.41871 8.60477C1.14231 7.93748 1.00004 7.22228 1.00004 6.50001C1.00004 5.04132 1.57951 3.64237 2.61096 2.61092C3.64241 1.57947 5.04135 1.00001 6.50004 1.00001C7.95873 1.00001 9.35768 1.57947 10.3891 2.61092C11.4206 3.64237 12 5.04132 12 6.50001Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath clipPath id="clip0_4_402">
                                        <rect width="19.25" height="19.25" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </label>
                    </div>
                </form>
                <Container className='p-0'>
                    <Row>                         
                        {
                            currentIndex.map(item => {
                                return (
                                    <Col key={item.id} className='col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4'>
                                        <Card category={item.category} img={item.images [0]} title={item.title} rate={item.rating} price={item.price} />
                                    </Col>
                                 )})
                        }
                    </Row>
                </Container>
            </div>
            <div className="right-side-bottom">
                <Pagination itemsPerPage={itemsPerPage} totalItem={cardData.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            </div>
        </div>
    )
}

export default RightSide;