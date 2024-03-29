import React from 'react'
import classes from './ItemSearch.module.scss'
import Button from "../../Forms/Button/Button";
import {withRouter} from "react-router";
import {useSelector} from "react-redux";

const ItemSearch = (props) => {

    const defaultPhotoSrc = useSelector(state => state.app.defaultPhotoSrc)

    const onClickHandler = e => {
        e.preventDefault()
        props.history.push(`/search/${props.uid}`)
    }

    return(
        <div className={classes.ItemSearch} key={props.i}>
            <div className={classes.img_container}>
                <img src={props.defaultPhotoSrc ? props.defaultPhotoSrc : defaultPhotoSrc} alt={'photo'}/>
            </div>

            <span className={classes.name}>
                {props.user_name}
            </span>

            <Button
                type={'blue'}
                text={'Open'}
                onClick={e => onClickHandler(e)}
                size={'0'}
            />

        </div>
    )
}

export default withRouter(ItemSearch)