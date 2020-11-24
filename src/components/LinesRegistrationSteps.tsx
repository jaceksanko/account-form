import React from "react";
import "./LinesRegistrationSteps.scss";

interface LinesRegistrationStepsProps {
    step1?: boolean,
    step2?: boolean,
    step3?: boolean
}

function LinesRegistrationSteps(props:LinesRegistrationStepsProps) {
    return (
        <aside className="LinesRegistrationSteps">
            <span className="LinesRegistrationSteps-line-top"></span>
            <span className={`LinesRegistrationSteps-line-right 
                    LinesRegistrationSteps-line-right__first 
                    ${props.step1 &&'active-line'}`}>
                <div className="LinesRegistrationSteps-line-right-text LinesRegistrationSteps-line-right-text-number">01</div>
                { props.step1 && <div className="LinesRegistrationSteps-line-right-text">Basic</div> }
            </span>
            <span className={`LinesRegistrationSteps-line-right 
                    LinesRegistrationSteps-line-right__second
                    ${props.step2 &&'active-line'}
                    `}>
                <div className="LinesRegistrationSteps-line-right-text LinesRegistrationSteps-line-right-text-number">02</div>
                { props.step2 && <div className="LinesRegistrationSteps-line-right-text">Personal</div> }
            </span>
            <span className={`LinesRegistrationSteps-line-right 
                    LinesRegistrationSteps-line-right__third
                    ${props.step3 &&'active-line'}
                    `}>
                <div className="LinesRegistrationSteps-line-right-text LinesRegistrationSteps-line-right-text-number">03</div>
                { props.step3 && <div className="LinesRegistrationSteps-line-right-text">Details</div> }
            </span>
        </aside>
    );
}

LinesRegistrationSteps.defaultProps = {
    step1: false,
    step2: false,
    step3: false
}


export default LinesRegistrationSteps;