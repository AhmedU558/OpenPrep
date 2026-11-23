import { describe, expect, it } from 'vitest';
import { bankQuestionSchema, validateBank } from '@/lib/question-bank';
import type { QuestionContent } from '@/lib/validation/content';
import { questions as bIntl1 } from '../../content/bank/international/batch-intl-01';
import { questions as bIntl2 } from '../../content/bank/international/batch-intl-02';
import { questions as bIntl3 } from '../../content/bank/international/batch-intl-03';
import { questions as bIntl4 } from '../../content/bank/international/batch-intl-04';
import { questions as bIntl5 } from '../../content/bank/international/batch-intl-05';
import { questions as bIntl6 } from '../../content/bank/international/batch-intl-06';
import { questions as bIntl7 } from '../../content/bank/international/batch-intl-07';
import { questions as bIntl8 } from '../../content/bank/international/batch-intl-08';
import { questions as bIntl9 } from '../../content/bank/international/batch-intl-09';
import { questions as bIntl10 } from '../../content/bank/international/batch-intl-10';
import { questions as bIntl11 } from '../../content/bank/international/batch-intl-11';
import { questions as bIntl12 } from '../../content/bank/international/batch-intl-12';
import { questions as bIntl13 } from '../../content/bank/international/batch-intl-13';
import { questions as bIntl14 } from '../../content/bank/international/batch-intl-14';
import { questions as bIntl15 } from '../../content/bank/international/batch-intl-15';
import { questions as bIntl16 } from '../../content/bank/international/batch-intl-16';
import { questions as bIntl17 } from '../../content/bank/international/batch-intl-17';
import { questions as bIntl18 } from '../../content/bank/international/batch-intl-18';
import { questions as bIntl19 } from '../../content/bank/international/batch-intl-19';
import { questions as bIntl20 } from '../../content/bank/international/batch-intl-20';
import { questions as bIntl21 } from '../../content/bank/international/batch-intl-21';
import { questions as bIntl22 } from '../../content/bank/international/batch-intl-22';
import { questions as bIntl23 } from '../../content/bank/international/batch-intl-23';
import { questions as bIntl24 } from '../../content/bank/international/batch-intl-24';
import { questions as bIntl25 } from '../../content/bank/international/batch-intl-25';
import { questions as bIntl26 } from '../../content/bank/international/batch-intl-26';
import { questions as bIntl27 } from '../../content/bank/international/batch-intl-27';
import { questions as bIntl28 } from '../../content/bank/international/batch-intl-28';
import { questions as bIntl29 } from '../../content/bank/international/batch-intl-29';
import { questions as bIntl30 } from '../../content/bank/international/batch-intl-30';
import { questions as bIntl31 } from '../../content/bank/international/batch-intl-31';
import { questions as bIntl32 } from '../../content/bank/international/batch-intl-32';
import { questions as bIntl33 } from '../../content/bank/international/batch-intl-33';
import { questions as bIntl34 } from '../../content/bank/international/batch-intl-34';
import { questions as bIntl35 } from '../../content/bank/international/batch-intl-35';
import { questions as bIntl36 } from '../../content/bank/international/batch-intl-36';
import { questions as bIntl37 } from '../../content/bank/international/batch-intl-37';
import { questions as bIntl38 } from '../../content/bank/international/batch-intl-38';
import { questions as bIntl39 } from '../../content/bank/international/batch-intl-39';
import { questions as bIntl40 } from '../../content/bank/international/batch-intl-40';
import { questions as bIntl41 } from '../../content/bank/international/batch-intl-41';
import { questions as bIntl42 } from '../../content/bank/international/batch-intl-42';
import { questions as bIntl43 } from '../../content/bank/international/batch-intl-43';
import { questions as bIntl44 } from '../../content/bank/international/batch-intl-44';
import { questions as bIntl45 } from '../../content/bank/international/batch-intl-45';
import { questions as bIntl46 } from '../../content/bank/international/batch-intl-46';
import { questions as bIntl47 } from '../../content/bank/international/batch-intl-47';
import { questions as bIntl48 } from '../../content/bank/international/batch-intl-48';
import { questions as bIntl49 } from '../../content/bank/international/batch-intl-49';
import { questions as bIntl50 } from '../../content/bank/international/batch-intl-50';
import { questions as bIntl51 } from '../../content/bank/international/batch-intl-51';
import { questions as bIntl52 } from '../../content/bank/international/batch-intl-52';
import { questions as bIntl53 } from '../../content/bank/international/batch-intl-53';
import { questions as bIntl54 } from '../../content/bank/international/batch-intl-54';
import { questions as bIntl55 } from '../../content/bank/international/batch-intl-55';
import { questions as bIntl56 } from '../../content/bank/international/batch-intl-56';
import { questions as bIntl57 } from '../../content/bank/international/batch-intl-57';
import { questions as bIntl58 } from '../../content/bank/international/batch-intl-58';
import { questions as bIntl59 } from '../../content/bank/international/batch-intl-59';
import { questions as bIntl60 } from '../../content/bank/international/batch-intl-60';
import { questions as bIntl61 } from '../../content/bank/international/batch-intl-61';
import { questions as bIntl62 } from '../../content/bank/international/batch-intl-62';
import { questions as bIntl63 } from '../../content/bank/international/batch-intl-63';
import { questions as bIntl64 } from '../../content/bank/international/batch-intl-64';
import { questions as bIntl65 } from '../../content/bank/international/batch-intl-65';
import { questions as bIntl66 } from '../../content/bank/international/batch-intl-66';
import { questions as bIntl67 } from '../../content/bank/international/batch-intl-67';
import { questions as bIntl68 } from '../../content/bank/international/batch-intl-68';
import { questions as bIntl69 } from '../../content/bank/international/batch-intl-69';
import { questions as bIntl70 } from '../../content/bank/international/batch-intl-70';
import { questions as bIntl71 } from '../../content/bank/international/batch-intl-71';
import { questions as bIntl72 } from '../../content/bank/international/batch-intl-72';
import { questions as bIntl73 } from '../../content/bank/international/batch-intl-73';
import { questions as bIntl74 } from '../../content/bank/international/batch-intl-74';
import { questions as bIntl75 } from '../../content/bank/international/batch-intl-75';
import { questions as bIntl76 } from '../../content/bank/international/batch-intl-76';
import { questions as bIntl77 } from '../../content/bank/international/batch-intl-77';
import { questions as bIntl78 } from '../../content/bank/international/batch-intl-78';
import { questions as bIntl79 } from '../../content/bank/international/batch-intl-79';
import { questions as bIntl80 } from '../../content/bank/international/batch-intl-80';
import { questions as bIntl81 } from '../../content/bank/international/batch-intl-81';
import { questions as bIntl82 } from '../../content/bank/international/batch-intl-82';
import { questions as bIntl83 } from '../../content/bank/international/batch-intl-83';
import { questions as bIntl84 } from '../../content/bank/international/batch-intl-84';
import { questions as bIntl85 } from '../../content/bank/international/batch-intl-85';
import { questions as bIntl86 } from '../../content/bank/international/batch-intl-86';
import { questions as bIntl87 } from '../../content/bank/international/batch-intl-87';
import { questions as bIntl88 } from '../../content/bank/international/batch-intl-88';
import { questions as bIntl89 } from '../../content/bank/international/batch-intl-89';
import { questions as bIntl90 } from '../../content/bank/international/batch-intl-90';
import { questions as bIntl91 } from '../../content/bank/international/batch-intl-91';
import { questions as bIntl92 } from '../../content/bank/international/batch-intl-92';
import { questions as bIntl93 } from '../../content/bank/international/batch-intl-93';
import { questions as bIntl94 } from '../../content/bank/international/batch-intl-94';
import { questions as bIntl95 } from '../../content/bank/international/batch-intl-95';
import { questions as bIntl96 } from '../../content/bank/international/batch-intl-96';
import { questions as bIntl97 } from '../../content/bank/international/batch-intl-97';
import { questions as bIntl98 } from '../../content/bank/international/batch-intl-98';
import { questions as bIntl99 } from '../../content/bank/international/batch-intl-99';
import { questions as bIntl100 } from '../../content/bank/international/batch-intl-100';
import { questions as bIntl101 } from '../../content/bank/international/batch-intl-101';
import { questions as bIntl102 } from '../../content/bank/international/batch-intl-102';
import { questions as bIntl103 } from '../../content/bank/international/batch-intl-103';
import { questions as bIntl104 } from '../../content/bank/international/batch-intl-104';
import { questions as bIntl105 } from '../../content/bank/international/batch-intl-105';
import { questions as bIntl106 } from '../../content/bank/international/batch-intl-106';
import { questions as bIntl107 } from '../../content/bank/international/batch-intl-107';
import { questions as bIntl108 } from '../../content/bank/international/batch-intl-108';
import { questions as bIntl109 } from '../../content/bank/international/batch-intl-109';
import { questions as bIntl110 } from '../../content/bank/international/batch-intl-110';
import { questions as bIntl111 } from '../../content/bank/international/batch-intl-111';
import { questions as bIntl112 } from '../../content/bank/international/batch-intl-112';
import { questions as bIntl113 } from '../../content/bank/international/batch-intl-113';
import { questions as bIntl114 } from '../../content/bank/international/batch-intl-114';
import { questions as bIntl115 } from '../../content/bank/international/batch-intl-115';
import { questions as bIntl116 } from '../../content/bank/international/batch-intl-116';
import { questions as bIntl117 } from '../../content/bank/international/batch-intl-117';
import { questions as bIntl118 } from '../../content/bank/international/batch-intl-118';
import { questions as bIntl119 } from '../../content/bank/international/batch-intl-119';
import { questions as bIntl120 } from '../../content/bank/international/batch-intl-120';
import { questions as bIntl121 } from '../../content/bank/international/batch-intl-121';
import { questions as bIntl122 } from '../../content/bank/international/batch-intl-122';
import { questions as bIntl123 } from '../../content/bank/international/batch-intl-123';
import { questions as bIntl124 } from '../../content/bank/international/batch-intl-124';
import { questions as bIntl125 } from '../../content/bank/international/batch-intl-125';
import { questions as bIntl126 } from '../../content/bank/international/batch-intl-126';
import { questions as bIntl127 } from '../../content/bank/international/batch-intl-127';
import { questions as bIntl128 } from '../../content/bank/international/batch-intl-128';
import { questions as bIntl129 } from '../../content/bank/international/batch-intl-129';
import { questions as bIntl130 } from '../../content/bank/international/batch-intl-130';
import { questions as bIntl131 } from '../../content/bank/international/batch-intl-131';
import { questions as bIntl132 } from '../../content/bank/international/batch-intl-132';
import { questions as bIntl133 } from '../../content/bank/international/batch-intl-133';
import { questions as bIntl134 } from '../../content/bank/international/batch-intl-134';
import { questions as bIntl135 } from '../../content/bank/international/batch-intl-135';
import { questions as bIntl136 } from '../../content/bank/international/batch-intl-136';
import { questions as bIntl137 } from '../../content/bank/international/batch-intl-137';
import { questions as bIntl138 } from '../../content/bank/international/batch-intl-138';
import { questions as bIntl139 } from '../../content/bank/international/batch-intl-139';
import { questions as bIntl140 } from '../../content/bank/international/batch-intl-140';
import { questions as bIntl141 } from '../../content/bank/international/batch-intl-141';
import { questions as bIntl142 } from '../../content/bank/international/batch-intl-142';
import { questions as bIntl143 } from '../../content/bank/international/batch-intl-143';
import { questions as bIntl144 } from '../../content/bank/international/batch-intl-144';
import { questions as bIntl145 } from '../../content/bank/international/batch-intl-145';
import { questions as bIntl146 } from '../../content/bank/international/batch-intl-146';
import { questions as bIntl147 } from '../../content/bank/international/batch-intl-147';
import { questions as bIntl148 } from '../../content/bank/international/batch-intl-148';
import { questions as bIntl149 } from '../../content/bank/international/batch-intl-149';
import { questions as bIntl150 } from '../../content/bank/international/batch-intl-150';
import { questions as bIntl151 } from '../../content/bank/international/batch-intl-151';
import { questions as bIntl152 } from '../../content/bank/international/batch-intl-152';
import { questions as bIntl153 } from '../../content/bank/international/batch-intl-153';
import { questions as bIntl154 } from '../../content/bank/international/batch-intl-154';
import { questions as bIntl155 } from '../../content/bank/international/batch-intl-155';
import { questions as bIntl156 } from '../../content/bank/international/batch-intl-156';
import { questions as bIntl157 } from '../../content/bank/international/batch-intl-157';
import { questions as bIntl158 } from '../../content/bank/international/batch-intl-158';
import { questions as bIntl159 } from '../../content/bank/international/batch-intl-159';
import { questions as bIntl160 } from '../../content/bank/international/batch-intl-160';
import { questions as bIntl161 } from '../../content/bank/international/batch-intl-161';
import { questions as bIntl162 } from '../../content/bank/international/batch-intl-162';
import { questions as bIntl163 } from '../../content/bank/international/batch-intl-163';
import { questions as bIntl164 } from '../../content/bank/international/batch-intl-164';
import { questions as bIntl165 } from '../../content/bank/international/batch-intl-165';
import { questions as bIntl166 } from '../../content/bank/international/batch-intl-166';
import { questions as bIntl167 } from '../../content/bank/international/batch-intl-167';
import { questions as bIntl168 } from '../../content/bank/international/batch-intl-168';
import { questions as bIntl169 } from '../../content/bank/international/batch-intl-169';
import { questions as bIntl170 } from '../../content/bank/international/batch-intl-170';
import { questions as bIntl171 } from '../../content/bank/international/batch-intl-171';
import { questions as bIntl172 } from '../../content/bank/international/batch-intl-172';
import { questions as bIntl173 } from '../../content/bank/international/batch-intl-173';
import { questions as bIntl174 } from '../../content/bank/international/batch-intl-174';
import { questions as bIntl175 } from '../../content/bank/international/batch-intl-175';
import { questions as bIntl176 } from '../../content/bank/international/batch-intl-176';
import { questions as bIntl177 } from '../../content/bank/international/batch-intl-177';
import { questions as bIntl178 } from '../../content/bank/international/batch-intl-178';
import { questions as bIntl179 } from '../../content/bank/international/batch-intl-179';
import { questions as bIntl180 } from '../../content/bank/international/batch-intl-180';
import { questions as bIntl181 } from '../../content/bank/international/batch-intl-181';
import { questions as bIntl182 } from '../../content/bank/international/batch-intl-182';
import { questions as bIntl183 } from '../../content/bank/international/batch-intl-183';
import { questions as bIntl184 } from '../../content/bank/international/batch-intl-184';
import { questions as bIntl185 } from '../../content/bank/international/batch-intl-185';
import { questions as bIntl186 } from '../../content/bank/international/batch-intl-186';
import { questions as bIntl187 } from '../../content/bank/international/batch-intl-187';
import { questions as bIntl188 } from '../../content/bank/international/batch-intl-188';
import { questions as bIntl189 } from '../../content/bank/international/batch-intl-189';
import { questions as bIntl190 } from '../../content/bank/international/batch-intl-190';
import { questions as bIntl191 } from '../../content/bank/international/batch-intl-191';
import { questions as bIntl192 } from '../../content/bank/international/batch-intl-192';
import { questions as bIntl193 } from '../../content/bank/international/batch-intl-193';
import { questions as bIntl194 } from '../../content/bank/international/batch-intl-194';
import { questions as bIntl195 } from '../../content/bank/international/batch-intl-195';
import { questions as bIntl196 } from '../../content/bank/international/batch-intl-196';
import { questions as bIntl197 } from '../../content/bank/international/batch-intl-197';
import { questions as bIntl198 } from '../../content/bank/international/batch-intl-198';
import { questions as bIntl199 } from '../../content/bank/international/batch-intl-199';
import { questions as bIntl200 } from '../../content/bank/international/batch-intl-200';
import { questions as bIntl201 } from '../../content/bank/international/batch-intl-201';
import { questions as bIntl202 } from '../../content/bank/international/batch-intl-202';
import { questions as bIntl203 } from '../../content/bank/international/batch-intl-203';
import { questions as bIntl204 } from '../../content/bank/international/batch-intl-204';
import { questions as bIntl205 } from '../../content/bank/international/batch-intl-205';
import { questions as bIntl206 } from '../../content/bank/international/batch-intl-206';
import { questions as bIntl207 } from '../../content/bank/international/batch-intl-207';
import { questions as bIntl208 } from '../../content/bank/international/batch-intl-208';
import { questions as bIntl209 } from '../../content/bank/international/batch-intl-209';
import { questions as bIntl210 } from '../../content/bank/international/batch-intl-210';
import { questions as bIntl211 } from '../../content/bank/international/batch-intl-211';
import { questions as bIntl212 } from '../../content/bank/international/batch-intl-212';
import { questions as bIntl213 } from '../../content/bank/international/batch-intl-213';
import { questions as bIntl214 } from '../../content/bank/international/batch-intl-214';
import { questions as bIntl215 } from '../../content/bank/international/batch-intl-215';
import { questions as bIntl216 } from '../../content/bank/international/batch-intl-216';
import { questions as bIntl217 } from '../../content/bank/international/batch-intl-217';
import { questions as bIntl218 } from '../../content/bank/international/batch-intl-218';
import { questions as bIntl219 } from '../../content/bank/international/batch-intl-219';
import { questions as bIntl220 } from '../../content/bank/international/batch-intl-220';
import { questions as bIntl221 } from '../../content/bank/international/batch-intl-221';
import { questions as bIntl222 } from '../../content/bank/international/batch-intl-222';
import { questions as bIntl223 } from '../../content/bank/international/batch-intl-223';
import { questions as bIntl224 } from '../../content/bank/international/batch-intl-224';
import { questions as bIntl225 } from '../../content/bank/international/batch-intl-225';
import { questions as bIntl226 } from '../../content/bank/international/batch-intl-226';
import { questions as bIntl227 } from '../../content/bank/international/batch-intl-227';
import { questions as bIntl228 } from '../../content/bank/international/batch-intl-228';
import { questions as bIntl229 } from '../../content/bank/international/batch-intl-229';
import { questions as bIntl230 } from '../../content/bank/international/batch-intl-230';
import { questions as bIntl231 } from '../../content/bank/international/batch-intl-231';
import { questions as bIntl232 } from '../../content/bank/international/batch-intl-232';
import { questions as bIntl233 } from '../../content/bank/international/batch-intl-233';
import { questions as bIntl234 } from '../../content/bank/international/batch-intl-234';
import { questions as bIntl235 } from '../../content/bank/international/batch-intl-235';
import { questions as bIntl236 } from '../../content/bank/international/batch-intl-236';
import { questions as bIntl237 } from '../../content/bank/international/batch-intl-237';
import { questions as bIntl238 } from '../../content/bank/international/batch-intl-238';
import { questions as bIntl239 } from '../../content/bank/international/batch-intl-239';
import { questions as bIntl240 } from '../../content/bank/international/batch-intl-240';
import { questions as bIntl241 } from '../../content/bank/international/batch-intl-241';
import { questions as bIntl242 } from '../../content/bank/international/batch-intl-242';
import { questions as bIntl243 } from '../../content/bank/international/batch-intl-243';
import { questions as bIntl244 } from '../../content/bank/international/batch-intl-244';
import { questions as bIntl245 } from '../../content/bank/international/batch-intl-245';
import { questions as bIntl246 } from '../../content/bank/international/batch-intl-246';
import { questions as bIntl247 } from '../../content/bank/international/batch-intl-247';
import { questions as bIntl248 } from '../../content/bank/international/batch-intl-248';
import { questions as bIntl249 } from '../../content/bank/international/batch-intl-249';
import { questions as bIntl250 } from '../../content/bank/international/batch-intl-250';
import { questions as bIntl251 } from '../../content/bank/international/batch-intl-251';
import { questions as bIntl252 } from '../../content/bank/international/batch-intl-252';
import { questions as bIntl253 } from '../../content/bank/international/batch-intl-253';
import { questions as bIntl254 } from '../../content/bank/international/batch-intl-254';
import { questions as bIntl255 } from '../../content/bank/international/batch-intl-255';
import { questions as bIntl256 } from '../../content/bank/international/batch-intl-256';
import { questions as bIntl257 } from '../../content/bank/international/batch-intl-257';
import { questions as bIntl258 } from '../../content/bank/international/batch-intl-258';
import { questions as bIntl259 } from '../../content/bank/international/batch-intl-259';
import { questions as bIntl260 } from '../../content/bank/international/batch-intl-260';
import { questions as bIntl261 } from '../../content/bank/international/batch-intl-261';
import { questions as bIntl262 } from '../../content/bank/international/batch-intl-262';
import { questions as bIntl263 } from '../../content/bank/international/batch-intl-263';
import { questions as bIntl264 } from '../../content/bank/international/batch-intl-264';
import { questions as bIntl265 } from '../../content/bank/international/batch-intl-265';
import { questions as bIntl266 } from '../../content/bank/international/batch-intl-266';
import { questions as bIntl267 } from '../../content/bank/international/batch-intl-267';
import { questions as bIntl268 } from '../../content/bank/international/batch-intl-268';
import { questions as bIntl269 } from '../../content/bank/international/batch-intl-269';
import { questions as bIntl270 } from '../../content/bank/international/batch-intl-270';
import { questions as bIntl271 } from '../../content/bank/international/batch-intl-271';
import { questions as bIntl272 } from '../../content/bank/international/batch-intl-272';
import { questions as bIntl273 } from '../../content/bank/international/batch-intl-273';
import { questions as bIntl274 } from '../../content/bank/international/batch-intl-274';
import { questions as bIntl275 } from '../../content/bank/international/batch-intl-275';
import { questions as bIntl276 } from '../../content/bank/international/batch-intl-276';
import { questions as bIntl277 } from '../../content/bank/international/batch-intl-277';
import { questions as bIntl278 } from '../../content/bank/international/batch-intl-278';
import { questions as bIntl279 } from '../../content/bank/international/batch-intl-279';
import { questions as bIntl280 } from '../../content/bank/international/batch-intl-280';
import { questions as bIntl281 } from '../../content/bank/international/batch-intl-281';
import { questions as bIntl282 } from '../../content/bank/international/batch-intl-282';
import { questions as bIntl283 } from '../../content/bank/international/batch-intl-283';
import { questions as bIntl284 } from '../../content/bank/international/batch-intl-284';
import { questions as bIntl285 } from '../../content/bank/international/batch-intl-285';
import { questions as bIntl286 } from '../../content/bank/international/batch-intl-286';
import { questions as bIntl287 } from '../../content/bank/international/batch-intl-287';
import { questions as bIntl288 } from '../../content/bank/international/batch-intl-288';
import { questions as bIntl289 } from '../../content/bank/international/batch-intl-289';
import { questions as bIntl290 } from '../../content/bank/international/batch-intl-290';
import { questions as bIntl291 } from '../../content/bank/international/batch-intl-291';
import { questions as bIntl292 } from '../../content/bank/international/batch-intl-292';
import { questions as bIntl293 } from '../../content/bank/international/batch-intl-293';
import { questions as bIntl294 } from '../../content/bank/international/batch-intl-294';
import { questions as bIntl295 } from '../../content/bank/international/batch-intl-295';
import { questions as bIntl296 } from '../../content/bank/international/batch-intl-296';
import { questions as bIntl297 } from '../../content/bank/international/batch-intl-297';
import { questions as bIntl298 } from '../../content/bank/international/batch-intl-298';
import { questions as bIntl299 } from '../../content/bank/international/batch-intl-299';
import { questions as bIntl300 } from '../../content/bank/international/batch-intl-300';
import { questions as bIntl301 } from '../../content/bank/international/batch-intl-301';
import { questions as bIntl302 } from '../../content/bank/international/batch-intl-302';
import { questions as bIntl303 } from '../../content/bank/international/batch-intl-303';
import { questions as bIntl304 } from '../../content/bank/international/batch-intl-304';
import { questions as bIntl305 } from '../../content/bank/international/batch-intl-305';
import { questions as bIntl306 } from '../../content/bank/international/batch-intl-306';
import { questions as bIntl307 } from '../../content/bank/international/batch-intl-307';
import { questions as bIntl308 } from '../../content/bank/international/batch-intl-308';
import { questions as bIntl309 } from '../../content/bank/international/batch-intl-309';
import { questions as bIntl310 } from '../../content/bank/international/batch-intl-310';
import { questions as bIntl311 } from '../../content/bank/international/batch-intl-311';
import { questions as bIntl312 } from '../../content/bank/international/batch-intl-312';
import { questions as bIntl313 } from '../../content/bank/international/batch-intl-313';
import { questions as bIntl314 } from '../../content/bank/international/batch-intl-314';
import { questions as bIntl315 } from '../../content/bank/international/batch-intl-315';
import { questions as bIntl316 } from '../../content/bank/international/batch-intl-316';
import { questions as bIntl317 } from '../../content/bank/international/batch-intl-317';
import { questions as bIntl318 } from '../../content/bank/international/batch-intl-318';
import { questions as bIntl319 } from '../../content/bank/international/batch-intl-319';
import { questions as bIntl320 } from '../../content/bank/international/batch-intl-320';
import { questions as bIntl321 } from '../../content/bank/international/batch-intl-321';
import { questions as bIntl322 } from '../../content/bank/international/batch-intl-322';
import { questions as bIntl323 } from '../../content/bank/international/batch-intl-323';
import { questions as bIntl324 } from '../../content/bank/international/batch-intl-324';
import { questions as bIntl325 } from '../../content/bank/international/batch-intl-325';
import { questions as bIntl326 } from '../../content/bank/international/batch-intl-326';
import { questions as bIntl327 } from '../../content/bank/international/batch-intl-327';
import { questions as bIntl328 } from '../../content/bank/international/batch-intl-328';
import { questions as bIntl329 } from '../../content/bank/international/batch-intl-329';
import { questions as bIntl330 } from '../../content/bank/international/batch-intl-330';
import { questions as bIntl331 } from '../../content/bank/international/batch-intl-331';
import { questions as bIntl332 } from '../../content/bank/international/batch-intl-332';
import { questions as bIntl333 } from '../../content/bank/international/batch-intl-333';
import { questions as bIntl334 } from '../../content/bank/international/batch-intl-334';
import { questions as bIntl335 } from '../../content/bank/international/batch-intl-335';
import { questions as b1 } from '../../content/bank/batch-01';

