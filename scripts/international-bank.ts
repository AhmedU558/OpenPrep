import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { validateBank } from '../src/lib/question-bank';
import { questions as bIntl1 } from '../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../content/bank/international/batch-intl-02';
import { questions as bIntl3 } from '../content/bank/international/batch-intl-03';
import { questions as bIntl4 } from '../content/bank/international/batch-intl-04';
import { questions as bIntl5 } from '../content/bank/international/batch-intl-05';
import { questions as bIntl6 } from '../content/bank/international/batch-intl-06';
import { questions as bIntl7 } from '../content/bank/international/batch-intl-07';
import { questions as bIntl8 } from '../content/bank/international/batch-intl-08';
import { questions as bIntl9 } from '../content/bank/international/batch-intl-09';
import { questions as bIntl10 } from '../content/bank/international/batch-intl-10';
import { questions as bIntl11 } from '../content/bank/international/batch-intl-11';
import { questions as bIntl12 } from '../content/bank/international/batch-intl-12';
import { questions as bIntl13 } from '../content/bank/international/batch-intl-13';
import { questions as bIntl14 } from '../content/bank/international/batch-intl-14';
import { questions as bIntl15 } from '../content/bank/international/batch-intl-15';
import { questions as bIntl16 } from '../content/bank/international/batch-intl-16';
import { questions as bIntl17 } from '../content/bank/international/batch-intl-17';
import { questions as bIntl18 } from '../content/bank/international/batch-intl-18';
import { questions as bIntl19 } from '../content/bank/international/batch-intl-19';
import { questions as bIntl20 } from '../content/bank/international/batch-intl-20';
import { questions as bIntl21 } from '../content/bank/international/batch-intl-21';
import { questions as bIntl22 } from '../content/bank/international/batch-intl-22';
import { questions as bIntl23 } from '../content/bank/international/batch-intl-23';
import { questions as bIntl24 } from '../content/bank/international/batch-intl-24';
import { questions as bIntl25 } from '../content/bank/international/batch-intl-25';
import { questions as bIntl26 } from '../content/bank/international/batch-intl-26';
import { questions as bIntl27 } from '../content/bank/international/batch-intl-27';
import { questions as bIntl28 } from '../content/bank/international/batch-intl-28';
import { questions as bIntl29 } from '../content/bank/international/batch-intl-29';
import { questions as bIntl30 } from '../content/bank/international/batch-intl-30';
import { questions as bIntl31 } from '../content/bank/international/batch-intl-31';
import { questions as bIntl32 } from '../content/bank/international/batch-intl-32';
import { questions as bIntl33 } from '../content/bank/international/batch-intl-33';
import { questions as bIntl34 } from '../content/bank/international/batch-intl-34';
import { questions as bIntl35 } from '../content/bank/international/batch-intl-35';
import { questions as bIntl36 } from '../content/bank/international/batch-intl-36';
import { questions as bIntl37 } from '../content/bank/international/batch-intl-37';
import { questions as bIntl38 } from '../content/bank/international/batch-intl-38';
import { questions as bIntl39 } from '../content/bank/international/batch-intl-39';
import { questions as bIntl40 } from '../content/bank/international/batch-intl-40';
import { questions as bIntl41 } from '../content/bank/international/batch-intl-41';
import { questions as bIntl42 } from '../content/bank/international/batch-intl-42';
import { questions as bIntl43 } from '../content/bank/international/batch-intl-43';
import { questions as bIntl44 } from '../content/bank/international/batch-intl-44';
import { questions as bIntl45 } from '../content/bank/international/batch-intl-45';
import { questions as bIntl46 } from '../content/bank/international/batch-intl-46';
import { questions as bIntl47 } from '../content/bank/international/batch-intl-47';
import { questions as bIntl48 } from '../content/bank/international/batch-intl-48';
import { questions as bIntl49 } from '../content/bank/international/batch-intl-49';
import { questions as bIntl50 } from '../content/bank/international/batch-intl-50';
import { questions as bIntl51 } from '../content/bank/international/batch-intl-51';
import { questions as bIntl52 } from '../content/bank/international/batch-intl-52';
import { questions as bIntl53 } from '../content/bank/international/batch-intl-53';
import { questions as bIntl54 } from '../content/bank/international/batch-intl-54';
import { questions as bIntl55 } from '../content/bank/international/batch-intl-55';
import { questions as bIntl56 } from '../content/bank/international/batch-intl-56';
import { questions as bIntl57 } from '../content/bank/international/batch-intl-57';
import { questions as bIntl58 } from '../content/bank/international/batch-intl-58';
import { questions as bIntl59 } from '../content/bank/international/batch-intl-59';
import { questions as bIntl60 } from '../content/bank/international/batch-intl-60';
import { questions as bIntl61 } from '../content/bank/international/batch-intl-61';
import { questions as bIntl62 } from '../content/bank/international/batch-intl-62';
import { questions as bIntl63 } from '../content/bank/international/batch-intl-63';
import { questions as bIntl64 } from '../content/bank/international/batch-intl-64';
import { questions as bIntl65 } from '../content/bank/international/batch-intl-65';
import { questions as bIntl66 } from '../content/bank/international/batch-intl-66';
import { questions as bIntl67 } from '../content/bank/international/batch-intl-67';
import { questions as bIntl68 } from '../content/bank/international/batch-intl-68';
import { questions as bIntl69 } from '../content/bank/international/batch-intl-69';
import { questions as bIntl70 } from '../content/bank/international/batch-intl-70';
import { questions as bIntl71 } from '../content/bank/international/batch-intl-71';
import { questions as bIntl72 } from '../content/bank/international/batch-intl-72';
import { questions as bIntl73 } from '../content/bank/international/batch-intl-73';
import { questions as bIntl74 } from '../content/bank/international/batch-intl-74';
import { questions as bIntl75 } from '../content/bank/international/batch-intl-75';
import { questions as bIntl76 } from '../content/bank/international/batch-intl-76';
import { questions as bIntl77 } from '../content/bank/international/batch-intl-77';
import { questions as bIntl78 } from '../content/bank/international/batch-intl-78';
import { questions as bIntl79 } from '../content/bank/international/batch-intl-79';
import { questions as bIntl80 } from '../content/bank/international/batch-intl-80';
import { questions as bIntl81 } from '../content/bank/international/batch-intl-81';
import { questions as bIntl82 } from '../content/bank/international/batch-intl-82';
import { questions as bIntl83 } from '../content/bank/international/batch-intl-83';
import { questions as bIntl84 } from '../content/bank/international/batch-intl-84';
import { questions as bIntl85 } from '../content/bank/international/batch-intl-85';
import { questions as bIntl86 } from '../content/bank/international/batch-intl-86';
import { questions as bIntl87 } from '../content/bank/international/batch-intl-87';
import { questions as bIntl88 } from '../content/bank/international/batch-intl-88';
import { questions as bIntl89 } from '../content/bank/international/batch-intl-89';
import { questions as bIntl90 } from '../content/bank/international/batch-intl-90';
import { questions as bIntl91 } from '../content/bank/international/batch-intl-91';
import { questions as bIntl92 } from '../content/bank/international/batch-intl-92';
import { questions as bIntl93 } from '../content/bank/international/batch-intl-93';
import { questions as bIntl94 } from '../content/bank/international/batch-intl-94';
import { questions as bIntl95 } from '../content/bank/international/batch-intl-95';
import { questions as bIntl96 } from '../content/bank/international/batch-intl-96';
import { questions as bIntl97 } from '../content/bank/international/batch-intl-97';
import { questions as bIntl98 } from '../content/bank/international/batch-intl-98';
import { questions as bIntl99 } from '../content/bank/international/batch-intl-99';
import { questions as bIntl100 } from '../content/bank/international/batch-intl-100';
import { questions as bIntl101 } from '../content/bank/international/batch-intl-101';
import { questions as bIntl102 } from '../content/bank/international/batch-intl-102';
import { questions as bIntl103 } from '../content/bank/international/batch-intl-103';
import { questions as bIntl104 } from '../content/bank/international/batch-intl-104';
import { questions as bIntl105 } from '../content/bank/international/batch-intl-105';
import { questions as bIntl106 } from '../content/bank/international/batch-intl-106';
import { questions as bIntl107 } from '../content/bank/international/batch-intl-107';
import { questions as bIntl108 } from '../content/bank/international/batch-intl-108';
import { questions as bIntl109 } from '../content/bank/international/batch-intl-109';
import { questions as bIntl110 } from '../content/bank/international/batch-intl-110';
import { questions as bIntl111 } from '../content/bank/international/batch-intl-111';
import { questions as bIntl112 } from '../content/bank/international/batch-intl-112';
import { questions as bIntl113 } from '../content/bank/international/batch-intl-113';
import { questions as bIntl114 } from '../content/bank/international/batch-intl-114';
import { questions as bIntl115 } from '../content/bank/international/batch-intl-115';
import { questions as bIntl116 } from '../content/bank/international/batch-intl-116';
import { questions as bIntl117 } from '../content/bank/international/batch-intl-117';
import { questions as bIntl118 } from '../content/bank/international/batch-intl-118';
import { questions as bIntl119 } from '../content/bank/international/batch-intl-119';
import { questions as bIntl120 } from '../content/bank/international/batch-intl-120';
import { questions as bIntl121 } from '../content/bank/international/batch-intl-121';
import { questions as bIntl122 } from '../content/bank/international/batch-intl-122';
import { questions as bIntl123 } from '../content/bank/international/batch-intl-123';
import { questions as bIntl124 } from '../content/bank/international/batch-intl-124';
import { questions as bIntl125 } from '../content/bank/international/batch-intl-125';
import { questions as bIntl126 } from '../content/bank/international/batch-intl-126';
import { questions as bIntl127 } from '../content/bank/international/batch-intl-127';
import { questions as bIntl128 } from '../content/bank/international/batch-intl-128';
import { questions as bIntl129 } from '../content/bank/international/batch-intl-129';
import { questions as bIntl130 } from '../content/bank/international/batch-intl-130';
import { questions as bIntl131 } from '../content/bank/international/batch-intl-131';
import { questions as bIntl132 } from '../content/bank/international/batch-intl-132';
import { questions as bIntl133 } from '../content/bank/international/batch-intl-133';
import { questions as bIntl134 } from '../content/bank/international/batch-intl-134';
import { questions as bIntl135 } from '../content/bank/international/batch-intl-135';
import { questions as bIntl136 } from '../content/bank/international/batch-intl-136';
import { questions as bIntl137 } from '../content/bank/international/batch-intl-137';
import { questions as bIntl138 } from '../content/bank/international/batch-intl-138';
import { questions as bIntl139 } from '../content/bank/international/batch-intl-139';
import { questions as bIntl140 } from '../content/bank/international/batch-intl-140';
import { questions as bIntl141 } from '../content/bank/international/batch-intl-141';
import { questions as bIntl142 } from '../content/bank/international/batch-intl-142';
import { questions as bIntl143 } from '../content/bank/international/batch-intl-143';
import { questions as bIntl144 } from '../content/bank/international/batch-intl-144';
import { questions as bIntl145 } from '../content/bank/international/batch-intl-145';
import { questions as bIntl146 } from '../content/bank/international/batch-intl-146';
import { questions as bIntl147 } from '../content/bank/international/batch-intl-147';
import { questions as bIntl148 } from '../content/bank/international/batch-intl-148';
import { questions as bIntl149 } from '../content/bank/international/batch-intl-149';
import { questions as bIntl150 } from '../content/bank/international/batch-intl-150';
import { questions as bIntl151 } from '../content/bank/international/batch-intl-151';
import { questions as bIntl152 } from '../content/bank/international/batch-intl-152';
import { questions as bIntl153 } from '../content/bank/international/batch-intl-153';
import { questions as bIntl154 } from '../content/bank/international/batch-intl-154';
import { questions as bIntl155 } from '../content/bank/international/batch-intl-155';
import { questions as bIntl156 } from '../content/bank/international/batch-intl-156';
import { questions as bIntl157 } from '../content/bank/international/batch-intl-157';
import { questions as bIntl158 } from '../content/bank/international/batch-intl-158';
import { questions as bIntl159 } from '../content/bank/international/batch-intl-159';
import { questions as bIntl160 } from '../content/bank/international/batch-intl-160';
import { questions as bIntl161 } from '../content/bank/international/batch-intl-161';
import { questions as bIntl162 } from '../content/bank/international/batch-intl-162';
import { questions as bIntl163 } from '../content/bank/international/batch-intl-163';
import { questions as bIntl164 } from '../content/bank/international/batch-intl-164';
import { questions as bIntl165 } from '../content/bank/international/batch-intl-165';
import { questions as b1 } from '../content/bank/batch-01';
import type { QuestionContent } from '../src/lib/validation/content';

