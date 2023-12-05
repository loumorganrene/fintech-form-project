function DetailsStep() {
    return (
        <>
            <h1 className="form-step__title title-underline">Company details</h1>
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

                    <label htmlFor="companyTypeList" id="companyTypeLabel">
                        <h3 className="label-heading">Type of Company</h3>
                        {/* TODO : Collabsible dropdown menu with searchbar component */}
                        <select
                            id="companyTypeList"
                            name="companyTypeList"
                            aria-label="Choose company's type"
                        >
                            <option value="">-- Choose a type --</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </label>

                    <label htmlFor="companyTradingNameInput" id="companyTradingNameLabel">
                        <h3 className="label-heading">
                            Company trading as
                            <br />
                            <span className="label-subheading">
                                (if different from company name)
                            </span>
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

                    <label htmlFor="companyIncorporationCountryList" id="companyIncorporationCountryLabel">
                        <h3 className="label-heading">Country of Incorporation</h3>
                        {/* TODO : Collabsible dropdown menu with searchbar component */}
                        <select
                            id="companyIncorporationCountryList"
                            name="companyIncorporationCountryList"
                            aria-label="Choose company's country of incorporation"
                        >
                            <option value="">-- Choose a country --</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </label>

                    <label htmlFor="companyNumberEmployeesList" id="companyNumberEmployeesLabel">
                        <h3 className="label-heading">Number of Employees</h3>
                        <select
                            id="companyNumberEmployeesList"
                            name="companyNumberEmployeesList"
                            aria-label="Choose company's number of employees"
                        >
                            <option value="">-- Choose a number of employees --</option>
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
                        {/* TODO : Collabsible dropdown menu with searchbar component */}
                        <select
                            id="companyIndustryTypeList"
                            name="companyIndustryTypeList"
                            aria-label="Choose an industry type"
                        >
                            <option value="">-- Choose an industry type --</option>
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
                            <h3 className="label-heading">Description
                                <br />
                                <span className="label-subheading">(only if industry is other)</span>
                            </h3>
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

                    <label id="companyGroup" className="labels__container">
                        <h3 className="label-heading">
                            Is company part of a Group ?
                            <br />
                            <span className="label-subheading">
                                (If "yes", please provide Group Corporate Structure)
                            </span>
                        </h3>
                        <span className="choice__container">
                            <label htmlFor="companyGroupYes">Yes</label>
                            <input
                                type="radio"
                                id="companyGroupYes"
                                name="choice"
                                value="yes"
                            />
                        </span>

                        <span className="choice__container">
                            <label htmlFor="companyGroupNo">No</label>
                            <input
                                type="radio"
                                id="companyGroupNo"
                                name="choice"
                                value="no"
                            />
                        </span>

                        <div className="conditional-input">
                            <label
                                htmlFor="companyGroupParentHoldingCheckbox"
                                id="companyGroupParentHoldingLabel"
                                className="choice__container"
                            >
                                Parent/Holding
                                <input
                                    type="checkbox"
                                    id="companyGroupParentHoldingCheckbox"
                                    name="companyGroupParentHolding"
                                />
                            </label>

                            <label
                                htmlFor="companyGroupSubsidiaryCheckbox"
                                id="companyGroupSubsidiaryLabel"
                                className="choice__container"
                            >
                                Subsidiary
                                <input
                                    type="checkbox"
                                    id="companyGroupSubsidiaryCheckbox"
                                    name="companyGroupSubsidiary"
                                />
                            </label>

                            <label
                                htmlFor="companyGroupAssociateCheckbox"
                                id="companyGroupAssociateLabel"
                                className="choice__container"
                            >
                                Associate
                                <input
                                    type="checkbox"
                                    id="companyGroupAssociateCheckbox"
                                    name="companyGroupAssociate"
                                />
                            </label>

                            <label
                                htmlFor="companyGroupOtherRoleInput"
                                id="companyGroupOtherRoleLabel"
                            >
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
                        <h3 className="label-heading">
                            Are any of Company's shares held under fiduciary capacity ?
                        </h3>
                        <span className="choice__container">
                            <label htmlFor="companyFiduciarySharesYes">Yes</label>
                            <input
                                type="radio"
                                id="companyFiduciarySharesYes"
                                name="choice"
                                value="yes"
                            />
                        </span>

                        <div className="conditional-input">
                            <select
                                id="companyFiduciarySharesList"
                                name="companyFiduciarySharesList"
                                aria-label="Choose company's fiduciary"
                            >
                                <option value="">-- Choose a fiduciary --</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="hamster">Hamster</option>
                                <option value="parrot">Parrot</option>
                                <option value="spider">Spider</option>
                                <option value="goldfish">Goldfish</option>
                            </select>
                        </div>

                        <span className="choice__container">
                            <label htmlFor="companyFiduciarySharesNo">No</label>
                            <input
                                type="radio"
                                id="companyFiduciarySharesNo"
                                name="choice"
                                value="no"
                            />
                        </span>

                    </label>

                    <label id="companyInssuanceBearerShares">
                        <h3 className="label-heading">
                            Do Entity's constituting documents (eg. M&As) allow for inssuance of bearer shares ?
                        </h3>
                        <span className="choice__container">
                            <label htmlFor="companyInssuanceBearerSharesYes">Yes</label>
                            <input
                                type="radio"
                                id="companyInssuanceBearerSharesYes"
                                name="choice"
                                value="yes"
                            />
                        </span>

                        <span className="choice__container">
                            <label htmlFor="companyInssuanceBearerSharesNo">No</label>
                            <input
                                type="radio"
                                id="companyInssuanceBearerSharesNo"
                                name="choice"
                                value="no"
                            />
                        </span>

                    </label>

                    <label id="companyLicence">
                        <h3 className="label-heading">Is Company Licenced ?</h3>
                        <span className="choice__container">
                            <label htmlFor="companyLicenceYes">Yes</label>
                            <input
                                type="radio"
                                id="companyLicenseYes"
                                name="choice"
                                value="yes"
                            />
                        </span>

                        <div className="conditional-input">
                            <select
                                id="companyLicenceList"
                                name="companyLicenceList"
                                aria-label="Choose company's licence"
                            >
                                <option value="">-- Choose a licence --</option>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="hamster">Hamster</option>
                                <option value="parrot">Parrot</option>
                                <option value="spider">Spider</option>
                                <option value="goldfish">Goldfish</option>
                            </select>
                        </div>

                        <span className="choice__container">
                            <label htmlFor="companyLicenseNo">No</label>
                            <input
                                type="radio"
                                id="companyLicenseNo"
                                name="choice"
                                value="no"
                            />
                        </span>
                    </label>
                </fieldset>

                {/* PART 3: MAIN CONTACT DETAILS  */}
                <fieldset id="main-contact">
                    <legend className="title-underline">
                        Main contact (person in charge of company's application) details
                    </legend>

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