describe('international question bank expansion', () => {
  const allIntl: QuestionContent[] = [
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
    ...bIntl161, ...bIntl162, ...bIntl163, ...bIntl164, ...bIntl165,
    ...bIntl166, ...bIntl167, ...bIntl168, ...bIntl169, ...bIntl170,
    ...bIntl171, ...bIntl172, ...bIntl173, ...bIntl174, ...bIntl175,
    ...bIntl176, ...bIntl177, ...bIntl178, ...bIntl179, ...bIntl180,
    ...bIntl181, ...bIntl182, ...bIntl183, ...bIntl184, ...bIntl185,
  ...bIntl186, ...bIntl187, ...bIntl188, ...bIntl189, ...bIntl190,
  ...bIntl191, ...bIntl192, ...bIntl193, ...bIntl194, ...bIntl195,
  ...bIntl196, ...bIntl197, ...bIntl198, ...bIntl199, ...bIntl200,
  ...bIntl201, ...bIntl202, ...bIntl203, ...bIntl204, ...bIntl205,
  ...bIntl206, ...bIntl207, ...bIntl208, ...bIntl209, ...bIntl210,
  ...bIntl211, ...bIntl212, ...bIntl213, ...bIntl214, ...bIntl215,
  ...bIntl216, ...bIntl217, ...bIntl218, ...bIntl219, ...bIntl220,
  ...bIntl221, ...bIntl222, ...bIntl223, ...bIntl224, ...bIntl225,
  ...bIntl226, ...bIntl227, ...bIntl228, ...bIntl229, ...bIntl230,
  ...bIntl231, ...bIntl232, ...bIntl233, ...bIntl234, ...bIntl235,
  ...bIntl236, ...bIntl237, ...bIntl238, ...bIntl239, ...bIntl240,
  ...bIntl241, ...bIntl242, ...bIntl243, ...bIntl244, ...bIntl245,
  ...bIntl246, ...bIntl247, ...bIntl248, ...bIntl249, ...bIntl250,
  ...bIntl251, ...bIntl252, ...bIntl253, ...bIntl254, ...bIntl255,
  ...bIntl256, ...bIntl257, ...bIntl258, ...bIntl259, ...bIntl260,
  ...bIntl261, ...bIntl262, ...bIntl263, ...bIntl264, ...bIntl265,
  ...bIntl266, ...bIntl267, ...bIntl268, ...bIntl269, ...bIntl270,
  ...bIntl271, ...bIntl272, ...bIntl273, ...bIntl274, ...bIntl275,
  ...bIntl276, ...bIntl277, ...bIntl278, ...bIntl279, ...bIntl280,
  ...bIntl281, ...bIntl282, ...bIntl283, ...bIntl284, ...bIntl285,
  ...bIntl286, ...bIntl287, ...bIntl288, ...bIntl289, ...bIntl290,
  ...bIntl291, ...bIntl292, ...bIntl293, ...bIntl294, ...bIntl295,
  ...bIntl296, ...bIntl297, ...bIntl298, ...bIntl299, ...bIntl300,
  ...bIntl301, ...bIntl302, ...bIntl303, ...bIntl304, ...bIntl305,
  ...bIntl306, ...bIntl307, ...bIntl308, ...bIntl309, ...bIntl310,
  ...bIntl311, ...bIntl312, ...bIntl313, ...bIntl314, ...bIntl315,
  ...bIntl316, ...bIntl317, ...bIntl318, ...bIntl319, ...bIntl320,
  ...bIntl321, ...bIntl322, ...bIntl323, ...bIntl324, ...bIntl325,
  ...bIntl326, ...bIntl327, ...bIntl328, ...bIntl329, ...bIntl330,
  ...bIntl331, ...bIntl332, ...bIntl333, ...bIntl334, ...bIntl335
  ];

  it('contains 32672 comprehensive original questions across all target exams', () => {
    expect(allIntl).toHaveLength(32672);
    expect(new Set(allIntl.map((q) => q.code)).size).toBe(32672);

    const exams = new Set(allIntl.map((q) => q.exam));
    expect(exams).toContain('Step 1');
    expect(exams).toContain('Step 2 CK');
    expect(exams).toContain('Step 3');
    expect(exams).toContain('PLAB / UKMLA');
    expect(exams).toContain('AMC');
    expect(exams).toContain('MCCQE');
    expect(exams).toContain('FCPS');
    expect(exams).toContain('NLE');
    expect(exams).toContain('NEET PG');
    expect(exams).toContain('MRCP');
    expect(exams).toContain('MRCEM');
    expect(exams).toContain('SMLE');
    expect(exams).toContain('HAAD / DHA');
    expect(exams).toContain('UHS MBBS');
  });

  it('all questions strictly have 5 distinct options and exactly 1 correct answer', () => {
    for (const q of allIntl) {
      expect(q.options).toHaveLength(5);
      const correct = q.options.filter((o) => o.correct);
      expect(correct).toHaveLength(1);
      const texts = new Set(q.options.map((o) => o.text.trim().toLowerCase()));
      expect(texts.size).toBe(5);
    }
  });

  it('every question and every option contains thorough explanations and valid references', () => {
    for (const q of allIntl) {
      expect(q.stem.length).toBeGreaterThanOrEqual(100);
      expect(q.explanation.length).toBeGreaterThanOrEqual(180);
      expect(q.objective).toBeTruthy();
      expect(q.references.length).toBeGreaterThanOrEqual(1);
      expect(q.references.every((r) => r.url && r.url.startsWith('https://'))).toBe(true);

      for (const o of q.options) {
        expect(o.explanation).toBeTruthy();
        expect(o.explanation!.trim().length).toBeGreaterThanOrEqual(35);
      }
    }
  });

  it('passes bankQuestionSchema and validateBank without errors or duplicates', () => {
    for (const q of allIntl) {
      const parsed = bankQuestionSchema.safeParse(q);
      if (!parsed.success) {
        console.error('Validation failure on question:', q.code, parsed.error.issues);
      }
      expect(parsed.success).toBe(true);
    }

    const validation1 = validateBank(bIntl1, b1);
    expect(validation1.errors).toEqual([]);

    const validation2 = validateBank(bIntl2, [...b1, ...bIntl1]);
    expect(validation2.errors).toEqual([]);

    const validation16 = validateBank(bIntl16, [...b1, ...bIntl1]);
    expect(validation16.errors).toEqual([]);
  });
});
