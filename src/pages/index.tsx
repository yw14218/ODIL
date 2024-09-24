import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"


import {FaArrowUp, FaFilePdf, FaYoutube} from "react-icons/fa";
import {IoLogoYoutube} from "react-icons/io";
import {AiFillGithub} from "react-icons/ai";
import {LuTextSelect} from "react-icons/lu";

import { useState } from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import wood_results from "./videos/one_shot_results/wood.mp4"
import cooker_results from "./videos/one_shot_results/cooker.mp4"
import scissor_results from "./videos/one_shot_results/scissor.mp4"
import sharpener_results from "./videos/one_shot_results/sharpener.mp4"
import lego_results from "./videos/one_shot_results/lego.mp4"
import pan_results from "./videos/one_shot_results/pan.mp4"

import cooker_demos from "./images/demos/cooker.png"
import wood_demos from "./images/demos/wood.png"
import scissor_demos from "./images/demos/scissor.png"
import sharpener_demos from "./images/demos/sharpener.png"
import lego_demos from "./images/demos/lego.png"
import pan_demos from "./images/demos/pan.png"

// import blue_mug from "./videos/language_results/carousel/blue_mug.mp4"
// import clear_mug from "./videos/language_results/carousel/clear_mug.mp4"
// import measuring_beaker from "./videos/language_results/carousel/measuring_beaker.mp4"
// import measuring_scoop from "./videos/language_results/carousel/measuring_scoop.mp4"
// import screwdriver from "./videos/language_results/carousel/screwdriver.mp4"
// import teddy_bear from "./videos/language_results/carousel/teddy_bear.mp4"
// import transparent_rack from "./videos/language_results/carousel/transparent_rack.mp4"
// import water_jug from "./videos/language_results/carousel/water_jug.mp4"
// import wooden_rack from "./videos/language_results/carousel/wooden_rack.mp4"
// import teaser_video from "./videos/teaser.mp4"

const Title: React.FC = ({children}) => {
    // Paper title
    return (
        <h1 className="pb-1 mb-5 sm:mb-4 sm:leading-tight md:leading-tight lg:leading-tight font-bold text-center">{children}</h1>
    )
}

const Venue: React.FC = ({website, children}) => {
    return (
        <div className="flex flex-wrap justify-center text-2xl lg:text-2xl mb-6 sm:mb-5">
            <a className="no-underline" href={website} target="_blank">{children}</a>
        </div>
    )
}

const Abstract: React.FC = ({children}) => {
    return (
        <div>
            <div className="flex justify-center content-center">
                <p className="font-semibold text-2xl sm:text3xl m-1 sm:m-2">Abstract</p>
            </div>
            <div className="flex justify-center content-center">
                <p className="text-justify font-light text-sm m-1 sm:text-lg sm:m-1 sm:max-w-[620px]">{
                    children
                }</p>
            </div>
        </div>
    )
}

const Author: React.FC = ({children, website, firstAuthor, affiliations, lastAuthor}) => {
    return (
        <span className="text-center inline-block">
                <a href={website} target={"_blank"}
                   className="font-normal no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
            {firstAuthor || affiliations ?
                <sup className={"pl-0.5"}>{firstAuthor ?
                    <span className="font-bold">*</span> : null}{affiliations ? affiliations : null}</sup>
                : null}
            {lastAuthor ? null : <>,&nbsp;</>}
            </span>
    )
}

const Affiliation: React.FC = ({children, website, number}) => {
    return (
        <span className={"text-center inline-block mr-4"}>
            <sup className={"mr-0.5"}>{number}</sup>
            <a href={website} target={"_blank"}
               className="font-light no-underline text-stone-600 hover:underline underline-offset-3 hover:transition-all">
                    {children}
                </a>
        </span>
    )
}

const ActionLink: React.FC<{ children: React.ReactNode; url: string; icon: React.ReactNode }> = ({ children, url, icon }) => {
    return (
        <span className="text-center inline-block my-2.5 sm:my-1 mx-2">
            <a 
                href={url} 
                target={!url.startsWith("#") ? "_blank" : "_self"}
                className="flex items-center text-lg no-underline font-normal text-black bg-[#f4f4f4] hover:bg-[#a8a8a8] hover:transition-all px-3 py-1.5 rounded-xl"
            >
                <span className="mr-1">{icon}</span>
                <span>{children}</span>
            </a>
        </span>
    );
};


const Article: React.FC = ({children}) => {
    return (
        <div
            className="mx-auto w-full max-w-[90%] format format-md
                       md:format-base
                       lg:max-w-5xl lg:format-lg
                       format-blue dark:format-invert">
            {children}
        </div>
    )
}

