import React, { useEffect,useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/slices/productSlice';

const Home = () => {
    const dispatch = useDispatch()
    const {allProducts,loading,errorMsg} = useSelector(state=>state.productReducer)
    console.log(allProducts,loading,errorMsg);

    const [currentPage,setCurrentPage] = useState(1)
    const productsPerPage = 8
    const totalPages = Math.ceil(allProducts?.length/[productsPerPage])
    const currentPageProductLastIndex = currentPage * productsPerPage
    const currentPageProductFirstIndex = currentPageProductLastIndex - productsPerPage
    const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)
    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    const navigateToNextPage = ()=>{
        if(currentPage!=totalPages){
          setCurrentPage(currentPage+1)
        }
      }
  
      const navigateToPrevPage = ()=>{
        if(currentPage!=1){
          setCurrentPage(currentPage-1)
        }
      } 
    
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row className="g-4">
    
    {   
    loading? 
    <div className='d-flex justify-content-center align-items-center my-5 '>
        <img width={'70px'} height={'70px'} src="https://i.gifer.com/ZKZg.gif" alt="" />
        Loading...
    </div>
    :
        <>
        { 
        allProducts?.length>0?           
        visibleAllProducts?.map(product=>(
                <Col key={product.id} sm={12} md={6} lg={3}>
                <Card style={{ width: '100%' }}>
                    <Card.Img
                    height={'200px'}
                    variant="top"
                    src={product.image}
                    alt="Card image"
                    />
                    <Card.Body>
                    <Card.Title className='text-success'>{product.name}</Card.Title>
                    <Card.Text>
                        <h5>Cuisine : {product.cuisine}</h5>
                        <h5>MealType : {product.mealType}</h5>
                    </Card.Text>
                    <Link to={`/${product?.id}/view`} style={{textDecoration:'none',color:'white'}} className='bg-success rounded p-2'>View Deatils</Link>
                    </Card.Body>
                </Card>
            </Col>
            ))
        :
        <div className='d-flex justify-content-center align-items-center text-danger my-5 '>Product Not Found!!!
        </div>
        }
        </>
    }

        
      </Row>
      <div className="text-center mt-5 mb-5">
            <span onClick={navigateToPrevPage} ><i className="fa-solid fa-backward me-5"></i></span>
            <span>{currentPage} of {totalPages}</span>
            <span onClick={navigateToNextPage}><i className="fa-solid fa-forward ms-5"></i></span>
          </div>
    </Container>
    
  );
};

export default Home;



    {/* <Row >
        <Col style={{marginTop:'100px'}} className='mb-2' sm={12} md={6} lg={4}>
        <img  width={'100%'} height={'200px'} src="https://www.bigbasketco.com/wp-content/uploads/GoodL-2-29-24-EDITS-49195-scaled.jpg" alt="" />
        </Col>
        <Col style={{marginTop:'100px'}} className='mb-2' sm={12} md={6} lg={4}>
        <img  width={'100%'} height={'200px'} src="https://www.bigbasketco.com/wp-content/uploads/GoodL-2-29-24-EDITS-49195-scaled.jpg" alt="" />
        </Col>
        <Col style={{marginTop:'100px'}} className='mb-2' sm={12} md={6} lg={4}>
        <img  width={'100%'} height={'200px'} src="https://www.bigbasketco.com/wp-content/uploads/GoodL-2-29-24-EDITS-49195-scaled.jpg" alt="" />
        </Col>
        <Col style={{marginTop:'100px'}} className='mb-2' sm={12} md={6} lg={4}>
        <img  width={'100%'} height={'200px'} src="https://www.bigbasketco.com/wp-content/uploads/GoodL-2-29-24-EDITS-49195-scaled.jpg" alt="" />
        </Col>
      </Row>   */}
    

