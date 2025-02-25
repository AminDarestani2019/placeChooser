import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import PropTypes from "prop-types";

const TIMER = 3000;         
export default function DeleteConfirmation({onConfirm,onCancel}){
    useEffect(()=>{
        console.log('TIMER SET');
        const timer = setTimeout(()=>{
            onConfirm();
        },TIMER);
        return ()=>{
            clearTimeout(timer);
        }
    },[onConfirm]);    

    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>So you really want to remove this place?</p>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">No</button>
                <button onClick={onConfirm} className="button">Yes</button>
            </div>
            <ProgressBar timer={TIMER} />
        </div>
    );
}
DeleteConfirmation.propTypes = {
    onConfirm:PropTypes.func.isRequired,
    onCancel:PropTypes.func.isRequired,
}