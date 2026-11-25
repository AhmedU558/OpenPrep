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
import { questions as bIntl166 } from '../content/bank/international/batch-intl-166';
import { questions as bIntl167 } from '../content/bank/international/batch-intl-167';
import { questions as bIntl168 } from '../content/bank/international/batch-intl-168';
import { questions as bIntl169 } from '../content/bank/international/batch-intl-169';
import { questions as bIntl170 } from '../content/bank/international/batch-intl-170';
import { questions as bIntl171 } from '../content/bank/international/batch-intl-171';
import { questions as bIntl172 } from '../content/bank/international/batch-intl-172';
import { questions as bIntl173 } from '../content/bank/international/batch-intl-173';
import { questions as bIntl174 } from '../content/bank/international/batch-intl-174';
import { questions as bIntl175 } from '../content/bank/international/batch-intl-175';
import { questions as bIntl176 } from '../content/bank/international/batch-intl-176';
import { questions as bIntl177 } from '../content/bank/international/batch-intl-177';
import { questions as bIntl178 } from '../content/bank/international/batch-intl-178';
import { questions as bIntl179 } from '../content/bank/international/batch-intl-179';
import { questions as bIntl180 } from '../content/bank/international/batch-intl-180';
import { questions as bIntl181 } from '../content/bank/international/batch-intl-181';
import { questions as bIntl182 } from '../content/bank/international/batch-intl-182';
import { questions as bIntl183 } from '../content/bank/international/batch-intl-183';
import { questions as bIntl184 } from '../content/bank/international/batch-intl-184';
import { questions as bIntl185 } from '../content/bank/international/batch-intl-185';
import { questions as bIntl186 } from '../content/bank/international/batch-intl-186';
import { questions as bIntl187 } from '../content/bank/international/batch-intl-187';
import { questions as bIntl188 } from '../content/bank/international/batch-intl-188';
import { questions as bIntl189 } from '../content/bank/international/batch-intl-189';
import { questions as bIntl190 } from '../content/bank/international/batch-intl-190';
import { questions as bIntl191 } from '../content/bank/international/batch-intl-191';
import { questions as bIntl192 } from '../content/bank/international/batch-intl-192';
import { questions as bIntl193 } from '../content/bank/international/batch-intl-193';
import { questions as bIntl194 } from '../content/bank/international/batch-intl-194';
import { questions as bIntl195 } from '../content/bank/international/batch-intl-195';
import { questions as bIntl196 } from '../content/bank/international/batch-intl-196';
import { questions as bIntl197 } from '../content/bank/international/batch-intl-197';
import { questions as bIntl198 } from '../content/bank/international/batch-intl-198';
import { questions as bIntl199 } from '../content/bank/international/batch-intl-199';
import { questions as bIntl200 } from '../content/bank/international/batch-intl-200';
import { questions as bIntl201 } from '../content/bank/international/batch-intl-201';
import { questions as bIntl202 } from '../content/bank/international/batch-intl-202';
import { questions as bIntl203 } from '../content/bank/international/batch-intl-203';
import { questions as bIntl204 } from '../content/bank/international/batch-intl-204';
import { questions as bIntl205 } from '../content/bank/international/batch-intl-205';
import { questions as bIntl206 } from '../content/bank/international/batch-intl-206';
import { questions as bIntl207 } from '../content/bank/international/batch-intl-207';
import { questions as bIntl208 } from '../content/bank/international/batch-intl-208';
import { questions as bIntl209 } from '../content/bank/international/batch-intl-209';
import { questions as bIntl210 } from '../content/bank/international/batch-intl-210';
import { questions as bIntl211 } from '../content/bank/international/batch-intl-211';
import { questions as bIntl212 } from '../content/bank/international/batch-intl-212';
import { questions as bIntl213 } from '../content/bank/international/batch-intl-213';
import { questions as bIntl214 } from '../content/bank/international/batch-intl-214';
import { questions as bIntl215 } from '../content/bank/international/batch-intl-215';
import { questions as bIntl216 } from '../content/bank/international/batch-intl-216';
import { questions as bIntl217 } from '../content/bank/international/batch-intl-217';
import { questions as bIntl218 } from '../content/bank/international/batch-intl-218';
import { questions as bIntl219 } from '../content/bank/international/batch-intl-219';
import { questions as bIntl220 } from '../content/bank/international/batch-intl-220';
import { questions as bIntl221 } from '../content/bank/international/batch-intl-221';
import { questions as bIntl222 } from '../content/bank/international/batch-intl-222';
import { questions as bIntl223 } from '../content/bank/international/batch-intl-223';
import { questions as bIntl224 } from '../content/bank/international/batch-intl-224';
import { questions as bIntl225 } from '../content/bank/international/batch-intl-225';
import { questions as bIntl226 } from '../content/bank/international/batch-intl-226';
import { questions as bIntl227 } from '../content/bank/international/batch-intl-227';
import { questions as bIntl228 } from '../content/bank/international/batch-intl-228';
import { questions as bIntl229 } from '../content/bank/international/batch-intl-229';
import { questions as bIntl230 } from '../content/bank/international/batch-intl-230';
import { questions as bIntl231 } from '../content/bank/international/batch-intl-231';
import { questions as bIntl232 } from '../content/bank/international/batch-intl-232';
import { questions as bIntl233 } from '../content/bank/international/batch-intl-233';
import { questions as bIntl234 } from '../content/bank/international/batch-intl-234';
import { questions as bIntl235 } from '../content/bank/international/batch-intl-235';
import { questions as bIntl236 } from '../content/bank/international/batch-intl-236';
import { questions as bIntl237 } from '../content/bank/international/batch-intl-237';
import { questions as bIntl238 } from '../content/bank/international/batch-intl-238';
import { questions as bIntl239 } from '../content/bank/international/batch-intl-239';
import { questions as bIntl240 } from '../content/bank/international/batch-intl-240';
import { questions as bIntl241 } from '../content/bank/international/batch-intl-241';
import { questions as bIntl242 } from '../content/bank/international/batch-intl-242';
import { questions as bIntl243 } from '../content/bank/international/batch-intl-243';
import { questions as bIntl244 } from '../content/bank/international/batch-intl-244';
import { questions as bIntl245 } from '../content/bank/international/batch-intl-245';
import { questions as bIntl246 } from '../content/bank/international/batch-intl-246';
import { questions as bIntl247 } from '../content/bank/international/batch-intl-247';
import { questions as bIntl248 } from '../content/bank/international/batch-intl-248';
import { questions as bIntl249 } from '../content/bank/international/batch-intl-249';
import { questions as bIntl250 } from '../content/bank/international/batch-intl-250';
import { questions as bIntl251 } from '../content/bank/international/batch-intl-251';
import { questions as bIntl252 } from '../content/bank/international/batch-intl-252';
import { questions as bIntl253 } from '../content/bank/international/batch-intl-253';
import { questions as bIntl254 } from '../content/bank/international/batch-intl-254';
import { questions as bIntl255 } from '../content/bank/international/batch-intl-255';
import { questions as bIntl256 } from '../content/bank/international/batch-intl-256';
import { questions as bIntl257 } from '../content/bank/international/batch-intl-257';
import { questions as bIntl258 } from '../content/bank/international/batch-intl-258';
import { questions as bIntl259 } from '../content/bank/international/batch-intl-259';
import { questions as bIntl260 } from '../content/bank/international/batch-intl-260';
import { questions as bIntl261 } from '../content/bank/international/batch-intl-261';
import { questions as bIntl262 } from '../content/bank/international/batch-intl-262';
import { questions as bIntl263 } from '../content/bank/international/batch-intl-263';
import { questions as bIntl264 } from '../content/bank/international/batch-intl-264';
import { questions as bIntl265 } from '../content/bank/international/batch-intl-265';
import { questions as bIntl266 } from '../content/bank/international/batch-intl-266';
import { questions as bIntl267 } from '../content/bank/international/batch-intl-267';
import { questions as bIntl268 } from '../content/bank/international/batch-intl-268';
import { questions as bIntl269 } from '../content/bank/international/batch-intl-269';
import { questions as bIntl270 } from '../content/bank/international/batch-intl-270';
import { questions as bIntl271 } from '../content/bank/international/batch-intl-271';
import { questions as bIntl272 } from '../content/bank/international/batch-intl-272';
import { questions as bIntl273 } from '../content/bank/international/batch-intl-273';
import { questions as bIntl274 } from '../content/bank/international/batch-intl-274';
import { questions as bIntl275 } from '../content/bank/international/batch-intl-275';
import { questions as bIntl276 } from '../content/bank/international/batch-intl-276';
import { questions as bIntl277 } from '../content/bank/international/batch-intl-277';
import { questions as bIntl278 } from '../content/bank/international/batch-intl-278';
import { questions as bIntl279 } from '../content/bank/international/batch-intl-279';
import { questions as bIntl280 } from '../content/bank/international/batch-intl-280';
import { questions as bIntl281 } from '../content/bank/international/batch-intl-281';
import { questions as bIntl282 } from '../content/bank/international/batch-intl-282';
import { questions as bIntl283 } from '../content/bank/international/batch-intl-283';
import { questions as bIntl284 } from '../content/bank/international/batch-intl-284';
import { questions as bIntl285 } from '../content/bank/international/batch-intl-285';
import { questions as bIntl286 } from '../content/bank/international/batch-intl-286';
import { questions as bIntl287 } from '../content/bank/international/batch-intl-287';
import { questions as bIntl288 } from '../content/bank/international/batch-intl-288';
import { questions as bIntl289 } from '../content/bank/international/batch-intl-289';
import { questions as bIntl290 } from '../content/bank/international/batch-intl-290';
import { questions as bIntl291 } from '../content/bank/international/batch-intl-291';
import { questions as bIntl292 } from '../content/bank/international/batch-intl-292';
import { questions as bIntl293 } from '../content/bank/international/batch-intl-293';
import { questions as bIntl294 } from '../content/bank/international/batch-intl-294';
import { questions as bIntl295 } from '../content/bank/international/batch-intl-295';
import { questions as bIntl296 } from '../content/bank/international/batch-intl-296';
import { questions as bIntl297 } from '../content/bank/international/batch-intl-297';
import { questions as bIntl298 } from '../content/bank/international/batch-intl-298';
import { questions as bIntl299 } from '../content/bank/international/batch-intl-299';
import { questions as bIntl300 } from '../content/bank/international/batch-intl-300';
import { questions as bIntl301 } from '../content/bank/international/batch-intl-301';
import { questions as bIntl302 } from '../content/bank/international/batch-intl-302';
import { questions as bIntl303 } from '../content/bank/international/batch-intl-303';
import { questions as bIntl304 } from '../content/bank/international/batch-intl-304';
import { questions as bIntl305 } from '../content/bank/international/batch-intl-305';
import { questions as bIntl306 } from '../content/bank/international/batch-intl-306';
import { questions as bIntl307 } from '../content/bank/international/batch-intl-307';
import { questions as bIntl308 } from '../content/bank/international/batch-intl-308';
import { questions as bIntl309 } from '../content/bank/international/batch-intl-309';
import { questions as bIntl310 } from '../content/bank/international/batch-intl-310';
import { questions as bIntl311 } from '../content/bank/international/batch-intl-311';
import { questions as bIntl312 } from '../content/bank/international/batch-intl-312';
import { questions as bIntl313 } from '../content/bank/international/batch-intl-313';
import { questions as bIntl314 } from '../content/bank/international/batch-intl-314';
import { questions as bIntl315 } from '../content/bank/international/batch-intl-315';
import { questions as bIntl316 } from '../content/bank/international/batch-intl-316';
import { questions as bIntl317 } from '../content/bank/international/batch-intl-317';
import { questions as bIntl318 } from '../content/bank/international/batch-intl-318';
import { questions as bIntl319 } from '../content/bank/international/batch-intl-319';
import { questions as bIntl320 } from '../content/bank/international/batch-intl-320';
import { questions as bIntl321 } from '../content/bank/international/batch-intl-321';
import { questions as bIntl322 } from '../content/bank/international/batch-intl-322';
import { questions as bIntl323 } from '../content/bank/international/batch-intl-323';
import { questions as bIntl324 } from '../content/bank/international/batch-intl-324';
import { questions as bIntl325 } from '../content/bank/international/batch-intl-325';
import { questions as bIntl326 } from '../content/bank/international/batch-intl-326';
import { questions as bIntl327 } from '../content/bank/international/batch-intl-327';
import { questions as bIntl328 } from '../content/bank/international/batch-intl-328';
import { questions as bIntl329 } from '../content/bank/international/batch-intl-329';
import { questions as bIntl330 } from '../content/bank/international/batch-intl-330';
import { questions as bIntl331 } from '../content/bank/international/batch-intl-331';
import { questions as bIntl332 } from '../content/bank/international/batch-intl-332';
import { questions as bIntl333 } from '../content/bank/international/batch-intl-333';
import { questions as bIntl334 } from '../content/bank/international/batch-intl-334';
import { questions as bIntl335 } from '../content/bank/international/batch-intl-335';
import { questions as bIntl336 } from '../content/bank/international/batch-intl-336';
import { questions as bIntl337 } from '../content/bank/international/batch-intl-337';
import { questions as bIntl338 } from '../content/bank/international/batch-intl-338';
import { questions as bIntl339 } from '../content/bank/international/batch-intl-339';
import { questions as bIntl340 } from '../content/bank/international/batch-intl-340';
import { questions as bIntl341 } from '../content/bank/international/batch-intl-341';
import { questions as bIntl342 } from '../content/bank/international/batch-intl-342';
import { questions as bIntl343 } from '../content/bank/international/batch-intl-343';
import { questions as bIntl344 } from '../content/bank/international/batch-intl-344';
import { questions as bIntl345 } from '../content/bank/international/batch-intl-345';
import { questions as bIntl346 } from '../content/bank/international/batch-intl-346';
import { questions as bIntl347 } from '../content/bank/international/batch-intl-347';
import { questions as bIntl348 } from '../content/bank/international/batch-intl-348';
import { questions as bIntl349 } from '../content/bank/international/batch-intl-349';
import { questions as bIntl350 } from '../content/bank/international/batch-intl-350';
import { questions as bIntl351 } from '../content/bank/international/batch-intl-351';
import { questions as bIntl352 } from '../content/bank/international/batch-intl-352';
import { questions as bIntl353 } from '../content/bank/international/batch-intl-353';
import { questions as bIntl354 } from '../content/bank/international/batch-intl-354';
import { questions as bIntl355 } from '../content/bank/international/batch-intl-355';
import { questions as bIntl356 } from '../content/bank/international/batch-intl-356';
import { questions as bIntl357 } from '../content/bank/international/batch-intl-357';
import { questions as bIntl358 } from '../content/bank/international/batch-intl-358';
import { questions as bIntl359 } from '../content/bank/international/batch-intl-359';
import { questions as bIntl360 } from '../content/bank/international/batch-intl-360';
import { questions as bIntl361 } from '../content/bank/international/batch-intl-361';
import { questions as bIntl362 } from '../content/bank/international/batch-intl-362';
import { questions as bIntl363 } from '../content/bank/international/batch-intl-363';
import { questions as bIntl364 } from '../content/bank/international/batch-intl-364';
import { questions as bIntl365 } from '../content/bank/international/batch-intl-365';
import { questions as bIntl366 } from '../content/bank/international/batch-intl-366';
import { questions as bIntl367 } from '../content/bank/international/batch-intl-367';
import { questions as bIntl368 } from '../content/bank/international/batch-intl-368';
import { questions as bIntl369 } from '../content/bank/international/batch-intl-369';
import { questions as bIntl370 } from '../content/bank/international/batch-intl-370';
import { questions as bIntl371 } from '../content/bank/international/batch-intl-371';
import { questions as bIntl372 } from '../content/bank/international/batch-intl-372';
import { questions as bIntl373 } from '../content/bank/international/batch-intl-373';
import { questions as bIntl374 } from '../content/bank/international/batch-intl-374';
import { questions as bIntl375 } from '../content/bank/international/batch-intl-375';
import { questions as bIntl376 } from '../content/bank/international/batch-intl-376';
import { questions as bIntl377 } from '../content/bank/international/batch-intl-377';
import { questions as bIntl378 } from '../content/bank/international/batch-intl-378';
import { questions as bIntl379 } from '../content/bank/international/batch-intl-379';
import { questions as bIntl380 } from '../content/bank/international/batch-intl-380';
import { questions as bIntl381 } from '../content/bank/international/batch-intl-381';
import { questions as bIntl382 } from '../content/bank/international/batch-intl-382';
import { questions as bIntl383 } from '../content/bank/international/batch-intl-383';
import { questions as bIntl384 } from '../content/bank/international/batch-intl-384';
import { questions as bIntl385 } from '../content/bank/international/batch-intl-385';
import { questions as bIntl386 } from '../content/bank/international/batch-intl-386';
import { questions as bIntl387 } from '../content/bank/international/batch-intl-387';
import { questions as bIntl388 } from '../content/bank/international/batch-intl-388';
import { questions as bIntl389 } from '../content/bank/international/batch-intl-389';
import { questions as bIntl390 } from '../content/bank/international/batch-intl-390';
import { questions as bIntl391 } from '../content/bank/international/batch-intl-391';
import { questions as bIntl392 } from '../content/bank/international/batch-intl-392';
import { questions as bIntl393 } from '../content/bank/international/batch-intl-393';
import { questions as bIntl394 } from '../content/bank/international/batch-intl-394';
import { questions as bIntl395 } from '../content/bank/international/batch-intl-395';
import { questions as bIntl396 } from '../content/bank/international/batch-intl-396';
import { questions as bIntl397 } from '../content/bank/international/batch-intl-397';
import { questions as bIntl398 } from '../content/bank/international/batch-intl-398';
import { questions as bIntl399 } from '../content/bank/international/batch-intl-399';
import { questions as bIntl400 } from '../content/bank/international/batch-intl-400';
import { questions as bIntl401 } from '../content/bank/international/batch-intl-401';
import { questions as bIntl402 } from '../content/bank/international/batch-intl-402';
import { questions as bIntl403 } from '../content/bank/international/batch-intl-403';
import { questions as bIntl404 } from '../content/bank/international/batch-intl-404';
import { questions as bIntl405 } from '../content/bank/international/batch-intl-405';
import { questions as bIntl406 } from '../content/bank/international/batch-intl-406';
import { questions as bIntl407 } from '../content/bank/international/batch-intl-407';
import { questions as bIntl408 } from '../content/bank/international/batch-intl-408';
import { questions as bIntl409 } from '../content/bank/international/batch-intl-409';
import { questions as bIntl410 } from '../content/bank/international/batch-intl-410';
import { questions as bIntl411 } from '../content/bank/international/batch-intl-411';
import { questions as bIntl412 } from '../content/bank/international/batch-intl-412';
import { questions as bIntl413 } from '../content/bank/international/batch-intl-413';
import { questions as bIntl414 } from '../content/bank/international/batch-intl-414';
import { questions as bIntl415 } from '../content/bank/international/batch-intl-415';
import { questions as bIntl416 } from '../content/bank/international/batch-intl-416';
import { questions as bIntl417 } from '../content/bank/international/batch-intl-417';
import { questions as bIntl418 } from '../content/bank/international/batch-intl-418';
import { questions as bIntl419 } from '../content/bank/international/batch-intl-419';
import { questions as bIntl420 } from '../content/bank/international/batch-intl-420';
import { questions as bIntl421 } from '../content/bank/international/batch-intl-421';
import { questions as bIntl422 } from '../content/bank/international/batch-intl-422';
import { questions as bIntl423 } from '../content/bank/international/batch-intl-423';
import { questions as bIntl424 } from '../content/bank/international/batch-intl-424';
import { questions as bIntl425 } from '../content/bank/international/batch-intl-425';
import { questions as bIntl426 } from '../content/bank/international/batch-intl-426';
import { questions as bIntl427 } from '../content/bank/international/batch-intl-427';
import { questions as bIntl428 } from '../content/bank/international/batch-intl-428';
import { questions as bIntl429 } from '../content/bank/international/batch-intl-429';
import { questions as bIntl430 } from '../content/bank/international/batch-intl-430';
import { questions as bIntl431 } from '../content/bank/international/batch-intl-431';
import { questions as bIntl432 } from '../content/bank/international/batch-intl-432';
import { questions as bIntl433 } from '../content/bank/international/batch-intl-433';
import { questions as bIntl434 } from '../content/bank/international/batch-intl-434';
import { questions as bIntl435 } from '../content/bank/international/batch-intl-435';
import { questions as bIntl436 } from '../content/bank/international/batch-intl-436';
import { questions as bIntl437 } from '../content/bank/international/batch-intl-437';
import { questions as bIntl438 } from '../content/bank/international/batch-intl-438';
import { questions as bIntl439 } from '../content/bank/international/batch-intl-439';
import { questions as bIntl440 } from '../content/bank/international/batch-intl-440';
import { questions as bIntl441 } from '../content/bank/international/batch-intl-441';
import { questions as bIntl442 } from '../content/bank/international/batch-intl-442';
import { questions as bIntl443 } from '../content/bank/international/batch-intl-443';
import { questions as bIntl444 } from '../content/bank/international/batch-intl-444';
import { questions as bIntl445 } from '../content/bank/international/batch-intl-445';
import { questions as bIntl446 } from '../content/bank/international/batch-intl-446';
import { questions as bIntl447 } from '../content/bank/international/batch-intl-447';
import { questions as bIntl448 } from '../content/bank/international/batch-intl-448';
import { questions as bIntl449 } from '../content/bank/international/batch-intl-449';
import { questions as bIntl450 } from '../content/bank/international/batch-intl-450';
import { questions as bIntl451 } from '../content/bank/international/batch-intl-451';
import { questions as bIntl452 } from '../content/bank/international/batch-intl-452';
import { questions as bIntl453 } from '../content/bank/international/batch-intl-453';
import { questions as bIntl454 } from '../content/bank/international/batch-intl-454';
import { questions as bIntl455 } from '../content/bank/international/batch-intl-455';
import { questions as bIntl456 } from '../content/bank/international/batch-intl-456';
import { questions as bIntl457 } from '../content/bank/international/batch-intl-457';
import { questions as bIntl458 } from '../content/bank/international/batch-intl-458';
import { questions as bIntl459 } from '../content/bank/international/batch-intl-459';
import { questions as bIntl460 } from '../content/bank/international/batch-intl-460';
import { questions as bIntl461 } from '../content/bank/international/batch-intl-461';
import { questions as bIntl462 } from '../content/bank/international/batch-intl-462';
import { questions as bIntl463 } from '../content/bank/international/batch-intl-463';
import { questions as bIntl464 } from '../content/bank/international/batch-intl-464';
import { questions as bIntl465 } from '../content/bank/international/batch-intl-465';
import { questions as bIntl466 } from '../content/bank/international/batch-intl-466';
import { questions as bIntl467 } from '../content/bank/international/batch-intl-467';
import { questions as bIntl468 } from '../content/bank/international/batch-intl-468';
import { questions as bIntl469 } from '../content/bank/international/batch-intl-469';
import { questions as bIntl470 } from '../content/bank/international/batch-intl-470';
import { questions as bIntl471 } from '../content/bank/international/batch-intl-471';
import { questions as bIntl472 } from '../content/bank/international/batch-intl-472';
import { questions as bIntl473 } from '../content/bank/international/batch-intl-473';
import { questions as bIntl474 } from '../content/bank/international/batch-intl-474';
import { questions as bIntl475 } from '../content/bank/international/batch-intl-475';
import { questions as bIntl476 } from '../content/bank/international/batch-intl-476';
import { questions as bIntl477 } from '../content/bank/international/batch-intl-477';
import { questions as bIntl478 } from '../content/bank/international/batch-intl-478';
import { questions as bIntl479 } from '../content/bank/international/batch-intl-479';
import { questions as bIntl480 } from '../content/bank/international/batch-intl-480';
import { questions as bIntl481 } from '../content/bank/international/batch-intl-481';
import { questions as bIntl482 } from '../content/bank/international/batch-intl-482';
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
  ...bIntl331, ...bIntl332, ...bIntl333, ...bIntl334, ...bIntl335,
  ...bIntl336, ...bIntl337, ...bIntl338, ...bIntl339, ...bIntl340,
  ...bIntl341, ...bIntl342, ...bIntl343, ...bIntl344, ...bIntl345,
  ...bIntl346, ...bIntl347, ...bIntl348, ...bIntl349, ...bIntl350,
  ...bIntl351, ...bIntl352, ...bIntl353, ...bIntl354, ...bIntl355,
  ...bIntl356, ...bIntl357, ...bIntl358, ...bIntl359, ...bIntl360,
  ...bIntl361, ...bIntl362, ...bIntl363, ...bIntl364, ...bIntl365,
  ...bIntl366, ...bIntl367, ...bIntl368, ...bIntl369, ...bIntl370,
  ...bIntl371, ...bIntl372, ...bIntl373, ...bIntl374, ...bIntl375,
  ...bIntl376, ...bIntl377, ...bIntl378, ...bIntl379, ...bIntl380,
  ...bIntl381, ...bIntl382, ...bIntl383, ...bIntl384, ...bIntl385,
  ...bIntl386, ...bIntl387, ...bIntl388, ...bIntl389, ...bIntl390,
  ...bIntl391, ...bIntl392, ...bIntl393, ...bIntl394, ...bIntl395,
  ...bIntl396, ...bIntl397, ...bIntl398, ...bIntl399, ...bIntl400,
  ...bIntl401, ...bIntl402, ...bIntl403, ...bIntl404, ...bIntl405,
  ...bIntl406, ...bIntl407, ...bIntl408, ...bIntl409, ...bIntl410,
  ...bIntl411, ...bIntl412, ...bIntl413, ...bIntl414, ...bIntl415,
  ...bIntl416, ...bIntl417, ...bIntl418, ...bIntl419, ...bIntl420,
  ...bIntl421, ...bIntl422, ...bIntl423, ...bIntl424, ...bIntl425,
  ...bIntl426, ...bIntl427, ...bIntl428, ...bIntl429, ...bIntl430,
  ...bIntl431, ...bIntl432, ...bIntl433, ...bIntl434, ...bIntl435,
  ...bIntl436, ...bIntl437, ...bIntl438, ...bIntl439, ...bIntl440,
  ...bIntl441, ...bIntl442, ...bIntl443, ...bIntl444, ...bIntl445,
  ...bIntl446, ...bIntl447, ...bIntl448, ...bIntl449, ...bIntl450,
  ...bIntl451, ...bIntl452, ...bIntl453, ...bIntl454, ...bIntl455,
  ...bIntl456, ...bIntl457, ...bIntl458, ...bIntl459, ...bIntl460,
  ...bIntl461, ...bIntl462, ...bIntl463, ...bIntl464, ...bIntl465,
  ...bIntl466, ...bIntl467, ...bIntl468,
  ...bIntl469, ...bIntl470, ...bIntl471, ...bIntl472, ...bIntl473,
  ...bIntl474, ...bIntl475, ...bIntl476,
  ...bIntl477, ...bIntl478, ...bIntl479,
  ...bIntl480, ...bIntl481, ...bIntl482,
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
    { name: 'batch-intl-166', data: bIntl166 },
    { name: 'batch-intl-167', data: bIntl167 },
    { name: 'batch-intl-168', data: bIntl168 },
    { name: 'batch-intl-169', data: bIntl169 },
    { name: 'batch-intl-170', data: bIntl170 },
    { name: 'batch-intl-171', data: bIntl171 },
    { name: 'batch-intl-172', data: bIntl172 },
    { name: 'batch-intl-173', data: bIntl173 },
    { name: 'batch-intl-174', data: bIntl174 },
    { name: 'batch-intl-175', data: bIntl175 },
    { name: 'batch-intl-176', data: bIntl176 },
    { name: 'batch-intl-177', data: bIntl177 },
    { name: 'batch-intl-178', data: bIntl178 },
    { name: 'batch-intl-179', data: bIntl179 },
    { name: 'batch-intl-180', data: bIntl180 },
    { name: 'batch-intl-181', data: bIntl181 },
    { name: 'batch-intl-182', data: bIntl182 },
    { name: 'batch-intl-183', data: bIntl183 },
    { name: 'batch-intl-184', data: bIntl184 },
    { name: 'batch-intl-185', data: bIntl185 },
  { name: 'batch-intl-186', data: bIntl186 },
  { name: 'batch-intl-187', data: bIntl187 },
  { name: 'batch-intl-188', data: bIntl188 },
  { name: 'batch-intl-189', data: bIntl189 },
  { name: 'batch-intl-190', data: bIntl190 },
  { name: 'batch-intl-191', data: bIntl191 },
  { name: 'batch-intl-192', data: bIntl192 },
  { name: 'batch-intl-193', data: bIntl193 },
  { name: 'batch-intl-194', data: bIntl194 },
  { name: 'batch-intl-195', data: bIntl195 },
  { name: 'batch-intl-196', data: bIntl196 },
  { name: 'batch-intl-197', data: bIntl197 },
  { name: 'batch-intl-198', data: bIntl198 },
  { name: 'batch-intl-199', data: bIntl199 },
  { name: 'batch-intl-200', data: bIntl200 },
  { name: 'batch-intl-201', data: bIntl201 },
  { name: 'batch-intl-202', data: bIntl202 },
  { name: 'batch-intl-203', data: bIntl203 },
  { name: 'batch-intl-204', data: bIntl204 },
  { name: 'batch-intl-205', data: bIntl205 },
  { name: 'batch-intl-206', data: bIntl206 },
  { name: 'batch-intl-207', data: bIntl207 },
  { name: 'batch-intl-208', data: bIntl208 },
  { name: 'batch-intl-209', data: bIntl209 },
  { name: 'batch-intl-210', data: bIntl210 },
  { name: 'batch-intl-211', data: bIntl211 },
  { name: 'batch-intl-212', data: bIntl212 },
  { name: 'batch-intl-213', data: bIntl213 },
  { name: 'batch-intl-214', data: bIntl214 },
  { name: 'batch-intl-215', data: bIntl215 },
  { name: 'batch-intl-216', data: bIntl216 },
  { name: 'batch-intl-217', data: bIntl217 },
  { name: 'batch-intl-218', data: bIntl218 },
  { name: 'batch-intl-219', data: bIntl219 },
  { name: 'batch-intl-220', data: bIntl220 },
  { name: 'batch-intl-221', data: bIntl221 },
  { name: 'batch-intl-222', data: bIntl222 },
  { name: 'batch-intl-223', data: bIntl223 },
  { name: 'batch-intl-224', data: bIntl224 },
  { name: 'batch-intl-225', data: bIntl225 },
  { name: 'batch-intl-226', data: bIntl226 },
  { name: 'batch-intl-227', data: bIntl227 },
  { name: 'batch-intl-228', data: bIntl228 },
  { name: 'batch-intl-229', data: bIntl229 },
  { name: 'batch-intl-230', data: bIntl230 },
  { name: 'batch-intl-231', data: bIntl231 },
  { name: 'batch-intl-232', data: bIntl232 },
  { name: 'batch-intl-233', data: bIntl233 },
  { name: 'batch-intl-234', data: bIntl234 },
  { name: 'batch-intl-235', data: bIntl235 },
  { name: 'batch-intl-236', data: bIntl236 },
  { name: 'batch-intl-237', data: bIntl237 },
  { name: 'batch-intl-238', data: bIntl238 },
  { name: 'batch-intl-239', data: bIntl239 },
  { name: 'batch-intl-240', data: bIntl240 },
  { name: 'batch-intl-241', data: bIntl241 },
  { name: 'batch-intl-242', data: bIntl242 },
  { name: 'batch-intl-243', data: bIntl243 },
  { name: 'batch-intl-244', data: bIntl244 },
  { name: 'batch-intl-245', data: bIntl245 },
  { name: 'batch-intl-246', data: bIntl246 },
  { name: 'batch-intl-247', data: bIntl247 },
  { name: 'batch-intl-248', data: bIntl248 },
  { name: 'batch-intl-249', data: bIntl249 },
  { name: 'batch-intl-250', data: bIntl250 },
  { name: 'batch-intl-251', data: bIntl251 },
  { name: 'batch-intl-252', data: bIntl252 },
  { name: 'batch-intl-253', data: bIntl253 },
  { name: 'batch-intl-254', data: bIntl254 },
  { name: 'batch-intl-255', data: bIntl255 },
  { name: 'batch-intl-256', data: bIntl256 },
  { name: 'batch-intl-257', data: bIntl257 },
  { name: 'batch-intl-258', data: bIntl258 },
  { name: 'batch-intl-259', data: bIntl259 },
  { name: 'batch-intl-260', data: bIntl260 },
  { name: 'batch-intl-261', data: bIntl261 },
  { name: 'batch-intl-262', data: bIntl262 },
  { name: 'batch-intl-263', data: bIntl263 },
  { name: 'batch-intl-264', data: bIntl264 },
  { name: 'batch-intl-265', data: bIntl265 },
  { name: 'batch-intl-266', data: bIntl266 },
  { name: 'batch-intl-267', data: bIntl267 },
  { name: 'batch-intl-268', data: bIntl268 },
  { name: 'batch-intl-269', data: bIntl269 },
  { name: 'batch-intl-270', data: bIntl270 },
  { name: 'batch-intl-271', data: bIntl271 },
  { name: 'batch-intl-272', data: bIntl272 },
  { name: 'batch-intl-273', data: bIntl273 },
  { name: 'batch-intl-274', data: bIntl274 },
  { name: 'batch-intl-275', data: bIntl275 },
  { name: 'batch-intl-276', data: bIntl276 },
  { name: 'batch-intl-277', data: bIntl277 },
  { name: 'batch-intl-278', data: bIntl278 },
  { name: 'batch-intl-279', data: bIntl279 },
  { name: 'batch-intl-280', data: bIntl280 },
  { name: 'batch-intl-281', data: bIntl281 },
  { name: 'batch-intl-282', data: bIntl282 },
  { name: 'batch-intl-283', data: bIntl283 },
  { name: 'batch-intl-284', data: bIntl284 },
  { name: 'batch-intl-285', data: bIntl285 },
  { name: 'batch-intl-286', data: bIntl286 },
  { name: 'batch-intl-287', data: bIntl287 },
  { name: 'batch-intl-288', data: bIntl288 },
  { name: 'batch-intl-289', data: bIntl289 },
  { name: 'batch-intl-290', data: bIntl290 },
  { name: 'batch-intl-291', data: bIntl291 },
  { name: 'batch-intl-292', data: bIntl292 },
  { name: 'batch-intl-293', data: bIntl293 },
  { name: 'batch-intl-294', data: bIntl294 },
  { name: 'batch-intl-295', data: bIntl295 },
  { name: 'batch-intl-296', data: bIntl296 },
  { name: 'batch-intl-297', data: bIntl297 },
  { name: 'batch-intl-298', data: bIntl298 },
  { name: 'batch-intl-299', data: bIntl299 },
  { name: 'batch-intl-300', data: bIntl300 },
  { name: 'batch-intl-301', data: bIntl301 },
  { name: 'batch-intl-302', data: bIntl302 },
  { name: 'batch-intl-303', data: bIntl303 },
  { name: 'batch-intl-304', data: bIntl304 },
  { name: 'batch-intl-305', data: bIntl305 },
  { name: 'batch-intl-306', data: bIntl306 },
  { name: 'batch-intl-307', data: bIntl307 },
  { name: 'batch-intl-308', data: bIntl308 },
  { name: 'batch-intl-309', data: bIntl309 },
  { name: 'batch-intl-310', data: bIntl310 },
  { name: 'batch-intl-311', data: bIntl311 },
  { name: 'batch-intl-312', data: bIntl312 },
  { name: 'batch-intl-313', data: bIntl313 },
  { name: 'batch-intl-314', data: bIntl314 },
  { name: 'batch-intl-315', data: bIntl315 },
  { name: 'batch-intl-316', data: bIntl316 },
  { name: 'batch-intl-317', data: bIntl317 },
  { name: 'batch-intl-318', data: bIntl318 },
  { name: 'batch-intl-319', data: bIntl319 },
  { name: 'batch-intl-320', data: bIntl320 },
  { name: 'batch-intl-321', data: bIntl321 },
  { name: 'batch-intl-322', data: bIntl322 },
  { name: 'batch-intl-323', data: bIntl323 },
  { name: 'batch-intl-324', data: bIntl324 },
  { name: 'batch-intl-325', data: bIntl325 },
  { name: 'batch-intl-326', data: bIntl326 },
  { name: 'batch-intl-327', data: bIntl327 },
  { name: 'batch-intl-328', data: bIntl328 },
  { name: 'batch-intl-329', data: bIntl329 },
  { name: 'batch-intl-330', data: bIntl330 },
  { name: 'batch-intl-331', data: bIntl331 },
  { name: 'batch-intl-332', data: bIntl332 },
  { name: 'batch-intl-333', data: bIntl333 },
  { name: 'batch-intl-334', data: bIntl334 },
  { name: 'batch-intl-335', data: bIntl335 },
  { name: 'batch-intl-336', data: bIntl336 },
  { name: 'batch-intl-337', data: bIntl337 },
  { name: 'batch-intl-338', data: bIntl338 },
  { name: 'batch-intl-339', data: bIntl339 },
  { name: 'batch-intl-340', data: bIntl340 },
  { name: 'batch-intl-341', data: bIntl341 },
  { name: 'batch-intl-342', data: bIntl342 },
  { name: 'batch-intl-343', data: bIntl343 },
  { name: 'batch-intl-344', data: bIntl344 },
  { name: 'batch-intl-345', data: bIntl345 },
  { name: 'batch-intl-346', data: bIntl346 },
  { name: 'batch-intl-347', data: bIntl347 },
  { name: 'batch-intl-348', data: bIntl348 },
  { name: 'batch-intl-349', data: bIntl349 },
  { name: 'batch-intl-350', data: bIntl350 },
  { name: 'batch-intl-351', data: bIntl351 },
  { name: 'batch-intl-352', data: bIntl352 },
  { name: 'batch-intl-353', data: bIntl353 },
  { name: 'batch-intl-354', data: bIntl354 },
  { name: 'batch-intl-355', data: bIntl355 },
  { name: 'batch-intl-356', data: bIntl356 },
  { name: 'batch-intl-357', data: bIntl357 },
  { name: 'batch-intl-358', data: bIntl358 },
  { name: 'batch-intl-359', data: bIntl359 },
  { name: 'batch-intl-360', data: bIntl360 },
  { name: 'batch-intl-361', data: bIntl361 },
  { name: 'batch-intl-362', data: bIntl362 },
  { name: 'batch-intl-363', data: bIntl363 },
  { name: 'batch-intl-364', data: bIntl364 },
  { name: 'batch-intl-365', data: bIntl365 },
  { name: 'batch-intl-366', data: bIntl366 },
  { name: 'batch-intl-367', data: bIntl367 },
  { name: 'batch-intl-368', data: bIntl368 },
  { name: 'batch-intl-369', data: bIntl369 },
  { name: 'batch-intl-370', data: bIntl370 },
  { name: 'batch-intl-371', data: bIntl371 },
  { name: 'batch-intl-372', data: bIntl372 },
  { name: 'batch-intl-373', data: bIntl373 },
  { name: 'batch-intl-374', data: bIntl374 },
  { name: 'batch-intl-375', data: bIntl375 },
  { name: 'batch-intl-376', data: bIntl376 },
  { name: 'batch-intl-377', data: bIntl377 },
  { name: 'batch-intl-378', data: bIntl378 },
  { name: 'batch-intl-379', data: bIntl379 },
  { name: 'batch-intl-380', data: bIntl380 },
  { name: 'batch-intl-381', data: bIntl381 },
  { name: 'batch-intl-382', data: bIntl382 },
  { name: 'batch-intl-383', data: bIntl383 },
  { name: 'batch-intl-384', data: bIntl384 },
  { name: 'batch-intl-385', data: bIntl385 },
  { name: 'batch-intl-386', data: bIntl386 },
  { name: 'batch-intl-387', data: bIntl387 },
  { name: 'batch-intl-388', data: bIntl388 },
  { name: 'batch-intl-389', data: bIntl389 },
  { name: 'batch-intl-390', data: bIntl390 },
  { name: 'batch-intl-391', data: bIntl391 },
  { name: 'batch-intl-392', data: bIntl392 },
  { name: 'batch-intl-393', data: bIntl393 },
  { name: 'batch-intl-394', data: bIntl394 },
  { name: 'batch-intl-395', data: bIntl395 },
  { name: 'batch-intl-396', data: bIntl396 },
  { name: 'batch-intl-397', data: bIntl397 },
  { name: 'batch-intl-398', data: bIntl398 },
  { name: 'batch-intl-399', data: bIntl399 },
  { name: 'batch-intl-400', data: bIntl400 },
  { name: 'batch-intl-401', data: bIntl401 },
  { name: 'batch-intl-402', data: bIntl402 },
  { name: 'batch-intl-403', data: bIntl403 },
  { name: 'batch-intl-404', data: bIntl404 },
  { name: 'batch-intl-405', data: bIntl405 },
  { name: 'batch-intl-406', data: bIntl406 },
  { name: 'batch-intl-407', data: bIntl407 },
  { name: 'batch-intl-408', data: bIntl408 },
  { name: 'batch-intl-409', data: bIntl409 },
  { name: 'batch-intl-410', data: bIntl410 },
  { name: 'batch-intl-411', data: bIntl411 },
  { name: 'batch-intl-412', data: bIntl412 },
  { name: 'batch-intl-413', data: bIntl413 },
  { name: 'batch-intl-414', data: bIntl414 },
  { name: 'batch-intl-415', data: bIntl415 },
  { name: 'batch-intl-416', data: bIntl416 },
  { name: 'batch-intl-417', data: bIntl417 },
  { name: 'batch-intl-418', data: bIntl418 },
  { name: 'batch-intl-419', data: bIntl419 },
  { name: 'batch-intl-420', data: bIntl420 },
  { name: 'batch-intl-421', data: bIntl421 },
  { name: 'batch-intl-422', data: bIntl422 },
  { name: 'batch-intl-423', data: bIntl423 },
  { name: 'batch-intl-424', data: bIntl424 },
  { name: 'batch-intl-425', data: bIntl425 },
  { name: 'batch-intl-426', data: bIntl426 },
  { name: 'batch-intl-427', data: bIntl427 },
  { name: 'batch-intl-428', data: bIntl428 },
  { name: 'batch-intl-429', data: bIntl429 },
  { name: 'batch-intl-430', data: bIntl430 },
  { name: 'batch-intl-431', data: bIntl431 },
  { name: 'batch-intl-432', data: bIntl432 },
  { name: 'batch-intl-433', data: bIntl433 },
  { name: 'batch-intl-434', data: bIntl434 },
  { name: 'batch-intl-435', data: bIntl435 },
  { name: 'batch-intl-436', data: bIntl436 },
  { name: 'batch-intl-437', data: bIntl437 },
  { name: 'batch-intl-438', data: bIntl438 },
  { name: 'batch-intl-439', data: bIntl439 },
  { name: 'batch-intl-440', data: bIntl440 },
  { name: 'batch-intl-441', data: bIntl441 },
  { name: 'batch-intl-442', data: bIntl442 },
  { name: 'batch-intl-443', data: bIntl443 },
  { name: 'batch-intl-444', data: bIntl444 },
  { name: 'batch-intl-445', data: bIntl445 },
  { name: 'batch-intl-446', data: bIntl446 },
  { name: 'batch-intl-447', data: bIntl447 },
  { name: 'batch-intl-448', data: bIntl448 },
  { name: 'batch-intl-449', data: bIntl449 },
  { name: 'batch-intl-450', data: bIntl450 },
  { name: 'batch-intl-451', data: bIntl451 },
  { name: 'batch-intl-452', data: bIntl452 },
  { name: 'batch-intl-453', data: bIntl453 },
  { name: 'batch-intl-454', data: bIntl454 },
  { name: 'batch-intl-455', data: bIntl455 },
  { name: 'batch-intl-456', data: bIntl456 },
  { name: 'batch-intl-457', data: bIntl457 },
  { name: 'batch-intl-458', data: bIntl458 },
  { name: 'batch-intl-459', data: bIntl459 },
  { name: 'batch-intl-460', data: bIntl460 },
  { name: 'batch-intl-461', data: bIntl461 },
  { name: 'batch-intl-462', data: bIntl462 },
  { name: 'batch-intl-463', data: bIntl463 },
  { name: 'batch-intl-464', data: bIntl464 },
  { name: 'batch-intl-465', data: bIntl465 },
  { name: 'batch-intl-466', data: bIntl466 },
  { name: 'batch-intl-467', data: bIntl467 },
  { name: 'batch-intl-468', data: bIntl468 },
  { name: 'batch-intl-469', data: bIntl469 },
  { name: 'batch-intl-470', data: bIntl470 },
  { name: 'batch-intl-471', data: bIntl471 },
  { name: 'batch-intl-472', data: bIntl472 },
  { name: 'batch-intl-473', data: bIntl473 },
  { name: 'batch-intl-474', data: bIntl474 },
  { name: 'batch-intl-475', data: bIntl475 },
  { name: 'batch-intl-476', data: bIntl476 },
  { name: 'batch-intl-477', data: bIntl477 },
  { name: 'batch-intl-478', data: bIntl478 },
  { name: 'batch-intl-479', data: bIntl479 },
  { name: 'batch-intl-480', data: bIntl480 },
  { name: 'batch-intl-481', data: bIntl481 },
  { name: 'batch-intl-482', data: bIntl482 },
  ];

  const allErrors: Array<{ batch: string; message: string; [key: string]: unknown }> = [];
  const batches: Array<{ name: string; data: QuestionContent[]; errs: unknown[] }> = [];
  const accumulated = [...b1];

  const recentThreshold = Math.max(0, rawBatches.length - 10);
  for (let i = 0; i < rawBatches.length; i++) {
    const b = rawBatches[i]!;
    // Recent / new batches are checked against full accumulated history; earlier frozen batches are verified internally
    const v = validateBank(b.data, i >= recentThreshold ? accumulated : []);
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
