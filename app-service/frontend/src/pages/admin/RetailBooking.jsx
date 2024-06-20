import React,{useState, useEffect} from 'react'
import { MdClear } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import axios from 'axios';
const LocationDatalist = () => {
    return (
        <datalist id="AllLocations"><option id="ABT" value="ABT : Abbottabad"></option><option id="ADZ" value="ADZ : Adda Zakheera"></option><option id="AFA" value="AFA : Arifwala"></option><option id="AHT" value="AHT : Abdul Hakeem"></option><option id="AIP" value="AIP : Alipur"></option><option id="AMB" value="AMB : Aminpur Banglow"></option><option id="AMO" value="AMO : Samaro"></option><option id="ANO" value="ANO : Dhanola"></option><option id="APC" value="APC : Ali Pur Chattha"></option><option id="APE" value="APE : Ahmed Pur East"></option><option id="APS" value="APS : Ahmed Pur Sial"></option><option id="ASH" value="ASH : Besham"></option><option id="ASW" value="ASW : Shewa Adda"></option><option id="ATT" value="ATT : Attock"></option><option id="AUI" value="AUI : Alpurai"></option><option id="AWH" value="AWH : Rabwah (Chanab Nagar)"></option><option id="AWR" value="AWR : Awaran"></option><option id="AZR" value="AZR : 18-Hazari"></option><option id="BCK" value="BCK : Bucheki"></option><option id="BCM" value="BCM : Buchiana Mandi"></option><option id="BDN" value="BDN : Badin"></option><option id="BGH" value="BGH : Bagh"></option><option id="BGM" value="BGM : Batgaram"></option><option id="BHV" value="BHV : Bahawalpur"></option><option id="BJR" value="BJR : Bajaur"></option><option id="BKK" value="BKK : Bhakkar"></option><option id="BLA" value="BLA : Bela"></option><option id="BLL" value="BLL : Kabal"></option><option id="BMR" value="BMR : Bhimber"></option><option id="BNP" value="BNP : Bannu"></option><option id="BOT" value="BOT : Barikot"></option><option id="BPR" value="BPR : Bhai Phairu ( Phool Nagar )"></option><option id="BQK" value="BQK : Balakot"></option><option id="BRA" value="BRA : Bhera"></option><option id="BRC" value="BRC : Bhiria City"></option><option id="BRD" value="BRD : Bheria Road"></option><option id="BRW" value="BRW : Burewala"></option><option id="BSH" value="BSH : Bhitshah"></option><option id="BSR" value="BSR : Basir Pur"></option><option id="BTK" value="BTK : Batkhela"></option><option id="BUR" value="BUR : Bunair"></option><option id="BWA" value="BWA : Bhawana"></option><option id="BWL" value="BWL : Bhalwal"></option><option id="CAZ" value="CAZ : Chowk Azam"></option><option id="CCW" value="CCW : Chicha Watni"></option><option id="CDS" value="CDS : Choa Syden Shah"></option><option id="CHM" value="CHM : Chambar"></option><option id="CHO" value="CHO : Chachro"></option><option id="CHT" value="CHT : Chishtian"></option><option id="CJS" value="CJS : Chak Jhumra"></option><option id="CKL" value="CKL : Chakwal"></option><option id="CKR" value="CKR : Chak Sawari"></option><option id="CLL" value="CLL : Chillas"></option><option id="CMG" value="CMG : Changa Manga"></option><option id="CMN" value="CMN : Chaman"></option><option id="COC" value="COC : Chhore"></option><option id="CRA" value="CRA : Chakdara"></option><option id="CSD" value="CSD : Charsadda"></option><option id="CSS" value="CSS : Chowk Sarwar Shaheed"></option><option id="CTL" value="CTL : Chitral"></option><option id="CWD" value="CWD : Chawinda"></option><option id="DAH" value="DAH : Darya Khan - Dah"></option><option id="DAM" value="DAM : Miani Adda"></option><option id="DAY" value="DAY : Dera Allahyar"></option><option id="DDU" value="DDU : Dadu"></option><option id="DGK" value="DGK : Dera Ghazi Khan"></option><option id="DHK" value="DHK : Dhirkot - Bagh"></option><option id="DHN" value="DHN : Dhoro-Naro"></option><option id="DIG" value="DIG : Digri"></option><option id="DIJ" value="DIJ : Dijkot"></option><option id="DIK" value="DIK : Dera Ismail Khan"></option><option id="DIN" value="DIN : Dina"></option><option id="DKA" value="DKA : Daska"></option><option id="DKI" value="DKI : Daharki"></option><option id="DKT" value="DKT : Dakota"></option><option id="DLB" value="DLB : Dalbandin"></option><option id="DLT" value="DLT : Dolat Nagar"></option><option id="DLW" value="DLW : Dulle Wala"></option><option id="DMJ" value="DMJ : Dera Murad Jamali"></option><option id="DNG" value="DNG : Dinga"></option><option id="DNR" value="DNR : Danyore"></option><option id="DNT" value="DNT : Dhanot"></option><option id="DOR" value="DOR : Dour"></option><option id="DPA" value="DPA : Depal Pur"></option><option id="DRG" value="DRG : Dargai &amp; Malakand"></option><option id="DTA" value="DTA : Daultala"></option><option id="DTR" value="DTR : Daulatpur"></option><option id="DUN" value="DUN : Dunyapur"></option><option id="DWA" value="DWA : Dharanwala"></option><option id="DYL" value="DYL : Dadyal"></option><option id="EDA" value="EDA : New Saeedabad"></option><option id="ELA" value="ELA : Ellah Abad"></option><option id="EOA" value="EOA : Jaglot"></option><option id="ERA" value="ERA : Naushera"></option><option id="FAB" value="FAB : Fort Abbas"></option><option id="FAD" value="FAD : Farooqabad"></option><option id="FPR" value="FPR : Fatehpur - Fpr"></option><option id="FQW" value="FQW : Faqir Wali"></option><option id="FRZ" value="FRZ : Feroza"></option><option id="FSD" value="FSD : Faisalabad"></option><option id="FTG" value="FTG : Fateh Jang"></option><option id="FWA" value="FWA : Feroz Watowan"></option><option id="FZP" value="FZP : Fazil Pur"></option><option id="GAD" value="GAD : Ghazi Abad"></option><option id="GBT" value="GBT : Gambat"></option><option id="GDN" value="GDN : Gadoon Amazai"></option><option id="GDU" value="GDU : Guddu"></option><option id="GHK" value="GHK : Ghakkar"></option><option id="GIL" value="GIL : Gilgit"></option><option id="GJT" value="GJT : Gujrat"></option><option id="GKN" value="GKN : Gujjar Khan"></option><option id="GMD" value="GMD : Gaggo Mandi"></option><option id="GMO" value="GMO : Garh Mor"></option><option id="GNY" value="GNY : Mohmand Agency"></option><option id="GOG" value="GOG : Banglow Gogera"></option><option id="GPR" value="GPR : Ghous Pur"></option><option id="GRM" value="GRM : Garha Morr"></option><option id="GRO" value="GRO : Gharo"></option><option id="GTI" value="GTI : Ghotki"></option><option id="GUJ" value="GUJ : Gujranwala"></option><option id="GWR" value="GWR : Gawadar"></option><option id="GYS" value="GYS : Garhi Yasin"></option><option id="HAJ" value="HAJ : Hajira"></option><option id="HDD" value="HDD : Hyderabad"></option><option id="HFZ" value="HFZ : Hafizwala"></option><option id="HLA" value="HLA : Hala"></option><option id="HLK" value="HLK : Haveli Lakha"></option><option id="HNG" value="HNG : Hangu"></option><option id="HNI" value="HNI : Harnai"></option><option id="HNL" value="HNL : Harnouli"></option><option id="HNZ" value="HNZ : Hunza"></option><option id="HOO" value="HOO : Hazro"></option><option id="HRI" value="HRI : Haripur"></option><option id="HRN" value="HRN : Haroonabad"></option><option id="HSL" value="HSL : Hasilpur"></option><option id="HSM" value="HSM : Hujra Shah Muqeem"></option><option id="HTR" value="HTR : Hattar"></option><option id="HUB" value="HUB : Hub"></option><option id="HVL" value="HVL : Havelian"></option><option id="HZD" value="HZD : Hafiz Abad"></option><option id="IAA" value="IAA : Murid Wala"></option><option id="IBL" value="IBL : Mongi Bangla"></option><option id="IHA" value="IHA : Gahkuch Ghizer"></option><option id="IHU" value="IHU : Kohlu"></option><option id="IKD" value="IKD : Iskandarabad"></option><option id="IKL" value="IKL : Esa Khel"></option><option id="ILA" value="ILA : Pharianwali"></option><option id="IMK" value="IMK : Islamkot"></option><option id="ING" value="ING : Iqbal Nagar"></option><option id="IOT" value="IOT : Chiniot"></option><option id="IPK" value="IPK : Paikhel"></option><option id="IQL" value="IQL : Iqbalabad"></option><option id="ISB" value="ISB : Islamabad"></option><option id="JCB" value="JCB : Jacobabad"></option><option id="JDW" value="JDW : Jamaldin Wali"></option><option id="JHG" value="JHG : Jhang"></option><option id="JHI" value="JHI : Johi"></option><option id="JHN" value="JHN : Jhanian"></option><option id="JLA" value="JLA : Nawan Jandanwala"></option><option id="JLJ" value="JLJ : Jalalpur Jattan"></option><option id="JLM" value="JLM : Jehlum"></option><option id="JMP" value="JMP : Jampur"></option><option id="JPP" value="JPP : Jalalpur Pirwala"></option><option id="JPT" value="JPT : Jhat Pat"></option><option id="JRD" value="JRD : Joharabad"></option><option id="JRI" value="JRI : Jehangira"></option><option id="JTI" value="JTI : Jatoi"></option><option id="JVR" value="JVR : Jawarian"></option><option id="JWA" value="JWA : Jaranwala"></option><option id="JYL" value="JYL : Jhol"></option><option id="KAK" value="KAK : Kambar Ali Khan"></option><option id="KAR" value="KAR : Karor Lalesan"></option><option id="KAY" value="KAY : Kalaskey"></option><option id="KBH" value="KBH : Kalabagh"></option><option id="KBL" value="KBL : Khan Bela"></option><option id="KCU" value="KCU : Kuchlak"></option><option id="KDC" value="KDC : Kot Radha Kishan"></option><option id="KDI" value="KDI : Kandiari"></option><option id="KDW" value="KDW : Khidder Wala"></option><option id="KER" value="KER : Kameer 120/9-L - Arifwala"></option><option id="KGM" value="KGM : Kot Ghulam Muhammad"></option><option id="KHI" value="KHI : Karachi"></option><option id="KHM" value="KHM : Kashmore"></option><option id="KHP" value="KHP : Khair Pur"></option><option id="KHR" value="KHR : Khaaran"></option><option id="KHT" value="KHT : Kot Chutta"></option><option id="KJA" value="KJA : Kotla Jam"></option><option id="KKK" value="KKK : Kandhkot"></option><option id="KLA" value="KLA : Kamalia"></option><option id="KLG" value="KLG : Katlang"></option><option id="KLK" value="KLK : Kallar Kahar"></option><option id="KLS" value="KLS : Kalar Syedan"></option><option id="KLT" value="KLT : Kalat"></option><option id="KLY" value="KLY : Kotly"></option><option id="KMI" value="KMI : Kamer Mishani"></option><option id="KMK" value="KMK : Kamoke"></option><option id="KMN" value="KMN : Kot Momin"></option><option id="KND" value="KND : Kandyaro"></option><option id="KNI" value="KNI : Kunri"></option><option id="KNN" value="KNN : Kundian"></option><option id="KNS" value="KNS : Khairpur Nathan Shah"></option><option id="KOO" value="KOO : Kacha Kho"></option><option id="KOT" value="KOT : Kot Addu"></option><option id="KPC" value="KPC : Karor Pacca"></option><option id="KPL" value="KPL : Khaplu"></option><option id="KPR" value="KPR : Khipro &amp; Hathango &amp; Hingorno"></option><option id="KQS" value="KQS : Khanqa Sharif"></option><option id="KRC" value="KRC : Kharian Cantt"></option><option id="KRK" value="KRK : Karak"></option><option id="KRN" value="KRN : Kharian"></option><option id="KSB" value="KSB : Kot Samabha"></option><option id="KSF" value="KSF : Qilla Saif Ullah"></option><option id="KSR" value="KSR : Kasur"></option><option id="KSW" value="KSW : Kasowal"></option><option id="KTA" value="KTA : Kahota"></option><option id="KTL" value="KTL : Kotla"></option><option id="KTW" value="KTW : Khairpur Taimwali"></option><option id="KWL" value="KWL : Khanewal"></option><option id="KYA" value="KYA : Nikyal"></option><option id="KZK" value="KZK : Khazakhela"></option><option id="LAR" value="LAR : Larkana"></option><option id="LHE" value="LHE : Lahore"></option><option id="LKI" value="LKI : Lakki Marwat"></option><option id="LLI" value="LLI : Lalian"></option><option id="LLM" value="LLM : Lala Musa"></option><option id="LNK" value="LNK : Landikotal"></option><option id="LOD" value="LOD : Lodhran"></option><option id="LQR" value="LQR : Liaquat Pur"></option><option id="LRI" value="LRI : Loralai"></option><option id="LYY" value="LYY : Layyah"></option><option id="MAK" value="MAK : Muzaffarabad A K"></option><option id="MBD" value="MBD : Mandi Bhauddin"></option><option id="MCN" value="MCN : Mian Channu"></option><option id="MDA" value="MDA : Makhdoom Aali"></option><option id="MDJ" value="MDJ : Madejee"></option><option id="MDN" value="MDN : Mardan"></option><option id="MGR" value="MGR : Mirwah Gorchani"></option><option id="MGT" value="MGT : Machi Goth"></option><option id="MHD" value="MHD : Minchanabad"></option><option id="MHR" value="MHR : Mehar"></option><option id="MIT" value="MIT : Mithi"></option><option id="MKN" value="MKN : Mamun Kanjan"></option><option id="MKR" value="MKR : Mankera"></option><option id="MKT" value="MKT : Mehmood Kot / Qasba Gujrat"></option><option id="MLK" value="MLK : Malak Wal"></option><option id="MLT" value="MLT : Mailsi"></option><option id="MMP" value="MMP : Mubarak Pur - Ape"></option><option id="MNA" value="MNA : Mansehra"></option><option id="MOG" value="MOG : Murad Memon Goth"></option><option id="MOK" value="MOK : More Khunda"></option><option id="MPD" value="MPD : Makhdoom Pur"></option><option id="MPK" value="MPK : Mirpur Khas"></option><option id="MPM" value="MPM : Mir Pur Matelo"></option><option id="MRI" value="MRI : Matiari"></option><option id="MRO" value="MRO : Moro"></option><option id="MRP" value="MRP : Mehrabpur"></option><option id="MRY" value="MRY : Mureedkay"></option><option id="MSH" value="MSH : Mandi Shah Jewna"></option><option id="MSO" value="MSO : Mirpur Sakro"></option><option id="MTG" value="MTG : Mastung"></option><option id="MTI" value="MTI : Matli"></option><option id="MUH" value="MUH : Much"></option><option id="MUX" value="MUX : Multan"></option><option id="MVL" value="MVL : Mangowal"></option><option id="MWI" value="MWI : Mianwali"></option><option id="MYN" value="MYN : Madyan"></option><option id="MZG" value="MZG : Muzaffargarh"></option><option id="NAP" value="NAP : Nagarparkar"></option><option id="NBD" value="NBD : Nasirabad"></option><option id="NDR" value="NDR : Naudero"></option><option id="NFZ" value="NFZ : Noshero Feroz"></option><option id="NGM" value="NGM : Narang Mandi"></option><option id="NGR" value="NGR : Bahawalnagar"></option><option id="NJT" value="NJT : New Jatoi"></option><option id="NKS" value="NKS : Nankana Sahab"></option><option id="NLA" value="NLA : Barnala - Ak"></option><option id="NLB" value="NLB : Narwala Bangla"></option><option id="NMR" value="NMR : Khanpur Mahar Ghotki"></option><option id="NOK" value="NOK : Noshki"></option><option id="NOP" value="NOP : Noorpur"></option><option id="NOW" value="NOW : Nowshera"></option><option id="NPI" value="NPI : Pishin"></option><option id="NPR" value="NPR : Khanpur Katora - Npr"></option><option id="NPT" value="NPT : Nurpur Thal"></option><option id="NRL" value="NRL : Narowal"></option><option id="NUD" value="NUD : Nooriabad"></option><option id="NWV" value="NWV : Nowshera Virkan"></option><option id="OGI" value="OGI : Oghi"></option><option id="OHT" value="OHT : Kohat &amp; Doaba - Tal"></option><option id="OJD" value="OJD : Jhudo"></option><option id="OJR" value="OJR : Gojra"></option><option id="OKC" value="OKC : Okara Cantt"></option><option id="OKR" value="OKR : Okara"></option><option id="OND" value="OND : Wando"></option><option id="ONI" value="ONI : Booni"></option><option id="OOR" value="OOR : Kaloor Kot"></option><option id="ORI" value="ORI : Dokri"></option><option id="ORJ" value="ORJ : Jaranwala - Orj"></option><option id="PAC" value="PAC : Panu Aqil Cantt"></option><option id="PAN" value="PAN : Painsra"></option><option id="PBN" value="PBN : Pindi Bhatian"></option><option id="PCC" value="PCC : Pacca Chang"></option><option id="PDK" value="PDK : Pind Dadan Khan"></option><option id="PEW" value="PEW : Peshawar"></option><option id="PGB" value="PGB : Pindi Gheb"></option><option id="PHL" value="PHL : Phalia"></option><option id="PHP" value="PHP : Pahar Pur"></option><option id="PHR" value="PHR : Phalor"></option><option id="PHT" value="PHT : Pithoro"></option><option id="PJG" value="PJG : Panjgoor"></option><option id="PLN" value="PLN : Piplan"></option><option id="PML" value="PML : Pir Mahal"></option><option id="PNG" value="PNG : Panjgirain"></option><option id="PNQ" value="PNQ : Panu Aqil"></option><option id="PON" value="PON : Pooran"></option><option id="PPS" value="PPS : Pak Pattan Sharif"></option><option id="PRG" value="PRG : Pir Jo Goth"></option><option id="PRR" value="PRR : Pasroor"></option><option id="PSN" value="PSN : Pasni"></option><option id="PTI" value="PTI : Pattoki"></option><option id="PUL" value="PUL : Pulandri"></option><option id="QAL" value="QAL : Qalandarabad"></option><option id="QAZ" value="QAZ : Qazi Ahmed"></option><option id="QBL" value="QBL : Qaboola"></option><option id="QDD" value="QDD : Quaidabad"></option><option id="QDS" value="QDS : Qila Dedar Singh"></option><option id="QML" value="QML : Mir Pur A.K"></option><option id="QPR" value="QPR : Qadir Pur Ran-Tate Pur"></option><option id="RAH" value="RAH : Sadhar"></option><option id="RAJ" value="RAJ : Rajana"></option><option id="RDN" value="RDN : Radhan"></option><option id="RDU" value="RDU : Skardu"></option><option id="REE" value="REE : Murree"></option><option id="RJP" value="RJP : Rajanpur"></option><option id="RKT" value="RKT : Rawalakot"></option><option id="RLK" value="RLK : Renala Khurd"></option><option id="RND" value="RND : Raiwind"></option><option id="RNI" value="RNI : Rani Pur"></option><option id="RRA" value="RRA : Gojra - Fsd"></option><option id="RSN" value="RSN : Rodu Sultan"></option><option id="RSP" value="RSP : Risalpur"></option><option id="RTA" value="RTA : Kohiratta"></option><option id="RTD" value="RTD : Rato Daro"></option><option id="RVT" value="RVT : Rawat"></option><option id="RWP" value="RWP : Rawalpindi"></option><option id="RYK" value="RYK : Rahim Yar Khan"></option><option id="SAB" value="SAB : Kushab"></option><option id="SAK" value="SAK : Sakrand"></option><option id="SAL" value="SAL : Sambrial"></option><option id="SAM" value="SAM : Samundari"></option><option id="SAN" value="SAN : Sanghar"></option><option id="SAP" value="SAP : Shahpur Saddar"></option><option id="SBD" value="SBD : Bhan Saeedabad"></option><option id="SBI" value="SBI : Sibbi"></option><option id="SBN" value="SBN : Satiana Bangla"></option><option id="SBT" value="SBT : Sohbat Pur (Banking)"></option><option id="SDA" value="SDA : Sadiqabad"></option><option id="SES" value="SES : Sehwan"></option><option id="SFD" value="SFD : Sahiwal -  Sargodha"></option><option id="SGD" value="SGD : Sargodha"></option><option id="SGR" value="SGR : Shakar Garh"></option><option id="SHH" value="SHH : Shadad Kot"></option><option id="SHJ" value="SHJ : Shujaabad"></option><option id="SHL" value="SHL : Sangla Hill"></option><option id="SIP" value="SIP : Shikar Pur"></option><option id="SIT" value="SIT : Sita Road"></option><option id="SJO" value="SJO : Sinjhoro"></option><option id="SKT" value="SKT : Khurian Wala"></option><option id="SKZ" value="SKZ : Sukkur"></option><option id="SLT" value="SLT : Sialkot"></option><option id="SMA" value="SMA : Chashma"></option><option id="SMR" value="SMR : Sial Morr"></option><option id="SND" value="SND : Sandhilianwali"></option><option id="SNK" value="SNK : Shinkiari"></option><option id="SNL" value="SNL : Silanwali"></option><option id="SNW" value="SNW : Sanawan"></option><option id="SPC" value="SPC : Shahpur Chakkar"></option><option id="SPR" value="SPR : Shahdad Pur"></option><option id="SQD" value="SQD : Shabqadar"></option><option id="SQR" value="SQR : Sharaqpur"></option><option id="SQT" value="SQT : Shorkot"></option><option id="SRA" value="SRA : Sheikhupura"></option><option id="SRP" value="SRP : Sanjar Pur"></option><option id="SSA" value="SSA : Sehnsa"></option><option id="SSD" value="SSD : Shah Saddar Din"></option><option id="STP" value="STP : Super Highway Tool Plaza"></option><option id="SUA" value="SUA : Sundar Adda"></option><option id="SUJ" value="SUJ : Sujawal"></option><option id="SWA" value="SWA : Swabi"></option><option id="SWL" value="SWL : Sahiwal"></option><option id="SWT" value="SWT : Swat"></option><option id="TAL" value="TAL : Tall - Kpk"></option><option id="TAN" value="TAN : Tank"></option><option id="TBI" value="TBI : Takhat Bhai"></option><option id="TDA" value="TDA : Tando Allah Yar"></option><option id="TDJ" value="TDJ : Tando Jam"></option><option id="TDM" value="TDM : Tando Adam"></option><option id="TER" value="TER : Therhi"></option><option id="TEW" value="TEW : Tail Wala"></option><option id="TGA" value="TGA : Trug"></option><option id="THL" value="THL : Thull"></option><option id="THT" value="THT : Thatta"></option><option id="TKL" value="TKL : Tarar Khel"></option><option id="TLG" value="TLG : Talagang"></option><option id="TMG" value="TMG : Timergarah"></option><option id="TMK" value="TMK : Tando Muhammad Khan"></option><option id="TNG" value="TNG : Tangi Proper - Charsadda"></option><option id="TNM" value="TNM : Mattani"></option><option id="TPM" value="TPM : Tranda Muhammad Panah"></option><option id="TRL" value="TRL : Tarnol"></option><option id="TSA" value="TSA : Tharo Shah"></option><option id="TSP" value="TSP : Tibba Sultan"></option><option id="TTS" value="TTS : Toba Tek Singh"></option><option id="TTY" value="TTY : Tatlay Aali"></option><option id="TUK" value="TUK : Turbat"></option><option id="TVH" value="TVH : Thari Mirwah"></option><option id="TWL" value="TWL : Tandlianwala"></option><option id="UCH" value="UCH : Uch Sharif"></option><option id="UDR" value="UDR : Khuzdar"></option><option id="UET" value="UET : Quetta"></option><option id="UKT" value="UKT : Umerkot"></option><option id="ULI" value="ULI : Uchhali"></option><option id="UMB" value="UMB : Kumb"></option><option id="UPD" value="UPD : Upper Dir - Upd"></option><option id="URO" value="URO : Ubaro"></option><option id="USM" value="USM : Usta Muhammad"></option><option id="UTL" value="UTL : Uthal"></option><option id="UWU" value="UWU : Phularwan"></option><option id="VDR" value="VDR : Varai Dir"></option><option id="VRI" value="VRI : Vehari"></option><option id="WAH" value="WAH : Wah"></option><option id="WBC" value="WBC : Wan Bhachran"></option><option id="WCA" value="WCA : Chonawala"></option><option id="WDR" value="WDR : Winder"></option><option id="WGN" value="WGN : Waggan"></option><option id="WLA" value="WLA : Manawala"></option><option id="WNS" value="WNS : Nawabshah"></option><option id="WRH" value="WRH : Warrah"></option><option id="WZD" value="WZD : Wazirabad"></option><option id="YAL" value="YAL : Naya Lahore"></option><option id="YZM" value="YZM : Yazman"></option><option id="ZFW" value="ZFW : Zafarwal"></option><option id="ZOB" value="ZOB : Zhob"></option><option id="ZPR" value="ZPR : Zahirpeer"></option><option id="ZRT" value="ZRT : Ziarat"></option><option id="AND" value="AND : Andorra"></option><option id="ARE" value="ARE : United Arab Emirates"></option><option id="AFG" value="AFG : Afghanistan"></option><option id="ATG" value="ATG : Antigua and Barbuda"></option><option id="AIA" value="AIA : Anguilla"></option><option id="ALB" value="ALB : Albania"></option><option id="ARM" value="ARM : Armenia"></option><option id="ANT" value="ANT : Netherlands Antilles"></option><option id="AGO" value="AGO : Angola"></option><option id="ATA" value="ATA : Antarctica"></option><option id="ARG" value="ARG : Argentina"></option><option id="ASM" value="ASM : American Samoa"></option><option id="AUT" value="AUT : Austria"></option><option id="AUS" value="AUS : Australia"></option><option id="ABW" value="ABW : Aruba"></option><option id="ALA" value="ALA : Aland Islands"></option><option id="AZE" value="AZE : Azerbaijan"></option><option id="BIH" value="BIH : Bosnia and Herzegovina"></option><option id="BRB" value="BRB : Barbados"></option><option id="BGD" value="BGD : Bangladesh"></option><option id="BEL" value="BEL : Belgium"></option><option id="BFA" value="BFA : Burkina Faso"></option><option id="BGR" value="BGR : Bulgaria"></option><option id="BHR" value="BHR : Bahrain"></option><option id="BDI" value="BDI : Burundi"></option><option id="BEN" value="BEN : Benin"></option><option id="BLM" value="BLM : Saint Barth�lemy"></option><option id="BMU" value="BMU : Bermuda"></option><option id="BRN" value="BRN : Brunei"></option><option id="BOL" value="BOL : Bolivia"></option><option id="BES" value="BES : Bonaire, Saint Eustatius and Saba "></option><option id="BRA" value="BRA : Brazil"></option><option id="BHS" value="BHS : Bahamas"></option><option id="BTN" value="BTN : Bhutan"></option><option id="BVT" value="BVT : Bouvet Island"></option><option id="BWA" value="BWA : Botswana"></option><option id="BLR" value="BLR : Belarus"></option><option id="BLZ" value="BLZ : Belize"></option><option id="CAN" value="CAN : Canada"></option><option id="CCK" value="CCK : Cocos Islands"></option><option id="COD" value="COD : Democratic Republic of the Congo"></option><option id="CAF" value="CAF : Central African Republic"></option><option id="COG" value="COG : Republic of the Congo"></option><option id="CHE" value="CHE : Switzerland"></option><option id="CIV" value="CIV : Ivory Coast"></option><option id="COK" value="COK : Cook Islands"></option><option id="CHL" value="CHL : Chile"></option><option id="CMR" value="CMR : Cameroon"></option><option id="CHN" value="CHN : China"></option><option id="COL" value="COL : Colombia"></option><option id="CRI" value="CRI : Costa Rica"></option><option id="SCG" value="SCG : Serbia and Montenegro"></option><option id="CUB" value="CUB : Cuba"></option><option id="CPV" value="CPV : Cape Verde"></option><option id="CUW" value="CUW : Cura�ao"></option><option id="CXR" value="CXR : Christmas Island"></option><option id="CYP" value="CYP : Cyprus"></option><option id="CZE" value="CZE : Czech Republic"></option><option id="DEU" value="DEU : Germany"></option><option id="DJI" value="DJI : Djibouti"></option><option id="DNK" value="DNK : Denmark"></option><option id="DMA" value="DMA : Dominica"></option><option id="DOM" value="DOM : Dominican Republic"></option><option id="DZA" value="DZA : Algeria"></option><option id="ECU" value="ECU : Ecuador"></option><option id="EST" value="EST : Estonia"></option><option id="EGY" value="EGY : Egypt"></option><option id="ESH" value="ESH : Western Sahara"></option><option id="ERI" value="ERI : Eritrea"></option><option id="ESP" value="ESP : Spain"></option><option id="ETH" value="ETH : Ethiopia"></option><option id="FIN" value="FIN : Finland"></option><option id="FJI" value="FJI : Fiji"></option><option id="FLK" value="FLK : Falkland Islands"></option><option id="FSM" value="FSM : Micronesia"></option><option id="FRO" value="FRO : Faroe Islands"></option><option id="FRA" value="FRA : France"></option><option id="GAB" value="GAB : Gabon"></option><option id="GBR" value="GBR : United Kingdom"></option><option id="GRD" value="GRD : Grenada"></option><option id="GEO" value="GEO : Georgia"></option><option id="GUF" value="GUF : French Guiana"></option><option id="GGY" value="GGY : Guernsey"></option><option id="GHA" value="GHA : Ghana"></option><option id="GIB" value="GIB : Gibraltar"></option><option id="GRL" value="GRL : Greenland"></option><option id="GMB" value="GMB : Gambia"></option><option id="GIN" value="GIN : Guinea"></option><option id="GLP" value="GLP : Guadeloupe"></option><option id="GNQ" value="GNQ : Equatorial Guinea"></option><option id="GRC" value="GRC : Greece"></option><option id="SGS" value="SGS : South Georgia and the South Sandwich Islands"></option><option id="GTM" value="GTM : Guatemala"></option><option id="GUM" value="GUM : Guam"></option><option id="GNB" value="GNB : Guinea-Bissau"></option><option id="GUY" value="GUY : Guyana"></option><option id="HKG" value="HKG : Hong Kong"></option><option id="HMD" value="HMD : Heard Island and McDonald Islands"></option><option id="HND" value="HND : Honduras"></option><option id="HRV" value="HRV : Croatia"></option><option id="HTI" value="HTI : Haiti"></option><option id="HUN" value="HUN : Hungary"></option><option id="IDN" value="IDN : Indonesia"></option><option id="IRL" value="IRL : Ireland"></option><option id="ISR" value="ISR : Israel"></option><option id="IMN" value="IMN : Isle of Man"></option><option id="IND" value="IND : India"></option><option id="IOT" value="IOT : British Indian Ocean Territory"></option><option id="IRQ" value="IRQ : Iraq"></option><option id="IRN" value="IRN : Iran"></option><option id="ISL" value="ISL : Iceland"></option><option id="ITA" value="ITA : Italy"></option><option id="JEY" value="JEY : Jersey"></option><option id="JAM" value="JAM : Jamaica"></option><option id="JOR" value="JOR : Jordan"></option><option id="JPN" value="JPN : Japan"></option><option id="KEN" value="KEN : Kenya"></option><option id="KGZ" value="KGZ : Kyrgyzstan"></option><option id="KHM" value="KHM : Cambodia"></option><option id="KIR" value="KIR : Kiribati"></option><option id="COM" value="COM : Comoros"></option><option id="KNA" value="KNA : Saint Kitts and Nevis"></option><option id="PRK" value="PRK : North Korea"></option><option id="KOR" value="KOR : South Korea"></option><option id="KWT" value="KWT : Kuwait"></option><option id="CYM" value="CYM : Cayman Islands"></option><option id="KAZ" value="KAZ : Kazakhstan"></option><option id="LAO" value="LAO : Laos"></option><option id="LBN" value="LBN : Lebanon"></option><option id="LCA" value="LCA : Saint Lucia"></option><option id="LIE" value="LIE : Liechtenstein"></option><option id="LKA" value="LKA : Sri Lanka"></option><option id="LBR" value="LBR : Liberia"></option><option id="LSO" value="LSO : Lesotho"></option><option id="LTU" value="LTU : Lithuania"></option><option id="LUX" value="LUX : Luxembourg"></option><option id="LVA" value="LVA : Latvia"></option><option id="LBY" value="LBY : Libya"></option><option id="MAR" value="MAR : Morocco"></option><option id="MCO" value="MCO : Monaco"></option><option id="MDA" value="MDA : Moldova"></option><option id="MNE" value="MNE : Montenegro"></option><option id="MAF" value="MAF : Saint Martin"></option><option id="MDG" value="MDG : Madagascar"></option><option id="MHL" value="MHL : Marshall Islands"></option><option id="MKD" value="MKD : Macedonia"></option><option id="MLI" value="MLI : Mali"></option><option id="MMR" value="MMR : Myanmar"></option><option id="MNG" value="MNG : Mongolia"></option><option id="MAC" value="MAC : Macao"></option><option id="MNP" value="MNP : Northern Mariana Islands"></option><option id="MTQ" value="MTQ : Martinique"></option><option id="MRT" value="MRT : Mauritania"></option><option id="MSR" value="MSR : Montserrat"></option><option id="MLT" value="MLT : Malta"></option><option id="MUS" value="MUS : Mauritius"></option><option id="MDV" value="MDV : Maldives"></option><option id="MWI" value="MWI : Malawi"></option><option id="MEX" value="MEX : Mexico"></option><option id="MYS" value="MYS : Malaysia"></option><option id="MOZ" value="MOZ : Mozambique"></option><option id="NAM" value="NAM : Namibia"></option><option id="NCL" value="NCL : New Caledonia"></option><option id="NER" value="NER : Niger"></option><option id="NFK" value="NFK : Norfolk Island"></option><option id="NGA" value="NGA : Nigeria"></option><option id="NIC" value="NIC : Nicaragua"></option><option id="NLD" value="NLD : Netherlands"></option><option id="NOR" value="NOR : Norway"></option><option id="NPL" value="NPL : Nepal"></option><option id="NRU" value="NRU : Nauru"></option><option id="NIU" value="NIU : Niue"></option><option id="NZL" value="NZL : New Zealand"></option><option id="OMN" value="OMN : Oman"></option><option id="PAN" value="PAN : Panama"></option><option id="PER" value="PER : Peru"></option><option id="PYF" value="PYF : French Polynesia"></option><option id="PNG" value="PNG : Papua New Guinea"></option><option id="PHL" value="PHL : Philippines"></option><option id="POL" value="POL : Poland"></option><option id="SPM" value="SPM : Saint Pierre and Miquelon"></option><option id="PCN" value="PCN : Pitcairn"></option><option id="PRI" value="PRI : Puerto Rico"></option><option id="PSE" value="PSE : Palestinian Territory"></option><option id="PRT" value="PRT : Portugal"></option><option id="PLW" value="PLW : Palau"></option><option id="PRY" value="PRY : Paraguay"></option><option id="QAT" value="QAT : Qatar"></option><option id="REU" value="REU : Reunion"></option><option id="ROU" value="ROU : Romania"></option><option id="SRB" value="SRB : Serbia"></option><option id="RUS" value="RUS : Russia"></option><option id="RWA" value="RWA : Rwanda"></option><option id="SAU" value="SAU : Saudi Arabia"></option><option id="SLB" value="SLB : Solomon Islands"></option><option id="SYC" value="SYC : Seychelles"></option><option id="SDN" value="SDN : Sudan"></option><option id="SWE" value="SWE : Sweden"></option><option id="SGP" value="SGP : Singapore"></option><option id="SHN" value="SHN : Saint Helena"></option><option id="SVN" value="SVN : Slovenia"></option><option id="SJM" value="SJM : Svalbard and Jan Mayen"></option><option id="SVK" value="SVK : Slovakia"></option><option id="SLE" value="SLE : Sierra Leone"></option><option id="SMR" value="SMR : San Marino"></option><option id="SEN" value="SEN : Senegal"></option><option id="SOM" value="SOM : Somalia"></option><option id="SUR" value="SUR : Suriname"></option><option id="SSD" value="SSD : South Sudan"></option><option id="STP" value="STP : Sao Tome and Principe"></option><option id="SLV" value="SLV : El Salvador"></option><option id="SXM" value="SXM : Sint Maarten"></option><option id="SYR" value="SYR : Syria"></option><option id="SWZ" value="SWZ : Swaziland"></option><option id="TCA" value="TCA : Turks and Caicos Islands"></option><option id="TCD" value="TCD : Chad"></option><option id="ATF" value="ATF : French Southern Territories"></option><option id="TGO" value="TGO : Togo"></option><option id="THA" value="THA : Thailand"></option><option id="TJK" value="TJK : Tajikistan"></option><option id="TKL" value="TKL : Tokelau"></option><option id="TLS" value="TLS : East Timor"></option><option id="TKM" value="TKM : Turkmenistan"></option><option id="TUN" value="TUN : Tunisia"></option><option id="TON" value="TON : Tonga"></option><option id="TUR" value="TUR : Turkey"></option><option id="TTO" value="TTO : Trinidad and Tobago"></option><option id="TUV" value="TUV : Tuvalu"></option><option id="TWN" value="TWN : Taiwan"></option><option id="TZA" value="TZA : Tanzania"></option><option id="UKR" value="UKR : Ukraine"></option><option id="UGA" value="UGA : Uganda"></option><option id="UMI" value="UMI : United States Minor Outlying Islands"></option><option id="USA" value="USA : United States"></option><option id="URY" value="URY : Uruguay"></option><option id="UZB" value="UZB : Uzbekistan"></option><option id="VAT" value="VAT : Vatican"></option><option id="VCT" value="VCT : Saint Vincent and the Grenadines"></option><option id="VEN" value="VEN : Venezuela"></option><option id="VGB" value="VGB : British Virgin Islands"></option><option id="VIR" value="VIR : U.S. Virgin Islands"></option><option id="VNM" value="VNM : Vietnam"></option><option id="VUT" value="VUT : Vanuatu"></option><option id="WLF" value="WLF : Wallis and Futuna"></option><option id="WSM" value="WSM : Samoa"></option><option id="XKX" value="XKX : Kosovo"></option><option id="YEM" value="YEM : Yemen"></option><option id="MYT" value="MYT : Mayotte"></option><option id="ZAF" value="ZAF : South Africa"></option><option id="ZMB" value="ZMB : Zambia"></option><option id="ZWE" value="ZWE : Zimbabwe"></option></datalist>
    )
}
const RetailBooking = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [codAmount, setCodAmount] = useState(0);
    const [charges, setCharges] = useState(150); 
    const [oCharges, setOCharges] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(26); 
    const [total, setTotal] = useState(0);
    useEffect(() => {
        const fetchTrackingNumber = async () => {
          try {
            const response = await axios.get('http://127.0.0.1:5000/admin/get_next_dsl_cn', {
              withCredentials: true
            });
            const data = response.data;
            setTrackingNumber(data.next_dsl_cn);
          } catch (error) {
            console.error('Error fetching tracking number:', error);
          }
        };
    
        fetchTrackingNumber();
      }, []);
    useEffect(() => {
      const sum = codAmount + charges + oCharges + tax - discount;
      setTotal(sum);
    }, [codAmount, charges, oCharges, discount, tax]);
    
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
                        <input type="text" name="trackingNumber" id="trackingNumber"
                         defaultValue={trackingNumber}
                         className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>

                    {/* Keep Partner Checkbox */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="keepPartner" className="text-black font-medium">Keep Partner</label>
                        <input type="checkbox" name="keepPartner" id="keepPartner" className="w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600" />
                    </div>

                    {/* Select Partner */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="selectPartner" className="text-black font-medium">Select Partner</label>
                        <select name="selectPartner" id="selectPartner" className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
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
                            <input list="AllLocations" id="destination" name="destination"
                            className='ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600' 
                            />
                            <LocationDatalist />
                            
                   
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
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="height" className="text-black font-medium mb-1">
                                Height
                            </label>
                            <input
                                type="number"
                                name="height"
                                id="height"
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Width Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="width" className="text-black font-medium mb-1">
                                Width
                            </label>
                            <input
                                type="number"
                                name="width"
                                id="width"
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Length Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="length" className="text-black font-medium mb-1">
                                Length
                            </label>
                            <input
                                type="number"
                                name="length"
                                id="length"
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Weight Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="weight" className="text-black font-medium mb-1">
                                Weight
                            </label>
                            <input
                                type="number"
                                name="weight"
                                id="weight"
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                            </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10 gap-2 max-sm:gap-4">
                        {/* Pieces Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="pieces" className="text-black font-medium mb-1">
                                Pieces
                            </label>
                            <input
                                type="number"
                                name="pieces"
                                id="pieces"
                                className="border text-center text-gray-500 h-14 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Content Textarea field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="content" className="text-black font-medium mb-1">
                                Content
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                rows="2"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                    
                        {/* Remarks Textarea field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="remarks" className="text-black font-medium mb-1">
                                Remarks
                            </label>
                            <textarea
                                name="remarks"
                                id="remarks"
                                rows="2"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                        {/* Instructions */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="instructions" className="text-black font-medium mb-1">
                                Instructions
                            </label>
                            <textarea
                                name="instructions"
                                id="instructions"
                                rows="2"
                                className="border text-balance text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                            </div>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        {/* Status Selector with options[1.Confirmed. 2.On its way. 3.Out for delivery.] */}
                            <div className="flex flex-col items-center mb-2 sm:mb-0">
                                <label htmlFor="status" className="text-black font-medium mb-1">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    id="status"
                                    className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                >
                                    <option value="confirmed">Confirmed</option>
                                    <option value="onitsway">On its way</option>
                                    <option value="outfordelivery">Out for delivery</option>
                                </select>

                            </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h1 className="font-bold text-2xl text-black relative max-sm:text-center">
                        <span className="border-b-2 border-lime-400">Insur</span>ance Details
                    </h1>
                    <div className="flex flex-wrap justify-evenly mt-10  ">
                        {/* COD Amount Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0 gap-2">
                            <label htmlFor="declaredvalue" className="text-black font-medium mb-1">
                                Declared Value
                            </label>
                            <input
                                type="number"
                                name="declaredvalue"
                                id="declaredvalue"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Insurance Charges */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="insurance" className="text-black font-medium mb-1">
                                Insurance Charges
                            </label>
                            <input
                                type="number"
                                name="insurance"
                                id="insurance"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
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
                                value={codAmount}
                                onChange={(e) => setCodAmount(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
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
                                value={charges}
                                onChange={(e) => setCharges(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
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
                                value={oCharges}
                                onChange={(e) => setOCharges(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
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
                                value={discount}
                                onChange={(e) => setDiscount(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
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
                                defaultValue={26}
                                value={tax}
                                onChange={(e) => setTax(Number(e.target.value))}
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
                                value={total}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button type='submit' className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out">
                        <MdFileUpload className="mr-1" />
                        Save
                    </button>
                    <button className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out ml-4">
                        <IoMdPrint className="mr-1" />
                        Print
                    </button>
                    <button type='reset' className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out ml-4">
                        <MdClear className="mr-1" />
                        Clear
                    </button>
                </div>
            </form>
        </section>

    )
}

export default RetailBooking