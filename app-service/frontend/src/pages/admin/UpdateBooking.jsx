import React,{useEffect,useState} from 'react';
import { MdClear } from "react-icons/md";
import { IoMdPrint } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import axios from 'axios';
const LocationDatalist = () => {
    return (
        <datalist id="AllLocations"><option id="ABT" value="ABT : Abbottabad"></option><option id="ADZ" value="ADZ : Adda Zakheera"></option><option id="AFA" value="AFA : Arifwala"></option><option id="AHT" value="AHT : Abdul Hakeem"></option><option id="AIP" value="AIP : Alipur"></option><option id="AMB" value="AMB : Aminpur Banglow"></option><option id="AMO" value="AMO : Samaro"></option><option id="ANO" value="ANO : Dhanola"></option><option id="APC" value="APC : Ali Pur Chattha"></option><option id="APE" value="APE : Ahmed Pur East"></option><option id="APS" value="APS : Ahmed Pur Sial"></option><option id="ASH" value="ASH : Besham"></option><option id="ASW" value="ASW : Shewa Adda"></option><option id="ATT" value="ATT : Attock"></option><option id="AUI" value="AUI : Alpurai"></option><option id="AWH" value="AWH : Rabwah (Chanab Nagar)"></option><option id="AWR" value="AWR : Awaran"></option><option id="AZR" value="AZR : 18-Hazari"></option><option id="BCK" value="BCK : Bucheki"></option><option id="BCM" value="BCM : Buchiana Mandi"></option><option id="BDN" value="BDN : Badin"></option><option id="BGH" value="BGH : Bagh"></option><option id="BGM" value="BGM : Batgaram"></option><option id="BHV" value="BHV : Bahawalpur"></option><option id="BJR" value="BJR : Bajaur"></option><option id="BKK" value="BKK : Bhakkar"></option><option id="BLA" value="BLA : Bela"></option><option id="BLL" value="BLL : Kabal"></option><option id="BMR" value="BMR : Bhimber"></option><option id="BNP" value="BNP : Bannu"></option><option id="BOT" value="BOT : Barikot"></option><option id="BPR" value="BPR : Bhai Phairu ( Phool Nagar )"></option><option id="BQK" value="BQK : Balakot"></option><option id="BRA" value="BRA : Bhera"></option><option id="BRC" value="BRC : Bhiria City"></option><option id="BRD" value="BRD : Bheria Road"></option><option id="BRW" value="BRW : Burewala"></option><option id="BSH" value="BSH : Bhitshah"></option><option id="BSR" value="BSR : Basir Pur"></option><option id="BTK" value="BTK : Batkhela"></option><option id="BUR" value="BUR : Bunair"></option><option id="BWA" value="BWA : Bhawana"></option><option id="BWL" value="BWL : Bhalwal"></option><option id="CAZ" value="CAZ : Chowk Azam"></option><option id="CCW" value="CCW : Chicha Watni"></option><option id="CDS" value="CDS : Choa Syden Shah"></option><option id="CHM" value="CHM : Chambar"></option><option id="CHO" value="CHO : Chachro"></option><option id="CHT" value="CHT : Chishtian"></option><option id="CJS" value="CJS : Chak Jhumra"></option><option id="CKL" value="CKL : Chakwal"></option><option id="CKR" value="CKR : Chak Sawari"></option><option id="CLL" value="CLL : Chillas"></option><option id="CMG" value="CMG : Changa Manga"></option><option id="CMN" value="CMN : Chaman"></option><option id="COC" value="COC : Chhore"></option><option id="CRA" value="CRA : Chakdara"></option><option id="CSD" value="CSD : Charsadda"></option><option id="CSS" value="CSS : Chowk Sarwar Shaheed"></option><option id="CTL" value="CTL : Chitral"></option><option id="CWD" value="CWD : Chawinda"></option><option id="DAH" value="DAH : Darya Khan - Dah"></option><option id="DAM" value="DAM : Miani Adda"></option><option id="DAY" value="DAY : Dera Allahyar"></option><option id="DDU" value="DDU : Dadu"></option><option id="DGK" value="DGK : Dera Ghazi Khan"></option><option id="DHK" value="DHK : Dhirkot - Bagh"></option><option id="DHN" value="DHN : Dhoro-Naro"></option><option id="DIG" value="DIG : Digri"></option><option id="DIJ" value="DIJ : Dijkot"></option><option id="DIK" value="DIK : Dera Ismail Khan"></option><option id="DIN" value="DIN : Dina"></option><option id="DKA" value="DKA : Daska"></option><option id="DKI" value="DKI : Daharki"></option><option id="DKT" value="DKT : Dakota"></option><option id="DLB" value="DLB : Dalbandin"></option><option id="DLT" value="DLT : Dolat Nagar"></option><option id="DLW" value="DLW : Dulle Wala"></option><option id="DMJ" value="DMJ : Dera Murad Jamali"></option><option id="DNG" value="DNG : Dinga"></option><option id="DNR" value="DNR : Danyore"></option><option id="DNT" value="DNT : Dhanot"></option><option id="DOR" value="DOR : Dour"></option><option id="DPA" value="DPA : Depal Pur"></option><option id="DRG" value="DRG : Dargai &amp; Malakand"></option><option id="DTA" value="DTA : Daultala"></option><option id="DTR" value="DTR : Daulatpur"></option><option id="DUN" value="DUN : Dunyapur"></option><option id="DWA" value="DWA : Dharanwala"></option><option id="DYL" value="DYL : Dadyal"></option><option id="EDA" value="EDA : New Saeedabad"></option><option id="ELA" value="ELA : Ellah Abad"></option><option id="EOA" value="EOA : Jaglot"></option><option id="ERA" value="ERA : Naushera"></option><option id="FAB" value="FAB : Fort Abbas"></option><option id="FAD" value="FAD : Farooqabad"></option><option id="FPR" value="FPR : Fatehpur - Fpr"></option><option id="FQW" value="FQW : Faqir Wali"></option><option id="FRZ" value="FRZ : Feroza"></option><option id="FSD" value="FSD : Faisalabad"></option><option id="FTG" value="FTG : Fateh Jang"></option><option id="FWA" value="FWA : Feroz Watowan"></option><option id="FZP" value="FZP : Fazil Pur"></option><option id="GAD" value="GAD : Ghazi Abad"></option><option id="GBT" value="GBT : Gambat"></option><option id="GDN" value="GDN : Gadoon Amazai"></option><option id="GDU" value="GDU : Guddu"></option><option id="GHK" value="GHK : Ghakkar"></option><option id="GIL" value="GIL : Gilgit"></option><option id="GJT" value="GJT : Gujrat"></option><option id="GKN" value="GKN : Gujjar Khan"></option><option id="GMD" value="GMD : Gaggo Mandi"></option><option id="GMO" value="GMO : Garh Mor"></option><option id="GNY" value="GNY : Mohmand Agency"></option><option id="GOG" value="GOG : Banglow Gogera"></option><option id="GPR" value="GPR : Ghous Pur"></option><option id="GRM" value="GRM : Garha Morr"></option><option id="GRO" value="GRO : Gharo"></option><option id="GTI" value="GTI : Ghotki"></option><option id="GUJ" value="GUJ : Gujranwala"></option><option id="GWR" value="GWR : Gawadar"></option><option id="GYS" value="GYS : Garhi Yasin"></option><option id="HAJ" value="HAJ : Hajira"></option><option id="HDD" value="HDD : Hyderabad"></option><option id="HFZ" value="HFZ : Hafizwala"></option><option id="HLA" value="HLA : Hala"></option><option id="HLK" value="HLK : Haveli Lakha"></option><option id="HNG" value="HNG : Hangu"></option><option id="HNI" value="HNI : Harnai"></option><option id="HNL" value="HNL : Harnouli"></option><option id="HNZ" value="HNZ : Hunza"></option><option id="HOO" value="HOO : Hazro"></option><option id="HRI" value="HRI : Haripur"></option><option id="HRN" value="HRN : Haroonabad"></option><option id="HSL" value="HSL : Hasilpur"></option><option id="HSM" value="HSM : Hujra Shah Muqeem"></option><option id="HTR" value="HTR : Hattar"></option><option id="HUB" value="HUB : Hub"></option><option id="HVL" value="HVL : Havelian"></option><option id="HZD" value="HZD : Hafiz Abad"></option><option id="IAA" value="IAA : Murid Wala"></option><option id="IBL" value="IBL : Mongi Bangla"></option><option id="IHA" value="IHA : Gahkuch Ghizer"></option><option id="IHU" value="IHU : Kohlu"></option><option id="IKD" value="IKD : Iskandarabad"></option><option id="IKL" value="IKL : Esa Khel"></option><option id="ILA" value="ILA : Pharianwali"></option><option id="IMK" value="IMK : Islamkot"></option><option id="ING" value="ING : Iqbal Nagar"></option><option id="IOT" value="IOT : Chiniot"></option><option id="IPK" value="IPK : Paikhel"></option><option id="IQL" value="IQL : Iqbalabad"></option><option id="ISB" value="ISB : Islamabad"></option><option id="JCB" value="JCB : Jacobabad"></option><option id="JDW" value="JDW : Jamaldin Wali"></option><option id="JHG" value="JHG : Jhang"></option><option id="JHI" value="JHI : Johi"></option><option id="JHN" value="JHN : Jhanian"></option><option id="JLA" value="JLA : Nawan Jandanwala"></option><option id="JLJ" value="JLJ : Jalalpur Jattan"></option><option id="JLM" value="JLM : Jehlum"></option><option id="JMP" value="JMP : Jampur"></option><option id="JPP" value="JPP : Jalalpur Pirwala"></option><option id="JPT" value="JPT : Jhat Pat"></option><option id="JRD" value="JRD : Joharabad"></option><option id="JRI" value="JRI : Jehangira"></option><option id="JTI" value="JTI : Jatoi"></option><option id="JVR" value="JVR : Jawarian"></option><option id="JWA" value="JWA : Jaranwala"></option><option id="JYL" value="JYL : Jhol"></option><option id="KAK" value="KAK : Kambar Ali Khan"></option><option id="KAR" value="KAR : Karor Lalesan"></option><option id="KAY" value="KAY : Kalaskey"></option><option id="KBH" value="KBH : Kalabagh"></option><option id="KBL" value="KBL : Khan Bela"></option><option id="KCU" value="KCU : Kuchlak"></option><option id="KDC" value="KDC : Kot Radha Kishan"></option><option id="KDI" value="KDI : Kandiari"></option><option id="KDW" value="KDW : Khidder Wala"></option><option id="KER" value="KER : Kameer 120/9-L - Arifwala"></option><option id="KGM" value="KGM : Kot Ghulam Muhammad"></option><option id="KHI" value="KHI : Karachi"></option><option id="KHM" value="KHM : Kashmore"></option><option id="KHP" value="KHP : Khair Pur"></option><option id="KHR" value="KHR : Khaaran"></option><option id="KHT" value="KHT : Kot Chutta"></option><option id="KJA" value="KJA : Kotla Jam"></option><option id="KKK" value="KKK : Kandhkot"></option><option id="KLA" value="KLA : Kamalia"></option><option id="KLG" value="KLG : Katlang"></option><option id="KLK" value="KLK : Kallar Kahar"></option><option id="KLS" value="KLS : Kalar Syedan"></option><option id="KLT" value="KLT : Kalat"></option><option id="KLY" value="KLY : Kotly"></option><option id="KMI" value="KMI : Kamer Mishani"></option><option id="KMK" value="KMK : Kamoke"></option><option id="KMN" value="KMN : Kot Momin"></option><option id="KND" value="KND : Kandyaro"></option><option id="KNI" value="KNI : Kunri"></option><option id="KNN" value="KNN : Kundian"></option><option id="KNS" value="KNS : Khairpur Nathan Shah"></option><option id="KOO" value="KOO : Kacha Kho"></option><option id="KOT" value="KOT : Kot Addu"></option><option id="KPC" value="KPC : Karor Pacca"></option><option id="KPL" value="KPL : Khaplu"></option><option id="KPR" value="KPR : Khipro &amp; Hathango &amp; Hingorno"></option><option id="KQS" value="KQS : Khanqa Sharif"></option><option id="KRC" value="KRC : Kharian Cantt"></option><option id="KRK" value="KRK : Karak"></option><option id="KRN" value="KRN : Kharian"></option><option id="KSB" value="KSB : Kot Samabha"></option><option id="KSF" value="KSF : Qilla Saif Ullah"></option><option id="KSR" value="KSR : Kasur"></option><option id="KSW" value="KSW : Kasowal"></option><option id="KTA" value="KTA : Kahota"></option><option id="KTL" value="KTL : Kotla"></option><option id="KTW" value="KTW : Khairpur Taimwali"></option><option id="KWL" value="KWL : Khanewal"></option><option id="KYA" value="KYA : Nikyal"></option><option id="KZK" value="KZK : Khazakhela"></option><option id="LAR" value="LAR : Larkana"></option><option id="LHE" value="LHE : Lahore"></option><option id="LKI" value="LKI : Lakki Marwat"></option><option id="LLI" value="LLI : Lalian"></option><option id="LLM" value="LLM : Lala Musa"></option><option id="LNK" value="LNK : Landikotal"></option><option id="LOD" value="LOD : Lodhran"></option><option id="LQR" value="LQR : Liaquat Pur"></option><option id="LRI" value="LRI : Loralai"></option><option id="LYY" value="LYY : Layyah"></option><option id="MAK" value="MAK : Muzaffarabad A K"></option><option id="MBD" value="MBD : Mandi Bhauddin"></option><option id="MCN" value="MCN : Mian Channu"></option><option id="MDA" value="MDA : Makhdoom Aali"></option><option id="MDJ" value="MDJ : Madejee"></option><option id="MDN" value="MDN : Mardan"></option><option id="MGR" value="MGR : Mirwah Gorchani"></option><option id="MGT" value="MGT : Machi Goth"></option><option id="MHD" value="MHD : Minchanabad"></option><option id="MHR" value="MHR : Mehar"></option><option id="MIT" value="MIT : Mithi"></option><option id="MKN" value="MKN : Mamun Kanjan"></option><option id="MKR" value="MKR : Mankera"></option><option id="MKT" value="MKT : Mehmood Kot / Qasba Gujrat"></option><option id="MLK" value="MLK : Malak Wal"></option><option id="MLT" value="MLT : Mailsi"></option><option id="MMP" value="MMP : Mubarak Pur - Ape"></option><option id="MNA" value="MNA : Mansehra"></option><option id="MOG" value="MOG : Murad Memon Goth"></option><option id="MOK" value="MOK : More Khunda"></option><option id="MPD" value="MPD : Makhdoom Pur"></option><option id="MPK" value="MPK : Mirpur Khas"></option><option id="MPM" value="MPM : Mir Pur Matelo"></option><option id="MRI" value="MRI : Matiari"></option><option id="MRO" value="MRO : Moro"></option><option id="MRP" value="MRP : Mehrabpur"></option><option id="MRY" value="MRY : Mureedkay"></option><option id="MSH" value="MSH : Mandi Shah Jewna"></option><option id="MSO" value="MSO : Mirpur Sakro"></option><option id="MTG" value="MTG : Mastung"></option><option id="MTI" value="MTI : Matli"></option><option id="MUH" value="MUH : Much"></option><option id="MUX" value="MUX : Multan"></option><option id="MVL" value="MVL : Mangowal"></option><option id="MWI" value="MWI : Mianwali"></option><option id="MYN" value="MYN : Madyan"></option><option id="MZG" value="MZG : Muzaffargarh"></option><option id="NAP" value="NAP : Nagarparkar"></option><option id="NBD" value="NBD : Nasirabad"></option><option id="NDR" value="NDR : Naudero"></option><option id="NFZ" value="NFZ : Noshero Feroz"></option><option id="NGM" value="NGM : Narang Mandi"></option><option id="NGR" value="NGR : Bahawalnagar"></option><option id="NJT" value="NJT : New Jatoi"></option><option id="NKS" value="NKS : Nankana Sahab"></option><option id="NLA" value="NLA : Barnala - Ak"></option><option id="NLB" value="NLB : Narwala Bangla"></option><option id="NMR" value="NMR : Khanpur Mahar Ghotki"></option><option id="NOK" value="NOK : Noshki"></option><option id="NOP" value="NOP : Noorpur"></option><option id="NOW" value="NOW : Nowshera"></option><option id="NPI" value="NPI : Pishin"></option><option id="NPR" value="NPR : Khanpur Katora - Npr"></option><option id="NPT" value="NPT : Nurpur Thal"></option><option id="NRL" value="NRL : Narowal"></option><option id="NUD" value="NUD : Nooriabad"></option><option id="NWV" value="NWV : Nowshera Virkan"></option><option id="OGI" value="OGI : Oghi"></option><option id="OHT" value="OHT : Kohat &amp; Doaba - Tal"></option><option id="OJD" value="OJD : Jhudo"></option><option id="OJR" value="OJR : Gojra"></option><option id="OKC" value="OKC : Okara Cantt"></option><option id="OKR" value="OKR : Okara"></option><option id="OND" value="OND : Wando"></option><option id="ONI" value="ONI : Booni"></option><option id="OOR" value="OOR : Kaloor Kot"></option><option id="ORI" value="ORI : Dokri"></option><option id="ORJ" value="ORJ : Jaranwala - Orj"></option><option id="PAC" value="PAC : Panu Aqil Cantt"></option><option id="PAN" value="PAN : Painsra"></option><option id="PBN" value="PBN : Pindi Bhatian"></option><option id="PCC" value="PCC : Pacca Chang"></option><option id="PDK" value="PDK : Pind Dadan Khan"></option><option id="PEW" value="PEW : Peshawar"></option><option id="PGB" value="PGB : Pindi Gheb"></option><option id="PHL" value="PHL : Phalia"></option><option id="PHP" value="PHP : Pahar Pur"></option><option id="PHR" value="PHR : Phalor"></option><option id="PHT" value="PHT : Pithoro"></option><option id="PJG" value="PJG : Panjgoor"></option><option id="PLN" value="PLN : Piplan"></option><option id="PML" value="PML : Pir Mahal"></option><option id="PNG" value="PNG : Panjgirain"></option><option id="PNQ" value="PNQ : Panu Aqil"></option><option id="PON" value="PON : Pooran"></option><option id="PPS" value="PPS : Pak Pattan Sharif"></option><option id="PRG" value="PRG : Pir Jo Goth"></option><option id="PRR" value="PRR : Pasroor"></option><option id="PSN" value="PSN : Pasni"></option><option id="PTI" value="PTI : Pattoki"></option><option id="PUL" value="PUL : Pulandri"></option><option id="QAL" value="QAL : Qalandarabad"></option><option id="QAZ" value="QAZ : Qazi Ahmed"></option><option id="QBL" value="QBL : Qaboola"></option><option id="QDD" value="QDD : Quaidabad"></option><option id="QDS" value="QDS : Qila Dedar Singh"></option><option id="QML" value="QML : Mir Pur A.K"></option><option id="QPR" value="QPR : Qadir Pur Ran-Tate Pur"></option><option id="RAH" value="RAH : Sadhar"></option><option id="RAJ" value="RAJ : Rajana"></option><option id="RDN" value="RDN : Radhan"></option><option id="RDU" value="RDU : Skardu"></option><option id="REE" value="REE : Murree"></option><option id="RJP" value="RJP : Rajanpur"></option><option id="RKT" value="RKT : Rawalakot"></option><option id="RLK" value="RLK : Renala Khurd"></option><option id="RND" value="RND : Raiwind"></option><option id="RNI" value="RNI : Rani Pur"></option><option id="RRA" value="RRA : Gojra - Fsd"></option><option id="RSN" value="RSN : Rodu Sultan"></option><option id="RSP" value="RSP : Risalpur"></option><option id="RTA" value="RTA : Kohiratta"></option><option id="RTD" value="RTD : Rato Daro"></option><option id="RVT" value="RVT : Rawat"></option><option id="RWP" value="RWP : Rawalpindi"></option><option id="RYK" value="RYK : Rahim Yar Khan"></option><option id="SAB" value="SAB : Kushab"></option><option id="SAK" value="SAK : Sakrand"></option><option id="SAL" value="SAL : Sambrial"></option><option id="SAM" value="SAM : Samundari"></option><option id="SAN" value="SAN : Sanghar"></option><option id="SAP" value="SAP : Shahpur Saddar"></option><option id="SBD" value="SBD : Bhan Saeedabad"></option><option id="SBI" value="SBI : Sibbi"></option><option id="SBN" value="SBN : Satiana Bangla"></option><option id="SBT" value="SBT : Sohbat Pur (Banking)"></option><option id="SDA" value="SDA : Sadiqabad"></option><option id="SES" value="SES : Sehwan"></option><option id="SFD" value="SFD : Sahiwal -  Sargodha"></option><option id="SGD" value="SGD : Sargodha"></option><option id="SGR" value="SGR : Shakar Garh"></option><option id="SHH" value="SHH : Shadad Kot"></option><option id="SHJ" value="SHJ : Shujaabad"></option><option id="SHL" value="SHL : Sangla Hill"></option><option id="SIP" value="SIP : Shikar Pur"></option><option id="SIT" value="SIT : Sita Road"></option><option id="SJO" value="SJO : Sinjhoro"></option><option id="SKT" value="SKT : Khurian Wala"></option><option id="SKZ" value="SKZ : Sukkur"></option><option id="SLT" value="SLT : Sialkot"></option><option id="SMA" value="SMA : Chashma"></option><option id="SMR" value="SMR : Sial Morr"></option><option id="SND" value="SND : Sandhilianwali"></option><option id="SNK" value="SNK : Shinkiari"></option><option id="SNL" value="SNL : Silanwali"></option><option id="SNW" value="SNW : Sanawan"></option><option id="SPC" value="SPC : Shahpur Chakkar"></option><option id="SPR" value="SPR : Shahdad Pur"></option><option id="SQD" value="SQD : Shabqadar"></option><option id="SQR" value="SQR : Sharaqpur"></option><option id="SQT" value="SQT : Shorkot"></option><option id="SRA" value="SRA : Sheikhupura"></option><option id="SRP" value="SRP : Sanjar Pur"></option><option id="SSA" value="SSA : Sehnsa"></option><option id="SSD" value="SSD : Shah Saddar Din"></option><option id="STP" value="STP : Super Highway Tool Plaza"></option><option id="SUA" value="SUA : Sundar Adda"></option><option id="SUJ" value="SUJ : Sujawal"></option><option id="SWA" value="SWA : Swabi"></option><option id="SWL" value="SWL : Sahiwal"></option><option id="SWT" value="SWT : Swat"></option><option id="TAL" value="TAL : Tall - Kpk"></option><option id="TAN" value="TAN : Tank"></option><option id="TBI" value="TBI : Takhat Bhai"></option><option id="TDA" value="TDA : Tando Allah Yar"></option><option id="TDJ" value="TDJ : Tando Jam"></option><option id="TDM" value="TDM : Tando Adam"></option><option id="TER" value="TER : Therhi"></option><option id="TEW" value="TEW : Tail Wala"></option><option id="TGA" value="TGA : Trug"></option><option id="THL" value="THL : Thull"></option><option id="THT" value="THT : Thatta"></option><option id="TKL" value="TKL : Tarar Khel"></option><option id="TLG" value="TLG : Talagang"></option><option id="TMG" value="TMG : Timergarah"></option><option id="TMK" value="TMK : Tando Muhammad Khan"></option><option id="TNG" value="TNG : Tangi Proper - Charsadda"></option><option id="TNM" value="TNM : Mattani"></option><option id="TPM" value="TPM : Tranda Muhammad Panah"></option><option id="TRL" value="TRL : Tarnol"></option><option id="TSA" value="TSA : Tharo Shah"></option><option id="TSP" value="TSP : Tibba Sultan"></option><option id="TTS" value="TTS : Toba Tek Singh"></option><option id="TTY" value="TTY : Tatlay Aali"></option><option id="TUK" value="TUK : Turbat"></option><option id="TVH" value="TVH : Thari Mirwah"></option><option id="TWL" value="TWL : Tandlianwala"></option><option id="UCH" value="UCH : Uch Sharif"></option><option id="UDR" value="UDR : Khuzdar"></option><option id="UET" value="UET : Quetta"></option><option id="UKT" value="UKT : Umerkot"></option><option id="ULI" value="ULI : Uchhali"></option><option id="UMB" value="UMB : Kumb"></option><option id="UPD" value="UPD : Upper Dir - Upd"></option><option id="URO" value="URO : Ubaro"></option><option id="USM" value="USM : Usta Muhammad"></option><option id="UTL" value="UTL : Uthal"></option><option id="UWU" value="UWU : Phularwan"></option><option id="VDR" value="VDR : Varai Dir"></option><option id="VRI" value="VRI : Vehari"></option><option id="WAH" value="WAH : Wah"></option><option id="WBC" value="WBC : Wan Bhachran"></option><option id="WCA" value="WCA : Chonawala"></option><option id="WDR" value="WDR : Winder"></option><option id="WGN" value="WGN : Waggan"></option><option id="WLA" value="WLA : Manawala"></option><option id="WNS" value="WNS : Nawabshah"></option><option id="WRH" value="WRH : Warrah"></option><option id="WZD" value="WZD : Wazirabad"></option><option id="YAL" value="YAL : Naya Lahore"></option><option id="YZM" value="YZM : Yazman"></option><option id="ZFW" value="ZFW : Zafarwal"></option><option id="ZOB" value="ZOB : Zhob"></option><option id="ZPR" value="ZPR : Zahirpeer"></option><option id="ZRT" value="ZRT : Ziarat"></option><option id="AND" value="AND : Andorra"></option><option id="ARE" value="ARE : United Arab Emirates"></option><option id="AFG" value="AFG : Afghanistan"></option><option id="ATG" value="ATG : Antigua and Barbuda"></option><option id="AIA" value="AIA : Anguilla"></option><option id="ALB" value="ALB : Albania"></option><option id="ARM" value="ARM : Armenia"></option><option id="ANT" value="ANT : Netherlands Antilles"></option><option id="AGO" value="AGO : Angola"></option><option id="ATA" value="ATA : Antarctica"></option><option id="ARG" value="ARG : Argentina"></option><option id="ASM" value="ASM : American Samoa"></option><option id="AUT" value="AUT : Austria"></option><option id="AUS" value="AUS : Australia"></option><option id="ABW" value="ABW : Aruba"></option><option id="ALA" value="ALA : Aland Islands"></option><option id="AZE" value="AZE : Azerbaijan"></option><option id="BIH" value="BIH : Bosnia and Herzegovina"></option><option id="BRB" value="BRB : Barbados"></option><option id="BGD" value="BGD : Bangladesh"></option><option id="BEL" value="BEL : Belgium"></option><option id="BFA" value="BFA : Burkina Faso"></option><option id="BGR" value="BGR : Bulgaria"></option><option id="BHR" value="BHR : Bahrain"></option><option id="BDI" value="BDI : Burundi"></option><option id="BEN" value="BEN : Benin"></option><option id="BLM" value="BLM : Saint Barth�lemy"></option><option id="BMU" value="BMU : Bermuda"></option><option id="BRN" value="BRN : Brunei"></option><option id="BOL" value="BOL : Bolivia"></option><option id="BES" value="BES : Bonaire, Saint Eustatius and Saba "></option><option id="BRA" value="BRA : Brazil"></option><option id="BHS" value="BHS : Bahamas"></option><option id="BTN" value="BTN : Bhutan"></option><option id="BVT" value="BVT : Bouvet Island"></option><option id="BWA" value="BWA : Botswana"></option><option id="BLR" value="BLR : Belarus"></option><option id="BLZ" value="BLZ : Belize"></option><option id="CAN" value="CAN : Canada"></option><option id="CCK" value="CCK : Cocos Islands"></option><option id="COD" value="COD : Democratic Republic of the Congo"></option><option id="CAF" value="CAF : Central African Republic"></option><option id="COG" value="COG : Republic of the Congo"></option><option id="CHE" value="CHE : Switzerland"></option><option id="CIV" value="CIV : Ivory Coast"></option><option id="COK" value="COK : Cook Islands"></option><option id="CHL" value="CHL : Chile"></option><option id="CMR" value="CMR : Cameroon"></option><option id="CHN" value="CHN : China"></option><option id="COL" value="COL : Colombia"></option><option id="CRI" value="CRI : Costa Rica"></option><option id="SCG" value="SCG : Serbia and Montenegro"></option><option id="CUB" value="CUB : Cuba"></option><option id="CPV" value="CPV : Cape Verde"></option><option id="CUW" value="CUW : Cura�ao"></option><option id="CXR" value="CXR : Christmas Island"></option><option id="CYP" value="CYP : Cyprus"></option><option id="CZE" value="CZE : Czech Republic"></option><option id="DEU" value="DEU : Germany"></option><option id="DJI" value="DJI : Djibouti"></option><option id="DNK" value="DNK : Denmark"></option><option id="DMA" value="DMA : Dominica"></option><option id="DOM" value="DOM : Dominican Republic"></option><option id="DZA" value="DZA : Algeria"></option><option id="ECU" value="ECU : Ecuador"></option><option id="EST" value="EST : Estonia"></option><option id="EGY" value="EGY : Egypt"></option><option id="ESH" value="ESH : Western Sahara"></option><option id="ERI" value="ERI : Eritrea"></option><option id="ESP" value="ESP : Spain"></option><option id="ETH" value="ETH : Ethiopia"></option><option id="FIN" value="FIN : Finland"></option><option id="FJI" value="FJI : Fiji"></option><option id="FLK" value="FLK : Falkland Islands"></option><option id="FSM" value="FSM : Micronesia"></option><option id="FRO" value="FRO : Faroe Islands"></option><option id="FRA" value="FRA : France"></option><option id="GAB" value="GAB : Gabon"></option><option id="GBR" value="GBR : United Kingdom"></option><option id="GRD" value="GRD : Grenada"></option><option id="GEO" value="GEO : Georgia"></option><option id="GUF" value="GUF : French Guiana"></option><option id="GGY" value="GGY : Guernsey"></option><option id="GHA" value="GHA : Ghana"></option><option id="GIB" value="GIB : Gibraltar"></option><option id="GRL" value="GRL : Greenland"></option><option id="GMB" value="GMB : Gambia"></option><option id="GIN" value="GIN : Guinea"></option><option id="GLP" value="GLP : Guadeloupe"></option><option id="GNQ" value="GNQ : Equatorial Guinea"></option><option id="GRC" value="GRC : Greece"></option><option id="SGS" value="SGS : South Georgia and the South Sandwich Islands"></option><option id="GTM" value="GTM : Guatemala"></option><option id="GUM" value="GUM : Guam"></option><option id="GNB" value="GNB : Guinea-Bissau"></option><option id="GUY" value="GUY : Guyana"></option><option id="HKG" value="HKG : Hong Kong"></option><option id="HMD" value="HMD : Heard Island and McDonald Islands"></option><option id="HND" value="HND : Honduras"></option><option id="HRV" value="HRV : Croatia"></option><option id="HTI" value="HTI : Haiti"></option><option id="HUN" value="HUN : Hungary"></option><option id="IDN" value="IDN : Indonesia"></option><option id="IRL" value="IRL : Ireland"></option><option id="ISR" value="ISR : Israel"></option><option id="IMN" value="IMN : Isle of Man"></option><option id="IND" value="IND : India"></option><option id="IOT" value="IOT : British Indian Ocean Territory"></option><option id="IRQ" value="IRQ : Iraq"></option><option id="IRN" value="IRN : Iran"></option><option id="ISL" value="ISL : Iceland"></option><option id="ITA" value="ITA : Italy"></option><option id="JEY" value="JEY : Jersey"></option><option id="JAM" value="JAM : Jamaica"></option><option id="JOR" value="JOR : Jordan"></option><option id="JPN" value="JPN : Japan"></option><option id="KEN" value="KEN : Kenya"></option><option id="KGZ" value="KGZ : Kyrgyzstan"></option><option id="KHM" value="KHM : Cambodia"></option><option id="KIR" value="KIR : Kiribati"></option><option id="COM" value="COM : Comoros"></option><option id="KNA" value="KNA : Saint Kitts and Nevis"></option><option id="PRK" value="PRK : North Korea"></option><option id="KOR" value="KOR : South Korea"></option><option id="KWT" value="KWT : Kuwait"></option><option id="CYM" value="CYM : Cayman Islands"></option><option id="KAZ" value="KAZ : Kazakhstan"></option><option id="LAO" value="LAO : Laos"></option><option id="LBN" value="LBN : Lebanon"></option><option id="LCA" value="LCA : Saint Lucia"></option><option id="LIE" value="LIE : Liechtenstein"></option><option id="LKA" value="LKA : Sri Lanka"></option><option id="LBR" value="LBR : Liberia"></option><option id="LSO" value="LSO : Lesotho"></option><option id="LTU" value="LTU : Lithuania"></option><option id="LUX" value="LUX : Luxembourg"></option><option id="LVA" value="LVA : Latvia"></option><option id="LBY" value="LBY : Libya"></option><option id="MAR" value="MAR : Morocco"></option><option id="MCO" value="MCO : Monaco"></option><option id="MDA" value="MDA : Moldova"></option><option id="MNE" value="MNE : Montenegro"></option><option id="MAF" value="MAF : Saint Martin"></option><option id="MDG" value="MDG : Madagascar"></option><option id="MHL" value="MHL : Marshall Islands"></option><option id="MKD" value="MKD : Macedonia"></option><option id="MLI" value="MLI : Mali"></option><option id="MMR" value="MMR : Myanmar"></option><option id="MNG" value="MNG : Mongolia"></option><option id="MAC" value="MAC : Macao"></option><option id="MNP" value="MNP : Northern Mariana Islands"></option><option id="MTQ" value="MTQ : Martinique"></option><option id="MRT" value="MRT : Mauritania"></option><option id="MSR" value="MSR : Montserrat"></option><option id="MLT" value="MLT : Malta"></option><option id="MUS" value="MUS : Mauritius"></option><option id="MDV" value="MDV : Maldives"></option><option id="MWI" value="MWI : Malawi"></option><option id="MEX" value="MEX : Mexico"></option><option id="MYS" value="MYS : Malaysia"></option><option id="MOZ" value="MOZ : Mozambique"></option><option id="NAM" value="NAM : Namibia"></option><option id="NCL" value="NCL : New Caledonia"></option><option id="NER" value="NER : Niger"></option><option id="NFK" value="NFK : Norfolk Island"></option><option id="NGA" value="NGA : Nigeria"></option><option id="NIC" value="NIC : Nicaragua"></option><option id="NLD" value="NLD : Netherlands"></option><option id="NOR" value="NOR : Norway"></option><option id="NPL" value="NPL : Nepal"></option><option id="NRU" value="NRU : Nauru"></option><option id="NIU" value="NIU : Niue"></option><option id="NZL" value="NZL : New Zealand"></option><option id="OMN" value="OMN : Oman"></option><option id="PAN" value="PAN : Panama"></option><option id="PER" value="PER : Peru"></option><option id="PYF" value="PYF : French Polynesia"></option><option id="PNG" value="PNG : Papua New Guinea"></option><option id="PHL" value="PHL : Philippines"></option><option id="POL" value="POL : Poland"></option><option id="SPM" value="SPM : Saint Pierre and Miquelon"></option><option id="PCN" value="PCN : Pitcairn"></option><option id="PRI" value="PRI : Puerto Rico"></option><option id="PSE" value="PSE : Palestinian Territory"></option><option id="PRT" value="PRT : Portugal"></option><option id="PLW" value="PLW : Palau"></option><option id="PRY" value="PRY : Paraguay"></option><option id="QAT" value="QAT : Qatar"></option><option id="REU" value="REU : Reunion"></option><option id="ROU" value="ROU : Romania"></option><option id="SRB" value="SRB : Serbia"></option><option id="RUS" value="RUS : Russia"></option><option id="RWA" value="RWA : Rwanda"></option><option id="SAU" value="SAU : Saudi Arabia"></option><option id="SLB" value="SLB : Solomon Islands"></option><option id="SYC" value="SYC : Seychelles"></option><option id="SDN" value="SDN : Sudan"></option><option id="SWE" value="SWE : Sweden"></option><option id="SGP" value="SGP : Singapore"></option><option id="SHN" value="SHN : Saint Helena"></option><option id="SVN" value="SVN : Slovenia"></option><option id="SJM" value="SJM : Svalbard and Jan Mayen"></option><option id="SVK" value="SVK : Slovakia"></option><option id="SLE" value="SLE : Sierra Leone"></option><option id="SMR" value="SMR : San Marino"></option><option id="SEN" value="SEN : Senegal"></option><option id="SOM" value="SOM : Somalia"></option><option id="SUR" value="SUR : Suriname"></option><option id="SSD" value="SSD : South Sudan"></option><option id="STP" value="STP : Sao Tome and Principe"></option><option id="SLV" value="SLV : El Salvador"></option><option id="SXM" value="SXM : Sint Maarten"></option><option id="SYR" value="SYR : Syria"></option><option id="SWZ" value="SWZ : Swaziland"></option><option id="TCA" value="TCA : Turks and Caicos Islands"></option><option id="TCD" value="TCD : Chad"></option><option id="ATF" value="ATF : French Southern Territories"></option><option id="TGO" value="TGO : Togo"></option><option id="THA" value="THA : Thailand"></option><option id="TJK" value="TJK : Tajikistan"></option><option id="TKL" value="TKL : Tokelau"></option><option id="TLS" value="TLS : East Timor"></option><option id="TKM" value="TKM : Turkmenistan"></option><option id="TUN" value="TUN : Tunisia"></option><option id="TON" value="TON : Tonga"></option><option id="TUR" value="TUR : Turkey"></option><option id="TTO" value="TTO : Trinidad and Tobago"></option><option id="TUV" value="TUV : Tuvalu"></option><option id="TWN" value="TWN : Taiwan"></option><option id="TZA" value="TZA : Tanzania"></option><option id="UKR" value="UKR : Ukraine"></option><option id="UGA" value="UGA : Uganda"></option><option id="UMI" value="UMI : United States Minor Outlying Islands"></option><option id="USA" value="USA : United States"></option><option id="URY" value="URY : Uruguay"></option><option id="UZB" value="UZB : Uzbekistan"></option><option id="VAT" value="VAT : Vatican"></option><option id="VCT" value="VCT : Saint Vincent and the Grenadines"></option><option id="VEN" value="VEN : Venezuela"></option><option id="VGB" value="VGB : British Virgin Islands"></option><option id="VIR" value="VIR : U.S. Virgin Islands"></option><option id="VNM" value="VNM : Vietnam"></option><option id="VUT" value="VUT : Vanuatu"></option><option id="WLF" value="WLF : Wallis and Futuna"></option><option id="WSM" value="WSM : Samoa"></option><option id="XKX" value="XKX : Kosovo"></option><option id="YEM" value="YEM : Yemen"></option><option id="MYT" value="MYT : Mayotte"></option><option id="ZAF" value="ZAF : South Africa"></option><option id="ZMB" value="ZMB : Zambia"></option><option id="ZWE" value="ZWE : Zimbabwe"></option></datalist>
    )
}
const LocalDatalist = () =>{
    <datalist id="AllLocal"><option id="AZR" value="AZR : 18-Hazari, PK"></option><option id="ABT" value="ABT : Abbottabad, PK"></option><option id="AHT" value="AHT : Abdul Hakeem, PK"></option><option id="ADZ" value="ADZ : Adda Zakheera, PK"></option><option id="APE" value="APE : Ahmed Pur East, PK"></option><option id="APS" value="APS : Ahmed Pur Sial, PK"></option><option id="APC" value="APC : Ali Pur Chattha, PK"></option><option id="AIP" value="AIP : Alipur, PK"></option><option id="AUI" value="AUI : Alpurai, PK"></option><option id="AMB" value="AMB : Aminpur Banglow, PK"></option><option id="AFA" value="AFA : Arifwala, PK"></option><option id="ATT" value="ATT : Attock, PK"></option><option id="AWR" value="AWR : Awaran, PK"></option><option id="BDN" value="BDN : Badin, PK"></option><option id="BGH" value="BGH : Bagh, PK"></option><option id="NGR" value="NGR : Bahawalnagar, PK"></option><option id="BHV" value="BHV : Bahawalpur, PK"></option><option id="BJR" value="BJR : Bajaur, PK"></option><option id="BQK" value="BQK : Balakot, PK"></option><option id="GOG" value="GOG : Banglow Gogera, PK"></option><option id="BNP" value="BNP : Bannu, PK"></option><option id="BOT" value="BOT : Barikot, PK"></option><option id="NLA" value="NLA : Barnala - Ak, PK"></option><option id="BSR" value="BSR : Basir Pur, PK"></option><option id="BGM" value="BGM : Batgaram, PK"></option><option id="BTK" value="BTK : Batkhela, PK"></option><option id="BLA" value="BLA : Bela, PK"></option><option id="ASH" value="ASH : Besham, PK"></option><option id="BPR" value="BPR : Bhai Phairu ( Phool Nagar ), PK"></option><option id="BKK" value="BKK : Bhakkar, PK"></option><option id="BWL" value="BWL : Bhalwal, PK"></option><option id="SBD" value="SBD : Bhan Saeedabad, PK"></option><option id="BWA" value="BWA : Bhawana, PK"></option><option id="BRA" value="BRA : Bhera, PK"></option><option id="BRD" value="BRD : Bheria Road, PK"></option><option id="BMR" value="BMR : Bhimber, PK"></option><option id="BRC" value="BRC : Bhiria City, PK"></option><option id="BSH" value="BSH : Bhitshah, PK"></option><option id="ONI" value="ONI : Booni, PK"></option><option id="BCK" value="BCK : Bucheki, PK"></option><option id="BCM" value="BCM : Buchiana Mandi, PK"></option><option id="BUR" value="BUR : Bunair, PK"></option><option id="BRW" value="BRW : Burewala, PK"></option><option id="CHO" value="CHO : Chachro, PK"></option><option id="CJS" value="CJS : Chak Jhumra, PK"></option><option id="CKR" value="CKR : Chak Sawari, PK"></option><option id="CRA" value="CRA : Chakdara, PK"></option><option id="CKL" value="CKL : Chakwal, PK"></option><option id="CMN" value="CMN : Chaman, PK"></option><option id="CHM" value="CHM : Chambar, PK"></option><option id="CMG" value="CMG : Changa Manga, PK"></option><option id="CSD" value="CSD : Charsadda, PK"></option><option id="SMA" value="SMA : Chashma, PK"></option><option id="CWD" value="CWD : Chawinda, PK"></option><option id="COC" value="COC : Chhore, PK"></option><option id="CCW" value="CCW : Chicha Watni, PK"></option><option id="CLL" value="CLL : Chillas, PK"></option><option id="IOT" value="IOT : Chiniot, PK"></option><option id="CHT" value="CHT : Chishtian, PK"></option><option id="CTL" value="CTL : Chitral, PK"></option><option id="CDS" value="CDS : Choa Syden Shah, PK"></option><option id="WCA" value="WCA : Chonawala, PK"></option><option id="CAZ" value="CAZ : Chowk Azam, PK"></option><option id="CSS" value="CSS : Chowk Sarwar Shaheed, PK"></option><option id="DDU" value="DDU : Dadu, PK"></option><option id="DYL" value="DYL : Dadyal, PK"></option><option id="DKI" value="DKI : Daharki, PK"></option><option id="DKT" value="DKT : Dakota, PK"></option><option id="DLB" value="DLB : Dalbandin, PK"></option><option id="DNR" value="DNR : Danyore, PK"></option><option id="DRG" value="DRG : Dargai &amp; Malakand, PK"></option><option id="DAH" value="DAH : Darya Khan - Dah, PK"></option><option id="DKA" value="DKA : Daska, PK"></option><option id="DTR" value="DTR : Daulatpur, PK"></option><option id="DTA" value="DTA : Daultala, PK"></option><option id="DPA" value="DPA : Depal Pur, PK"></option><option id="DAY" value="DAY : Dera Allahyar, PK"></option><option id="DGK" value="DGK : Dera Ghazi Khan, PK"></option><option id="DIK" value="DIK : Dera Ismail Khan, PK"></option><option id="DMJ" value="DMJ : Dera Murad Jamali, PK"></option><option id="ANO" value="ANO : Dhanola, PK"></option><option id="DNT" value="DNT : Dhanot, PK"></option><option id="DWA" value="DWA : Dharanwala, PK"></option><option id="DHK" value="DHK : Dhirkot - Bagh, PK"></option><option id="DHN" value="DHN : Dhoro-Naro, PK"></option><option id="DIG" value="DIG : Digri, PK"></option><option id="DIJ" value="DIJ : Dijkot, PK"></option><option id="DIN" value="DIN : Dina, PK"></option><option id="DNG" value="DNG : Dinga, PK"></option><option id="ORI" value="ORI : Dokri, PK"></option><option id="DLT" value="DLT : Dolat Nagar, PK"></option><option id="DOR" value="DOR : Dour, PK"></option><option id="DLW" value="DLW : Dulle Wala, PK"></option><option id="DUN" value="DUN : Dunyapur, PK"></option><option id="ELA" value="ELA : Ellah Abad, PK"></option><option id="IKL" value="IKL : Esa Khel, PK"></option><option id="FSD" value="FSD : Faisalabad, PK"></option><option id="FQW" value="FQW : Faqir Wali, PK"></option><option id="FAD" value="FAD : Farooqabad, PK"></option><option id="FTG" value="FTG : Fateh Jang, PK"></option><option id="FPR" value="FPR : Fatehpur - Fpr, PK"></option><option id="FZP" value="FZP : Fazil Pur, PK"></option><option id="FWA" value="FWA : Feroz Watowan, PK"></option><option id="FRZ" value="FRZ : Feroza, PK"></option><option id="FAB" value="FAB : Fort Abbas, PK"></option><option id="GDN" value="GDN : Gadoon Amazai, PK"></option><option id="GMD" value="GMD : Gaggo Mandi, PK"></option><option id="IHA" value="IHA : Gahkuch Ghizer, PK"></option><option id="GBT" value="GBT : Gambat, PK"></option><option id="GMO" value="GMO : Garh Mor, PK"></option><option id="GRM" value="GRM : Garha Morr, PK"></option><option id="GYS" value="GYS : Garhi Yasin, PK"></option><option id="GWR" value="GWR : Gawadar, PK"></option><option id="GHK" value="GHK : Ghakkar, PK"></option><option id="GRO" value="GRO : Gharo, PK"></option><option id="GAD" value="GAD : Ghazi Abad, PK"></option><option id="GTI" value="GTI : Ghotki, PK"></option><option id="GPR" value="GPR : Ghous Pur, PK"></option><option id="GIL" value="GIL : Gilgit, PK"></option><option id="OJR" value="OJR : Gojra, PK"></option><option id="RRA" value="RRA : Gojra - Fsd, PK"></option><option id="GDU" value="GDU : Guddu, PK"></option><option id="GKN" value="GKN : Gujjar Khan, PK"></option><option id="GUJ" value="GUJ : Gujranwala, PK"></option><option id="GJT" value="GJT : Gujrat, PK"></option><option id="HZD" value="HZD : Hafiz Abad, PK"></option><option id="HFZ" value="HFZ : Hafizwala, PK"></option><option id="HAJ" value="HAJ : Hajira, PK"></option><option id="HLA" value="HLA : Hala, PK"></option><option id="HNG" value="HNG : Hangu, PK"></option><option id="HRI" value="HRI : Haripur, PK"></option><option id="HNI" value="HNI : Harnai, PK"></option><option id="HNL" value="HNL : Harnouli, PK"></option><option id="HRN" value="HRN : Haroonabad, PK"></option><option id="HSL" value="HSL : Hasilpur, PK"></option><option id="HTR" value="HTR : Hattar, PK"></option><option id="HLK" value="HLK : Haveli Lakha, PK"></option><option id="HVL" value="HVL : Havelian, PK"></option><option id="HOO" value="HOO : Hazro, PK"></option><option id="HUB" value="HUB : Hub, PK"></option><option id="HSM" value="HSM : Hujra Shah Muqeem, PK"></option><option id="HNZ" value="HNZ : Hunza, PK"></option><option id="HDD" value="HDD : Hyderabad, PK"></option><option id="ING" value="ING : Iqbal Nagar, PK"></option><option id="IQL" value="IQL : Iqbalabad, PK"></option><option id="IKD" value="IKD : Iskandarabad, PK"></option><option id="ISB" value="ISB : Islamabad, PK"></option><option id="IMK" value="IMK : Islamkot, PK"></option><option id="JCB" value="JCB : Jacobabad, PK"></option><option id="EOA" value="EOA : Jaglot, PK"></option><option id="JLJ" value="JLJ : Jalalpur Jattan, PK"></option><option id="JPP" value="JPP : Jalalpur Pirwala, PK"></option><option id="JDW" value="JDW : Jamaldin Wali, PK"></option><option id="JMP" value="JMP : Jampur, PK"></option><option id="JWA" value="JWA : Jaranwala, PK"></option><option id="ORJ" value="ORJ : Jaranwala - Orj, PK"></option><option id="JTI" value="JTI : Jatoi, PK"></option><option id="JVR" value="JVR : Jawarian, PK"></option><option id="JRI" value="JRI : Jehangira, PK"></option><option id="JLM" value="JLM : Jehlum, PK"></option><option id="JHG" value="JHG : Jhang, PK"></option><option id="JHN" value="JHN : Jhanian, PK"></option><option id="JPT" value="JPT : Jhat Pat, PK"></option><option id="JYL" value="JYL : Jhol, PK"></option><option id="OJD" value="OJD : Jhudo, PK"></option><option id="JRD" value="JRD : Joharabad, PK"></option><option id="JHI" value="JHI : Johi, PK"></option><option id="BLL" value="BLL : Kabal, PK"></option><option id="KOO" value="KOO : Kacha Kho, PK"></option><option id="KTA" value="KTA : Kahota, PK"></option><option id="KBH" value="KBH : Kalabagh, PK"></option><option id="KLS" value="KLS : Kalar Syedan, PK"></option><option id="KAY" value="KAY : Kalaskey, PK"></option><option id="KLT" value="KLT : Kalat, PK"></option><option id="KLK" value="KLK : Kallar Kahar, PK"></option><option id="OOR" value="OOR : Kaloor Kot, PK"></option><option id="KLA" value="KLA : Kamalia, PK"></option><option id="KAK" value="KAK : Kambar Ali Khan, PK"></option><option id="KER" value="KER : Kameer 120/9-L - Arifwala, PK"></option><option id="KMI" value="KMI : Kamer Mishani, PK"></option><option id="KMK" value="KMK : Kamoke, PK"></option><option id="KKK" value="KKK : Kandhkot, PK"></option><option id="KDI" value="KDI : Kandiari, PK"></option><option id="KND" value="KND : Kandyaro, PK"></option><option id="KHI" value="KHI : Karachi, PK"></option><option id="KRK" value="KRK : Karak, PK"></option><option id="KAR" value="KAR : Karor Lalesan, PK"></option><option id="KPC" value="KPC : Karor Pacca, PK"></option><option id="KHM" value="KHM : Kashmore, PK"></option><option id="KSW" value="KSW : Kasowal, PK"></option><option id="KSR" value="KSR : Kasur, PK"></option><option id="KLG" value="KLG : Katlang, PK"></option><option id="KHR" value="KHR : Khaaran, PK"></option><option id="KHP" value="KHP : Khair Pur, PK"></option><option id="KNS" value="KNS : Khairpur Nathan Shah, PK"></option><option id="KTW" value="KTW : Khairpur Taimwali, PK"></option><option id="KBL" value="KBL : Khan Bela, PK"></option><option id="KWL" value="KWL : Khanewal, PK"></option><option id="NPR" value="NPR : Khanpur Katora - Npr, PK"></option><option id="NMR" value="NMR : Khanpur Mahar Ghotki, PK"></option><option id="KQS" value="KQS : Khanqa Sharif, PK"></option><option id="KPL" value="KPL : Khaplu, PK"></option><option id="KRN" value="KRN : Kharian, PK"></option><option id="KRC" value="KRC : Kharian Cantt, PK"></option><option id="KZK" value="KZK : Khazakhela, PK"></option><option id="KDW" value="KDW : Khidder Wala, PK"></option><option id="KPR" value="KPR : Khipro &amp; Hathango &amp; Hingorno, PK"></option><option id="SKT" value="SKT : Khurian Wala, PK"></option><option id="UDR" value="UDR : Khuzdar, PK"></option><option id="OHT" value="OHT : Kohat &amp; Doaba - Tal, PK"></option><option id="RTA" value="RTA : Kohiratta, PK"></option><option id="IHU" value="IHU : Kohlu, PK"></option><option id="KOT" value="KOT : Kot Addu, PK"></option><option id="KHT" value="KHT : Kot Chutta, PK"></option><option id="KGM" value="KGM : Kot Ghulam Muhammad, PK"></option><option id="KMN" value="KMN : Kot Momin, PK"></option><option id="KDC" value="KDC : Kot Radha Kishan, PK"></option><option id="KSB" value="KSB : Kot Samabha, PK"></option><option id="KTL" value="KTL : Kotla, PK"></option><option id="KJA" value="KJA : Kotla Jam, PK"></option><option id="KLY" value="KLY : Kotly, PK"></option><option id="KCU" value="KCU : Kuchlak, PK"></option><option id="UMB" value="UMB : Kumb, PK"></option><option id="KNN" value="KNN : Kundian, PK"></option><option id="KNI" value="KNI : Kunri, PK"></option><option id="SAB" value="SAB : Kushab, PK"></option><option id="LHE" value="LHE : Lahore, PK"></option><option id="LKI" value="LKI : Lakki Marwat, PK"></option><option id="LLM" value="LLM : Lala Musa, PK"></option><option id="LLI" value="LLI : Lalian, PK"></option><option id="LNK" value="LNK : Landikotal, PK"></option><option id="LAR" value="LAR : Larkana, PK"></option><option id="LYY" value="LYY : Layyah, PK"></option><option id="LQR" value="LQR : Liaquat Pur, PK"></option><option id="LOD" value="LOD : Lodhran, PK"></option><option id="LRI" value="LRI : Loralai, PK"></option><option id="MGT" value="MGT : Machi Goth, PK"></option><option id="MDJ" value="MDJ : Madejee, PK"></option><option id="MYN" value="MYN : Madyan, PK"></option><option id="MLT" value="MLT : Mailsi, PK"></option><option id="MDA" value="MDA : Makhdoom Aali, PK"></option><option id="MPD" value="MPD : Makhdoom Pur, PK"></option><option id="MLK" value="MLK : Malak Wal, PK"></option><option id="MKN" value="MKN : Mamun Kanjan, PK"></option><option id="WLA" value="WLA : Manawala, PK"></option><option id="MBD" value="MBD : Mandi Bhauddin, PK"></option><option id="MSH" value="MSH : Mandi Shah Jewna, PK"></option><option id="MVL" value="MVL : Mangowal, PK"></option><option id="MKR" value="MKR : Mankera, PK"></option><option id="MNA" value="MNA : Mansehra, PK"></option><option id="MDN" value="MDN : Mardan, PK"></option><option id="MTG" value="MTG : Mastung, PK"></option><option id="MRI" value="MRI : Matiari, PK"></option><option id="MTI" value="MTI : Matli, PK"></option><option id="TNM" value="TNM : Mattani, PK"></option><option id="MHR" value="MHR : Mehar, PK"></option><option id="MKT" value="MKT : Mehmood Kot / Qasba Gujrat, PK"></option><option id="MRP" value="MRP : Mehrabpur, PK"></option><option id="MCN" value="MCN : Mian Channu, PK"></option><option id="DAM" value="DAM : Miani Adda, PK"></option><option id="MWI" value="MWI : Mianwali, PK"></option><option id="MHD" value="MHD : Minchanabad, PK"></option><option id="QML" value="QML : Mir Pur A.K, PK"></option><option id="MPM" value="MPM : Mir Pur Matelo, PK"></option><option id="MPK" value="MPK : Mirpur Khas, PK"></option><option id="MSO" value="MSO : Mirpur Sakro, PK"></option><option id="MGR" value="MGR : Mirwah Gorchani, PK"></option><option id="MIT" value="MIT : Mithi, PK"></option><option id="GNY" value="GNY : Mohmand Agency, PK"></option><option id="IBL" value="IBL : Mongi Bangla, PK"></option><option id="MOK" value="MOK : More Khunda, PK"></option><option id="MRO" value="MRO : Moro, PK"></option><option id="MMP" value="MMP : Mubarak Pur - Ape, PK"></option><option id="MUH" value="MUH : Much, PK"></option><option id="MUX" value="MUX : Multan, PK"></option><option id="MOG" value="MOG : Murad Memon Goth, PK"></option><option id="MRY" value="MRY : Mureedkay, PK"></option><option id="IAA" value="IAA : Murid Wala, PK"></option><option id="REE" value="REE : Murree, PK"></option><option id="MAK" value="MAK : Muzaffarabad A K, PK"></option><option id="MZG" value="MZG : Muzaffargarh, PK"></option><option id="NAP" value="NAP : Nagarparkar, PK"></option><option id="NKS" value="NKS : Nankana Sahab, PK"></option><option id="NGM" value="NGM : Narang Mandi, PK"></option><option id="NRL" value="NRL : Narowal, PK"></option><option id="NLB" value="NLB : Narwala Bangla, PK"></option><option id="NBD" value="NBD : Nasirabad, PK"></option><option id="NDR" value="NDR : Naudero, PK"></option><option id="ERA" value="ERA : Naushera, PK"></option><option id="WNS" value="WNS : Nawabshah, PK"></option><option id="JLA" value="JLA : Nawan Jandanwala, PK"></option><option id="YAL" value="YAL : Naya Lahore, PK"></option><option id="NJT" value="NJT : New Jatoi, PK"></option><option id="EDA" value="EDA : New Saeedabad, PK"></option><option id="KYA" value="KYA : Nikyal, PK"></option><option id="NUD" value="NUD : Nooriabad, PK"></option><option id="NOP" value="NOP : Noorpur, PK"></option><option id="NFZ" value="NFZ : Noshero Feroz, PK"></option><option id="NOK" value="NOK : Noshki, PK"></option><option id="NOW" value="NOW : Nowshera, PK"></option><option id="NWV" value="NWV : Nowshera Virkan, PK"></option><option id="NPT" value="NPT : Nurpur Thal, PK"></option><option id="OGI" value="OGI : Oghi, PK"></option><option id="OKR" value="OKR : Okara, PK"></option><option id="OKC" value="OKC : Okara Cantt, PK"></option><option id="PCC" value="PCC : Pacca Chang, PK"></option><option id="PHP" value="PHP : Pahar Pur, PK"></option><option id="IPK" value="IPK : Paikhel, PK"></option><option id="PAN" value="PAN : Painsra, PK"></option><option id="PPS" value="PPS : Pak Pattan Sharif, PK"></option><option id="PNG" value="PNG : Panjgirain, PK"></option><option id="PJG" value="PJG : Panjgoor, PK"></option><option id="PNQ" value="PNQ : Panu Aqil, PK"></option><option id="PAC" value="PAC : Panu Aqil Cantt, PK"></option><option id="PSN" value="PSN : Pasni, PK"></option><option id="PRR" value="PRR : Pasroor, PK"></option><option id="PTI" value="PTI : Pattoki, PK"></option><option id="PEW" value="PEW : Peshawar, PK"></option><option id="PHL" value="PHL : Phalia, PK"></option><option id="PHR" value="PHR : Phalor, PK"></option><option id="ILA" value="ILA : Pharianwali, PK"></option><option id="UWU" value="UWU : Phularwan, PK"></option><option id="PDK" value="PDK : Pind Dadan Khan, PK"></option><option id="PBN" value="PBN : Pindi Bhatian, PK"></option><option id="PGB" value="PGB : Pindi Gheb, PK"></option><option id="PLN" value="PLN : Piplan, PK"></option><option id="PRG" value="PRG : Pir Jo Goth, PK"></option><option id="PML" value="PML : Pir Mahal, PK"></option><option id="NPI" value="NPI : Pishin, PK"></option><option id="PHT" value="PHT : Pithoro, PK"></option><option id="PON" value="PON : Pooran, PK"></option><option id="PUL" value="PUL : Pulandri, PK"></option><option id="QBL" value="QBL : Qaboola, PK"></option><option id="QPR" value="QPR : Qadir Pur Ran-Tate Pur, PK"></option><option id="QAL" value="QAL : Qalandarabad, PK"></option><option id="QAZ" value="QAZ : Qazi Ahmed, PK"></option><option id="QDS" value="QDS : Qila Dedar Singh, PK"></option><option id="KSF" value="KSF : Qilla Saif Ullah, PK"></option><option id="QDD" value="QDD : Quaidabad, PK"></option><option id="UET" value="UET : Quetta, PK"></option><option id="AWH" value="AWH : Rabwah (Chanab Nagar), PK"></option><option id="RDN" value="RDN : Radhan, PK"></option><option id="RYK" value="RYK : Rahim Yar Khan, PK"></option><option id="RND" value="RND : Raiwind, PK"></option><option id="RAJ" value="RAJ : Rajana, PK"></option><option id="RJP" value="RJP : Rajanpur, PK"></option><option id="RNI" value="RNI : Rani Pur, PK"></option><option id="RTD" value="RTD : Rato Daro, PK"></option><option id="RKT" value="RKT : Rawalakot, PK"></option><option id="RWP" value="RWP : Rawalpindi, PK"></option><option id="RVT" value="RVT : Rawat, PK"></option><option id="RLK" value="RLK : Renala Khurd, PK"></option><option id="RSP" value="RSP : Risalpur, PK"></option><option id="RSN" value="RSN : Rodu Sultan, PK"></option><option id="RAH" value="RAH : Sadhar, PK"></option><option id="SDA" value="SDA : Sadiqabad, PK"></option><option id="SWL" value="SWL : Sahiwal, PK"></option><option id="SFD" value="SFD : Sahiwal -  Sargodha, PK"></option><option id="SAK" value="SAK : Sakrand, PK"></option><option id="AMO" value="AMO : Samaro, PK"></option><option id="SAL" value="SAL : Sambrial, PK"></option><option id="SAM" value="SAM : Samundari, PK"></option><option id="SNW" value="SNW : Sanawan, PK"></option><option id="SND" value="SND : Sandhilianwali, PK"></option><option id="SAN" value="SAN : Sanghar, PK"></option><option id="SHL" value="SHL : Sangla Hill, PK"></option><option id="SRP" value="SRP : Sanjar Pur, PK"></option><option id="SGD" value="SGD : Sargodha, PK"></option><option id="SBN" value="SBN : Satiana Bangla, PK"></option><option id="SSA" value="SSA : Sehnsa, PK"></option><option id="SES" value="SES : Sehwan, PK"></option><option id="SQD" value="SQD : Shabqadar, PK"></option><option id="SHH" value="SHH : Shadad Kot, PK"></option><option id="SSD" value="SSD : Shah Saddar Din, PK"></option><option id="SPR" value="SPR : Shahdad Pur, PK"></option><option id="SPC" value="SPC : Shahpur Chakkar, PK"></option><option id="SAP" value="SAP : Shahpur Saddar, PK"></option><option id="SGR" value="SGR : Shakar Garh, PK"></option><option id="SQR" value="SQR : Sharaqpur, PK"></option><option id="SRA" value="SRA : Sheikhupura, PK"></option><option id="ASW" value="ASW : Shewa Adda, PK"></option><option id="SIP" value="SIP : Shikar Pur, PK"></option><option id="SNK" value="SNK : Shinkiari, PK"></option><option id="SQT" value="SQT : Shorkot, PK"></option><option id="SHJ" value="SHJ : Shujaabad, PK"></option><option id="SMR" value="SMR : Sial Morr, PK"></option><option id="SLT" value="SLT : Sialkot, PK"></option><option id="SBI" value="SBI : Sibbi, PK"></option><option id="SNL" value="SNL : Silanwali, PK"></option><option id="SJO" value="SJO : Sinjhoro, PK"></option><option id="SIT" value="SIT : Sita Road, PK"></option><option id="RDU" value="RDU : Skardu, PK"></option><option id="SBT" value="SBT : Sohbat Pur (Banking), PK"></option><option id="SUJ" value="SUJ : Sujawal, PK"></option><option id="SKZ" value="SKZ : Sukkur, PK"></option><option id="SUA" value="SUA : Sundar Adda, PK"></option><option id="STP" value="STP : Super Highway Tool Plaza, PK"></option><option id="SWA" value="SWA : Swabi, PK"></option><option id="SWT" value="SWT : Swat, PK"></option><option id="TEW" value="TEW : Tail Wala, PK"></option><option id="TBI" value="TBI : Takhat Bhai, PK"></option><option id="TLG" value="TLG : Talagang, PK"></option><option id="TAL" value="TAL : Tall - Kpk, PK"></option><option id="TWL" value="TWL : Tandlianwala, PK"></option><option id="TDM" value="TDM : Tando Adam, PK"></option><option id="TDA" value="TDA : Tando Allah Yar, PK"></option><option id="TDJ" value="TDJ : Tando Jam, PK"></option><option id="TMK" value="TMK : Tando Muhammad Khan, PK"></option><option id="TNG" value="TNG : Tangi Proper - Charsadda, PK"></option><option id="TAN" value="TAN : Tank, PK"></option><option id="TKL" value="TKL : Tarar Khel, PK"></option><option id="TRL" value="TRL : Tarnol, PK"></option><option id="TTY" value="TTY : Tatlay Aali, PK"></option><option id="TVH" value="TVH : Thari Mirwah, PK"></option><option id="TSA" value="TSA : Tharo Shah, PK"></option><option id="THT" value="THT : Thatta, PK"></option><option id="TER" value="TER : Therhi, PK"></option><option id="THL" value="THL : Thull, PK"></option><option id="TSP" value="TSP : Tibba Sultan, PK"></option><option id="TMG" value="TMG : Timergarah, PK"></option><option id="TTS" value="TTS : Toba Tek Singh, PK"></option><option id="TPM" value="TPM : Tranda Muhammad Panah, PK"></option><option id="TGA" value="TGA : Trug, PK"></option><option id="TUK" value="TUK : Turbat, PK"></option><option id="URO" value="URO : Ubaro, PK"></option><option id="UCH" value="UCH : Uch Sharif, PK"></option><option id="ULI" value="ULI : Uchhali, PK"></option><option id="UKT" value="UKT : Umerkot, PK"></option><option id="UPD" value="UPD : Upper Dir - Upd, PK"></option><option id="USM" value="USM : Usta Muhammad, PK"></option><option id="UTL" value="UTL : Uthal, PK"></option><option id="VDR" value="VDR : Varai Dir, PK"></option><option id="VRI" value="VRI : Vehari, PK"></option><option id="WGN" value="WGN : Waggan, PK"></option><option id="WAH" value="WAH : Wah, PK"></option><option id="WBC" value="WBC : Wan Bhachran, PK"></option><option id="OND" value="OND : Wando, PK"></option><option id="WRH" value="WRH : Warrah, PK"></option><option id="WZD" value="WZD : Wazirabad, PK"></option><option id="WDR" value="WDR : Winder, PK"></option><option id="YZM" value="YZM : Yazman, PK"></option><option id="ZFW" value="ZFW : Zafarwal, PK"></option><option id="ZPR" value="ZPR : Zahirpeer, PK"></option><option id="ZOB" value="ZOB : Zhob, PK"></option><option id="ZRT" value="ZRT : Ziarat, PK"></option></datalist>
}
const UpdateBooking = () => {
    // const [trackingNumber, setTrackingNumber] = useState('');
    const [codAmount, setCodAmount] = useState (0);
    const [charges, setCharges] = useState(150); 
    const [oCharges, setOCharges] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(26); 
    const [total, setTotal] = useState(0);
    const [bookingDetails, setBookingDetails] = useState(null);
    
      const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const dsl_cn = e.target.dsl_cn.value;
    
        try {
          const response = await axios.get(`http://127.0.0.1:5000/admin/update/get_record`, {
            params: { dsl_cn },
            withCredentials: true,
          });
    
          if (response.status === 200) {
            setBookingDetails(response.data);
          } else {
            console.error('No booking details found.');
          }
        } catch (error) {
          console.error('Error fetching booking details:', error);
        }
      };
      console.log(bookingDetails);
      
      const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
    
        try {
          const response = await axios.post(`http://127.0.0.1:5000/admin/update_booking/${bookingDetails.DSL_CN}`, formData, {
            withCredentials: true,
            });
            if (response.status === 200) {
                alert('Record updated successfully');
                window.location.reload();
              }
            } catch (error) {
              console.error('Error updating record:', error);
              alert('Failed to insert record');
            }
            };

    useEffect(() => {
        const sum = codAmount + charges + oCharges + tax - discount;
        setTotal(sum);
      }, [codAmount, charges, oCharges, discount, tax]);
  return (
    <section className='margin'>
        <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-black">
          Update <span className="text-lime-500">Booking</span>
        </h2>
      </div>
      
        
        <div className="w-full max-w-lg mx-auto margin">
        <form onSubmit={handleSearchSubmit} id='search-dsl-cn' className="mt-5 sm:flex sm:items-center">
            <input
              id="dsl_cn"
              name="dsl_cn"
              className="text-gray-500 inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-lime-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 sm:text-sm"
              placeholder="Enter your DSL CN"
              type="search"
            />
            <button className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-4 py-2 font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Search
            </button>
            
          </form>
          </div>
          {bookingDetails && (
          <form onSubmit={handleUpdateSubmit}
           id='update-record-form' className="max-w-6xl p-4 bg-slate-100 shadow-md rounded-lg">
                
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
                        <label htmlFor="DSL_CN" className="text-black font-medium">Tracking Number</label>
                        <input type="text" name="DSL_CN" id="DSL_CN"
                        defaultValue={bookingDetails.DSL_CN}
                        readOnly
                         className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>

                    {/* Keep Partner Checkbox */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="keepPartner" className="text-black font-medium">Keep Partner</label>
                        <input type="checkbox" name="keepPartner" id="keepPartner" className="w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600" />
                    </div>

                    {/* Select Partner */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="Ptnr_Code" className="text-black font-medium">Select Partner</label>
                        <select name="Ptnr_Code" id="Ptnr_Code"
                        defaultValue={bookingDetails.Ptnr_Code}
                         className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
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
                        <label htmlFor="Ptnr_CN" className="text-black font-medium">Reference Number</label>
                        <input type="text" name="Ptnr_CN" id="Ptnr_CN"
                        defaultValue={bookingDetails.Ptnr_CN} 
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                </div>
                <h1 className="font-bold text-2xl text-black relative max-sm:text-center mt-5">
                    <span className="border-b-2 border-lime-400 ">Service</span> Details
                </h1>
                <div className="flex  flex-wrap justify-normal items-center gap-4 p-2 mt-5">
                    {/* Product Selector with options */}
                    <div className='space-x-2 flex items-center  max-sm:mx-auto '>
                        <label htmlFor="Product" className="text-black font-medium">Product </label>
                        <select name="Product" id="Product"
                        defaultValue={bookingDetails.Product} 
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
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
                        <label htmlFor="Service" className="text-black font-medium">Service </label>
                        <select name="Service" id="Service"
                        defaultValue={bookingDetails.Service}
                         className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
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
                        <label htmlFor="PayMode" className="text-black font-medium">Pay Mode</label>
                        <select name="PayMode" id="PayMode"
                        defaultValue={bookingDetails.PayMode} 
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600">
                            <option id="CSH" value="CSH">CSH : Cash</option>
                            <option id="CRD" value="CRD">CRD : Credit</option>
                            <option id="POD" value="POD">POD : Pay on Door</option>
                        </select>
                    </div>
                    {/* Account No Input Field */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="AcctNo" className="text-black font-medium">Account No</label>
                        <input type="text" name="AcctNo" id="AcctNo"
                        defaultValue={bookingDetails.AcctNo}
                         className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                    {/* Pickup Date default value of today */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="Pku_Date" className="text-black font-medium">Pickup Date</label>
                        <input type="date" name="Pku_Date" id="Pku_Date"
                        defaultValue={bookingDetails.Pku_Date}
                         className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
                    </div>
                    {/* Booking Date default value of today */}
                    <div className='space-x-2 flex items-center'>
                        <label htmlFor="Bkg_Date" className="text-black font-medium">Booking Date</label>
                        <input type="Date" name="Bkg_Date" id="Bkg_Date"
                        defaultValue={bookingDetails.Bkg_Date} 
                        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600" />
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
                                defaultChecked
                                className="ml-2 w-4 h-4 sm:w-6 sm:h-6 text-lime-600 border-gray-300 focus:ring-lime-600"
                            />
                        </div>

                        {/* Origin Input field  with dataist AllLocal options*/}
                        <div className="flex items-center mt-4">
                            <label htmlFor="Orgn_Code" className="text-black font-medium w-1/5">
                                Origin 
                            </label>
                            <input list="AllLocations" id="Orgn_Code" name="Orgn_Code"
                            defaultValue={bookingDetails.Orgn_Code}
                            className='ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600'
                            />
                            <LocalDatalist />
                        </div>
                        {/* Name Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="Shpr_Name" className="text-black font-medium w-1/5">
                                Name
                            </label>
                            <input
                                type="text"
                                name="Shpr_Name"
                                id="Shpr_Name"
                                defaultValue={bookingDetails.Shpr_Name}
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Mobile Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="Shpr_Mobile" className="text-black font-medium w-1/5">
                                Mobile
                            </label>
                            <input
                                type="text"
                                name="Shpr_Mobile"
                                id="Shpr_Mobile"
                                defaultValue={bookingDetails.Shpr_Mobile}
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Number Input field */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="Shpr_Phone" className="text-black font-medium w-1/5">
                                Number
                            </label>
                            <input
                                type="text"
                                name="Shpr_Phone"
                                id="Shpr_Phone"
                                defaultValue={bookingDetails.Shpr_Phone}
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Address Textarea */}
                        <div className="flex  mt-4">
                            <label htmlFor="Shpr_Addr" className="text-black font-medium w-1/5">
                                Address
                            </label>
                            <textarea
                                name="Shpr_Addr"
                                id="Shpr_Addr"
                                defaultValue={bookingDetails.Shpr_Addr}
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
                            <label htmlFor="Dstn_Code" className="text-black font-medium w-1/5">
                                Destination
                            </label>
                            <input list="AllLocations" id="Dstn_Code" name="Dstn_Code"
                            defaultValue={bookingDetails.Dstn_Code}
                            className='ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600' 
                            />
                            <LocationDatalist />
                            
                   
                    </div>
                    
                    {/* Consignee Name */}
                    <div className="flex items-center mt-4">
                                <label htmlFor="Cngs_Name" className="text-black font-medium w-1/5">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="Cngs_Name"
                                    id="Cngs_Name"
                                    defaultValue={bookingDetails.Cngs_Name}
                                    className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                                />
                        </div>
                        {/* Consignee Mobile */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="Cngs_Mobile" className="text-black font-medium w-1/5">
                                Mobile
                            </label>
                            <input
                                type="text"
                                name="Cngs_Mobile"
                                id="Cngs_Mobile"
                                defaultValue={bookingDetails.Cngs_Mobile}
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Consignee Number */}
                        <div className="flex items-center mt-4">
                            <label htmlFor="Cngs_Phone" className="text-black font-medium w-1/5">
                                Number
                            </label>
                            <input
                                type="number"
                                name="Cngs_Phone"
                                id="Cngs_Phone"
                                defaultValue={bookingDetails.Cngs_Phone}
                                className="ml-2 flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Consignee Address */}
                        <div className="flex  mt-4">
                            <label htmlFor="Cngs_Addr" className="text-black font-medium w-1/5">
                                Address
                            </label>
                            <textarea
                                name="Cngs_Addr"
                                id="Cngs_Addr"
                                defaultValue={bookingDetails.Cngs_Addr}
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
                            <label htmlFor="Height" className="text-black font-medium mb-1">
                                Height
                            </label>
                            <input
                                type="number"
                                name="Height"
                                id="Height"
                                defaultValue={bookingDetails.Height}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Width Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Width" className="text-black font-medium mb-1">
                                Width
                            </label>
                            <input
                                type="number"
                                name="Width"
                                id="Width"
                                defaultValue={bookingDetails.Width}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Length Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Length" className="text-black font-medium mb-1">
                                Length
                            </label>
                            <input
                                type="number"
                                name="Length"
                                id="Length"
                                defaultValue={bookingDetails.Length}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Weight Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Weight" className="text-black font-medium mb-1">
                                Weight
                            </label>
                            <input
                                type="number"
                                name="Weight"
                                id="Weight"
                                defaultValue={bookingDetails.Weight}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                            </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10 gap-2 max-sm:gap-4">
                        {/* Pieces Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Pieces" className="text-black font-medium mb-1">
                                Pieces
                            </label>
                            <input
                                type="number"
                                name="Pieces"
                                id="Pieces"
                                defaultValue={bookingDetails.Pieces}
                                className="border text-center text-gray-500 h-14 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Content Textarea field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Content" className="text-black font-medium mb-1">
                                Content
                            </label>
                            <textarea
                                name="Content"
                                id="Content"
                                defaultValue={bookingDetails.Content}
                                rows="2"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                    
                        {/* Remarks Textarea field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Remarks" className="text-black font-medium mb-1">
                                Remarks
                            </label>
                            <textarea
                                name="Remarks"
                                id="Remarks"
                                defaultValue={bookingDetails.Remarks}
                                rows="2"
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                        </div>
                        {/* Instructions */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Instruction" className="text-black font-medium mb-1">
                                Instructions
                            </label>
                            <textarea
                                name="Instruction"
                                id="Instruction"
                                defaultValue={bookingDetails.Instruction}
                                rows="2"
                                className="border text-balance text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            ></textarea>
                            </div>
                    </div>
                    <div className="flex items-center justify-center mt-5">
                        {/* Status Selector with options[1.Confirmed. 2.On its way. 3.Out for delivery.] */}
                            <div className="flex flex-col items-center mb-2 sm:mb-0">
                                <label htmlFor="Status" className="text-black font-medium mb-1">
                                    Status
                                </label>
                                <select
                                    name="Status"
                                    id="Status"
                                    defaultValue={bookingDetails.Status}
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
                            <label htmlFor="Insured_Value" className="text-black font-medium mb-1">
                                Declared Value
                            </label>
                            <input
                                type="number"
                                name="Insured_Value"
                                id="Insured_Value"
                                defaultValue={bookingDetails.Insured_Value}
                                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                        {/* Insurance Charges */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Insured_Chrg" className="text-black font-medium mb-1">
                                Insurance Charges
                            </label>
                            <input
                                type="number"
                                name="Insured_Chrg"
                                id="Insured_Chrg"
                                defaultValue={bookingDetails.Insured_Chrg}
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
                            <label htmlFor="COD" className="text-black font-medium mb-1">
                                COD Amount
                            </label>
                            <input
                                type="number"
                                name="COD"
                                id="COD"
                                defaultValue={bookingDetails.COD}
                                // value={bookingDetails.COD}
                                onChange={(e) => setCodAmount(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Service Charges Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Service_Chrg" className="text-black font-medium mb-1">
                                Service Charges
                            </label>
                            <input
                                type="number"
                                name="Service_Chrg"
                                id="Service_Chrg"
                                defaultValue={bookingDetails.Service_Chrg}
                                onChange={(e) => setCharges(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Other Charges Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Other_Chrg" className="text-black font-medium mb-1">
                                Other Charges
                            </label>
                            <input
                                type="number"
                                name="Other_Chrg"
                                id="Other_Chrg"
                                defaultValue={bookingDetails.Other_Chrg}
                                onChange={(e) => setOCharges(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Discount Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Discount" className="text-black font-medium mb-1">
                                Discount
                            </label>
                            <input
                                type="number"
                                name="Discount"
                                id="Discount"
                                defaultValue={bookingDetails.Discount}
                                onChange={(e) => setDiscount(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center items-center mt-2 gap-2 max-sm:gap-4">
                        {/* COD Amount Input field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="GST" className="text-black font-medium mb-1">
                                Tax
                            </label>
                            <input
                                type="number"
                                name="GST"
                                id="GST"
                                defaultValue={bookingDetails.GST}
                                onChange={(e) => setTax(Number(e.target.value))}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>

                        {/* Tax Input Field */}
                        <div className="flex flex-col items-center mb-2 sm:mb-0">
                            <label htmlFor="Total" className="text-black font-medium mb-1">
                                Total
                            </label>
                            <input
                                type="number"
                                name="Total"
                                id="Total"
                                defaultValue={bookingDetails.Total}
                                value={total}
                                className="border text-gray-500 border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-lime-600"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    <button type='submit' className="flex items-center justify-center bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-300 ease-in-out">
                        <MdFileUpload className="mr-1" />
                        Update
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
          )}
                

        </section>
  )
}

export default UpdateBooking