import './Header.css';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const Header = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    const choseProducts = props.choseProducts;
    const setChoseProducts= props.setChoseProducts;
    const productCount = props.productCount;
    const setProductCount = props.setProductCount;

    function deleteElement (arr, index) {
        const elementsBeforeIndex = arr.slice(0, index);
        const elementsAfterIndex = arr.slice(index + 1, arr.length);
      
        return [...elementsBeforeIndex, ...elementsAfterIndex];
    }
      
    const deleteOfProduct = (index) => {
        setChoseProducts(deleteElement(choseProducts, index));
        setProductCount(prev => prev -= 1)
    };

    const deleteAll = (index) => {
        setChoseProducts(choseProducts.slice(index, 0)) 
        setProductCount(prev => prev = 0)
    }

    let result = 0;
    choseProducts.map(item => {
        result = (result + item.dataCard.price) * item.count;
    })

    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <h1>Online Store</h1>
                </div>
                <a className="header-btn" onClick={handleShow}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.5C0 1.36739 0.0526784 1.24021 0.146447 1.14645C0.240215 1.05268 0.367392 1 0.5 1H2C2.11153 1.00003 2.21985 1.03735 2.30773 1.10602C2.39561 1.1747 2.45801 1.27078 2.485 1.379L2.89 3H14.5C14.5734 3.00007 14.6459 3.0163 14.7124 3.04755C14.7788 3.0788 14.8375 3.12429 14.8844 3.1808C14.9313 3.23731 14.9651 3.30345 14.9835 3.37452C15.002 3.44558 15.0045 3.51984 14.991 3.592L13.491 11.592C13.4696 11.7066 13.4087 11.8101 13.3191 11.8846C13.2294 11.9591 13.1166 11.9999 13 12H4C3.88343 11.9999 3.77057 11.9591 3.68091 11.8846C3.59126 11.8101 3.53045 11.7066 3.509 11.592L2.01 3.607L1.61 2H0.5C0.367392 2 0.240215 1.94732 0.146447 1.85355C0.0526784 1.75979 0 1.63261 0 1.5ZM3.102 4L4.415 11H12.585L13.898 4H3.102ZM5 12C4.46957 12 3.96086 12.2107 3.58579 12.5858C3.21071 12.9609 3 13.4696 3 14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16C5.53043 16 6.03914 15.7893 6.41421 15.4142C6.78929 15.0391 7 14.5304 7 14C7 13.4696 6.78929 12.9609 6.41421 12.5858C6.03914 12.2107 5.53043 12 5 12ZM12 12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16C12.5304 16 13.0391 15.7893 13.4142 15.4142C13.7893 15.0391 14 14.5304 14 14C14 13.4696 13.7893 12.9609 13.4142 12.5858C13.0391 12.2107 12.5304 12 12 12ZM5 13C5.26522 13 5.51957 13.1054 5.70711 13.2929C5.89464 13.4804 6 13.7348 6 14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15C4.73478 15 4.48043 14.8946 4.29289 14.7071C4.10536 14.5196 4 14.2652 4 14C4 13.7348 4.10536 13.4804 4.29289 13.2929C4.48043 13.1054 4.73478 13 5 13ZM12 13C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13Z" fill="white"/>
                    </svg>
                    <span>cart {productCount}</span>
                </a>
            </header>

            {/* Modal */}

            <Modal size="xl" bg="primary" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Total: 
                        <span className="total-price">
                            {result}
                        </span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    {
                        choseProducts.map((item, index) => {
                            return (
                                <div key={item.dataCard.id} className="body-wrapper" >
                                    <div className="product-img">
                                        <img src={item.dataCard.images [0]} alt={item.dataCard.category} />
                                    </div>
                                    <div className="product-title">
                                        <p>{item.dataCard.title}</p>
                                    </div>
                                    <div className="dec-inc">
                                        <div className="dec dec-inc-border">-</div>
                                        <div className="count-of-product">{item.count}</div>
                                        <div className="inc dec-inc-border">+</div>
                                    </div>
                                    <div className="product-price">
                                        <span>{item.dataCard.price * item.count}</span>
                                    </div>
                                    <div 
                                        className="product-delete" 
                                        onClick={() => deleteOfProduct(index)}>X</div>
                                </div>
                            )
                        })
                    }
                    <a className="btn-delete-all" onClick={(index) => deleteAll()}>Delete All</a>
                </Modal.Body>
            </Modal>

            {/* Modal */}

        </>
    )
}

export default Header;