import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getCategoryProducts } from '../../redux/actions/products'
import './index.scss'

const CatalogList = () => {
    
    const history = useHistory();
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.categoriesList)
    const str = {' ':'-',"Ё":"YO","Й":"I","Ц":"TS","У":"U","К":"K","Е":"E","Н":"N","Г":"G","Ш":"SH","Щ":"SCH","З":"Z","Х":"H","Ъ":"'","ё":"yo","й":"i","ц":"ts","у":"u","к":"k","е":"e","н":"n","г":"g","ш":"sh","щ":"sch","з":"z","х":"h","ъ":"'","Ф":"F","Ы":"I","В":"V","А":"a","П":"P","Р":"R","О":"O","Л":"L","Д":"D","Ж":"ZH","Э":"E","ф":"f","ы":"i","в":"v","а":"a","п":"p","р":"r","о":"o","л":"l","д":"d","ж":"zh","э":"e","Я":"Ya","Ч":"CH","С":"S","М":"M","И":"I","Т":"T","Ь":"'","Б":"B","Ю":"YU","я":"ya","ч":"ch","с":"s","м":"m","и":"i","т":"t","ь":"'","б":"b","ю":"yu"}
    const transliterate=(word)=>{
    return word.split('').map((char)=>{ 
        return str[char] || char; 
    }).join("");
    }
    const onClick=(name,id)=>{
        const word=transliterate(name).toLowerCase()
        history.push(`/${word}`);
        dispatch(getCategoryProducts(id))
    }
    return (
            <div className={`catalog-list`} >
                {categories.map((item)=>(
                    <div onClick={()=>onClick(item.name,item.id)} key={+item.id} className="catalog-item">
                            <span className='catalog-item__text'>{item.name}</span>
                    </div>))}
            </div>
    )   
}

export default CatalogList