const allQuestions: QuestionContent[] = [
  ...bIntl1, ...bIntl2, ...bIntl3,
  ...bIntl4, ...bIntl5, ...bIntl6, ...bIntl7,
  ...bIntl8, ...bIntl9, ...bIntl10, ...bIntl11,
  ...bIntl12, ...bIntl13, ...bIntl14, ...bIntl15,
  ...bIntl16, ...bIntl17, ...bIntl18, ...bIntl19,
  ...bIntl20, ...bIntl21, ...bIntl22, ...bIntl23,
  ...bIntl24, ...bIntl25, ...bIntl26, ...bIntl27,
  ...bIntl28, ...bIntl29, ...bIntl30, ...bIntl31,
  ...bIntl32, ...bIntl33, ...bIntl34, ...bIntl35,
  ...bIntl36, ...bIntl37, ...bIntl38, ...bIntl39,
  ...bIntl40, ...bIntl41, ...bIntl42, ...bIntl43,
  ...bIntl44, ...bIntl45, ...bIntl46, ...bIntl47, ...bIntl48,
  ...bIntl49, ...bIntl50, ...bIntl51, ...bIntl52, ...bIntl53,
  ...bIntl54, ...bIntl55, ...bIntl56, ...bIntl57, ...bIntl58,
  ...bIntl59, ...bIntl60, ...bIntl61, ...bIntl62, ...bIntl63,
  ...bIntl64, ...bIntl65, ...bIntl66, ...bIntl67, ...bIntl68,
  ...bIntl69, ...bIntl70, ...bIntl71, ...bIntl72, ...bIntl73,
  ...bIntl74, ...bIntl75, ...bIntl76, ...bIntl77, ...bIntl78,
  ...bIntl79, ...bIntl80, ...bIntl81, ...bIntl82, ...bIntl83,
  ...bIntl84, ...bIntl85, ...bIntl86, ...bIntl87, ...bIntl88,
  ...bIntl89, ...bIntl90, ...bIntl91, ...bIntl92, ...bIntl93,
  ...bIntl94, ...bIntl95,
  ...bIntl96, ...bIntl97, ...bIntl98, ...bIntl99, ...bIntl100,
  ...bIntl101, ...bIntl102, ...bIntl103, ...bIntl104, ...bIntl105,
  ...bIntl106, ...bIntl107, ...bIntl108, ...bIntl109, ...bIntl110,
  ...bIntl111, ...bIntl112, ...bIntl113, ...bIntl114, ...bIntl115,
  ...bIntl116, ...bIntl117, ...bIntl118, ...bIntl119, ...bIntl120,
  ...bIntl121, ...bIntl122, ...bIntl123, ...bIntl124, ...bIntl125,
  ...bIntl126, ...bIntl127, ...bIntl128, ...bIntl129, ...bIntl130,
  ...bIntl131, ...bIntl132, ...bIntl133, ...bIntl134, ...bIntl135,
  ...bIntl136, ...bIntl137, ...bIntl138, ...bIntl139, ...bIntl140,
  ...bIntl141, ...bIntl142, ...bIntl143, ...bIntl144, ...bIntl145,
  ...bIntl146, ...bIntl147, ...bIntl148, ...bIntl149, ...bIntl150,
  ...bIntl151, ...bIntl152, ...bIntl153, ...bIntl154, ...bIntl155,
  ...bIntl156, ...bIntl157, ...bIntl158, ...bIntl159, ...bIntl160,
  ...bIntl161, ...bIntl162, ...bIntl163, ...bIntl164, ...bIntl165
];
const dir = 'content/bank/international';

