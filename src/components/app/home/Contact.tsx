"use client"
import { useLocale, useTranslations } from "next-intl"
import { Headset, MapPin, Phone, University, UserCog } from "lucide-react";


export default function Contact() {
    const currentLocal = useLocale();
    const t = useTranslations("HomePage");


    return (
        <div className="border-t">
            <div className="container grid gap-10 mx-auto py-10">
                <div className="max-w-xl w-full text-center mx-auto">
                    <h1 className="font-bold mb-4 text-2xl md:text-3xl lg:text-4xl text-foreground">
                        {t("contact.title")}
                    </h1>
                    <div className="h-2 max-w-24 md:max-w-xs mx-auto bg-amber-500 my-4"></div>
                    <span>{t("contact.sub_title")}</span>
                </div>

                <div className="grid grid-cols-1 gap-10 lg:flex">
                    <div className="flex-1">
                        <div className="relative overflow-hidden h-96 lg:h-full rounded-xl">
                            <a href="https://yandex.ru/maps/org/yuzhno_kazakhstanskiy_pedagogicheskiy_universitet_imeni_zbek_l_zh_n_bekov/125570740268/?utm_medium=mapframe&utm_source=maps" style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>
                                Южно-Казахстанский педагогический университет имени Өзбекәлі Жәнібеков
                            </a>
                            <a href="https://yandex.ru/maps/221/chimkent/category/university/184106140/?utm_medium=mapframe&utm_source=maps" style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>
                                ВУЗ в Шымкенте
                            </a>
                            <iframe src="https://yandex.ru/map-widget/v1/?indoorLevel=1&ll=69.593311%2C42.320968&mode=search&oid=125570740268&ol=biz&z=17.09" width="100%" height="100%" frameBorder="1" allowFullScreen={true} style={{ position: "relative" }}></iframe>
                        </div>
                    </div>

                    <div className="w-full grid gap-8 lg:max-w-lg">
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500 rounded-full text-secondary p-2">
                                <MapPin size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-foreground text-xl font-bold">{t("contact.form.address.label")}</h1>
                                <span>{t("contact.form.address.value")}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500 rounded-full text-secondary p-2">
                                <UserCog size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-foreground text-xl font-bold">{t("contact.form.addmission.label")}</h1>
                                <ul>
                                    <li>8 7252 21-41-01</li>
                                    <li>8 708 438 65 62</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500 rounded-full text-secondary p-2">
                                <University size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-foreground text-xl font-bold">{t("contact.form.office.label")}</h1>
                                <span>8 7252 30-14-59</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500 rounded-full text-secondary p-2">
                                <Headset size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-foreground text-xl font-bold">{t("contact.form.call-center.label")}</h1>
                                <ul>
                                    <li>8 7252 40-07-05</li>
                                    <li>8 708 438 65 61</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-amber-500 rounded-full text-secondary p-2">
                                <Phone size={32} strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h1 className="text-foreground text-xl font-bold">{t("contact.form.phones.label")}</h1>
                                <ul>
                                    <li>+7 (7252) 21-40-05</li>
                                    <li>+7 (7252) 21-03-70</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
