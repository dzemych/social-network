import React, {useEffect} from 'react'
import classes from './NewMessage.module.scss'
import photo from "../../../img/wide.jpg";
import {useDispatch} from "react-redux";
import {withRouter} from "react-router";
import {hideNewMessage} from "../../../redux/actions/appActions";


const NewMessage = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    const openUserProfile = e => {
        e.preventDefault()
        props.history.push(`/search/${props.userUid}`)
    }

    const onClose = e => {
        e.preventDefault()
        dispatch(hideNewMessage())
    }

    return(
        <div className={classes.NewMessage}>
            <div className={classes.wrapper}>

                <i className={'fa fa-times'} onClick={e => onClose(e)}/>

                <div className={classes.imgContainer}>
                    <img src={photo} alt={'alt'} onClick={e => openUserProfile(e)}/>
                </div>

                <div className={classes.info}>
                    <span className={classes.user_name} onClick={e => openUserProfile(e)}>
                        {props.user_name}
                    </span>

                    <span className={classes.main_text}>
                        You have
                        <span className={classes.amount}> {props.amount} </span>
                        new
                        <span> {props.amount > 1 ? 'messages' : 'message'} </span>
                        from {props.user_name}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NewMessage)