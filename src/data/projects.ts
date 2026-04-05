import ref1 from "@/assets/references/ref-1.jpg";
import ref2 from "@/assets/references/ref-2.jpg";
import ref3 from "@/assets/references/ref-3.jpg";
import ref4 from "@/assets/references/ref-4.jpg";
import ref5 from "@/assets/references/ref-5.jpg";
import ref6 from "@/assets/references/ref-6.jpg";
import ref7 from "@/assets/references/ref-7.jpg";
import ref8 from "@/assets/references/ref-8.jpg";
import ref9 from "@/assets/references/ref-9.jpg";
import ref10 from "@/assets/references/ref-10.jpg";
import ref11 from "@/assets/references/ref-11.jpg";
import ref12 from "@/assets/references/ref-12.jpg";
import ref13 from "@/assets/references/ref-13.jpg";
import ref14 from "@/assets/references/ref-14.jpg";
import ref15 from "@/assets/references/ref-15.jpg";
import ref16 from "@/assets/references/ref-16.jpg";
import ref17 from "@/assets/references/ref-17.jpg";
import ref18 from "@/assets/references/ref-18.jpg";
import ref19 from "@/assets/references/ref-19.jpg";
import ref20 from "@/assets/references/ref-20.jpg";
import ref21 from "@/assets/references/ref-21.jpg";
import ref22 from "@/assets/references/ref-22.jpg";
import ref23 from "@/assets/references/ref-23.jpg";
import ref24 from "@/assets/references/ref-24.jpg";
import ref25 from "@/assets/references/ref-25.jpg";
import ref26 from "@/assets/references/ref-26.jpg";
import ref27 from "@/assets/references/ref-27.jpg";
import ref28 from "@/assets/references/ref-28.jpg";
import ref29 from "@/assets/references/ref-29.jpg";
import ref30 from "@/assets/references/ref-30.jpg";
import ref31 from "@/assets/references/ref-31.jpg";
import ref32 from "@/assets/references/ref-32.jpg";
import ref33 from "@/assets/references/ref-33.jpg";
import ref34 from "@/assets/references/ref-34.jpg";
import ref35 from "@/assets/references/ref-35.jpg";
import ref36 from "@/assets/references/ref-36.jpg";
import ref37 from "@/assets/references/ref-37.jpg";
import ref38 from "@/assets/references/ref-38.jpg";
import ref39 from "@/assets/references/ref-39.jpg";
import ref40 from "@/assets/references/ref-40.jpg";
import refOil1 from "@/assets/references/ref-oil-1.jpg";
import refOil2 from "@/assets/references/ref-oil-2.jpg";
import refOil3 from "@/assets/references/ref-oil-3.jpg";

export interface Project {
  id: number;
  label: string;
  title: string;
  description: string;
  year: string;
  image: string;
  filter: string;
}

