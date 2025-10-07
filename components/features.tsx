import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Globe, Instagram, LinkedinIcon, YoutubeIcon, FacebookIcon, GemIcon, TwitterIcon, Target, Users, Lightbulb, TrendingUp, Zap, Star } from 'lucide-react'

export function Features() {
    return (
        <section className="dark:bg-muted/25 bg-zinc-50 py-16 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-5xl text-center font-semibold mb-10 text-red-600 font-montserrat">Solution Proposed</h2>
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden border-red-600 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl bg-gradient-to-br from-white to-red-50">
                        <CardHeader>
                            <div className="md:p-6">
                                <div className="flex items-center justify-center gap-3 mb-8">
                                  
                                    <h3 className="mx-auto max-w-md text-center text-lg font-semibold sm:text-2xl font-montserrat text-red-600">Approach</h3>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-[-10]">
                                    {[
                                        { name: "Mix of Strategy", icon: Lightbulb },
                                        { name: "Functional", icon: Zap },
                                        { name: "Operational", icon: TrendingUp }
                                    ].map((area, index) => (
                                        <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                <area.icon className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                                                <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{area.name}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>

                        <div className="relative h-fit pl-6 md:pl-12">
                            <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>

                            <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                <img
                                    src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={1207}
                                    height={929}
                                />
                                <img
                                    src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                                    className="shadow dark:hidden"
                                    alt="payments illustration light"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-600 hover:border-red-500 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl bg-gradient-to-br from-white via-red-50 to-white">
                        <div className="flex items-center justify-center gap-3 mt-6 mb-4">
                           
                            <p className="mx-auto max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6 text-red-600 font-montserrat">Focus Areas:</p>
                        </div>

                        <CardContent className="mt-auto h-fit">
                            <div className="grid grid-cols-1 gap-4 mb-[-10]">
                                {[
                                    { name: "Social Media", color: "#00D6E8" },
                                    { name: "Digital PR", color: "#dc2626" },
                                    { name: "Thought Leadership Forums and Bodies", color: "#00D6E8" },
                                    { name: "Local Industry Associations Communiqué", color: "#dc2626" },
                                    { name: "Employer Branding", color: "#00D6E8" },
                                    { name: "Brand Ambassador Engagement", color: "#dc2626" }
                                ].map((area, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: area.color}}></div>
                                            <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{area.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                                        className="hidden dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                                        className="shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div> */}
                        </CardContent>
                    </Card>
                    <Card className="group p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-600 hover:border-red-500 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12 bg-gradient-to-br from-white to-red-50">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            
                            <p className="mx-auto max-w-md text-balance text-center text-lg font-semibold sm:text-2xl text-red-600 font-montserrat">Strategic Marketing Support:</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 mb-6">
                            {[
                                { name: "Themes and Content manifestation Planning", color: "#dc2626" },
                                { name: "Visual Communication Planning", color: "#00D6E8" },
                                { name: "Digital-Social Media Planning", color: "#dc2626" },
                                { name: "Digital PR and Publications Planning", color: "#00D6E8" },
                                { name: "Data and Analytics", color: "#dc2626" }
                            ].map((area, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: area.color}}></div>
                                        <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{area.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-6">
                            <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-gradient-to-br from-red-600 to-red-500 relative flex aspect-square size-16 items-center rounded-[7px] border-2 border-red-400 p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
                                <span className="absolute right-2 top-1 block text-sm text-white font-bold">fn</span>
                         
                            </div>
                            <div className="inset-shadow-sm dark:inset-shadow-white/5 flex aspect-square size-16 items-center justify-center rounded-[7px] border-2 p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer" style={{background: `linear-gradient(to bottom right, #00D6E8, #0891b2)`}}>
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                        </div>
                    </Card>
                    <Card className="group relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-600 hover:border-red-500 sm:col-span-3 sm:rounded-none sm:rounded-br-xl bg-gradient-to-br from-white via-red-50 to-white">
                        <CardHeader className="p-6 md:p-12">
                            <div className="flex items-center justify-center gap-3 mb-8">
                               
                                <p className="mx-auto max-w-md text-balance text-center text-lg font-semibold sm:text-2xl text-red-600 font-montserrat">Core Digital Assets:</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { name: "Microsite", color: "#dc2626" },
                                    { name: "Engagement Promotional Assets", color: "#00D6E8" },
                                    { name: "Podcast- Audio and Video", color: "#dc2626" }
                                ].map((asset, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: asset.color}}></div>
                                            <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{asset.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                {[
                                    { name: "360 degree Digital Social Media calendar set up and Roll Out", color: "#00D6E8" },
                                    { name: "Digital PR Calendar including UGC distribution", color: "#dc2626" }
                                ].map((asset, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: asset.color}}></div>
                                            <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{asset.name}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                            <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                <div className="rounded-(--radius) aspect-square border border-dashed border-red-300 hover:border-red-500 transition-colors duration-300"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                     <YoutubeIcon className="m-auto size-12 rounded-xl text-white p-3 bg-red-500 hover:bg-red-600 transition-colors duration-300" />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed border-red-300 hover:border-red-500 transition-colors duration-300"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                     <Instagram className="m-auto size-12 rounded-xl text-white p-3 bg-red-400 hover:bg-red-500 transition-colors duration-300" />
                                </div>
                                <div className="rounded-(--radius) aspect-square border border-dashed border-red-300 hover:border-red-500 transition-colors duration-300"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <LinkedinIcon className="m-auto size-12 rounded-xl text-white p-3 bg-blue-700 hover:bg-blue-800 transition-colors duration-300" />
                                </div>
                                 <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <FacebookIcon className="m-auto size-12 rounded-xl text-white p-3 bg-blue-800 hover:bg-blue-900 transition-colors duration-300" />
                                </div>
                                 <div className="rounded-(--radius) aspect-square border border-dashed border-red-300 hover:border-red-500 transition-colors duration-300"></div>
                               <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <GemIcon className="m-auto size-12 rounded-xl text-white p-3 bg-green-500 hover:bg-green-600 transition-colors duration-300" />
                                </div>
                                 <div className="rounded-(--radius) aspect-square border border-dashed border-red-300 hover:border-red-500 transition-colors duration-300"></div>
                                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4 hover:scale-110 transition-transform duration-300 cursor-pointer">
                                    <TwitterIcon className="m-auto size-12 rounded-xl text-white p-3 bg-black hover:bg-gray-800 transition-colors duration-300" />
                                </div>
                                 <div className="rounded-(--radius) aspect-square border border-dashed border-red-300 hover:border-red-500 transition-colors duration-300"></div>
                                
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}