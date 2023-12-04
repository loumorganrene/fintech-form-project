function DetailsStep() {
    return (
        <>
            <h1 className="form-step__title">Company details</h1>
            <form>
                {/* PART 1: MAIN DETAILS  */}
                <fieldset id="main-details">
                    <legend className="sr-only">Main details</legend>

                    <label htmlFor="companyNameInput" id="companyNameLabel">
                        <h3 className="label-heading">Company Name</h3>
                        <input
                            type="text"
                            id="companyNameInput"
                            name="companyName"
                            aria-label="Enter company's name"
                        />
                    </label>


                    <label htmlFor="companyRegistrationNumberInput" id="companyRegistrationNumberLabel">
                        <h3 className="label-heading">Registration Number</h3>
                        <input
                            type="text"
                            id="companyRegistrationNumberInput"
                            name="companyRegistrationNumber"
                            aria-label="Enter company's registration number"
                        />
                    </label>

                    <label htmlFor="companyTypeInput" id="companyTypeLabel">
                        <h3 className="label-heading">Type of Company</h3>
                        <input
                            type="text"
                            id="companyTypeInput"
                            name="companyType"
                            aria-label="Enter company's type"
                        />
                        {/* TODO : Collabsible dropdown menu with searchbar component */}
                    </label>


                    <label htmlFor="companyTradingNameInput" id="companyTradingNameLabel">
                        <h3 className="label-heading">
                            Company trading as <br/>(if different from company name)
                            </h3>
                        <input
                            type="text"
                            id="companyTradingNameInput"
                            name="companyTradingName"
                            aria-label="Enter company's trading name"
                        />
                    </label>


                    <label htmlFor="companyIncorporationDateInput" id="companyIncorporationDateLabel">
                        <h3 className="label-heading">Date of Incorporation</h3>
                        <input
                            type="date"
                            id="companyIncorporationDateInput"
                            name="companyIncorporationDate"
                        />
                    </label>


                    <label htmlFor="companyIncorporationCountryInput" id="companyIncorporationCountryLabel">
                        <h3 className="label-heading">Country of Incorporation</h3>
                        <input
                            type="text"
                            id="companyIncorporationCountryInput"
                            name="companyIncorporationCountry"
                            aria-label="Enter company's country of incorporation"
                        />
                        {/* TODO : Collabsible dropdown menu with searchbar component */}
                    </label>


                    <label htmlFor="companyNumberEmployeesList" id="companyNumberEmployeesLabel">
                        <h3 className="label-heading">Number of Employees</h3>
                        {/* <input
                            type="text"
                            id="companyNumberEmployeesInput"
                            name="companyNumberEmployees"
                            aria-label="Enter company's number of employees"
                        /> */}
                        <select id="companyNumberEmployeesList" name="companyNumberEmployeesList">
                            <option value="">--Please choose an option--</option>
                            <option value="one">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </label>


                    <label htmlFor="companyVATInput" id="companyVATLabel">
                        <h3 className="label-heading">VAT Number</h3>
                        <input
                            type="text"
                            id="companyVATInput"
                            name="companyVAT"
                            aria-label="Enter company's VAT number"
                        />
                    </label>


                    <label htmlFor="companyTINNumberInput" id="companyTINNumberLabel">
                        <h3 className="label-heading">Tax Identification Number (TIN)</h3>
                        <input
                            type="text"
                            id="companyTINNumberInput"
                            name="companyTINNumber"
                            aria-label="Enter company's tax identification number"
                        />
                    </label>


                    <label htmlFor="companyTINJurisdictionInput" id="companyTINJurisdictionLabel">
                        <h3 className="label-heading">TIN Jurisdiction</h3>
                        <input
                            type="text"
                            id="companyTINJurisdictionInput"
                            name="companyTINJurisdiction"
                            aria-label="Enter company's TIN jurisdiction"
                        />
                    </label>


                    <label htmlFor="companyIndustryTypeList" id="companyIndustryTypeLabel">
                        <h3 className="label-heading">Industry Type</h3>
                        {/* <input
                            type="text"
                            id="companyIndustryTypeInput"
                            name="companyIndustryType"
                            aria-label="Enter company's type of industry"
                        /> */}
                        <select id="companyIndustryTypeList" name="companyIndustryTypeList">
                            <option value="">--Please choose an option--</option>
                            <option value="one">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    <div className="conditional-input">
                        <label htmlFor="companyIndustryDescInput" id="companyIndustryDescLabel">
                            <h3 className="label-heading">Description <br /> (only if industry is other)</h3>
                            <input
                                type="text"
                                id="companyIndustryDescInput"
                                name="companyIndustryDesc"
                                aria-label="Describe company's industry type"
                            />
                        </label>
                    </div>


                    <label htmlFor="companyShareCapitalInput" id="companyShareCapitalLabel">
                        <h3 className="label-heading">Share Capital (EUR)</h3>
                        <input
                            type="text"
                            id="companyShareCapitalInput"
                            name="companyShareCapital"
                            aria-label="Enter company's share capital in euro"
                        />
                    </label>


                    <label htmlFor="companyPrevYearTurnoverInput" id="companyPrevYearTurnoverLabel">
                        <h3 className="label-heading">Previous year Turnover (EUR)</h3>
                        <input
                            type="text"
                            id="companyPrevYearTurnoverInput"
                            name="companyPrevYearTurnover"
                            aria-label="Enter previous year turnover number in euro"
                        />
                    </label>


                    <label htmlFor="companyEmailInput" id="companyEmailLabel">
                        <h3 className="label-heading">Email address</h3>
                        <input
                            type="email"
                            id="companyEmailInput"
                            name="companyEmail"
                            aria-label="Enter company's email address"
                        />
                    </label>


                    <label htmlFor="companyWebsiteInput" id="companyWebsiteLabel">
                        <h3 className="label-heading">Website - URL</h3>
                        <input
                            type="text"
                            id="companyWebsiteInput"
                            name="companyWebsite"
                            aria-label="Enter company's website adress"
                        />
                    </label>


                    <label htmlFor="companyWebsiteAddInput" id="companyWebsiteAddLabel">
                        <h3 className="label-heading">Additional website</h3>
                        <input
                            type="text"
                            id="companyWebsiteAddInput"
                            name="companyWebsiteAdd"
                            aria-label="Enter additional website address"
                        />
                    </label>

                </fieldset>

                {/* PART 2: ADDITIONNAL DETAILS  */}
                <fieldset id="additional-details">
                    <legend className="sr-only">Additionnal details</legend>

                    <label id="companyGroup">
                        Is company part of a Group ? (If "yes", please provide Group Corporate Structure)
                        <input
                            type="radio"
                            id="companyGroupYes"
                            name="choice"
                            value="yes"
                        />
                        Yes
                        <input
                            type="radio"
                            id="companyGroupNo"
                            name="choice"
                            value="no"
                        />
                        No
                        <div className="conditional-input">
                            <label htmlFor="companyGroupParentHoldingCheckbox" id="companyGroupParentHoldingLabel">
                                Parent/Holding
                                <input
                                    type="checkbox"
                                    id="companyGroupParentHoldingCheckbox"
                                    name="companyGroupParentHolding"
                                />
                            </label>

                            <label htmlFor="companyGroupSubsidiaryCheckbox" id="companyGroupSubsidiaryLabel">
                                Subsidiary
                                <input
                                    type="checkbox"
                                    id="companyGroupSubsidiaryCheckbox"
                                    name="companyGroupSubsidiary"
                                />
                            </label>

                            <label htmlFor="companyGroupAssociateCheckbox" id="companyGroupAssociateLabel">
                                Associate
                                <input
                                    type="checkbox"
                                    id="companyGroupAssociateCheckbox"
                                    name="companyGroupAssociate"
                                />
                            </label>

                            <label htmlFor="companyGroupOtherRoleInput" id="companyGroupOtherRoleLabel">
                                Other
                                <input
                                    type="text"
                                    id="companyGroupOtherRoleInput"
                                    name="companyGroupOtherRole"
                                    aria-label="Describe your role in group"
                                />
                            </label>

                        </div>
                    </label>

                    <label id="companyFiduciaryShares">
                        Are any of Company's shares held under fiduciary capacity ?
                        <input
                            type="radio"
                            id="companyFiduciarySharesYes"
                            name="choice"
                            value="yes"
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
                            value="no"
                        />
                        No

                    </label>

                    <label id="companyInssuanceBearerShares">
                        Do Entity's constituting documents (eg. M&As) allow for inssuance of bearer shares ?
                        <input
                            type="radio"
                            id="companyInssuanceBearerSharesYes"
                            name="choice"
                            value="yes"
                        />
                        Yes

                        <input
                            type="radio"
                            id="companyInssuanceBearerSharesNo"
                            name="choice"
                            value="no"
                        />
                        No

                    </label>

                    <label id="companyLicense">
                        Is Company Licensed ?
                        <input
                            type="radio"
                            id="companyLicenseYes"
                            name="choice"
                            value="yes"
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
                            id="companyLicenseNo"
                            name="choice"
                            value="no"
                        />
                        No
                    </label>
                </fieldset>

                {/* PART 3: MAIN CONTACT DETAILS  */}
                <fieldset id="main-contact">
                    <legend className="sr-only">Main contact details</legend>

                    <label htmlFor="companyMainContactNameInput" id="companyMainContactNameLabel">
                        <h3 className="label-heading">Full Name</h3>
                        <input
                            type="text"
                            id="companyMainContactNameInput"
                            name="companyMainContactName"
                            aria-label="Enter company's main contact fullname"
                        />
                    </label>


                    <label htmlFor="companyMainContactEmailInput" id="companyMainContactEmailLabel">
                        <h3 className="label-heading">Email address</h3>
                        <input
                            type="email"
                            id="companyMainContactEmailInput"
                            name="companyMainContactEmail"
                            aria-label="Enter company's main contact email address"
                        />
                    </label>
                </fieldset>
            </form>
        </>
    )
}

export default DetailsStep