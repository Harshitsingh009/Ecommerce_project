import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {
  
  const {products,showSearch,search} = useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory]= useState([]);
  const [subcategory,setSubCategory]=useState([]);
  const [sorttype,setSortType]=useState('relevant');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !==e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if(subcategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item!==e.target.value))
    }
    else{
      setSubCategory(prev=> [...prev,e.target.value])
    }
  }

  const applyfilter= ()=>{
    let productscopy = products.slice();

    if(showSearch && search){
      productscopy = productscopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length>0){
      productscopy=productscopy.filter(item => category.includes(item.category))
    }
    if(subcategory.length>0){
      productscopy=productscopy.filter(item => subcategory.includes(item.subCategory))
    }

    setFilterProducts(productscopy)
  }

  const sortproduct = ()=>{
    let fpcopy = filterProducts.slice();

    switch(sorttype){
      case 'low-high' : {
        setFilterProducts(fpcopy.sort((a,b)=>(a.price - b.price)));
        break;
      }
      case 'high-low' :{
        setFilterProducts(fpcopy.sort((a,b)=>(b.price - a.price)));
        break;
      }
      default :{
        applyfilter();
        break;
      }
    }
  }

  // useEffect(()=>{
  //   setFilterProducts(products);
  // },[])

  useEffect(()=>{
    applyfilter();
  },[subcategory,category,search,showSearch])

  useEffect(()=>{
    sortproduct();
  },[sorttype])

  return (
    <>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

        {/* FILTERING Options  */}
        <div className='min-w-60'>
          <p onClick={()=>(setShowFilter(!showFilter))} className='my-2 text-xl flex items-center cursor-pointer'>FILTERS 
             <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
          </p>
          {/* Category Filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3'value={'Men'} onChange={toggleCategory} />Men
                </p>
            </div>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3'value={'Women'} onChange={toggleCategory} />Women
                </p>
            </div>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3'value={'Kids'} onChange={toggleCategory} />Kids
                </p>
            </div>
          </div>
          {/*Subcategory Filter */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block `}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3'value={'Topwear'} onChange={toggleSubCategory} />Topwear
                </p>
            </div>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3'value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
                </p>
            </div>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3'value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
                </p>
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Product Sort */}
            <select onChange={(e)=>(setSortType(e.target.value))} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
          {/* Map Products Display All Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
              ))
            }
          </div>

        </div>

      </div>
    </>
  )
}

export default Collections