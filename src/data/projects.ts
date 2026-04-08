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
  labelAr: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  year: string;
  image: string;
  filter: string;
}

export const allProjects: Project[] = [
  // MEDICAL — IRAQ (1-25)
  { id: 1, label: "IRAQ • COLD STORAGE", labelAr: "العراق • التخزين البارد", title: "Blood Preservation & Freezing Systems — Ministry of Health", titleAr: "أنظمة حفظ وتجميد الدم — وزارة الصحة", description: "Supply of blood and corpse preservation refrigerators and ultra-cold freezers to the Iraqi Ministry of Health and Environment, distributed across multiple governorates.", descriptionAr: "توريد ثلاجات حفظ الدم والجثث ومجمدات فائقة البرودة لوزارة الصحة والبيئة العراقية، موزعة على عدة محافظات.", year: "2019", image: ref1, filter: "Medical — Iraq" },
  { id: 2, label: "IRAQ • LABORATORY EQUIPMENT", labelAr: "العراق • معدات مختبرية", title: "Histopathology Laboratory — Turkish Hospitals", titleAr: "مختبر الأنسجة المرضية — المستشفيات التركية", description: "Complete supply of laboratory equipment, protection cabinets, ultra-cooled freezers, and a full histopathology laboratory to Turkish hospitals in Iraq in cooperation with AUH.", descriptionAr: "توريد كامل لمعدات المختبر وخزائن الحماية والمجمدات فائقة البرودة ومختبر أنسجة مرضية كامل للمستشفيات التركية في العراق بالتعاون مع AUH.", year: "2020", image: ref2, filter: "Medical — Iraq" },
  { id: 3, label: "IRAQ • MEDICAL WASTE", labelAr: "العراق • النفايات الطبية", title: "Medical Waste Treatment — Ministry of Health", titleAr: "معالجة النفايات الطبية — وزارة الصحة", description: "Supply of medical waste shredders and treatment devices to the Iraqi Ministry of Health and Environment.", descriptionAr: "توريد آلات فرم ومعالجة النفايات الطبية لوزارة الصحة والبيئة العراقية.", year: "2019", image: ref3, filter: "Medical — Iraq" },
  { id: 4, label: "IRAQ • MATERNITY", labelAr: "العراق • الأمومة", title: "Maternity Beds Supply — Ministry of Health", titleAr: "توريد أسرّة الولادة — وزارة الصحة", description: "Supply of specialized maternity beds to the Iraqi Ministry of Health and Environment for distribution across healthcare facilities.", descriptionAr: "توريد أسرّة ولادة متخصصة لوزارة الصحة والبيئة العراقية لتوزيعها على المرافق الصحية.", year: "2020", image: ref4, filter: "Medical — Iraq" },
  { id: 5, label: "IRAQ • OXYGEN SYSTEMS", labelAr: "العراق • أنظمة الأوكسجين", title: "Integrated Oxygen Plant — Al-Dhuluiyah Hospital", titleAr: "محطة أوكسجين متكاملة — مستشفى الضلوعية", description: "Supply and installation of an integrated oxygen generation plant with oxygen gas filling system at Al-Dhuluiyah Hospital.", descriptionAr: "توريد وتركيب محطة توليد أوكسجين متكاملة مع نظام تعبئة غاز الأوكسجين في مستشفى الضلوعية.", year: "2021", image: ref5, filter: "Medical — Iraq" },
  { id: 6, label: "IRAQ • OXYGEN SYSTEMS", labelAr: "العراق • أنظمة الأوكسجين", title: "Integrated Oxygen Plant — Al-Dujail Hospital", titleAr: "محطة أوكسجين متكاملة — مستشفى الدجيل", description: "Supply and installation of an integrated oxygen generation plant with oxygen gas filling system at Al-Dujail Hospital.", descriptionAr: "توريد وتركيب محطة توليد أوكسجين متكاملة مع نظام تعبئة غاز الأوكسجين في مستشفى الدجيل.", year: "2021", image: ref6, filter: "Medical — Iraq" },
  { id: 7, label: "IRAQ • OXYGEN SYSTEMS", labelAr: "العراق • أنظمة الأوكسجين", title: "Integrated Oxygen Plant — Al-Alam Hospital", titleAr: "محطة أوكسجين متكاملة — مستشفى العلم", description: "Supply and installation of a complete oxygen generation and filling system at Al-Alam Hospital, Salah Al-Din Governorate.", descriptionAr: "توريد وتركيب نظام توليد وتعبئة أوكسجين كامل في مستشفى العلم، محافظة صلاح الدين.", year: "2021", image: ref7, filter: "Medical — Iraq" },
  { id: 8, label: "IRAQ • OXYGEN SYSTEMS", labelAr: "العراق • أنظمة الأوكسجين", title: "Integrated Oxygen Plant — Samarra Hospital", titleAr: "محطة أوكسجين متكاملة — مستشفى سامراء", description: "Full oxygen generation plant with integrated gas filling system supplied and installed at Samarra Hospital.", descriptionAr: "محطة توليد أوكسجين كاملة مع نظام تعبئة غاز متكامل تم توريدها وتركيبها في مستشفى سامراء.", year: "2022", image: ref8, filter: "Medical — Iraq" },
  { id: 9, label: "IRAQ • OXYGEN SYSTEMS", labelAr: "العراق • أنظمة الأوكسجين", title: "Integrated Oxygen Plant — Al-Dawz Hospital", titleAr: "محطة أوكسجين متكاملة — مستشفى الدوز", description: "Supply and installation of integrated oxygen generation and filling system at Al-Dawz Hospital.", descriptionAr: "توريد وتركيب نظام توليد وتعبئة أوكسجين متكامل في مستشفى الدوز.", year: "2022", image: ref9, filter: "Medical — Iraq" },
  { id: 10, label: "IRAQ • ENDOSCOPY", labelAr: "العراق • المناظير", title: "33 Endoscopes — Salah Al-Din Health Department", titleAr: "٣٣ منظار — دائرة صحة صلاح الدين", description: "Supply of 33 advanced endoscopy units to the Salah Al-Din Governorate Health Department, covering multiple hospital facilities across the governorate.", descriptionAr: "توريد ٣٣ وحدة مناظير متقدمة لدائرة صحة محافظة صلاح الدين، تغطي مرافق مستشفيات متعددة في المحافظة.", year: "2022", image: ref10, filter: "Medical — Iraq" },
  { id: 11, label: "IRAQ • SURGICAL EQUIPMENT", labelAr: "العراق • معدات جراحية", title: "Lithotripsy Devices — Salah Al-Din Health Department", titleAr: "أجهزة تفتيت الحصى — دائرة صحة صلاح الدين", description: "Supply of 2 lithotripsy devices to the Salah Al-Din Health Department for kidney stone treatment procedures.", descriptionAr: "توريد جهازي تفتيت حصى لدائرة صحة صلاح الدين لإجراءات علاج حصى الكلى.", year: "2022", image: ref11, filter: "Medical — Iraq" },
  { id: 12, label: "IRAQ • MEDICAL WASTE", labelAr: "العراق • النفايات الطبية", title: "Medical Waste Treatment — Salah Al-Din (500L Capacity)", titleAr: "معالجة النفايات الطبية — صلاح الدين (سعة ٥٠٠ لتر)", description: "Supply of medical waste treatment devices with 500-liter capacity to the Salah Al-Din Health Department.", descriptionAr: "توريد أجهزة معالجة نفايات طبية بسعة ٥٠٠ لتر لدائرة صحة صلاح الدين.", year: "2022", image: ref12, filter: "Medical — Iraq" },
  { id: 13, label: "IRAQ • LABORATORY", labelAr: "العراق • المختبر", title: "Laboratory Cabinets — Ministry of Health", titleAr: "خزائن مختبرية — وزارة الصحة", description: "Supply of protective cabinets for the laboratory section of the Iraqi Ministry of Health and Environment.", descriptionAr: "توريد خزائن حماية لقسم المختبرات في وزارة الصحة والبيئة العراقية.", year: "2020", image: ref13, filter: "Medical — Iraq" },
  { id: 14, label: "IRAQ • OXYGEN SYSTEMS", labelAr: "العراق • أنظمة الأوكسجين", title: "Oxygen Plant — Anbar Health Department, Anah Hospital", titleAr: "محطة أوكسجين — دائرة صحة الأنبار، مستشفى عنة", description: "Supply and installation of an integrated oxygen plant at Anah Hospital under the Anbar Health Department.", descriptionAr: "توريد وتركيب محطة أوكسجين متكاملة في مستشفى عنة التابع لدائرة صحة الأنبار.", year: "2021", image: ref14, filter: "Medical — Iraq" },
  { id: 15, label: "IRAQ • COLD STORAGE", labelAr: "العراق • التخزين البارد", title: "Ultra-Cold Freezers — Baghdad Al-Karkh Health Department", titleAr: "مجمدات فائقة البرودة — دائرة صحة بغداد الكرخ", description: "Supply of 8 ultra-cold freezers to Baghdad Al-Karkh Health Department for biological sample preservation.", descriptionAr: "توريد ٨ مجمدات فائقة البرودة لدائرة صحة بغداد الكرخ لحفظ العينات البيولوجية.", year: "2021", image: ref15, filter: "Medical — Iraq" },
  { id: 16, label: "IRAQ • EQUIPMENT", labelAr: "العراق • المعدات", title: "Oxygen Booster Pumps — Anbar Health Department", titleAr: "مضخات تعزيز الأوكسجين — دائرة صحة الأنبار", description: "Supply of 8 oxygen booster pumps to the Anbar Health Department for hospital oxygen distribution systems.", descriptionAr: "توريد ٨ مضخات تعزيز أوكسجين لدائرة صحة الأنبار لأنظمة توزيع الأوكسجين في المستشفيات.", year: "2021", image: ref16, filter: "Medical — Iraq" },
  { id: 17, label: "IRAQ • COOLING SYSTEMS", labelAr: "العراق • أنظمة التبريد", title: "Central Cooling System — Tikrit Teaching Hospital", titleAr: "نظام تبريد مركزي — مستشفى تكريت التعليمي", description: "Supply and installation of a Fresh Air central cooling system for operating rooms at Tikrit Teaching Hospital.", descriptionAr: "توريد وتركيب نظام تبريد مركزي بالهواء النقي لغرف العمليات في مستشفى تكريت التعليمي.", year: "2020", image: ref17, filter: "Medical — Iraq" },
  { id: 18, label: "IRAQ • COOLING SYSTEMS", labelAr: "العراق • أنظمة التبريد", title: "Central Cooling System — Al Karma Hospital", titleAr: "نظام تبريد مركزي — مستشفى الكرمة", description: "Supply and installation of a complete central cooling system at Al Karma Hospital.", descriptionAr: "توريد وتركيب نظام تبريد مركزي كامل في مستشفى الكرمة.", year: "2020", image: ref18, filter: "Medical — Iraq" },
  { id: 19, label: "IRAQ • COOLING SYSTEMS", labelAr: "العراق • أنظمة التبريد", title: "Cooling System — Ministry of Justice Medicine Stores", titleAr: "نظام تبريد — مخازن أدوية وزارة العدل", description: "Supply and installation of central cooling systems for the Ministry of Justice medicine storage facilities.", descriptionAr: "توريد وتركيب أنظمة تبريد مركزية لمرافق تخزين الأدوية في وزارة العدل.", year: "2021", image: ref19, filter: "Medical — Iraq" },
  { id: 20, label: "IRAQ • HOSPITAL EQUIPMENT", labelAr: "العراق • معدات المستشفيات", title: "Open-Heart Surgery Unit — Tikrit General Hospital", titleAr: "وحدة جراحة القلب المفتوح — مستشفى تكريت العام", description: "Supply of a fully equipped open-heart surgery machine and supporting equipment to Tikrit General Hospital.", descriptionAr: "توريد جهاز جراحة قلب مفتوح مجهز بالكامل ومعدات داعمة لمستشفى تكريت العام.", year: "2021", image: ref20, filter: "Medical — Iraq" },
  { id: 21, label: "IRAQ • HOSPITAL EQUIPMENT", labelAr: "العراق • معدات المستشفيات", title: "Surgery & Urology Unit — Sayyida Khadija Al-Kubra Hospital", titleAr: "وحدة الجراحة والمسالك البولية — مستشفى السيدة خديجة الكبرى", description: "Full equipment supply for surgery and urology unit at Sayyida Khadija Al-Kubra Hospital.", descriptionAr: "توريد كامل للمعدات لوحدة الجراحة والمسالك البولية في مستشفى السيدة خديجة الكبرى.", year: "2022", image: ref21, filter: "Medical — Iraq" },
  { id: 22, label: "IRAQ • HOSPITAL EQUIPMENT", labelAr: "العراق • معدات المستشفيات", title: "Premature Infants Unit — Sayyida Khadija Al-Kubra Hospital", titleAr: "وحدة الأطفال الخدّج — مستشفى السيدة خديجة الكبرى", description: "Complete equipment supply for premature infants care unit at Sayyida Khadija Al-Kubra Hospital.", descriptionAr: "توريد كامل للمعدات لوحدة رعاية الأطفال الخدّج في مستشفى السيدة خديجة الكبرى.", year: "2022", image: ref22, filter: "Medical — Iraq" },
  { id: 23, label: "IRAQ • HOSPITAL EQUIPMENT", labelAr: "العراق • معدات المستشفيات", title: "Anatomy Department — Sayyida Khadija Al-Kubra Hospital", titleAr: "قسم التشريح — مستشفى السيدة خديجة الكبرى", description: "Full equipment supply for the anatomy department at Sayyida Khadija Al-Kubra Hospital.", descriptionAr: "توريد كامل للمعدات لقسم التشريح في مستشفى السيدة خديجة الكبرى.", year: "2022", image: ref23, filter: "Medical — Iraq" },
  { id: 24, label: "IRAQ • HOSPITAL REHABILITATION", labelAr: "العراق • تأهيل المستشفيات", title: "Operating Rooms & Emergency — Al-Hussein Teaching Hospital", titleAr: "غرف العمليات والطوارئ — مستشفى الحسين التعليمي", description: "Equipping four operating rooms and rehabilitating floors and the emergency department at Al-Hussein Teaching Hospital, Muthanna Governorate.", descriptionAr: "تجهيز أربع غرف عمليات وتأهيل الطوابق وقسم الطوارئ في مستشفى الحسين التعليمي، محافظة المثنى.", year: "2022", image: ref24, filter: "Medical — Iraq" },
  { id: 25, label: "IRAQ • BIOSAFETY", labelAr: "العراق • السلامة الحيوية", title: "ISO 3 Protection Cabinets — Husayn Shrine Hospitals", titleAr: "خزائن حماية ISO 3 — مستشفيات العتبة الحسينية", description: "Supply of extremely precise ISO 3 classified protection cabinets to hospitals of the Husayn Shrine — the first of its kind in Iraq.", descriptionAr: "توريد خزائن حماية مصنفة ISO 3 فائقة الدقة لمستشفيات العتبة الحسينية — الأولى من نوعها في العراق.", year: "2021", image: ref25, filter: "Medical — Iraq" },
  // MEDICAL — JORDAN (26-28)
  { id: 26, label: "JORDAN • COLD STORAGE", labelAr: "الأردن • التخزين البارد", title: "Blood Cooling Equipment — Gardens Hospital", titleAr: "معدات تبريد الدم — مستشفى الحدائق", description: "Complete supply of laboratory and blood cooling equipment and protection cabinets to Gardens Hospital in Amman, Jordan.", descriptionAr: "توريد كامل لمعدات المختبر وتبريد الدم وخزائن الحماية لمستشفى الحدائق في عمّان، الأردن.", year: "2019", image: ref26, filter: "Medical — Jordan" },
  { id: 27, label: "JORDAN • COLD STORAGE", labelAr: "الأردن • التخزين البارد", title: "Blood Preservation Refrigerators — Jordanian Medical City", titleAr: "ثلاجات حفظ الدم — المدينة الطبية الأردنية", description: "Supply of blood preservation refrigerators to the Jordanian Medical City.", descriptionAr: "توريد ثلاجات حفظ الدم للمدينة الطبية الأردنية.", year: "2020", image: ref27, filter: "Medical — Jordan" },
  { id: 28, label: "JORDAN • LABORATORY", labelAr: "الأردن • المختبر", title: "Protection Cabinets — Hashemite University", titleAr: "خزائن حماية — الجامعة الهاشمية", description: "Supply of laboratory protection cabinets to Hashemite University in Jordan.", descriptionAr: "توريد خزائن حماية مختبرية للجامعة الهاشمية في الأردن.", year: "2020", image: ref28, filter: "Medical — Jordan" },
  // MEDICAL — MIDDLE EAST (29-40)
  { id: 29, label: "EGYPT • COLD STORAGE", labelAr: "مصر • التخزين البارد", title: "Plasma Freezing Rooms — Egyptian Ministry of Health", titleAr: "غرف تجميد البلازما — وزارة الصحة المصرية", description: "Supply of plasma freezing rooms at -40°C in cooperation with Grifols Company — 18 freezing stores each containing 4 sub-stores measuring 10×18×4 meters, distributed across Egypt.", descriptionAr: "توريد غرف تجميد بلازما بدرجة -٤٠°م بالتعاون مع شركة Grifols — ١٨ مخزن تجميد كل منها يحتوي ٤ مخازن فرعية بقياس ١٠×١٨×٤ أمتار، موزعة في أنحاء مصر.", year: "2018", image: ref29, filter: "Medical — Middle East" },
  { id: 30, label: "UAE • LABORATORY", labelAr: "الإمارات • المختبر", title: "Central Morgue Equipment — Abu Dhabi Emirate", titleAr: "معدات المشرحة المركزية — إمارة أبوظبي", description: "Full equipment supply for the central morgue facility in the Emirate of Abu Dhabi.", descriptionAr: "توريد كامل للمعدات لمنشأة المشرحة المركزية في إمارة أبوظبي.", year: "2019", image: ref30, filter: "Medical — Middle East" },
  { id: 31, label: "UAE • HOSPITAL EQUIPMENT", labelAr: "الإمارات • معدات المستشفيات", title: "Full Hospital Equipment — Al Ain Emirate Hospital", titleAr: "تجهيز مستشفى كامل — مستشفى العين الإماراتي", description: "Complete supply of refrigerators, medical freezers, clean room equipment, and supporting systems for the new Al Ain Emirate Hospital.", descriptionAr: "توريد كامل للثلاجات والمجمدات الطبية ومعدات الغرف النظيفة والأنظمة الداعمة لمستشفى العين الإماراتي الجديد.", year: "2020", image: ref31, filter: "Medical — Middle East" },
  { id: 32, label: "UAE • COLD STORAGE", labelAr: "الإمارات • التخزين البارد", title: "Blood Cooling Equipment — Sheikh Shakhbout City", titleAr: "معدات تبريد الدم — مدينة الشيخ شخبوط", description: "Supply of devices for cooling blood and its derivatives for the city of Sheikh Shakhbout.", descriptionAr: "توريد أجهزة تبريد الدم ومشتقاته لمدينة الشيخ شخبوط.", year: "2019", image: ref32, filter: "Medical — Middle East" },
  { id: 33, label: "UAE • COLD STORAGE", labelAr: "الإمارات • التخزين البارد", title: "Protection Cabinets & Freezers — Dar Al-Shifa Hospitals", titleAr: "خزائن حماية ومجمدات — مستشفيات دار الشفاء", description: "Supply of protection cabinets and ultra-cooled freezers to Dar Al-Shifa hospital group.", descriptionAr: "توريد خزائن حماية ومجمدات فائقة البرودة لمجموعة مستشفيات دار الشفاء.", year: "2019", image: ref33, filter: "Medical — Middle East" },
  { id: 34, label: "UAE • ANATOMY", labelAr: "الإمارات • التشريح", title: "Anatomy Department — Thumbayeh Hospital", titleAr: "قسم التشريح — مستشفى ثمبي", description: "Complete equipment supply for the anatomy department at Thumbayeh Hospital.", descriptionAr: "توريد كامل للمعدات لقسم التشريح في مستشفى ثمبي.", year: "2020", image: ref34, filter: "Medical — Middle East" },
  { id: 35, label: "UAE • COLD STORAGE", labelAr: "الإمارات • التخزين البارد", title: "Blood Freezers & Autopsy Equipment — NMC Hospitals", titleAr: "مجمدات دم ومعدات تشريح — مستشفيات NMC", description: "Supply of blood freezers, refrigerators, and autopsy equipment to NMC hospital group.", descriptionAr: "توريد مجمدات دم وثلاجات ومعدات تشريح لمجموعة مستشفيات NMC.", year: "2020", image: ref35, filter: "Medical — Middle East" },
  { id: 36, label: "KUWAIT • LABORATORY", labelAr: "الكويت • المختبر", title: "Blood Products Separation — Central Laboratory", titleAr: "فصل مشتقات الدم — المختبر المركزي", description: "Supply of devices for separating blood products to the central laboratory in Kuwait.", descriptionAr: "توريد أجهزة فصل مشتقات الدم للمختبر المركزي في الكويت.", year: "2019", image: ref36, filter: "Medical — Middle East" },
  { id: 37, label: "KUWAIT • COLD STORAGE", labelAr: "الكويت • التخزين البارد", title: "Blood Bank Cold Rooms — Kuwait Main Blood Bank", titleAr: "غرف تبريد بنك الدم — بنك الدم الرئيسي بالكويت", description: "Supply and installation of blood preservation cold rooms at the main blood bank in Kuwait.", descriptionAr: "توريد وتركيب غرف تبريد حفظ الدم في بنك الدم الرئيسي بالكويت.", year: "2019", image: ref37, filter: "Medical — Middle East" },
  { id: 38, label: "OMAN • LABORATORY", labelAr: "عُمان • المختبر", title: "Laboratory & Blood Refrigeration — Royal Hospital Oman", titleAr: "مختبر وتبريد دم — المستشفى السلطاني بعُمان", description: "Complete supply of laboratory and blood refrigeration equipment to the Royal Hospital in Oman.", descriptionAr: "توريد كامل لمعدات المختبر وتبريد الدم للمستشفى السلطاني في عُمان.", year: "2019", image: ref38, filter: "Medical — Middle East" },
  { id: 39, label: "SAUDI ARABIA • COLD STORAGE", labelAr: "السعودية • التخزين البارد", title: "Solution Preservation Devices — Saudi Ministry of Health", titleAr: "أجهزة حفظ المحاليل — وزارة الصحة السعودية", description: "Supply of all preservation devices for the Saudi Ministry of Health contract for keeping solutions — 2018 contract.", descriptionAr: "توريد جميع أجهزة الحفظ لعقد وزارة الصحة السعودية لحفظ المحاليل — عقد ٢٠١٨.", year: "2018", image: ref39, filter: "Medical — Middle East" },
  { id: 40, label: "IRAQ • VENTILATORS", labelAr: "العراق • أجهزة التنفس", title: "Ventilator Respirators — United Nations Iraq", titleAr: "أجهزة تنفس صناعي — الأمم المتحدة في العراق", description: "Supply of ventilator respirators to the United Nations in Iraq, distributed and installed across most Iraqi governorates.", descriptionAr: "توريد أجهزة تنفس صناعي للأمم المتحدة في العراق، تم توزيعها وتركيبها في معظم المحافظات العراقية.", year: "2020", image: ref40, filter: "Medical — Middle East" },
];

