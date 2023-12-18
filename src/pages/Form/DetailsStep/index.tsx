import Dropdown from "../../../components/Dropdown/index.tsx";
import InputForm from "../../../components/InputForm"
import { ChangeEvent, useState } from "react";
import {
    europeanCompanyTypes,
    europeanCountries,
    europeanEmployeeRanges,
    industryList,

    europeanFiduciaryRoles,
    companyTurnoverRange
} from "../../../mock/dataListsMock.ts"

function DetailsStep() {
    /* CONDITIONAL INPUT RENDERING*/
    const [showGroupInput, setShowGroupInput] = useState(false)
    const [showFiduciaryInput, setShowFiduciaryInput] = useState(false)
    const [showLicenceInput, setShowLicenceInput] = useState(false)

    const handleRadioChecked = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

                    <Dropdown
                        title="Type of Company"
                        id="companyType"
                        accessibility="Choose company's type"
                        options={europeanCompanyTypes}
                        style="classic"
                    />


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

                    <Dropdown
                        title="Country of Incorporation"
                        id="companyIncorporationCountry"
                        placeholder="Search a country"
                        accessibility="Choose company's country of incorporation"
                        options={europeanCountries}
                        style="searchbar"
                    />

                    <label htmlFor="companyNumberEmployeesList" id="companyNumberEmployeesLabel">
                        <h3 className="label-heading">Number of Employees</h3>
                        <Dropdown
                            placeholder="-- Select a range --"
                            id="companyNumberEmployees"
                            accessibility="Choose company's range of employees number"
                            elementList={europeanEmployeeRanges}
                        />
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

                    <label htmlFor="companyTINJurisdictionList" id="companyTINJurisdictionLabel">
                        <h3 className="label-heading">TIN Jurisdiction</h3>
                        <Dropdown
                            label="-- Select a country --"
                            subject="companyTINJurisdiction"
                            accessibility="Enter company's TIN jurisdiction"
                            elementList={europeanCountries}
                            searchbar
                        />
                    </label>

                    <label htmlFor="companyIndustryTypeList" id="companyIndustryTypeLabel">
                        <h3 className="label-heading">Industry Type</h3>
                        <Dropdown
                            label="-- Select an industry type --"
                            subject="companyIndustryType"
                            accessibility="Choose an industry type"
                            elementList={industryList}
                            searchbar
                        />
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
                        type="number"
                        title={"Share Capital (EUR)"}
                        accessibility="Enter company's share capital in euro"
                    />

                    <label htmlFor="companyPrevYearTurnoverList" id="companyPrevYearTurnoverLabel">
                        <h3 className="label-heading">Previous year turnover (EUR)</h3>
                        <Dropdown
                            label="-- Select a range --"
                            subject="companyPrevYearTurnover"
                            accessibility="Enter previous year turnover number in euro"
                            elementList={companyTurnoverRange}
                        />
                    </label>

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
                                (If &quot;yes&quot;, please provide Group Corporate Structure)
                            </span>
                        </>}
                        radioChoices={["Yes", "No"]}
                        onChange={handleRadioChecked}
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
                        onChange={handleRadioChecked}
                    >

                        <div className={showFiduciaryInput ? "conditional-input show" : "conditional-input hidden"} >
                            <Dropdown
                                label="-- Select a fiduciary --"
                                subject="companyFiduciaryShares"
                                accessibility="Choose company's fiduciary"
                                elementList={europeanFiduciaryRoles}
                                searchbar
                            />
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
                        onChange={handleRadioChecked}
                    >
                        <div className={showLicenceInput ? "conditional-input show" : "conditional-input hidden"}>
                            <Dropdown
                                label="-- Select a country --"
                                subject="companyLicence"
                                accessibility="Choose company's licence"
                                elementList={europeanCountries}
                                searchbar
                            />
                        </div>
                    </InputForm>

                </fieldset>

                {/* PART 3: MAIN CONTACT DETAILS  */}
                <fieldset id="main-contact">
                    <legend className="title-underline">
                        Main contact (person in charge of company&apos;s application) details
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