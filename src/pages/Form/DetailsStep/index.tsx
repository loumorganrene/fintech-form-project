import InputForm from "../../../components/InputForm"
import { ChangeEvent, useState } from "react";

function DetailsStep() {

    const [showGroupInput, setShowGroupInput] = useState(false)
    const [showFiduciaryInput, setShowFiduciaryInput] = useState(false)
    const [showLicenceInput, setShowLicenceInput] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target

        if (name === "companyGroupChoice" && value === "Yes") {
            setShowGroupInput(true)
        } else if (name === "companyGroupChoice" && value === "No") {
            setShowGroupInput(false)
        }

        if (name === "companyFiduciarySharesChoice" && value === "Yes") {
            setShowFiduciaryInput(true)
        } else if (name === "companyFiduciarySharesChoice" && value === "No") {
            setShowFiduciaryInput(false)
        }

        if (name === "companyLicenceChoice" && value === "Yes") {
            setShowLicenceInput(true)
        } else if (name === "companyLicenceChoice" && value === "No") {
            setShowLicenceInput(false)
        }

    }

    return (
        <>
            <h1 className="form-step__title title-underline">Company details</h1>
            <form>
                {/* PART 1: MAIN DETAILS  */}
                <fieldset id="main-details">
                    <legend className="sr-only">Main details</legend>

                    <InputForm
                        name="companyName"
                        type="text"
                        title="Company Name"
                        accessibility="Enter company's name"
                    />

                    <InputForm
                        name="companyRegistration"
                        type="text"
                        title="Registration Number"
                        accessibility="Enter company's registration number"
                    />

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

                    <InputForm
                        name="companyTradingName"
                        type="text"
                        title={<>Company trading as
                            <br />
                            <span className="label-subheading">
                                (if different from company name)
                            </span></>}
                        accessibility="Enter company's trading name"
                    />

                    <InputForm
                        name="companyIncorporationDate"
                        type="date"
                        title={"Date of Incorporation"}
                        accessibility="Enter company's incorporation's date"
                    />

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
                        {/* TODO : Collabsible dropdown menu with searchbar component */}
                        <select
                            id="companyNumberEmployeesList"
                            name="companyNumberEmployeesList"
                            aria-label="Choose company's range of employees number"
                        >
                            <option value="">-- Choose a range --</option>
                            <option value="one">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                    </label>

                    <InputForm
                        name="companyVAT"
                        type="text"
                        title={"VAT Number"}
                        accessibility="Enter company's VAT number"
                    />

                    <InputForm
                        name="companyTINNumber"
                        type="text"
                        title={"Tax Identification Number (TIN)"}
                        accessibility="Enter company's tax identification number"
                    />

                    <InputForm
                        name="companyTINJurisdiction"
                        type="text"
                        title={"TIN Jurisdiction"}
                        accessibility="Enter company's TIN jurisdiction"
                    />

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
                        <InputForm
                            name="companyIndustryDesc"
                            type="text"
                            title={<>
                                Description
                                <br />
                                <span className="label-subheading">(only if industry is other)</span>
                            </>}
                            accessibility="Describe company's industry type"
                        />
                    </div>

                    <InputForm
                        name="companyShareCapital"
                        type="text"
                        title={"Share Capital (EUR)"}
                        accessibility="Enter company's share capital in euro"
                    />

                    <InputForm
                        name="companyPrevYearTurnover"
                        type="text"
                        title={"Previous year Turnover (EUR)"}
                        accessibility="Enter previous year turnover number in euro"
                    />

                    <InputForm
                        name="companyEmail"
                        type="email"
                        title={"Email address"}
                        accessibility="Enter company's email address"
                    />

                    <InputForm
                        name="companyWebsite"
                        type="text"
                        title={"Website - URL"}
                        accessibility="Enter company's website adress"
                    />

                    <InputForm
                        name="companyWebsiteAdd"
                        type="text"
                        title={"Additional website - URL"}
                        accessibility="Enter additional website address"
                    />

                </fieldset>

                {/* PART 2: ADDITIONNAL DETAILS  */}
                <fieldset id="additional-details">
                    <legend className="sr-only">Additionnal details</legend>

                    <InputForm
                        name="companyGroup"
                        type="radio"
                        title={<>
                            Is company part of a Group ?
                            <br />
                            <span className="label-subheading">
                                (If "yes", please provide Group Corporate Structure)
                            </span>
                        </>}
                        radioChoices={["Yes", "No"]}
                        onChange={handleChange}
                    >
                        <div className={showGroupInput ? "conditional-input show" : "conditional-input hidden"}>
                            <InputForm
                                name="companyGroupRole"
                                type="checkbox"
                                checkboxChoices={[
                                    "Parent/Holding",
                                    "Subsidiary",
                                    "Associate"
                                ]}
                            />

                            <InputForm
                                name="companyGroupOtherRole"
                                type="text"
                                title="Other"
                                noHeader
                                accessibility="Describe your role in group"
                            />
                        </div>
                    </InputForm>

                    <InputForm
                        name="companyFiduciaryShares"
                        type="radio"
                        title={"Are any of Company's shares held under fiduciary capacity ?"}
                        radioChoices={["Yes", "No"]}
                        onChange={handleChange}
                    >

                        <div className={showFiduciaryInput ? "conditional-input show" : "conditional-input hidden"} >
                            {/* TODO : Collabsible dropdown menu with searchbar component */}
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

                    </InputForm>

                    <InputForm
                        name="companyInssuanceBearerShares"
                        type="radio"
                        title={"Do Entity's constituting documents (eg. M&As) allow for inssuance of bearer shares ?"}
                        radioChoices={["Yes", "No"]}
                    />

                    <InputForm
                        name="companyLicence"
                        type="radio"
                        title={"Is Company Licenced ?"}
                        radioChoices={["Yes", "No"]}
                        onChange={handleChange}
                    >
                        <div className={showLicenceInput ? "conditional-input show" : "conditional-input hidden"}>
                            {/* TODO : Collabsible dropdown menu with searchbar component */}
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
                    </InputForm>

                </fieldset>

                {/* PART 3: MAIN CONTACT DETAILS  */}
                <fieldset id="main-contact">
                    <legend className="title-underline">
                        Main contact (person in charge of company's application) details
                    </legend>

                    <InputForm
                        name="companyMainContactName"
                        type="text"
                        title={"Full Name"}
                        accessibility="Enter company's main contact fullname"
                    />

                    <InputForm
                        name="companyMainContactEmail"
                        type="email"
                        title={"Email address"}
                        accessibility="Enter company's main contact email address"
                    />

                </fieldset>
            </form >
        </>
    )
}

export default DetailsStep