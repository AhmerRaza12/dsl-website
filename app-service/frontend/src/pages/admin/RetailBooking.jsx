import React from 'react'
import { MdClear } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";


const RetailBooking = () => {
    return (
        <section className='margin'>
            <form className="max-w-6xl p-4 bg-slate-100 shadow-md rounded-lg">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-black" >
                        Retail<span className="text-lime-500 tracking-wide shadow-none"> Booking</span>
                    </h2>
                </div>
                <h1 className="font-bold text-2xl text-black relative max-sm:text-center mt-5">
                    <span className="border-b-2 border-lime-400 ">Consign</span>ment Details
                </h1>

                <div className="flex  flex-wrap justify-normal items-center gap-4 p-3 mt-2">
                    {/* Set CN Checkbox */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="setCn" className="text-black font-medium">Set CN</label>
                        <input type="checkbox" name="setCn" id="setCn" className="w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600" />
                    </div>

                    {/* Tracking Number */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="trackingNumber" className="text-black font-medium">Tracking Number</label>
                        <input type="text" name="trackingNumber" id="trackingNumber" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>

                    {/* Keep Partner Checkbox */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="keepPartner" className="text-black font-medium">Keep Partner</label>
                        <input type="checkbox" name="keepPartner" id="keepPartner" className="w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600" />
                    </div>

                    {/* Select Partner */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="selectPartner" className="text-black font-medium">Select Partner</label>
                        <select name="selectPartner" id="selectPartner" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                            <option value="AMX">AMX : Aramex</option>
                            <option value="BLX ">BLX : BlueEx</option>
                            <option value="CLC ">CLC : Call Courier</option>
                            <option value="DHL ">DHL : DHL</option>
                            <option value="DPD ">DPD : DPD</option>
                            <option value="DPX ">DPX : DPEX</option>
                            <option value="DSL ">DSL : DSL</option>
                            <option value="DAE ">DAE : FastEx</option>
                            <option value="FDX ">FDX : Fedex</option>
                            <option value="LCS ">LCS : LCS</option>
                            <option value="MNP ">MNP : MNP</option>
                            <option value="NTL ">NTL : NTL</option>
                            <option value="PPO ">PPO : Post Office</option>
                            <option value="SKY ">SKY : SkyNet</option>
                            <option value="SPX ">SPX : SpeedEx</option>
                            <option value="TCS ">TCS : TCS</option>
                            <option value="UPS ">UPS : UPS</option>
                        </select>
                    </div>

                    {/* Reference Number */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="referenceNumber" className="text-black font-medium">Reference Number</label>
                        <input type="text" name="referenceNumber" id="referenceNumber" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                </div>
                <h1 className="font-bold text-2xl text-black relative max-sm:text-center mt-5">
                    <span className="border-b-2 border-lime-400 ">Service</span> Details
                </h1>
                <div className="flex  flex-wrap justify-normal items-center gap-4 p-2 mt-5">
                    {/* Product Selector with options */}
                    <div className='space-x-2 flex items-center  max-sm:mx-auto '>
                        <label htmlFor="productSelector" className="text-black font-medium">Product Selector</label>
                        <select name="productSelector" id="productSelector" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                            <option id="CAK" value="CAK">CAK : Cake</option>
                            <option id="DOC" value="DOC">DOC : Document</option>
                            <option id="DOM" value="DOM">DOM : Domestic</option>
                            <option id="GIF" value="GIF">GIF : Gift</option>
                            <option id="INT" value="INT">INT : International</option>
                            <option id="INP" value="INP">INP : Intl Priority</option>
                            <option id="KHI" value="KHI">KHI : Karachi</option>
                            <option id="KAS" value="KAS">KAS : Karachi Additional Service</option>
                            <option id="OTH" value="OTH">OTH : Others</option>
                            <option id="PAR" value="PAR">PAR : Parcel</option>
                        </select>
                    </div>
                    {/* Service Selector with options */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="serviceSelector" className="text-black font-medium">Service Selector</label>
                        <select name="serviceSelector" id="serviceSelector" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                            <option id="BUL" value="BUL">BUL : Bulk Delivery</option>
                            <option id="CAD" value="CAD">CAD : Cakesh (Cake Delivery)</option>
                            <option id="CAR" value="CAR">CAR : Cargo</option>
                            <option id="COD" value="COD">COD : COD Delivery</option>
                            <option id="COM" value="COM">COM : COD MiddleEast</option>
                            <option id="CMP" value="CMP">CMP : Customized Packing</option>
                            <option id="CUS" value="CUS">CUS : Customs Clearance</option>
                            <option id="D2D" value="D2D">D2D : Detain</option>
                            <option id="DWW" value="DWW">DWW : Dubai Worldwide</option>
                            <option id="DPW" value="DPW">DPW : Duty Paid Worldwide</option>
                            <option id="FAR" value="FAR">FAR : Farmaish Delivery</option>
                            <option id="FGD" value="FGD">FGD : Feelings (Gift Delivery)</option>
                            <option id="FOD" value="FOD">FOD : Food Delivery</option>
                            <option id="FAR" value="FAR">FAR : Fragile/Handling Delivery</option>
                            <option id="IMA" value="IMA">IMA : Import Worldwide (Air)</option>
                            <option id="IMS" value="IMS">IMS : Import Worldwide (Sea)</option>
                            <option id="KWW" value="KWW">KWW : Karachi Worldwide</option>
                            <option id="O4D" value="O4D">O4D : Overland</option>
                            <option id="O1D" value="O1D">O1D : Overnight</option>
                            <option id="PDD" value="PDD">PDD : Pick &amp; Drop Delivery</option>
                            <option id="SDD" value="SDD">SDD : Sameday Delivery</option>
                            <option id="SWW" value="SWW">SWW : Sea Worldwide</option>
                            <option id="STP" value="STP">STP : Stationery Providers</option>
                            <option id="STD" value="STD">STD : Student Delivery</option>
                            <option id="SWW" value="SWW">SWW : Student Worldwide</option>
                            <option id="SPD" value="SPD">SPD : Supplementary Delivery</option>
                            <option id="UKW" value="UKW">UKW : UK Worldwide</option>
                        </select>
                    </div>
                    {/* PayMode with Options  */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="payMode" className="text-black font-medium">Pay Mode</label>
                        <select name="payMode" id="payMode" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                            <option id="CSH" value="CSH">CSH : Cash</option>
                            <option id="CRD" value="CRD">CRD : Credit</option>
                            <option id="POD" value="POD">POD : Pay on Door</option>
                        </select>
                    </div>
                    {/* Account No Input Field */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="accountNo" className="text-black font-medium">Account No</label>
                        <input type="text" name="accountNo" id="accountNo" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                    {/* Pickup Date default value of today */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="pickupDate" className="text-black font-medium">Pickup Date</label>
                        <input type="date" name="pickupDate" id="pickupDate" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                    {/* Booking Date default value of today */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="bookingDate" className="text-black font-medium">Booking Date</label>
                        <input type="date" name="bookingDate" id="bookingDate" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-5 max-sm:grid-cols-1">
                    <div className='w-full '>
                        <h1 className="font-bold text-2xl text-black relative max-sm:text-center ">
                            <span className="border-b-2 border-lime-400 ">Shipper</span> Details
                        </h1>
                        <div className="flex items-center mt-4">
                            <label htmlFor="keepShipper" className="text-black font-medium w-1/5 ">
                                Keep Shipper
                            </label>
                            <input
                                type="checkbox"
                                name="keepShipper"
                                id="keepShipper"
                                className="ml-2 w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600"
                            />
                        </div>

                        {/* Origin Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="origin" className="text-black font-medium w-1/5">
                                Origin
                            </label>
                            <input
                                type="text"
                                name="origin"
                                id="origin"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Name Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="name" className="text-black font-medium w-1/5">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Mobile Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="mobile" className="text-black font-medium w-1/5">
                                Mobile
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Number Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="number" className="text-black font-medium w-1/5">
                                Number
                            </label>
                            <input
                                type="text"
                                name="number"
                                id="number"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Address Textarea */}
                        <div className="flex  mt-4">
                            <label htmlFor="address" className="text-black font-medium w-1/5">
                                Address
                            </label>
                            <textarea
                                name="address"
                                id="address"
                                rows="3"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                    </div>
                    <div className='w-full'>

                        <h1 className="font-bold text-2xl text-black relative max-sm:text-center ">
                            <span className="border-b-2 border-lime-400 ">Consign</span>ee Details
                        </h1>
                        {/* Destination select with options*/}
                        <div className="flex items-center mt-4">
                            <label htmlFor="destination" className="text-black font-medium w-1/5">
                                Destination
                            </label>
                            <select
                                name="destination"
                                id="destination"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            >
                                <option value="AZR">AZR : 18-Hazari</option>
                                <option value="ABT">ABT : Abbottabad</option>
                                <option value="AHT">AHT : Abdul Hakeem</option>
                                <option value="ADZ">ADZ : Adda Zakheera</option>
                                <option value="APE">APE : Ahmed Pur East</option>
                                <option value="APS">APS : Ahmed Pur Sial</option>
                                <option value="APC">APC : Ali Pur Chattha</option>
                                <option value="AIP">AIP : Alipur</option>
                                <option value="AUI">AUI : Alpurai</option>
                                <option value="AMB">AMB : Aminpur Banglow</option>
                                <option value="AFA">AFA : Arifwala</option>
                                <option value="ATT">ATT : Attock</option>
                                <option value="AWR">AWR : Awaran</option>
                                <option value="BDN">BDN : Badin</option>
                                <option value="BGH">BGH : Bagh</option>
                                <option value="NGR">NGR : Bahawalnagar</option>
                                <option value="BHV">BHV : Bahawalpur</option>
                                <option value="BJR">BJR : Bajaur</option>
                                <option value="BQK">BQK : Balakot</option>
                                <option value="GOG">GOG : Banglow Gogera</option>
                                <option value="BNP">BNP : Bannu</option>
                                <option value="BOT">BOT : Barikot</option>
                                <option value="NLA">NLA : Barnala - Ak</option>
                                <option value="BSR">BSR : Basir Pur</option>
                                <option value="BGM">BGM : Batgaram</option>
                                <option value="BTK">BTK : Batkhela</option>
                                <option value="BLA">BLA : Bela</option>
                                <option value="ASH">ASH : Besham</option>
                                <option value="BPR">BPR : Bhai Phairu ( Phool Nagar )</option>
                                <option value="BKK">BKK : Bhakkar</option>
                                <option value="BWL">BWL : Bhalwal</option>
                                <option value="SBD">SBD : Bhan Saeedabad</option>
                                <option value="BWA">BWA : Bhawana</option>
                                <option value="BRA">BRA : Bhera</option>
                                <option value="BRD">BRD : Bheria Road</option>
                                <option value="BMR">BMR : Bhimber</option>
                                <option value="BRC">BRC : Bhiria City</option>
                                <option value="BSH">BSH : Bhitshah</option>
                                <option value="ONI">ONI : Booni</option>
                                <option value="BCK">BCK : Bucheki</option>
                                <option value="BCM">BCM : Buchiana Mandi</option>
                                <option value="BUR">BUR : Bunair</option>
                                <option value="BRW">BRW : Burewala</option>
                                <option value="CHO">CHO : Chachro</option>
                                <option value="CJS">CJS : Chak Jhumra</option>
                                <option value="CKR">CKR : Chak Sawari</option>
                                <option value="CRA">CRA : Chakdara</option>
                                <option value="CKL">CKL : Chakwal</option>
                                <option value="CMN">CMN : Chaman</option>
                                <option value="CHM">CHM : Chambar</option>
                                <option value="CMG">CMG : Changa Manga</option>
                                <option value="CSD">CSD : Charsadda</option>
                                <option value="SMA">SMA : Chashma</option>
                                <option value="CWD">CWD : Chawinda</option>
                                <option value="COC">COC : Chhore</option>
                                <option value="CCW">CCW : Chicha Watni</option>
                                <option value="CLL">CLL : Chillas</option>
                                <option value="IOT">IOT : Chiniot</option>
                                <option value="CHT">CHT : Chishtian</option>
                                <option value="CTL">CTL : Chitral</option>
                                <option value="CDS">CDS : Choa Syden Shah</option>
                                <option value="WCA">WCA : Chonawala</option>
                                <option value="CAZ">CAZ : Chowk Azam</option>
                                <option value="CSS">CSS : Chowk Sarwar Shaheed</option>
                                <option value="DDU">DDU : Dadu</option>
                                <option value="DYL">DYL : Dadyal</option>
                                <option value="DKI">DKI : Daharki</option>
                                <option value="DKT">DKT : Dakota</option>
                                <option value="DLB">DLB : Dalbandin</option>
                                <option value="DNR">DNR : Danyore</option>
                                <option value="DRG">DRG : Dargai &amp; Malakand</option>
                                <option value="DAH">DAH : Darya Khan - Dah</option>
                                <option value="DKA">DKA : Daska</option>
                                <option value="DTR">DTR : Daulatpur</option>
                                <option value="DTA">DTA : Daultala</option>
                                <option value="DPA">DPA : Depal Pur</option>
                                <option value="DAY">DAY : Dera Allahyar</option>
                                <option value="DGK">DGK : Dera Ghazi Khan</option>
                                <option value="DIK">DIK : Dera Ismail Khan</option>
                                <option value="DMJ">DMJ : Dera Murad Jamali</option>
                                <option value="ANO">ANO : Dhanola</option>
                                <option value="DNT">DNT : Dhanot</option>
                                <option value="DWA">DWA : Dharanwala</option>
                                <option value="DHK">DHK : Dhirkot - Bagh</option>
                                <option value="DHN">DHN : Dhoro-Naro</option>
                                <option value="DIG">DIG : Digri</option>
                                <option value="DIJ">DIJ : Dijkot</option>
                                <option value="DIN">DIN : Dina</option>
                                <option value="DNG">DNG : Dinga</option>
                                <option value="ORI">ORI : Dokri</option>
                                <option value="DLT">DLT : Dolat Nagar</option>
                                <option value="DOR">DOR : Dour</option>
                                <option value="DLW">DLW : Dulle Wala</option>
                                <option value="DUN">DUN : Dunyapur</option>
                                <option value="ELA">ELA : Ellah Abad</option>
                                <option value="IKL">IKL : Esa Khel</option>
                                <option value="FSD">FSD : Faisalabad</option>
                                <option value="FQW">FQW : Faqir Wali</option>
                                <option value="FAD">FAD : Farooqabad</option>
                                <option value="FTG">FTG : Fateh Jang</option>
                                <option value="FPR">FPR : Fatehpur - Fpr</option>
                                <option value="FZP">FZP : Fazil Pur</option>
                                <option value="FWA">FWA : Feroz Watowan</option>
                                <option value="FRZ">FRZ : Feroza</option>
                                <option value="FAB">FAB : Fort Abbas</option>
                                <option value="GDN">GDN : Gadoon Amazai</option>
                                <option value="GMD">GMD : Gaggo Mandi</option>
                                <option value="IHA">IHA : Gahkuch Ghizer</option>
                                <option value="GBT">GBT : Gambat</option>
                                <option value="GMO">GMO : Garh Mor</option>
                                <option value="GRM">GRM : Garha Morr</option>
                                <option value="GYS">GYS : Garhi Yasin</option>
                                <option value="GWR">GWR : Gawadar</option>
                                <option value="GHK">GHK : Ghakkar</option>
                                <option value="GRO">GRO : Gharo</option>
                                <option value="GAD">GAD : Ghazi Abad</option>
                                <option value="GTI">GTI : Ghotki</option>
                                <option value="GPR">GPR : Ghous Pur</option>
                                <option value="GIL">GIL : Gilgit</option>
                                <option value="OJR">OJR : Gojra</option>
                                <option value="RRA">RRA : Gojra - Fsd</option>
                                <option value="GDU">GDU : Guddu</option>
                                <option value="GKN">GKN : Gujjar Khan</option>
                                <option value="GUJ">GUJ : Gujranwala</option>
                                <option value="GJT">GJT : Gujrat</option>
                                <option value="HZD">HZD : Hafiz Abad</option>
                                <option value="HFZ">HFZ : Hafizwala</option>
                                <option value="HAJ">HAJ : Hajira</option>
                                <option value="HLA">HLA : Hala</option>
                                <option value="HNG">HNG : Hangu</option>
                                <option value="HRI">HRI : Haripur</option>
                                <option value="HNI">HNI : Harnai</option>
                                <option value="HNL">HNL : Harnouli</option>
                                <option value="HRN">HRN : Haroonabad</option>
                                <option value="HSL">HSL : Hasilpur</option>
                                <option value="HTR">HTR : Hattar</option>
                                <option value="HLK">HLK : Hala,PK</option>
                                <option value="PNG">PNG : Pangrio, PK</option>
                                <option value="PGI">PGI : Pano Aqil, PK</option>
                                <option value="PSW">PSW : Pasni, PK</option>
                                <option value="PQW">PQW : Pasroor, PK</option>
                                <option value="PAJ" >PAJ : Pattoki, PK</option>
                                <option id="PRG"> PRG : Peshawar, PK</option>
                                <option id="PBN"> PBN : Phalia, PK</option>
                                <option id="PHT" value="PHT : Phatak, PK"></option>
                                <option id="PKA" value="PKA : Phool Nagar, PK"></option>
                                <option id="PIR" value="PIR : Pind Dadan Khan, PK"></option>
                                <option id="PDD" value="PDD : Pindi Bhattian, PK"></option>
                                <option id="PDI" value="PDI : Pindi Gheb, PK"></option>
                                <option id="PTN" value="PTN : Pir Mahal, PK"></option>
                                <option id="PCK" value="PCK : Pishin, PK"></option>
                                <option id="PKW" value="PKW : Pishin Killa, PK"></option>
                                <option id="PUH" value="PUH : Poonch, PK"></option>
                                <option id="PQD" value="PQD : Pote Qabila, PK"></option>
                                <option id="PWJ" value="PWJ : Potha Jeevan, PK"></option>
                                <option id="PAO" value="PAO : Pothi, PK"></option>
                                <option id="PBO" value="PBO : Pothohar, PK"></option>
                                <option id="PDI" value="PDI : Potohar, PK"></option>
                                <option id="PTP" value="PTP : Pukka Tiba, PK"></option>
                                <option id="PBM" value="PBM : Punjgora, PK"></option>
                                <option id="QSM" value="QSM : Quaidabad, PK"></option>
                                <option id="QTN" value="QTN : Quetta, PK"></option>
                                <option id="RAN" value="RAN : Rabwah, PK"></option>
                                <option id="RAI" value="RAI : Rahim Yar Khan, PK"></option>
                                <option id="RPN" value="RPN : Raiwind, PK"></option>
                                <option id="RYK" value="RYK : Rajan Pur, PK"></option>
                                <option id="RJS" value="RJS : Rajanpur - Surani, PK"></option>
                                <option id="RRL" value="RRL : Rajana, PK"></option>
                                <option id="RTP" value="RTP : Rajhana, PK"></option>
                                <option id="RJH" value="RJH : Rajhowa, PK"></option>
                                <option id="RKR" value="RKR : Rajkot, PK"></option>
                                <option id="RKN" value="RKN : Rajnagar, PK"></option>
                                <option id="RKI" value="RKI : Rajoka, PK"></option>
                                <option id="RJM" value="RJM : Raja Jang, PK"></option>
                                <option id="RKL" value="RKL : Raja Kot, PK"></option>
                                <option id="RGM" value="RGM : Rajoana Ghalo, PK"></option>
                                <option id="RMN" value="RMN : Raman Mandi, PK"></option>
                                <option id="RKR" value="RKR : Rana Kot, PK"></option>
                                <option id="RKO" value="RKO : Ranipur, PK"></option>
                                <option id="RKH" value="RKH : Rasheed Pur, PK"></option>
                                <option id="RHR" value="RHR : Rashkai, PK"></option>
                                <option id="RSK" value="RSK : Ratodero, PK"></option>
                                <option id="RUL" value="RUL : Rawalakot, PK"></option>
                                <option id="RWL" value="RWL : Rawalpindi, PK"></option>
                                <option id="RWB" value="RWB : Rawat, PK"></option>
                                <option id="RYL" value="RYL : Rawat- Layyah, PK"></option>
                                <option id="RDG" value="RDG : Renala Khurd, PK"></option>
                                <option id="RWP" value="RWP : Rewand, PK"></option>
                                <option id="RHW" value="RHW : Rindwara, PK"></option>
                                <option id="RNN" value="RNN : Risal Pur, PK"></option>
                                <option id="RZK" value="RZK : Rojhan, PK"></option>
                                <option id="RLP" value="RLP : Rokhri, PK"></option>
                                <option id="ROJ" value="ROJ : Rohri, PK"></option>
                                <option id="RLK" value="RLK : Rohtak, PK"></option>
                                <option id="ROR" value="ROR : Roroo Bazaar, PK"></option>
                                <option id="RPN" value="RPN : Roroonwala, PK"></option>
                                <option id="RUI" value="RUI : Ruk, PK"></option>
                                <option id="RUN" value="RUN : Rupar Mandi, PK"></option>
                                <option id="RWR" value="RWR : Ruyai, PK"></option>
                                <option id="RWP" value="RWP : Rwp, PK"></option>
                                <option id="SIL" value="SIL : Sakhi Sarwar, PK"></option>
                                <option id="SAI" value="SAI : Salar Kot, PK"></option>
                                <option id="SLL" value="SLL : Sambrial, PK"></option>
                                <option id="SMI" value="SMI : Samsa, PK"></option>
                                <option id="SBD" value="SBD : Sanghar, PK"></option>
                                <option id="SNR" value="SNR : Sangi, PK"></option>
                                <option id="SRG" value="SRG : Sangla Hill, PK"></option>
                                <option id="SNH" value="SNH : Sangote, PK"></option>
                                <option id="SRT" value="SRT : Sangu Wali, PK"></option>
                                <option id="SDN" value="SDN : Sargodha, PK"></option>
                                <option id="SAG" value="SAG : Satghara, PK"></option>
                                <option id="SKD" value="SKD : Sehwan Sharif, PK"></option>
                                <option id="SOK" value="SOK : Shadiwal, PK"></option>
                                <option id="SKG" value="SKG : Shahdad Kot, PK"></option>
                                <option id="SKD" value="SKD : Shahdara, PK"></option>
                                <option id="SHN" value="SHN : Shaheed Benazir Abad, PK"></option>
                                <option id="SHP" value="SHP : Shahpur, PK"></option>
                                <option id="SRR" value="SRR : Shahuwala, PK"></option>
                                <option id="SKE" value="SKE : Shakargarh, PK"></option>
                                <option id="SKR" value="SKR : Shakh Rasheed, PK"></option>
                                <option id="SKA" value="SKA : Sharaq Pur, PK"></option>
                                <option id="SRP" value="SRP : Sharqpur, PK"></option>
                                <option id="SST" value="SST : Sheikhupura, PK"></option>
                                <option id="SLR" value="SLR : Shergarh, PK"></option>
                                <option id="SHU" value="SHU : Shikarpur, PK"></option>
                                <option id="SLB" value="SLB : Shorkot, PK"></option>
                                <option id="SRL" value="SRL : Shuja Abad, PK"></option>
                                <option id="SGD" value="SGD : Sialkot, PK"></option>
                                <option id="SKT" value="SKT : Sibi, PK"></option>
                                <option id="SIB" value="SIB : Sibi - Balochistan, PK"></option>
                                <option id="SLJ" value="SLJ : Silanwala, PK"></option>
                                <option id="SKR" value="SKR : Skardu, PK"></option>
                                <option id="SGW" value="SGW : Sukheke, PK"></option>
                                <option id="SKK" value="SKK : Sukkur, PK"></option>
                                <option id="SUL" value="SUL : Sulman Kk, PK"></option>
                                <option id="SMD" value="SMD : Sumbal Goth, PK"></option>
                                <option id="SUM" value="SUM : Sumbal, PK"></option>
                                <option id="SWM" value="SWM : Sumeera, PK"></option>
                                <option id="SBN" value="SBN : Swabi, PK"></option>
                                <option id="SWA" value="SWA : Swat, PK"></option>
                                <option id="TTC" value="TTC : Taliyah, PK"></option>
                                <option id="TLA" value="TLA : Talagang"></option>
                                <option id="TLE" value="TLE : Talhar, PK"></option>
                                <option id="TMA" value="TMA : Talhur, PK"></option>
                                <option id="TGG" value="TGG : Talpur, PK"></option>
                                <option id="TNO" value="TNO : Tando Adam, PK"></option>
                                <option id="TBP" value="TBP : Tando Bagho, PK"></option>
                                <option id="THO" value="THO : Tando Jam, PK"></option>
                                <option id="TKS" value="TKS : Tando Kas, PK"></option>
                                <option id="TMR" value="TMR : Tando Mohammad Khan, PK">
                                </option><option id="TPH" value="TPH : Tando Mumammad Khan, PK"></option>
                                <option id="TNK" value="TNK : Tank, PK"></option><option id="TAA" value="TAA : Taranda Amanat Ali, PK"></option><option id="TBZ" value="TBZ : Tarmat, PK"></option><option id="TTH" value="TTH : Tarnab, PK"></option><option id="THD" value="THD : Taxila, PK"></option><option id="TRD" value="TRD : Toba Tek Singh, PK"></option><option id="TOD" value="TOD : Toba Tek Singh - City, PK"></option><option id="TKH" value="TKH : Torkham, PK"></option><option id="TUL" value="TUL : Tulamba, PK"></option><option id="THP" value="THP : Tump, PK"></option><option id="TUR" value="TUR : Turbat, PK"></option><option id="TWP" value="TWP : Turbat, PK"></option><option id="TSH" value="TSH : Turrabah, PK"></option><option id="UBH" value="UBH : Ubauro, PK"></option><option id="UBP" value="UBP : Ubaro, PK"></option><option id="UBT" value="UBT : Ubauro, PK"></option><option id="UBR" value="UBR : Ubaro, PK"></option><option id="UCA" value="UCA : Uch Sharif, PK"></option><option id="UDR" value="UDR : Uddhial, PK"></option><option id="UGI" value="UGI : Ugharwala, PK"></option><option id="UKR" value="UKR : Ukhwal, PK"></option><option id="ULK" value="ULK : Ullan Batar, PK"></option><option id="ULN" value="ULN : Ullan Wali, PK"></option><option id="ULN" value="ULN : Umar Kot, PK"></option><option id="UNR" value="UNR : Umarwala, PK"></option><option id="UMS" value="UMS : Umer Kot, PK"></option><option id="UMW" value="UMW : Umerkot, PK"></option><option id="UMP" value="UMP : Ummar Kot, PK"></option><option id="UJN" value="UJN : Urahn, PK"></option><option id="USR" value="USR : Usmanwala, PK"></option><option id="VLG" value="VLG : Vehari, PK"></option><option id="VHU" value="VHU : Wadpa, PK"></option><option id="WJK" value="WJK : Wahi, PK"></option><option id="WJH" value="WJH : Wahi Hassam, PK"></option><option id="WAP" value="WAP : Wahro, PK"></option><option id="WAI" value="WAI : Wali Wala, PK"></option><option id="WKB" value="WKB : Wanda Kukranwala, PK"></option><option id="WHP" value="WHP : Wapda Town, PK"></option><option id="WAF" value="WAF : Warah, PK"></option><option id="WZD" value="WZD : Warid, PK"></option><option id="WAK" value="WAK : Waruk, PK"></option><option id="WAL" value="WAL : Washuk, PK"></option><option id="WLS" value="WLS : Wazirabad, PK"></option><option id="WDI" value="WDI : Wazirpur, PK"></option><option id="WZD" value="WZD : Wazirpur Nowshehra, PK"></option><option id="WHI" value="WHI : Wehari, PK"></option><option id="WRI" value="WRI : Wehari, PK"></option><option id="WHL" value="WHL : Winder, PK"></option><option id="WMD" value="WMD : Wirikak, PK"></option><option id="WPN" value="WPN : Woog Noor, PK"></option><option id="WRN" value="WRN : Wrigam, PK"></option><option id="WQZ" value="WQZ : Wusook, PK"></option><option id="YAR" value="YAR : Yari, PK"></option><option id="YAJ" value="YAJ : Yaru Jam, PK"></option><option id="YED" value="YED : Yedur, PK"></option><option id="ZAK" value="ZAK : Zakheera, PK"></option><option id="ZAK" value="ZAK : Zakhera, PK"></option><option id="ZAM" value="ZAM : Zaman Park, PK"></option><option id="ZHT" value="ZHT : Zamanabad, PK"></option><option id="ZMR" value="ZMR : Zamindara, PK"></option><option id="ZMN" value="ZMN : Zaminawala, PK"></option><option id="ZNC" value="ZNC : Zangiota, PK"></option><option id="ZRA" value="ZRA : Zangli, PK"></option><option id="ZAR" value="ZAR : Zara Bhutta, PK"></option><option id="ZBH" value="ZBH : Zarobi, PK"></option><option id="ZRE" value="ZRE : Zarobi, PK"></option><option id="ZRG" value="ZRG : Zarobi, PK"></option><option id="ZIL" value="ZIL : Ziarat, PK"></option><option id="ZIO" value="ZIO : Ziarat, PK"></option><option id="ZLO" value="ZLO : Ziarat, PK"></option><option id="ZMT" value="ZMT : Zohb, PK"></option><option id="ZAH" value="ZAH : Zorab, PK"></option>


                            
                            
                        </select>
                    </div>
                    
                    {/* Consignee Name */}
                    <div className="flex items-center mt-4">
                                <label htmlFor="consigneeName" className="text-black font-medium w-1/5">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="consigneeName"
                                    id="consigneeName"
                                    className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                />
                        </div>
                        {/* Consignee Mobile */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="consigneeMobile" className="text-black font-medium w-1/5">
                                Mobile
                            </label>
                            <input
                                type="text"
                                name="consigneeMobile"
                                id="consigneeMobile"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Consignee Number */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="consigneeNumber" className="text-black font-medium w-1/5">
                                Number
                            </label>
                            <input
                                type="number"
                                name="consigneeNumber"
                                id="consigneeNumber"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Consignee Address */}
                        <div className="flex  mt-4">
                            <label htmlFor="consigneeAddress" className="text-black font-medium w-1/5">
                                Address
                            </label>
                            <textarea
                                name="consigneeAddress"
                                id="consigneeAddress"
                                rows="3"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
                        <span className="border-b-2 border-lime-400">Shipment</span> Details
                    </h1>

                    <div className="flex flex-wrap justify-center mt-10 gap-2 max-sm:gap-4">
                        {/* Height Input field */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="height" className="text-black font-medium">
                                Height
                            </label>
                            <input
                                type="number"
                                name="height"
                                id="height"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Width Input field */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="width" className="text-black font-medium">
                                Width
                            </label>
                            <input
                                type="number"
                                name="width"
                                id="width"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Length Input field */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="length" className="text-black font-medium">
                                Length
                            </label>
                            <input
                                type="number"
                                name="length"
                                id="length"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Weight Input field */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="weight" className="text-black font-medium">
                                Weight
                            </label>
                            <input
                                placeholder='KG'
                                type="number"
                                step={0.5}
                                name="weight"
                                id="weight"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10 gap-2 max-sm:gap-4">
                        {/* Pieces Input field */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="pieces" className="text-black font-medium">
                                Pieces
                            </label>
                            <input
                                type="number"
                                name="pieces"
                                id="pieces"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Content Textarea field */}
                        <div className="flex  mb-2 sm:mb-0">
                            <label htmlFor="content" className="text-black font-medium">
                                Content
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                rows="2"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                        {/* Remarks Textarea field */}
                        <div className="flex  mb-2 sm:mb-0">
                            <label htmlFor="remarks" className="text-black font-medium">
                                Remarks
                            </label>
                            <textarea
                                name="remarks"
                                id="remarks"
                                rows="2"
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                        {/* Instructions */}
                        <div className="flex  mb-2 sm:mb-0">
                            <label htmlFor="instructions" className="text-black font-medium">
                                Instructions
                            </label>
                            <textarea
                                defaultValue="Handle with care"
                                name="instructions"
                                id="instructions"
                                rows="2"
                                className="ml-2 text-gray-500 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        {/* Status Selector with options[1.Confirmed. 2.On its way. 3.Out for delivery.] */}
                        <div className='space-x-2 flex items-center'>
                            <label htmlFor="statusSelector" className="text-black font-medium">Status Selector</label>
                            <select name="statusSelector" id="statusSelector" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                                <option value="Confirmed">Confirmed</option>
                                <option value="On its way">On its way</option>
                                <option value="Out for delivery">Out for delivery</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
                        <span className="border-b-2 border-lime-400">Insur</span>ance Details
                    </h1>
                    <div className="flex flex-wrap justify-evenly mt-10  ">
                        {/* Declared value number field */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="declaredValue" className="text-black font-medium">
                                Declared Value
                            </label>
                            <input
                                type="number"
                                name="declaredValue"
                                id="declaredValue"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Insurance Charges */}
                        <div className="flex items-center mb-2 sm:mb-0">
                            <label htmlFor="insuranceCharges" className="text-black font-medium">
                                Insurance Charges
                            </label>
                            <input
                                type="number"
                                name="insuranceCharges"
                                id="insuranceCharges"
                                className="ml-2 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
                        <span className="border-b-2 border-lime-400">Charge</span>s Details
                    </h1>
                    <div className="flex flex-wrap justify-center items-center mt-10 gap-2 max-sm:gap-4">
                        {/* COD Amount Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="codamount" className="text-black font-medium mb-1">
                                COD Amount
                            </label>
                            <input
                                type="number"
                                name="codamount"
                                id="codamount"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Service Charges Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="charges" className="text-black font-medium mb-1">
                                Service Charges
                            </label>
                            <input
                                type="number"
                                name="charges"
                                id="charges"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Other Charges Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="ocharges" className="text-black font-medium mb-1">
                                Other Charges
                            </label>
                            <input
                                type="number"
                                name="ocharges"
                                id="ocharges"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Discount Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="discount" className="text-black font-medium mb-1">
                                Discount
                            </label>
                            <input
                                type="number"
                                name="discount"
                                id="discount"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-2 gap-2 max-sm:gap-4">
                        {/* COD Amount Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="tax" className="text-black font-medium mb-1">
                                Tax
                            </label>
                            <input
                                type="number"
                                name="tax"
                                id="tax"

                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Tax Input Field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="total" className="text-black font-medium mb-1">
                                Total
                            </label>
                            <input
                                type="number"
                                name="total"
                                id="total"

                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out">
                        <MdFileUpload className="mr-1" />
                        Save
                    </button>
                    <button className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out ml-4">
                        <IoMdPrint className="mr-1" />
                        Print
                    </button>
                    <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out ml-4">
                        <MdClear className="mr-1" />
                        Clear
                    </button>
                </div>
            </form>
        </section>

    )
}

export default RetailBooking