const Main: React.FC = ({children}) => {
    return (
        <main className="pt-6 lg:pt-12 bg-white dark:bg-gray-900">
            {children}
        </main>
    )
}

const OneShotResult: React.FC = ({children, id, demos, demos_label, video, hidden}) => {
    // Result for Few-Shot Manipulation with Demos on left, and video on right
    return (
        // add hidden if hide is true
        <div id={id}
             className={"grasp-result flex flex-row flex-wrap justify-items-center items-center mt-6" + (hidden ? " hidden" : "")}>
            {/* <div className="sm:basis-1/3 align-middle items-center sm:pr-5 md:pr-10 pb-4 sm:pb-0">
                <p className="text-center font-medium text-2xl !mt-0 !mb-2">{children}</p>
                <img src={demos} alt={children} className="mx-auto !my-4 max-w-[80%] sm:max-w-[100%]"/>
                <p className="text-center !mt-2 !mb-0">{demos_label}</p>
            </div> */}
            <div className="sm:basis-3/3">
                <video autoPlay muted playsInline loop alt={children}
                       className="rounded-lg !my-0 !sm:my-0 w-full mx-auto">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </div>
    )
}


export const Head: HeadFC = () => <title>One-shot Dual-arm Imitation Learning</title>

const carouselResponsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1,
    }
};


const CarouselItem: React.FC = ({children, video}) => {
    return (
        <div>
            <video autoPlay muted playsInline loop alt={video}
                   className="carousel-video px-1.5 rounded-xl">
                <source src={video} type="video/mp4"/>
            </video>
            {/*<p className="text-center">{children}</p>*/}
        </div>
    )
}

const ImageButton = ({ id, src, alt, onClick, isSelected }) => (
    <button
        onClick={() => onClick(id)}
        className={`flex flex-col items-center p-1`}
    >
        <img
            src={src}
            alt={alt}
            className="h-32 w-34 cursor-pointer hover:scale-110 transition-transform"
        />
        <span
            className={`text-gray-900 italic font-light text-sm -mt-4 transition-transform ${
                isSelected ? 'underline' : ''
            }`}
        >
            {alt}
        </span>
    </button>
);


