import React from "react";
import "./FormAccountPersonal.scss";
import {months, countryCodes} from "../assets/assets"
import useWindowDimensions from "../hooks/windowDimensions";



function FormAccountPersonal() {
    const { width } = useWindowDimensions();
    return (
        <article className="FormAccountPersonal">
            <aside>
                <span className="FormAccountPersonal-line-top"></span>
                <span className="FormAccountPersonal-line-right FormAccountPersonal-line-right__first">
                <div className="FormAccountPersonal-line-right-text FormAccountPersonal-line-right-text-number">01</div>
            </span>
                <span className="FormAccountPersonal-line-right FormAccountPersonal-line-right__second">
                <div className="FormAccountPersonal-line-right-text FormAccountPersonal-line-right-text-number">02</div>
                <div className="FormAccountPersonal-line-right-text">Personal</div>
            </span>
                <span className="FormAccountPersonal-line-right FormAccountPersonal-line-right__third">
                <div className="FormAccountPersonal-line-right-text FormAccountPersonal-line-right-text-number">03</div>
            </span>
            </aside>
            <section className="FormAccountPersonal-form-container">
                <header className="FormAccountPersonal-header">
                    <h2 className="FormAccountPersonal-header-text">Provide personal information so that we can create a new account for you.</h2>
                </header>
                <form className="FormAccountPersonal-form">
                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-name">
                        <span className="FormAccountPersonal-form__label-text">Your name</span>
                        <input className="FormAccountPersonal-form__input FormAccountPersonal-form-name__input" type="text" name="name" />
                    </label>
                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-phone">
                        <span className="FormAccountPersonal-form__label-text">Mobile</span>
                        <div className="FormAccountPersonal-form-phone-container">
                            <div className="FormAccountPersonal-form-phone__prefix-select">
                                <select className="FormAccountPersonal-form__input FormAccountPersonal-form-phone__prefix">
                                    {countryCodes.map((country: any) => {
                                        const countryKey = Object.keys(country)[0];
                                        const isSelect = countryKey === 'PL';
                                        const countryPrefixNumber = country[countryKey].code;
                                        const countryPrefix = `+${countryPrefixNumber} (${countryKey})`;
                                        return <option selected={isSelect} value={countryPrefix}>{countryPrefix}</option>
                                    })}

                                </select>
                            </div>

                            <input className="FormAccountPersonal-form__input FormAccountPersonal-form-phone__number" type="number" name="mobile-number" />
                        </div>

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
                                    checked
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
                                />
                            </label>
                        </div>

                    <label className="FormAccountPersonal-form__label FormAccountPersonal-form-birth">
                        <span className="FormAccountPersonal-form__label-text">Date of birth</span>
                        <div className="FormAccountPersonal-form-birth-container">
                            <input
                                className="FormAccountPersonal-form__input FormAccountPersonal-form-birth__day"
                                type="number"
                                name="date-day-number"
                            />
                            <span className="FormAccountPersonal-form-birth__separator"></span>
                            <div className="FormAccountPersonal-form-birth__month-select">
                                <select className="FormAccountPersonal-form__input FormAccountPersonal-form-birth__month">
                                    {months.map((month:string, index: number) => {
                                        let isSelect = index === 0;
                                        let monthValue = width <= 991? ++index : month;
                                        return <option selected={isSelect} value={monthValue}>{monthValue}</option>
                                    })}

                                </select>
                            </div>
                            <span className="FormAccountPersonal-form-birth__separator"></span>
                            <input
                                className="FormAccountPersonal-form__input FormAccountPersonal-form-birth__year"
                                type="number"
                                name="date-year-number" />
                        </div>
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