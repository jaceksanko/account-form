import React from "react";
import "./AccountPersonal.scss";
import FormAccountPersonal from "./FormAccountPersonal"

function AccountPersonal() {
    return (
        <section className="AccountPersonal">
            <aside className="AccountPersonal-aside">
                <div className="AccountPersonal-aside__lines"></div>
            </aside>
            <FormAccountPersonal/>
        </section>
    );
}

export default AccountPersonal;