export const oilGasProjects: Project[] = [
  { id: 101, label: "IRAQ • PIPELINE", labelAr: "العراق • خطوط الأنابيب", title: "Industrial Pipeline Supply — Salah Al-Din", titleAr: "توريد أنابيب صناعية — صلاح الدين", description: "Supply of high-grade steel pipes and fittings for industrial pipeline infrastructure in Salah Al-Din Governorate.", descriptionAr: "توريد أنابيب ومواسير فولاذية عالية الجودة للبنية التحتية لخطوط الأنابيب الصناعية في محافظة صلاح الدين.", year: "2023", image: refOil1, filter: "Oil & Gas" },
  { id: 102, label: "JORDAN • DRILLING", labelAr: "الأردن • الحفر", title: "Drilling Equipment Package — Amman", titleAr: "حزمة معدات حفر — عمّان", description: "Complete drilling equipment package supplied for exploration operations in the Amman region.", descriptionAr: "حزمة معدات حفر متكاملة موردة لعمليات الاستكشاف في منطقة عمّان.", year: "2023", image: refOil2, filter: "Oil & Gas" },
  { id: 103, label: "IRAQ • INFRASTRUCTURE", labelAr: "العراق • البنية التحتية", title: "Underground Pipeline System — Tikrit", titleAr: "نظام أنابيب تحت أرضي — تكريت", description: "Design and supply of underground pipeline system for industrial infrastructure in Tikrit, Salah Al-Din.", descriptionAr: "تصميم وتوريد نظام أنابيب تحت أرضي للبنية التحتية الصناعية في تكريت، صلاح الدين.", year: "2023", image: refOil3, filter: "Oil & Gas" },
];

export const filters = [
  "All Projects",
  "Medical — Iraq",
  "Medical — Jordan",
  "Medical — Middle East",
  "Oil & Gas",
];

export const filtersAr: Record<string, string> = {
  "All Projects": "جميع المشاريع",
  "Medical — Iraq": "الطبية — العراق",
  "Medical — Jordan": "الطبية — الأردن",
  "Medical — Middle East": "الطبية — الشرق الأوسط",
  "Oil & Gas": "النفط والغاز",
};
