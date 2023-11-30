function DetailsStep() {
    return (
        <>
            <h1 className="form-step__title">Company details</h1>
            <form>
                {/* PART 1: MAIN DETAILS  */}
                <fieldset id="main-details">
                    <legend>Main details</legend>

                    <label htmlFor="companyName">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                    />

                    <label htmlFor="companyRegistrationNumber">
                        Registration Number
                    </label>
                    <input
                        type="text"
                        id="companyRegistrationNumber"
                        name="companyRegistrationNumber"
                    />

                    <label htmlFor="companyType">
                        Type of Company
                    </label>
                    <input
                        type="text"
                        id="companyType"
                        name="companyType"
                    />

                    <label htmlFor="companyTradingName">
                        Company trading as (if different from company name)
                    </label>
                    <input
                        type="text"
                        id="companyTradingName"
                        name="companyTradingName"
                    />

                    <label htmlFor="companyIncorporationDate">
                        Date of Incorporation
                    </label>
                    <input
                        type="date"
                        id="companyIncorporationDate"
                        name="companyIncorporationDate"
                    />

                    <label htmlFor="companyIncorporationCountry">
                        Country of Incorporation
                    </label>
                    <input
                        type="text"
                        id="companyIncorporationCountry"
                        name="companyIncorporationCountry"
                    />

                    <label htmlFor="companyNumberEmployees">
                        Number of Employees
                    </label>
                    <input
                        type="text"
                        id="companyNumberEmployees"
                        name="companyNumberEmployees"
                    />

                    <label htmlFor="companyVAT">
                        VAT Number
                    </label>
                    <input
                        type="text"
                        id="companyVAT"
                        name="companyVAT"
                    />

                    <label htmlFor="companyTINNumber">
                        Tax Identification Number (TIN)
                    </label>
                    <input
                        type="text"
                        id="companyTINNumber"
                        name="companyTINNumber"
                    />

                    <label htmlFor="companyTINJurisdiction">
                        TIN Jurisdiction
                    </label>
                    <input
                        type="text"
                        id="companyTINJurisdiction"
                        name="companyTINJurisdiction"
                    />

                    <label htmlFor="companyIndustryType">
                        Industry Type
                    </label>
                    <input
                        type="text"
                        id="companyIndustryType"
                        name="companyIndustryType"
                    />

                    <label htmlFor="companyIndustryDesc">
                        Description (only if industry is other)
                    </label>
                    <input
                        type="text"
                        id="companyIndustryDesc"
                        name="companyIndustryDesc"
                    />

                    <label htmlFor="companyShareCapital">
                        Share Capital (EUR)
                    </label>
                    <input
                        type="text"
                        id="companyShareCapital"
                        name="companyShareCapital"
                    />

                    <label htmlFor="companyPrevYearTurnover">
                        Previous year Turnover (EUR)
                    </label>
                    <input
                        type="text"
                        id="companyPrevYearTurnover"
                        name="companyPrevYearTurnover"
                    />

                    <label htmlFor="companyEmail">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="companyEmail"
                        name="companyEmail"
                    />

                    <label htmlFor="companyWebsite">
                        Website - URL
                    </label>
                    <input
                        type="text"
                        id="companyWebsite"
                        name="companyWebsite"
                    />

                    <label htmlFor="companyWebsiteAdd">
                        Additional website
                    </label>
                    <input
                        type="text"
                        id="companyWebsiteAdd"
                        name="companyWebsiteAdd"
                    />
                </fieldset>

                {/* PART 2: ADDITIONNAL DETAILS  */}
                <fieldset id="additional-details">
                    <legend>Additionnal details</legend>

                    <label id="companyGroup">
                        Is the company part of a Group ? (If "yes", please provide the Group Corporate Structure)
                        <input
                            type="radio"
                            id="companyGroupYes"
                            name="choice"
                            value="true"
                        />
                        Yes
                        <input
                            type="radio"
                            id="companyGroupNo"
                            name="choice"
                            value="false"
                        />
                        No
                        <div className="conditional-input">
                            <label htmlFor="companyGroupParentHolding">
                                Parent/Holding
                            </label>
                            <input
                                type="checkbox"
                                id="companyGroupParentHolding"
                                name="companyGroupParentHolding"
                            />
                            <label htmlFor="companyGroupSubsidiary">
                                Subsidiary
                            </label>
                            <input
                                type="checkbox"
                                id="companyGroupSubsidiary"
                                name="companyGroupSubsidiary"
                            />
                            <label htmlFor="companyGroupAssociate">
                                Associate
                            </label>
                            <input
                                type="checkbox"
                                id="companyGroupAssociate"
                                name="companyGroupAssociate"
                            />
                            <label htmlFor="companyGroupOtherRole">
                                Other
                            </label>
                            <input
                                type="text"
                                id="companyGroupOtherRole"
                                name="companyGroupOtherRole"
                            />
                        </div>
                    </label>

                    <label id="companyFiduciaryShares">
                        Are any of the Company's shares held under fiduciary capacity ?
                        <input
                            type="radio"
                            id="companyFiduciarySharesYes"
                            name="choice"
                            value="true"
                        />
                        Yes
                        <div className="conditional-input">
                            <select name="companyFiduciarySharesList">
                                <option value="">--Please choose an option--</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="hamster">Hamster</option>
                                <option value="parrot">Parrot</option>
                                <option value="spider">Spider</option>
                                <option value="goldfish">Goldfish</option>
                            </select>
                        </div>
                        <input
                            type="radio"
                            id="companyFiduciarySharesNo"
                            name="choice"
                            value="false"
                        />
                        No
                    </label>

                    <label id="companyInssuanceBearerShares">
                        Do the Entity's constituting documents (eg. M&As) allow for the inssuance of bearer shares ?
                        <input
                            type="radio"
                            id="companyInssuanceBearerSharesYes"
                            name="choice"
                            value="true"
                        />
                        Yes
                        <input
                            type="radio"
                            id="companyInssuanceBearerSharesNo"
                            name="choice"
                            value="false"
                        />
                        No
                    </label>

                    <label id="companyLicense">
                        Is the Company Licensed ?
                        <input
                            type="radio"
                            id="companyLicenseYes"
                            name="choice"
                            value="true"
                        />
                        Yes
                        <div className="conditional-input">
                            <select name="licenseList">
                                <option value="">--Please choose an option--</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="hamster">Hamster</option>
                                <option value="parrot">Parrot</option>
                                <option value="spider">Spider</option>
                                <option value="goldfish">Goldfish</option>
                            </select>
                        </div>
                        <input
                            type="radio"
                            id="companyLicenseYes"
                            name="choice"
                            value="false"
                        />
                        No
                    </label>
                </fieldset>

                {/* PART 3: MAIN CONTACT DETAILS  */}
                <fieldset id="main-contact">
                    <legend>Main contact details</legend>

                    <label htmlFor="companyMainContactName">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="companyMainContactName"
                        name="companyMainContactName"
                    />
                    <label htmlFor="companyMainContactEmail">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="companyMainContactEmail"
                        name="companyMainContactEmail"
                    />
                </fieldset>
            </form>
        </>
    )
}

export default DetailsStep