async function main() {
  await mkdir(`${dir}/generated`, { recursive: true });
  await mkdir(`${dir}/reports`, { recursive: true });

  console.log(`Validating ${allQuestions.length} international expansion questions...`);

  const rawBatches = [
    { name: 'batch-intl-01', data: bIntl1 },
    { name: 'batch-intl-02', data: bIntl2 },
    { name: 'batch-intl-03', data: bIntl3 },
    { name: 'batch-intl-04', data: bIntl4 },
    { name: 'batch-intl-05', data: bIntl5 },
    { name: 'batch-intl-06', data: bIntl6 },
    { name: 'batch-intl-07', data: bIntl7 },
    { name: 'batch-intl-08', data: bIntl8 },
    { name: 'batch-intl-09', data: bIntl9 },
    { name: 'batch-intl-10', data: bIntl10 },
    { name: 'batch-intl-11', data: bIntl11 },
    { name: 'batch-intl-12', data: bIntl12 },
    { name: 'batch-intl-13', data: bIntl13 },
    { name: 'batch-intl-14', data: bIntl14 },
    { name: 'batch-intl-15', data: bIntl15 },
    { name: 'batch-intl-16', data: bIntl16 },
    { name: 'batch-intl-17', data: bIntl17 },
    { name: 'batch-intl-18', data: bIntl18 },
    { name: 'batch-intl-19', data: bIntl19 },
    { name: 'batch-intl-20', data: bIntl20 },
    { name: 'batch-intl-21', data: bIntl21 },
    { name: 'batch-intl-22', data: bIntl22 },
    { name: 'batch-intl-23', data: bIntl23 },
    { name: 'batch-intl-24', data: bIntl24 },
    { name: 'batch-intl-25', data: bIntl25 },
    { name: 'batch-intl-26', data: bIntl26 },
    { name: 'batch-intl-27', data: bIntl27 },
    { name: 'batch-intl-28', data: bIntl28 },
    { name: 'batch-intl-29', data: bIntl29 },
    { name: 'batch-intl-30', data: bIntl30 },
    { name: 'batch-intl-31', data: bIntl31 },
    { name: 'batch-intl-32', data: bIntl32 },
    { name: 'batch-intl-33', data: bIntl33 },
    { name: 'batch-intl-34', data: bIntl34 },
    { name: 'batch-intl-35', data: bIntl35 },
    { name: 'batch-intl-36', data: bIntl36 },
    { name: 'batch-intl-37', data: bIntl37 },
    { name: 'batch-intl-38', data: bIntl38 },
    { name: 'batch-intl-39', data: bIntl39 },
    { name: 'batch-intl-40', data: bIntl40 },
    { name: 'batch-intl-41', data: bIntl41 },
    { name: 'batch-intl-42', data: bIntl42 },
    { name: 'batch-intl-43', data: bIntl43 },
    { name: 'batch-intl-44', data: bIntl44 },
    { name: 'batch-intl-45', data: bIntl45 },
    { name: 'batch-intl-46', data: bIntl46 },
    { name: 'batch-intl-47', data: bIntl47 },
    { name: 'batch-intl-48', data: bIntl48 },
    { name: 'batch-intl-49', data: bIntl49 },
    { name: 'batch-intl-50', data: bIntl50 },
    { name: 'batch-intl-51', data: bIntl51 },
    { name: 'batch-intl-52', data: bIntl52 },
    { name: 'batch-intl-53', data: bIntl53 },
    { name: 'batch-intl-54', data: bIntl54 },
    { name: 'batch-intl-55', data: bIntl55 },
    { name: 'batch-intl-56', data: bIntl56 },
    { name: 'batch-intl-57', data: bIntl57 },
    { name: 'batch-intl-58', data: bIntl58 },
    { name: 'batch-intl-59', data: bIntl59 },
    { name: 'batch-intl-60', data: bIntl60 },
    { name: 'batch-intl-61', data: bIntl61 },
    { name: 'batch-intl-62', data: bIntl62 },
    { name: 'batch-intl-63', data: bIntl63 },
    { name: 'batch-intl-64', data: bIntl64 },
    { name: 'batch-intl-65', data: bIntl65 },
    { name: 'batch-intl-66', data: bIntl66 },
    { name: 'batch-intl-67', data: bIntl67 },
    { name: 'batch-intl-68', data: bIntl68 },
    { name: 'batch-intl-69', data: bIntl69 },
    { name: 'batch-intl-70', data: bIntl70 },
    { name: 'batch-intl-71', data: bIntl71 },
    { name: 'batch-intl-72', data: bIntl72 },
    { name: 'batch-intl-73', data: bIntl73 },
    { name: 'batch-intl-74', data: bIntl74 },
    { name: 'batch-intl-75', data: bIntl75 },
    { name: 'batch-intl-76', data: bIntl76 },
    { name: 'batch-intl-77', data: bIntl77 },
    { name: 'batch-intl-78', data: bIntl78 },
    { name: 'batch-intl-79', data: bIntl79 },
    { name: 'batch-intl-80', data: bIntl80 },
    { name: 'batch-intl-81', data: bIntl81 },
    { name: 'batch-intl-82', data: bIntl82 },
    { name: 'batch-intl-83', data: bIntl83 },
    { name: 'batch-intl-84', data: bIntl84 },
    { name: 'batch-intl-85', data: bIntl85 },
    { name: 'batch-intl-86', data: bIntl86 },
    { name: 'batch-intl-87', data: bIntl87 },
    { name: 'batch-intl-88', data: bIntl88 },
    { name: 'batch-intl-89', data: bIntl89 },
    { name: 'batch-intl-90', data: bIntl90 },
    { name: 'batch-intl-91', data: bIntl91 },
    { name: 'batch-intl-92', data: bIntl92 },
    { name: 'batch-intl-93', data: bIntl93 },
    { name: 'batch-intl-94', data: bIntl94 },
    { name: 'batch-intl-95', data: bIntl95 },
    { name: 'batch-intl-96', data: bIntl96 },
    { name: 'batch-intl-97', data: bIntl97 },
    { name: 'batch-intl-98', data: bIntl98 },
    { name: 'batch-intl-99', data: bIntl99 },
    { name: 'batch-intl-100', data: bIntl100 },
    { name: 'batch-intl-101', data: bIntl101 },
    { name: 'batch-intl-102', data: bIntl102 },
    { name: 'batch-intl-103', data: bIntl103 },
    { name: 'batch-intl-104', data: bIntl104 },
    { name: 'batch-intl-105', data: bIntl105 },
    { name: 'batch-intl-106', data: bIntl106 },
    { name: 'batch-intl-107', data: bIntl107 },
    { name: 'batch-intl-108', data: bIntl108 },
    { name: 'batch-intl-109', data: bIntl109 },
    { name: 'batch-intl-110', data: bIntl110 },
    { name: 'batch-intl-111', data: bIntl111 },
    { name: 'batch-intl-112', data: bIntl112 },
    { name: 'batch-intl-113', data: bIntl113 },
    { name: 'batch-intl-114', data: bIntl114 },
    { name: 'batch-intl-115', data: bIntl115 },
    { name: 'batch-intl-116', data: bIntl116 },
    { name: 'batch-intl-117', data: bIntl117 },
    { name: 'batch-intl-118', data: bIntl118 },
    { name: 'batch-intl-119', data: bIntl119 },
    { name: 'batch-intl-120', data: bIntl120 },
    { name: 'batch-intl-121', data: bIntl121 },
    { name: 'batch-intl-122', data: bIntl122 },
    { name: 'batch-intl-123', data: bIntl123 },
    { name: 'batch-intl-124', data: bIntl124 },
    { name: 'batch-intl-125', data: bIntl125 },
    { name: 'batch-intl-126', data: bIntl126 },
    { name: 'batch-intl-127', data: bIntl127 },
    { name: 'batch-intl-128', data: bIntl128 },
    { name: 'batch-intl-129', data: bIntl129 },
    { name: 'batch-intl-130', data: bIntl130 },
    { name: 'batch-intl-131', data: bIntl131 },
    { name: 'batch-intl-132', data: bIntl132 },
    { name: 'batch-intl-133', data: bIntl133 },
    { name: 'batch-intl-134', data: bIntl134 },
    { name: 'batch-intl-135', data: bIntl135 },
    { name: 'batch-intl-136', data: bIntl136 },
    { name: 'batch-intl-137', data: bIntl137 },
    { name: 'batch-intl-138', data: bIntl138 },
    { name: 'batch-intl-139', data: bIntl139 },
    { name: 'batch-intl-140', data: bIntl140 },
    { name: 'batch-intl-141', data: bIntl141 },
    { name: 'batch-intl-142', data: bIntl142 },
    { name: 'batch-intl-143', data: bIntl143 },
    { name: 'batch-intl-144', data: bIntl144 },
    { name: 'batch-intl-145', data: bIntl145 },
    { name: 'batch-intl-146', data: bIntl146 },
    { name: 'batch-intl-147', data: bIntl147 },
    { name: 'batch-intl-148', data: bIntl148 },
    { name: 'batch-intl-149', data: bIntl149 },
    { name: 'batch-intl-150', data: bIntl150 },
    { name: 'batch-intl-151', data: bIntl151 },
    { name: 'batch-intl-152', data: bIntl152 },
    { name: 'batch-intl-153', data: bIntl153 },
    { name: 'batch-intl-154', data: bIntl154 },
    { name: 'batch-intl-155', data: bIntl155 },
    { name: 'batch-intl-156', data: bIntl156 },
    { name: 'batch-intl-157', data: bIntl157 },
    { name: 'batch-intl-158', data: bIntl158 },
    { name: 'batch-intl-159', data: bIntl159 },
    { name: 'batch-intl-160', data: bIntl160 },
    { name: 'batch-intl-161', data: bIntl161 },
    { name: 'batch-intl-162', data: bIntl162 },
    { name: 'batch-intl-163', data: bIntl163 },
    { name: 'batch-intl-164', data: bIntl164 },
    { name: 'batch-intl-165', data: bIntl165 },
  ];

  const allErrors: Array<{ batch: string; message: string; [key: string]: unknown }> = [];
  const batches: Array<{ name: string; data: QuestionContent[]; errs: unknown[] }> = [];
  let accumulated = [...b1];

  for (const b of rawBatches) {
    const v = validateBank(b.data, accumulated);
    batches.push({ name: b.name, data: b.data, errs: v.errors });
    for (const err of v.errors) {
      allErrors.push({ batch: b.name, ...err });
    }
    accumulated.push(...b.data);
  }

  const batchReports = [];
  for (const b of batches) {
    const body = JSON.stringify(b.data, null, 2);
    const digest = createHash('sha256').update(body).digest('hex');
    await writeFile(`${dir}/generated/${b.name}.json`, body);
    batchReports.push({ name: b.name, count: b.data.length, digest, errors: b.errs });
  }

  const report = {
    validatedAt: new Date().toISOString(),
    totalQuestions: allQuestions.length,
    batches: batchReports,
    examsCovered: [...new Set(allQuestions.map(q => q.exam))].sort(),
    subjectsCovered: Object.fromEntries(
      [...new Set(allQuestions.map(q => q.subject))].sort().map(s => [s, allQuestions.filter(q => q.subject === s).length])
    ),
    optionsPerQuestion: 5,
    provenance: 'OpenPrep original; AI-authored; medically unreviewed',
    license: 'CC-BY-SA-4.0',
    allErrors,
  };

  await writeFile(`${dir}/reports/validation-report.json`, JSON.stringify(report, null, 2));

  if (allErrors.length > 0) {
    console.error('Validation errors found:', allErrors);
    process.exit(1);
  }

  console.log(`All ${allQuestions.length} international questions validated successfully with 0 errors.`);
  console.log(`Exams covered (${report.examsCovered.length}):`, report.examsCovered.join(', '));
  console.log('Reports written to:', `${dir}/reports/validation-report.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