export const allProjects: Project[] = [
  // MEDICAL — IRAQ (1-25)
  { id: 1, label: "IRAQ • COLD STORAGE", title: "Blood Preservation & Freezing Systems — Ministry of Health", description: "Supply of blood and corpse preservation refrigerators and ultra-cold freezers to the Iraqi Ministry of Health and Environment, distributed across multiple governorates.", year: "2019", image: ref1, filter: "Medical — Iraq" },
  { id: 2, label: "IRAQ • LABORATORY EQUIPMENT", title: "Histopathology Laboratory — Turkish Hospitals", description: "Complete supply of laboratory equipment, protection cabinets, ultra-cooled freezers, and a full histopathology laboratory to Turkish hospitals in Iraq in cooperation with AUH.", year: "2020", image: ref2, filter: "Medical — Iraq" },
  { id: 3, label: "IRAQ • MEDICAL WASTE", title: "Medical Waste Treatment — Ministry of Health", description: "Supply of medical waste shredders and treatment devices to the Iraqi Ministry of Health and Environment.", year: "2019", image: ref3, filter: "Medical — Iraq" },
  { id: 4, label: "IRAQ • MATERNITY", title: "Maternity Beds Supply — Ministry of Health", description: "Supply of specialized maternity beds to the Iraqi Ministry of Health and Environment for distribution across healthcare facilities.", year: "2020", image: ref4, filter: "Medical — Iraq" },
  { id: 5, label: "IRAQ • OXYGEN SYSTEMS", title: "Integrated Oxygen Plant — Al-Dhuluiyah Hospital", description: "Supply and installation of an integrated oxygen generation plant with oxygen gas filling system at Al-Dhuluiyah Hospital.", year: "2021", image: ref5, filter: "Medical — Iraq" },
  { id: 6, label: "IRAQ • OXYGEN SYSTEMS", title: "Integrated Oxygen Plant — Al-Dujail Hospital", description: "Supply and installation of an integrated oxygen generation plant with oxygen gas filling system at Al-Dujail Hospital.", year: "2021", image: ref6, filter: "Medical — Iraq" },
  { id: 7, label: "IRAQ • OXYGEN SYSTEMS", title: "Integrated Oxygen Plant — Al-Alam Hospital", description: "Supply and installation of a complete oxygen generation and filling system at Al-Alam Hospital, Salah Al-Din Governorate.", year: "2021", image: ref7, filter: "Medical — Iraq" },
  { id: 8, label: "IRAQ • OXYGEN SYSTEMS", title: "Integrated Oxygen Plant — Samarra Hospital", description: "Full oxygen generation plant with integrated gas filling system supplied and installed at Samarra Hospital.", year: "2022", image: ref8, filter: "Medical — Iraq" },
  { id: 9, label: "IRAQ • OXYGEN SYSTEMS", title: "Integrated Oxygen Plant — Al-Dawz Hospital", description: "Supply and installation of integrated oxygen generation and filling system at Al-Dawz Hospital.", year: "2022", image: ref9, filter: "Medical — Iraq" },
  { id: 10, label: "IRAQ • ENDOSCOPY", title: "33 Endoscopes — Salah Al-Din Health Department", description: "Supply of 33 advanced endoscopy units to the Salah Al-Din Governorate Health Department, covering multiple hospital facilities across the governorate.", year: "2022", image: ref10, filter: "Medical — Iraq" },
  { id: 11, label: "IRAQ • SURGICAL EQUIPMENT", title: "Lithotripsy Devices — Salah Al-Din Health Department", description: "Supply of 2 lithotripsy devices to the Salah Al-Din Health Department for kidney stone treatment procedures.", year: "2022", image: ref11, filter: "Medical — Iraq" },
  { id: 12, label: "IRAQ • MEDICAL WASTE", title: "Medical Waste Treatment — Salah Al-Din (500L Capacity)", description: "Supply of medical waste treatment devices with 500-liter capacity to the Salah Al-Din Health Department.", year: "2022", image: ref12, filter: "Medical — Iraq" },
  { id: 13, label: "IRAQ • LABORATORY", title: "Laboratory Cabinets — Ministry of Health", description: "Supply of protective cabinets for the laboratory section of the Iraqi Ministry of Health and Environment.", year: "2020", image: ref13, filter: "Medical — Iraq" },
  { id: 14, label: "IRAQ • OXYGEN SYSTEMS", title: "Oxygen Plant — Anbar Health Department, Anah Hospital", description: "Supply and installation of an integrated oxygen plant at Anah Hospital under the Anbar Health Department.", year: "2021", image: ref14, filter: "Medical — Iraq" },
  { id: 15, label: "IRAQ • COLD STORAGE", title: "Ultra-Cold Freezers — Baghdad Al-Karkh Health Department", description: "Supply of 8 ultra-cold freezers to Baghdad Al-Karkh Health Department for biological sample preservation.", year: "2021", image: ref15, filter: "Medical — Iraq" },
  { id: 16, label: "IRAQ • EQUIPMENT", title: "Oxygen Booster Pumps — Anbar Health Department", description: "Supply of 8 oxygen booster pumps to the Anbar Health Department for hospital oxygen distribution systems.", year: "2021", image: ref16, filter: "Medical — Iraq" },
  { id: 17, label: "IRAQ • COOLING SYSTEMS", title: "Central Cooling System — Tikrit Teaching Hospital", description: "Supply and installation of a Fresh Air central cooling system for operating rooms at Tikrit Teaching Hospital.", year: "2020", image: ref17, filter: "Medical — Iraq" },
  { id: 18, label: "IRAQ • COOLING SYSTEMS", title: "Central Cooling System — Al Karma Hospital", description: "Supply and installation of a complete central cooling system at Al Karma Hospital.", year: "2020", image: ref18, filter: "Medical — Iraq" },
  { id: 19, label: "IRAQ • COOLING SYSTEMS", title: "Cooling System — Ministry of Justice Medicine Stores", description: "Supply and installation of central cooling systems for the Ministry of Justice medicine storage facilities.", year: "2021", image: ref19, filter: "Medical — Iraq" },
  { id: 20, label: "IRAQ • HOSPITAL EQUIPMENT", title: "Open-Heart Surgery Unit — Tikrit General Hospital", description: "Supply of a fully equipped open-heart surgery machine and supporting equipment to Tikrit General Hospital.", year: "2021", image: ref20, filter: "Medical — Iraq" },
  { id: 21, label: "IRAQ • HOSPITAL EQUIPMENT", title: "Surgery & Urology Unit — Sayyida Khadija Al-Kubra Hospital", description: "Full equipment supply for surgery and urology unit at Sayyida Khadija Al-Kubra Hospital.", year: "2022", image: ref21, filter: "Medical — Iraq" },
  { id: 22, label: "IRAQ • HOSPITAL EQUIPMENT", title: "Premature Infants Unit — Sayyida Khadija Al-Kubra Hospital", description: "Complete equipment supply for premature infants care unit at Sayyida Khadija Al-Kubra Hospital.", year: "2022", image: ref22, filter: "Medical — Iraq" },
  { id: 23, label: "IRAQ • HOSPITAL EQUIPMENT", title: "Anatomy Department — Sayyida Khadija Al-Kubra Hospital", description: "Full equipment supply for the anatomy department at Sayyida Khadija Al-Kubra Hospital.", year: "2022", image: ref23, filter: "Medical — Iraq" },
  { id: 24, label: "IRAQ • HOSPITAL REHABILITATION", title: "Operating Rooms & Emergency — Al-Hussein Teaching Hospital", description: "Equipping four operating rooms and rehabilitating floors and the emergency department at Al-Hussein Teaching Hospital, Muthanna Governorate.", year: "2022", image: ref24, filter: "Medical — Iraq" },
  { id: 25, label: "IRAQ • BIOSAFETY", title: "ISO 3 Protection Cabinets — Husayn Shrine Hospitals", description: "Supply of extremely precise ISO 3 classified protection cabinets to hospitals of the Husayn Shrine — the first of its kind in Iraq.", year: "2021", image: ref25, filter: "Medical — Iraq" },
  // MEDICAL — JORDAN (26-28)
  { id: 26, label: "JORDAN • COLD STORAGE", title: "Blood Cooling Equipment — Gardens Hospital", description: "Complete supply of laboratory and blood cooling equipment and protection cabinets to Gardens Hospital in Amman, Jordan.", year: "2019", image: ref26, filter: "Medical — Jordan" },
  { id: 27, label: "JORDAN • COLD STORAGE", title: "Blood Preservation Refrigerators — Jordanian Medical City", description: "Supply of blood preservation refrigerators to the Jordanian Medical City.", year: "2020", image: ref27, filter: "Medical — Jordan" },
  { id: 28, label: "JORDAN • LABORATORY", title: "Protection Cabinets — Hashemite University", description: "Supply of laboratory protection cabinets to Hashemite University in Jordan.", year: "2020", image: ref28, filter: "Medical — Jordan" },
  // MEDICAL — MIDDLE EAST (29-40)
  { id: 29, label: "EGYPT • COLD STORAGE", title: "Plasma Freezing Rooms — Egyptian Ministry of Health", description: "Supply of plasma freezing rooms at -40°C in cooperation with Grifols Company — 18 freezing stores each containing 4 sub-stores measuring 10×18×4 meters, distributed across Egypt.", year: "2018", image: ref29, filter: "Medical — Middle East" },
  { id: 30, label: "UAE • LABORATORY", title: "Central Morgue Equipment — Abu Dhabi Emirate", description: "Full equipment supply for the central morgue facility in the Emirate of Abu Dhabi.", year: "2019", image: ref30, filter: "Medical — Middle East" },
  { id: 31, label: "UAE • HOSPITAL EQUIPMENT", title: "Full Hospital Equipment — Al Ain Emirate Hospital", description: "Complete supply of refrigerators, medical freezers, clean room equipment, and supporting systems for the new Al Ain Emirate Hospital.", year: "2020", image: ref31, filter: "Medical — Middle East" },
  { id: 32, label: "UAE • COLD STORAGE", title: "Blood Cooling Equipment — Sheikh Shakhbout City", description: "Supply of devices for cooling blood and its derivatives for the city of Sheikh Shakhbout.", year: "2019", image: ref32, filter: "Medical — Middle East" },
  { id: 33, label: "UAE • COLD STORAGE", title: "Protection Cabinets & Freezers — Dar Al-Shifa Hospitals", description: "Supply of protection cabinets and ultra-cooled freezers to Dar Al-Shifa hospital group.", year: "2019", image: ref33, filter: "Medical — Middle East" },
  { id: 34, label: "UAE • ANATOMY", title: "Anatomy Department — Thumbayeh Hospital", description: "Complete equipment supply for the anatomy department at Thumbayeh Hospital.", year: "2020", image: ref34, filter: "Medical — Middle East" },
  { id: 35, label: "UAE • COLD STORAGE", title: "Blood Freezers & Autopsy Equipment — NMC Hospitals", description: "Supply of blood freezers, refrigerators, and autopsy equipment to NMC hospital group.", year: "2020", image: ref35, filter: "Medical — Middle East" },
  { id: 36, label: "KUWAIT • LABORATORY", title: "Blood Products Separation — Central Laboratory", description: "Supply of devices for separating blood products to the central laboratory in Kuwait.", year: "2019", image: ref36, filter: "Medical — Middle East" },
  { id: 37, label: "KUWAIT • COLD STORAGE", title: "Blood Bank Cold Rooms — Kuwait Main Blood Bank", description: "Supply and installation of blood preservation cold rooms at the main blood bank in Kuwait.", year: "2019", image: ref37, filter: "Medical — Middle East" },
  { id: 38, label: "OMAN • LABORATORY", title: "Laboratory & Blood Refrigeration — Royal Hospital Oman", description: "Complete supply of laboratory and blood refrigeration equipment to the Royal Hospital in Oman.", year: "2019", image: ref38, filter: "Medical — Middle East" },
  { id: 39, label: "SAUDI ARABIA • COLD STORAGE", title: "Solution Preservation Devices — Saudi Ministry of Health", description: "Supply of all preservation devices for the Saudi Ministry of Health contract for keeping solutions — 2018 contract.", year: "2018", image: ref39, filter: "Medical — Middle East" },
  { id: 40, label: "IRAQ • VENTILATORS", title: "Ventilator Respirators — United Nations Iraq", description: "Supply of ventilator respirators to the United Nations in Iraq, distributed and installed across most Iraqi governorates.", year: "2020", image: ref40, filter: "Medical — Middle East" },
];

export const oilGasProjects: Project[] = [
  { id: 101, label: "IRAQ • PIPELINE", title: "Industrial Pipeline Supply — Salah Al-Din", description: "Supply of high-grade steel pipes and fittings for industrial pipeline infrastructure in Salah Al-Din Governorate.", year: "2023", image: refOil1, filter: "Oil & Gas" },
  { id: 102, label: "JORDAN • DRILLING", title: "Drilling Equipment Package — Amman", description: "Complete drilling equipment package supplied for exploration operations in the Amman region.", year: "2023", image: refOil2, filter: "Oil & Gas" },
  { id: 103, label: "IRAQ • INFRASTRUCTURE", title: "Underground Pipeline System — Tikrit", description: "Design and supply of underground pipeline system for industrial infrastructure in Tikrit, Salah Al-Din.", year: "2023", image: refOil3, filter: "Oil & Gas" },
];

export const filters = [
  "All Projects",
  "Medical — Iraq",
  "Medical — Jordan",
  "Medical — Middle East",
  "Oil & Gas",
];
