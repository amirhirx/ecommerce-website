import Image from "next/image"
import Link from "next/link"

import { FaBox } from "react-icons/fa"
import { MdPayments } from "react-icons/md"
import { BiSupport } from "react-icons/bi"
import { TbTruckReturn } from "react-icons/tb"
import { GiShop } from "react-icons/gi"
import { SlSocialInstagram } from "react-icons/sl"
import ScrollTopButton from "./ScrollTopButton"
import { BsTwitterX } from "react-icons/bs"
import { SiAparat, SiLinkedin } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="flex items-center justify-between p-4">
                <div className="flex flex-col md:block">
                    <div className="flex items-center gap-2">
                        <Image
                            alt="Logo"
                            src={"/logo.svg"}
                            width={36}
                            height={36}
                        />
                        <h4 className="text-xl font-black text-green-400">
                            فروشگاه
                        </h4>
                    </div>
                    <Link href={"tel:02112345678"} className="text-sm">
                        تلفن پشتیبانی 02112345678{" "}
                    </Link>
                    <span className="text-sm md:mr-2">
                        ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
                    </span>
                </div>
                <div>
                    <ScrollTopButton />
                </div>
            </div>
            <div className="lg:flex hidden justify-center items-center gap-20 px-4 py-8">
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-green-400 p-4 text-white rounded-2xl">
                        <FaBox className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold">امکان تحویل اکسپرس</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-green-400 p-4 text-white rounded-2xl">
                        <MdPayments className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold">امکان پرداخت در محل</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-green-400 p-4 text-white rounded-2xl">
                        <BiSupport className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold">۷ روز هفته ۲۴ ساعته</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-green-400 p-4 text-white rounded-2xl">
                        <TbTruckReturn className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold">ضمانت برگشت کالا</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <div className="bg-green-400 p-4 text-white rounded-2xl">
                        <GiShop className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-semibold">ضمانت اصل بودن کالا</p>
                </div>
            </div>
            <div className="p-4 grid md:grid-cols-4 md:grid-rows-1 grid-rows-4">
                <div>
                    <h3 className="text-lg font-bold">فروشگاه آنلاین</h3>
                    <ul className="space-y-4 py-2 text-sm text-gray-700 font-medium">
                        <li>
                            <Link href={"/"}>وبلاگ</Link>
                        </li>
                        <li>
                            <Link href={"/"}>فروش</Link>
                        </li>
                        <li>
                            <Link href={"/"}>فرصت های شغلی</Link>
                        </li>
                        <li>
                            <Link href={"/"}>گزارش تخلف</Link>
                        </li>
                        <li>
                            <Link href={"/"}>تماس با ما</Link>
                        </li>
                        <li>
                            <Link href={"/"}>درباره</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold">خدمات مشتریان</h3>
                    <ul className="space-y-4 py-2 text-sm text-gray-700 font-medium">
                        <li>
                            <Link href={"/"}>پرسش های متداول</Link>
                        </li>
                        <li>
                            <Link href={"/"}>بازگرداندن کالا</Link>
                        </li>
                        <li>
                            <Link href={"/"}>شرایط استفاده</Link>
                        </li>
                        <li>
                            <Link href={"/"}>حریم خصوصی</Link>
                        </li>
                        <li>
                            <Link href={"/"}>گزارش باگ</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold">رهنمای خرید</h3>
                    <ul className="space-y-4 py-2 text-sm text-gray-700 font-medium">
                        <li>
                            <Link href={"/"}>نحوه ثبت سفارش</Link>
                        </li>
                        <li>
                            <Link href={"/"}>رویه ارسال سفارش</Link>
                        </li>
                        <li>
                            <Link href={"/"}>شیوه های پرداخت</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold">همراه ما باشید!</h3>
                    <div className="grid grid-cols-4 p-4 text-gray-500">
                        <Link href={"#instagram"}>
                            <SlSocialInstagram className="w-8 h-8" />
                        </Link>
                        <Link href={"#aparat"}>
                            <SiAparat className="w-8 h-8" />
                        </Link>
                        <Link href={"#twitter"}>
                            <BsTwitterX className="w-8 h-8" />
                        </Link>
                        <Link href={"#linkedin"}>
                            <SiLinkedin className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold">فروشگاه آنلاین</h3>
                <p className="text-sm max-w-1/2 text-gray-700 leading-6 line-clamp-4">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
            <div className="text-center bg-linear-to-r from-green-400  bg-green-500 to-green-600 text-white p-2">
                <p className="font-bold text-sm">فروشگاه آنلاین ۱۴۰۴ ©</p>
            </div>
        </footer>
    )
}
