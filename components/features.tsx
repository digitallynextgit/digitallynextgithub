import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'

import { Globe, Instagram, LinkedinIcon, YoutubeIcon, FacebookIcon, GemIcon, TwitterIcon, Target, Users, Lightbulb, TrendingUp, Zap, Star } from 'lucide-react'

interface FeaturesProps {
  solutionProposed?: {
    approach?: string;
    focusAreas?: string[];
    strategicSupport?: string[];
    digitalAssets?: string[];
  };
}

export function Features({ solutionProposed }: FeaturesProps) {
  // If no solutionProposed data is provided, don't render the component
  if (!solutionProposed) {
    return null;
  }
    return (
        <section className="dark:bg-muted/25 bg-zinc-50 py-16 rounded-2xl">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-5xl text-center font-semibold mb-10 text-red-600 font-montserrat">Solution Proposed</h2>
                <div className="mx-auto grid gap-2 sm:grid-cols-5">
                    <Card className="group overflow-hidden border-red-600 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-red-500 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl bg-gradient-to-br from-white to-red-50">
                        <CardHeader>
                            <div className="md:p-6">
                                <div className="flex items-center flex-col justify-center gap-2 mb-8">
                                  
                                    <h3 className="mx-auto max-w-md text-center text-lg font-semibold sm:text-2xl font-montserrat text-red-600">Approach</h3>
                                    <p className='text-center text-sm font-semibold text-black'>Mix of Strategy</p>
                                </div>
                                <div className="grid sm:grid-cols-2  gap-4 mb-[-10]">
                                    {solutionProposed.approach && [
                                     
                                        { name: "Functional", icon: Zap },
                                        { name: "Operational pursuits ", icon: TrendingUp }
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

                        <div className="relative flex justify-center items-center">
                          
                            {/* <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div> */}

                            <div className=" overflow-hidden  ">
                                <img
                                    src="/images/approch.webp"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={707}
                                    height={429}
                                />
                                <img
                                    src="/images/approch.webp"
                                    className="shadow dark:hidden rounded-full w-[300px] h-[300px]"
                                    alt="payments illustration light"
                                    width={707}
                                    height={429}
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
                                {solutionProposed.focusAreas && solutionProposed.focusAreas.map((area, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: index % 2 === 0 ? "#00D6E8" : "#dc2626"}}></div>
                                            <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{area}</div>
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
                            {solutionProposed.strategicSupport && solutionProposed.strategicSupport.map((area, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: index % 2 === 0 ? "#dc2626" : "#00D6E8"}}></div>
                                        <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{area}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </Card>
                    <Card className="group relative shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-600 hover:border-red-500 sm:col-span-3 sm:rounded-none sm:rounded-br-xl bg-gradient-to-br from-white via-red-50 to-white">
                        <CardHeader className="p-6 md:p-12">
                            <div className="flex items-center justify-center gap-3 mb-8">
                               
                                <p className="mx-auto max-w-md text-balance text-center text-lg font-semibold sm:text-2xl text-red-600 font-montserrat">Core Digital Assets:</p>
                            </div>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {solutionProposed.digitalAssets && solutionProposed.digitalAssets.slice(0, 3).map((asset, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: index % 2 === 0 ? "#dc2626" : "#00D6E8"}}></div>
                                            <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{asset}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                             <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                {solutionProposed.digitalAssets && solutionProposed.digitalAssets.slice(3).map((asset, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-lg group cursor-pointer hover:-translate-y-1">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125" style={{backgroundColor: index % 2 === 0 ? "#00D6E8" : "#dc2626"}}></div>
                                            <div className="text-sm font-semibold text-black group-hover:text-red-600 transition-colors duration-300">{asset}</div>
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