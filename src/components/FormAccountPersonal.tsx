import React from "react";
import "./FormAccountPersonal.scss";
import {months, countryCodes} from "../assets/assets"

function FormAccountPersonal() {
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
            <header className="FormAccountPersonal-header">
                <h2 className="FormAccountPersonal-header-text">Provide personal information so that we can create a new account for you.</h2>
            </header>
            <form>
                <label>
                    Your name
                    <input type="text" name="name" />
                </label>
                <label>
                    Mobile
                    <select>
                        {countryCodes.map((country: any) => {
                            const countryKey = Object.keys(country)[0];
                            const isSelect = countryKey === 'PL';
                            const countryPrefixNumber = country[countryKey].code;
                            const countryPrefix = `+${countryPrefixNumber} (${countryKey})`;
                            return <option selected={isSelect} value={countryPrefix}>{countryPrefix}</option>
                        })}

                    </select>
                    <input type="number" name="mobile-number" />
                </label>
                <label>Can you play chess?</label>
                <label>
                    Yes
                    <input
                        name="isGoing"
                        type="radio"
                        checked
                    />
                </label>
                <label>
                    No
                    <input
                        name="isGoing"
                        type="radio"
                    />
                </label>
                <label>
                    Date of birth
                    <input type="number" name="date-day-number" />
                    <select>
                        {months.map((month:string, index: number) => {
                            let isSelect = index === 0;
                            return <option selected={isSelect} value={month}>{month}</option>
                        })}

                    </select>
                    <input type="number" name="date-year-number" />
                </label>

                <input type="submit" value="Submit" />
            </form>
        </article>
    );
}

export default FormAccountPersonal;