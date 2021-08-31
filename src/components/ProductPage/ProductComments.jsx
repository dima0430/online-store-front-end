import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getComments } from '../../redux/actions/comments'

import "./index.scss"

const ProductComments = ({productId}) => {
    
    const {comments}= useSelector(({comments})=>comments)
    const {id}= useSelector(({logIn})=>logIn)
    const dispatch = useDispatch()
    const [comment, setComment] = React.useState('')
    React.useEffect(() => {
        dispatch(getComments(productId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onChange=(e)=>{
        setComment(e.target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(addComment(comment,+id,+productId))
    }
    
    return (
        <div className="product__comments-wrapper">
            <div className="product__comments">
                {comments.map(item=>{
                    return( 
                    <div key={item.id} className='product__comment'>
                        <div className="product__comment__title">
                            <span>{`${item.firstname} ${item.lastname}`}</span>
                            <span>{item.date}</span>
                        </div>
                        <div>{item.clientText}</div>
                    </div>)
                })}
            </div>
                <form onSubmit={onSubmit} >
                    <input type="text" onChange={onChange} />
                    <button >ljlfnb</button>
                </form>
        </div>    
    )
}

export default ProductComments
