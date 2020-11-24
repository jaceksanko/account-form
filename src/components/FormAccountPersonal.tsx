import React, {useState} from "react";
import LinesRegistrationSteps from "./LinesRegistrationSteps"
import "./FormAccountPersonal.scss";
import {months, countryCodes} from "../assets/assets"
import useWindowDimensions from "../hooks/windowDimensions";
import validDate from "../assets/validDate";


function FormAccountPersonal() {
    const [name, setName] = useState("");
    const [phonePrefix, setPhonePrefix] = useState("+48 (PL)");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [playChess, setPlayChess] = useState("yes");
    const [birthDay, setBirthDay] = useState("01");
    const [birthMonth, setBirthMonth] = useState(1);
    const [birthYear, setBirthYear] = useState("");
    const [validationInputName, setValidationInputName] = useState({
        isError: false,
        textError: ""
    })
    const [validationInputPhoneNumber, setValidationInputPhoneNumber] = useState({
        isError: false,
        textError: ""
    })
    const [validationInputBirthDay, setValidationInputBirthDay] = useState({
        isError: false,
        textError: ""
    })
    const [validationInputBirthMonth, setValidationInputBirthMonth] = useState({
        isError: false,
        textError: ""
    })
    const [validationInputBirthYear, setValidationInputBirthYear] = useState({
        isError: false,
        textError: ""
    })

    const { width } = useWindowDimensions();
    const currentYear = new Date().getFullYear();

    const birthError = () => {
        switch (true) {
            case validationInputBirthDay.isError &&  validationInputBirthYear.isError:
                return <div>
                    <span className="errorMessageBirth">{validationInputBirthDay.textError}</span>
                    <span className="errorMessageBirth">{validationInputBirthYear.textError}</span>
                </div>
            case validationInputBirthDay.isError:
                return <span className="errorMessageBirth">{validationInputBirthDay.textError}</span>
            case validationInputBirthYear.isError:
                return <span className="errorMessageBirth">{validationInputBirthYear.textError}</span>

            default:
                return null
        }
    }


    const validate = () => {
        if (name === "" || name.length < 3)  setValidationInputName({
            isError: true,
            textError: "Names should have a minimum 3 characters"
        });
        if (phoneNumber === "" || phoneNumber.length < 9)   setValidationInputPhoneNumber({
            isError: true,
            textError: "Number should have 9 digits"
        });
        if (birthDay === "")  setValidationInputBirthDay({
            isError: true,
            textError: "Birth day should have a number"
        });
        if (birthYear === "")  setValidationInputBirthYear({
            isError: true,
            textError: "Birth year should have a number"
        });
        if (!validDate(Number(birthDay), birthMonth, Number(birthYear))) {
            setValidationInputBirthYear({
                isError: true,
                textError: "Data does not exist"
            })
            setValidationInputBirthMonth({
                isError: true,
                textError: ""
            })
            setValidationInputBirthDay({
                isError: true,
                textError: ""
            })
        } else {
            let presentDate = new Date(Date.now());
            let eighteenYearsBack = new Date((presentDate.getFullYear() - 18), presentDate.getMonth(), presentDate.getDate());
            let fromInput= new Date(`${Number(birthYear)}/${birthMonth}/${Number(birthDay)}`);
            if (eighteenYearsBack < fromInput) {
                setValidationInputBirthYear({
                    isError: true,
                    textError: "You are under 18"
                })
                setValidationInputBirthMonth({
                    isError: true,
                    textError: ""
                })
                setValidationInputBirthDay({
                    isError: true,
                    textError: ""
                })
            }
        }
    }

    const handleSubmit = (e:React.SyntheticEvent) => {
        validate();
        e.preventDefault();
    }


    return (
        <article className="FormAccountPersonal">
            <LinesRegistrationSteps step2={true}/>
            <section className="FormAccountPersonal-form-container">
                <header className="FormAccountPersonal-header">
                    <h2 className="FormAccountPersonal-header-text">Provide personal information so that we can create a new account for you.</h2>
                </header>
                <form className="FormAccountPersonal-form" onSubmit={handleSubmit}>
                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-name">
                        <span className="FormAccountPersonal-form__label-text">Your name</span>
                        <input
                            className={`FormAccountPersonal-form__input FormAccountPersonal-form-name__input 
                                ${(validationInputName.isError) ? "errorInput" : null}`
                            }
                            type="text"
                            name="name"
                            minLength={3}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                                setValidationInputName({
                                    isError: false,
                                    textError: ""
                                });
                            }}
                        />
                        {(validationInputName.isError) ?
                            <span className="errorMessage">{validationInputName.textError}</span> : null}
                    </label>
                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-phone">
                        <span className="FormAccountPersonal-form__label-text">Mobile</span>
                        <div className="FormAccountPersonal-form-phone-container">
                            <div className="FormAccountPersonal-form-phone__prefix-select">
                                <select
                                    className="FormAccountPersonal-form__input FormAccountPersonal-form-phone__prefix"
                                    required
                                    defaultValue={phonePrefix}
                                    onChange={(e) => setPhonePrefix(e.target.value)}
                                >
                                    {countryCodes.map((country: any) => {
                                        const countryKey = Object.keys(country)[0];
                                        const countryPrefixNumber = country[countryKey].code;
                                        const countryPrefix = `+${countryPrefixNumber} (${countryKey})`;
                                        return <option key={countryKey} value={countryPrefix}>{countryPrefix}</option>
                                    })}

                                </select>
                            </div>

                            <input
                                className={`FormAccountPersonal-form__input FormAccountPersonal-form-phone__number 
                                        ${(validationInputPhoneNumber.isError) ? "errorInput" : null}`}
                                type="number"
                                name="mobile-number"
                                min={0}
                                value={phoneNumber}
                                onChange={(e) => {
                                    if (e.target.value.length > 9) {
                                        e.target.value = e.target.value.slice(0,9);
                                    }
                                    setPhoneNumber(e.target.value)
                                    setValidationInputPhoneNumber({
                                        isError: false,
                                        textError: ""
                                    });
                                }}
                            />
                        </div>
                        {(validationInputPhoneNumber.isError) ?
                            <span className="errorMessage">{validationInputPhoneNumber.textError}</span> : null}
                    </label>
                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-chess">
                        <span className="FormAccountPersonal-form__label-text">Can you play chess?</span>
                    </label>
                        <div className="FormAccountPersonal-form-chess-container">
                            <label className="FormAccountPersonal-form__input
                            FormAccountPersonal-form-chess-radio
                            FormAccountPersonal-form-chess-radio__yes">
                                <span className="FormAccountPersonal-form-chess-radio__text">Yes</span>
                                <input
                                    className="FormAccountPersonal-form-chess-radio__input"
                                    name="chess"
                                    type="radio"
                                    checked={playChess === "yes"}
                                    onChange={() => setPlayChess("yes")}
                                />
                            </label>
                            <label className="FormAccountPersonal-form__input
                            FormAccountPersonal-form-chess-radio
                            FormAccountPersonal-form-chess-radio__no">
                                <span className="FormAccountPersonal-form-chess-radio__text">No</span>
                                <input
                                    className="FormAccountPersonal-form-chess-radio__input"
                                    name="chess"
                                    type="radio"
                                    checked={playChess === "no"}
                                    onChange={() => setPlayChess("no")}
                                />
                            </label>
                        </div>

                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-birth">
                        <span className="FormAccountPersonal-form__label-text">Date of birth</span>
                        <div className="FormAccountPersonal-form-birth-container">
                            <input
                                className={`FormAccountPersonal-form__input FormAccountPersonal-form-birth__day 
                                        ${(validationInputBirthDay.isError) ? "errorInputBox " : null}`}
                                type="number"
                                name="date-day-number"
                                min={1}
                                max={31}
                                value={birthDay}
                                onChange={(e) => {
                                    if (e.target.value.length > 2) {
                                        e.target.value = e.target.value.slice(0,2);
                                    }
                                    if (Number(e.target.value) > 31) {
                                        e.target.value = "31";
                                    }
                                    if (Number(e.target.value) <= 0) {
                                        e.target.value = "";
                                    }
                                    setBirthDay(e.target.value)
                                    setValidationInputBirthDay({
                                        isError: false,
                                        textError: ""
                                    });
                                }}
                                onBlur={(e) => {
                                    let birthDay = e.target.value.length < 2 && e.target.value > "0" ?
                                        `0${e.target.value}`: e.target.value;
                                    setBirthDay(birthDay)
                                }}
                            />
                            <span className="FormAccountPersonal-form-birth__separator"></span>
                            <div className="FormAccountPersonal-form-birth__month-select">
                                <select
                                    className={`FormAccountPersonal-form__input FormAccountPersonal-form-birth__month
                                            ${(validationInputBirthMonth.isError) ? "errorInputBox" : null}`}
                                    required
                                    defaultValue={birthMonth}
                                    onChange={(e) => {
                                        setBirthMonth(Number(e.target.value))
                                        setValidationInputBirthMonth({
                                            isError: false,
                                            textError: ""
                                        });
                                    }}
                                >
                                    {months.map((month:string, index: number) => {
                                        let indexPlusOne = ++index
                                        let monthNumber = indexPlusOne.toString().length < 2 ?
                                            `0${indexPlusOne}`: indexPlusOne;
                                        let monthValue = width <= 991? monthNumber : month;
                                        return <option key={`${month}${index}`} value={monthNumber}>{monthValue}</option>
                                    })}

                                </select>
                            </div>
                            <span className="FormAccountPersonal-form-birth__separator"></span>
                            <input
                                className={`FormAccountPersonal-form__input FormAccountPersonal-form-birth__year 
                                        ${(validationInputBirthYear.isError) ? "errorInputBox" : null}`}
                                type="number"
                                name="date-year-number"
                                min={1920}
                                max={currentYear}
                                value={birthYear}
                                onChange={(e) => {
                                    if (e.target.value.length > 4) {
                                        e.target.value = e.target.value.slice(0,4);
                                    }
                                    if (Number(e.target.value) > currentYear) {
                                        e.target.value = `${currentYear}`;
                                    }
                                    setBirthYear(e.target.value)
                                    setValidationInputBirthYear({
                                        isError: false,
                                        textError: ""
                                    });
                                }}
                            />
                        </div>
                        {birthError()}

                    </label>
                    <button className="FormAccountPersonal-form-submit-button" type="submit" >
                        <span className="FormAccountPersonal-form-submit-button__text">CONTINUE</span>
                        <span className="FormAccountPersonal-form-submit-button__arrow-box" >
                            <span className="FormAccountPersonal-form-submit-button__arrow"></span>
                        </span>
                    </button>
                </form>
            </section>

        </article>
    );
}

export default FormAccountPersonal;