const IndexPage: React.FC<PageProps> = () => {
    const [visibleId, setVisibleId] = useState("wood");
    const handleImageClick = (id) => {
        setVisibleId(id);
    };

    return (
        <>
            <Main>
                <Article>
                    <Title>
                        {/* <span className="font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-pink-500 via-indigo-600 to-emerald-400">
                            Distilled Feature Fields
                        </span>
                        &nbsp; */}
                        <span className="justify-center text-stone-800">One-shot Dual-arm Imitation Learning</span>
                    </Title>

                    <Venue>
                        <span className="justify-center font-normal text-stone-600">Submitted to ICRA 2025</span>
                    </Venue>

                    {/* Authors */}
                    <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-4">
                        <Author firstAuthor={false} affiliations={""} lastAuthor={true}>Yilong Wang</Author>
                        <span className="mx-1">and</span>
                        <Author website={"https://www.robot-learning.uk/"} firstAuthor={false} affiliations={""} lastAuthor={true}>Edward Johns</Author>
                    </div>

                    {/* Affilations */}
                    {/* <div className="flex flex-wrap justify-center text-xl lg:text-xl mb-1">
                        <Affiliation website={"https://www.csail.mit.edu/"} number={"1"}>MIT CSAIL</Affiliation>
                        <Affiliation website={"https://iaifi.org/"} number={"2"}>Institute of AI and Fundamental
                            Interactions (IAIFI)</Affiliation>
                    </div> */}
                    {/* <div className="flex flex-wrap justify-center text-l lg:text-l">
                        <span className="text-stone-600 text-center"><sup className="mr-0.5">*</sup>Indicates equal contribution.</span>
                    </div> */}

                    {/* Action Links */}
                    <p className="flex flex-wrap justify-center">
                        <ActionLink url={"https://www.google.com/"} icon={<FaFilePdf/>}>Paper</ActionLink>
                        <ActionLink 
                            url={"#video"} 
                            icon={<IoLogoYoutube style={{ color: 'white', backgroundColor: 'black', padding: '4px', borderRadius: '50%' }} />}
                        >
                            Video
                        </ActionLink>
                        {/* <ActionLink url={"https://github.com/f3rm/f3rm"} icon={<AiFillGithub/>}>Code</ActionLink> */}
                    </p>

                    {/* Teaser Video */}
                    {/* <video autoPlay controls muted playsInline loop alt="Teaser Video"
                           className="border-2 border-slate-100 rounded-xl mx-auto max-w-[100%] sm:max-w-[95%]">
                        <source src={teaser_video} type="video/mp4"/>
                    </video> */}

                    {/* <div className="flex justify-center">
                        <p className="text-center text-xl !mt-0 !mb-2 font-medium max-w-[100%] md:max-w-[75%]">
                            We distill features from 2D foundation models into 3D feature fields, and enable few-shot
                            language-guided manipulation that generalizes across object poses, shapes, appearances and
                            categories.
                        </p>
                    </div> */}
                </Article>
{/* 
                <div className="my-6 pt-6 pb-4 bg-gradient-to-r from-pink-100/70 via-indigo-100/70 to-emerald-100/70">
                    <div
                        className="mx-auto w-full max-w-[97.5%] lg:max-w-7xl py-2 md:py-4 px-2 md:px-4">
                        <div className="relative pb-8 mb-3">
                            <Carousel responsive={carouselResponsive} infinite={true} showDots={true}
                                      renderDotsOutside={true}
                                      beforeChange={(previousSlide, {currentSlide, onMove}) => {
                                          // play all carousel-video, as the browser doesn't like autoplaying them all
                                          const videos = document.getElementsByClassName("carousel-video");
                                          for (let i = 0; i < videos.length; i++) {
                                              // play if video is paused
                                              if ((videos[i] as HTMLVideoElement).paused) {
                                                  (videos[i] as HTMLVideoElement).play();
                                                  console.log("Started playing video " + (videos[i] as HTMLVideoElement).src);
                                              }
                                          }
                                      }}>
                                <CarouselItem video={clear_mug}>"Clear Mug"</CarouselItem>
                                <CarouselItem video={measuring_scoop}>"Measuring Scoop"</CarouselItem>
                                <CarouselItem video={teddy_bear}>"Teddy Bear"</CarouselItem>
                                <CarouselItem video={blue_mug}>"Blue Mug</CarouselItem>
                                <CarouselItem video={screwdriver}>"Screwdriver"</CarouselItem>
                                <CarouselItem video={water_jug}>"Water Jug</CarouselItem>
                                <CarouselItem video={measuring_beaker}>"Measuring Beaker"</CarouselItem>
                                <CarouselItem video={wooden_rack}>"Wooden Rack</CarouselItem>
                                <CarouselItem video={transparent_rack}>"Transparent Rack"</CarouselItem>
                            </Carousel>
                        </div>
                        <p className="text-center text-lg md:text-xl md:max-w-[85%] mx-auto">
                            We designate novel objects to grasp using <b>open-ended language queries</b>, and achieve
                            this using only ten demonstrations across four object categories.
                        </p>
                    </div>
                </div> */}

                <Article>
                    {/* Abstract */}
                    <Abstract>
                    We introduce ODIL, a novel approach to one-shot dual-arm imitation learning that enables dual-arm
                    robots to learn precise and co-ordinated everyday tasks from just a single demonstration. ODIL 
                    parameterizes a co-ordinated trajectory from this demonstration using a novel dual-arm
                    co-ordination paradigm, and introduces a three-stage deep match visual servoing (3-VS)
                    controller for precise state estimation. This is achieved without the need
                    for prior knowledge of tasks or objects, precise camera calibration, or additional data collection
                    and training. Our method has been tested on a real-world dual-arm robot, demonstrating state-of-the-art
                    performance across six precise and co-ordinated tasks in both 4-DoF and 6-DoF settings,
                    and showing robustness in the presence of distracting objects and partial occlusions.
                    </Abstract>

                    {/* YouTube Video */}
                    {/* <h2 className="font-semibold border-b-[1px]" id="video">Video with Audio</h2>
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/PA9rWWVWsc4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen className="rounded-lg"></iframe>
                    </div> */}

                    {/* Results */}
                    <h2 className="font-semibold border-b-[1px] !mb-4">Evaluation</h2>

                    {/* <h3 id="language-guided" className="!mt-4">Language-Guided Manipulation</h3>
                    <p>We present results on an example scene which we set up with novel objects in 6-DOF poses. We
                        provide the robot with just 10 demonstrations across 4 object categories (mugs, screwdrivers,
                        caterpillar toy, drying racks) in the form of 6-DOF grasp or place poses. We demonstrate the
                        ability to designate novel objects to manipulate via language queries that span color and
                        material properties, as well as <b>unseen object categories</b>.</p>
                    <video autoPlay controls muted playsInline loop alt="Language Guided Manipulation"
                           className="rounded-lg">
                        <source src={lang_results} type="video/mp4"/>
                    </video> */}

                    <h3 className="!mt-4" id="few-shot">Robot Results</h3>
                    <p className="text-base">
                    We provided the robot with a single demonstration for each task and then evaluated its performance 
                    in three distinct settings: first, <b>4 DoF</b> with a clear background; second, <b>4 DoF<sup>+</sup></b> with 
                    variations in background, distracting objects, and partial occlusion; and third, <b>6 DoF<sup>+</sup></b> involving 
                    6-DoF object pose variations in addition to the previous conditions. For the 4 DoF 
                    experiments, the controller also operated with 4 DoFs.
                    </p>
                    <p className="font-light text-base">Please click on the images below to view the corresponding videos.</p>
                    <div className="leading-8 -mt-8 -mb-2">
                        <div className="flex justify-center items-center space-x-4">
                            {[
                                { id: "wood", src: wood_demos, alt: "Wood Lift" },
                                { id: "cooker", src: cooker_demos, alt: "Cooker Add" },
                                { id: "scissor", src: scissor_demos, alt: "Scissor Uncover" },
                                { id: "sharpener", src: sharpener_demos, alt: "Sharpener Insert" },
                                { id: "lego", src: lego_demos, alt: "Lego Split" },
                                { id: "pan", src: pan_demos, alt: "Pan Hang" },
                            ].map(({ id, src, alt }) => (
                                <ImageButton 
                                    key={id} 
                                    id={id} 
                                    src={src} 
                                    alt={alt} 
                                    onClick={handleImageClick} 
                                    isSelected={visibleId === id}
                                />
                            ))}
                        </div>
                    </div>
                    {/* One Shot Results */}
                    {[
                        { id: "wood", video: wood_results, label: "Wood Lift" },
                        { id: "cooker", video: cooker_results, label: "Cooker Add" },
                        { id: "scissor", video: scissor_results, label: "Scissor Uncover" },
                        { id: "sharpener", video: sharpener_results, label: "Sharpener Insert" },
                        { id: "lego", video: lego_results, label: "Lego Split" },
                        { id: "pan", video: pan_results, label: "Pan Hang" },
                    ].map(({ id, video, label }) => (
                        <OneShotResult 
                            key={id} 
                            id={id} 
                            video={video} 
                            hidden={visibleId !== id}
                        >
                            {label}
                        </OneShotResult>
                    ))}
                    {/* <h2 id="citation" className="border-b-[1px]">Citation</h2>
                    <div className="relative overflow-auto">
                        <pre className="bg-gradient-to-r from-pink-100 via-indigo-100 to-emerald-100 !my-0">
                            <code id="citation-bib" className="font-medium text-slate-800">{
                                `@inproceedings{shen2023F3RM,
    title={Distilled Feature Fields Enable Few-Shot Language-Guided Manipulation},
    author={Shen, William and Yang, Ge and Yu, Alan and Wong, Jansen and Kaelbling, Leslie Pack and Isola, Phillip},
    booktitle={7th Annual Conference on Robot Learning},
    year={2023}
}`}
                            </code>
                        </pre>
                        <div className="absolute top-0 right-0">
                            <button className="float-right text-2xl text-indigo-500 bg-white hover:bg-slate-50
                            hover:text-indigo-600 hover:transition-all rounded-full p-2 m-3 invisible md:visible"
                                    onClick={() => {
                                        // Select all text in the code block
                                        let bib = document.getElementById("citation-bib");
                                        let range = document.createRange();
                                        let selection = window.getSelection();

                                        // Check not null
                                        if (bib == null || range == null || selection == null) {
                                            return;
                                        }
                                        range.selectNode(bib);
                                        selection.removeAllRanges();
                                        selection.addRange(range);
                                    }}>
                                <LuTextSelect/>
                            </button>
                        </div>
                    </div> */}
                </Article>

                <footer className={"flex flex-col justify-center bg-gray-50 mt-8 py-8"}>
                    {/*click to go back to top*/}
                    <div className="flex justify-center align-middle text-lg">
                        <a role="button" className="text-black" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                                <span
                                    className="align-text-top inline-flex justify-center mr-0.25"><FaArrowUp/>&nbsp;</span>
                            <span>Back to Top</span>
                        </a>
                    </div>
                    <div className="mt-2.5 text-center">
                        Website template borrowed from&nbsp;
                        <a href="https://f3rm.github.io/" target="_blank" className="text-blue-500">
                            F3RM
                        </a>.
                    </div>
                </footer>
            </Main>
        </>
    )
}

export default IndexPage
