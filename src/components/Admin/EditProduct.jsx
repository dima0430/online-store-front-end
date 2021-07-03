import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TrashSvg } from '../SVGComponents/SVG';

const createEmptyItem = () => ({
    name: "",
    value: ""
  });
  
const EditProduct = () => {
    const categories =useSelector(state => state.categories.categoriesList)
    const products =useSelector(state => state.products.productsList[4])
    const [product, setProduct] = useState({...products})
    // const [search, setSearch] = useState([])
    let d=JSON.parse(product.description)
	const [items, setItems] = useState(d);
  	const handleChangeOf = useCallback(
		(index, name) => (e) => {
			setItems((prev) => {
				const copy = Array.from(prev);
				copy[index][name] = e.target.value;
				return copy;
			});
		},
    []);
  	const handleLengthChange = useCallback((e) => {
		const nextLength = +e.target.value;
		setItems((prev) => {
		if (nextLength > prev.length) {
			return prev.concat(
			Array.from({ length: nextLength - prev.length }, createEmptyItem)
			);
		}
		return prev.slice(0, nextLength);
		});
  	}, 
	[]);
    useEffect(() => {
        setProduct(prev=>({...prev,...{description:JSON.stringify(items)}}))
    }, [items])

	const removeItem = (id) => {
		const before = items.slice(0, id);
		const after = items.slice(id + 1);
		setItems( [...before, ...after]);
	}
    const onChangeInputs=(e)=>{
        setProduct(prev=>(e.target.type==='file'?{...prev,...{[e.target.name]:e.target.files[0]}}:{...prev,...{[e.target.name]:e.target.value}}))
    }

    // const onSeaRch=(e)=>{
    //     const data=new FormData();
    //     data.append('search',e.target.value)
    //     axios.post('http://localhost:8888/back/api/search_product.php',
    //     data)
    //     .then(response=>setSearch(response.data))
    // } 
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(product)
        const data=new FormData();
        data.append('name',product.name)
        data.append('price',+product.price)
        data.append('image',product.image)
        data.append('description',product.description)
        data.append('brand',product.brand)
        data.append('category',+product.category)
        const config={
            headers:{'content-type': 'multipart/form-data'}
        }

        axios.post('http://localhost:8888/back/api/add_product.php',
        data, 
        config)
        .then(response=>console.log(response))
        
    }
    return (
        <>
        <h2 className='title'>Редагувати товар</h2>
        {/* <input className="inputs" type="search" name="search" onChange={onSeach} /> */}
        {/* {search.length>0 &&
          <div>
              {search.map(({id,name,description,price,brand,category_id})=>{
                  return <div onClick={()=>{setProduct(id,name,price,null,description,brand,category_id);console.log(product)}}>
                      {name}
                  </div>
              })}
          </div>    
        } */}
        <form onSubmit={onSubmit} className='add-product'>

            <label className='label'>Назва</label>     
            <input className="inputs" type="text" value={product.name} name='name' onChange={onChangeInputs}/>

            <label className='label'>Ціна</label>
            <input className="inputs" type="number" value={product.price} name="price" onChange={onChangeInputs} />
            
			<label className='label'>Фото</label>
            <input className="inputs" type="file" name="image" accept="image/jpeg,image/png" onChange={onChangeInputs}/>
            
            <label className='label'>Залишок</label>
            <input className="inputs" type="number" value={product.count} name="balance" onChange={onChangeInputs} />

			<label className='label'>Кількість характеристик</label>
            <input className='inputs' type="number" onChange={handleLengthChange} />
            {items.map((item, index) => (
            <div className="description" key={index}>
                <div className="description-block">  
                  <label className='label'>Назва характеристики</label>
                  <input className="inputs" name="name" value={item.name} onChange={handleChangeOf(index, "name")}/>
                </div>
                <div className="description-block">  
                  <label className='label'>Значення характеристики</label>
                  <input className="inputs" name="value" value={item.value} onChange={handleChangeOf(index, "value")} />
                </div>
                <div className="trash" onClick={()=>removeItem(index)}>
                    <TrashSvg/>
                </div>
            </div>
            ))}
            <label className='label'>Бренд</label>
			{/* <input className="inputs" type="text" name='brand' onChange={onChangeInputs} /> */}
            <select className="inputs" name="category" onChange={onChangeInputs} >
                <option value={null} >--Вибрати бренд--</option>
            </select>
            <label className='label'>Категорія</label>
			<select className="inputs" name="category"  onChange={onChangeInputs} >
            <option value={null} >--Вибрати категорію--</option>   
                {categories.map(item =>{
                return(
                    <option key={+item.id} value={+item.id}>{item.name}</option>    
                )})}
            </select>
            <button className="button" type='submit'>Редагувати</button>
        </form>
    </>
    )
}

export default EditProduct
