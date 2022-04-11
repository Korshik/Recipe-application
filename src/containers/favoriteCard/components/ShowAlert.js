import { useEffect } from "react";
import './ShowAlert.css';

export default function ShowAlert(props) {
    useEffect(() => {
        const timeoutId = setTimeout(props.hideAlert, 2000);
        return () => clearTimeout(timeoutId);
    }, [props.hideAlert, props.text]);

    return (
        <div className="show-alert">{props.text}</div>
    );
}