"use client";
import React from "react";
import { Container } from "../layouts/Container";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import Email from "@/icons/Email";
import { footerList } from "@/config/data";
import Link from "next/link";
import classNames from "classnames";

function CustomFooter() {
  React.useLayoutEffect(() => {
    let div3 = document.getElementById("footer-3");
    let div2 = document.getElementById("footer-2");
    let parentDiv = div3.parentNode;
    if (window.innerWidth <= 640) parentDiv.insertBefore(div3, div2);
  }, []);
  return (
    <div className="bg-semiblack">
      <Container className="pb-20">
        <div className="lg:flex-row flex-col flex w-full gap-x-10 items-center">
          <div className="lg:max-w-[320px] flex flex-col gap-3">
            <Image src={logoImg} alt="logo" className="lg:collapse visible" />
            <p>
              You get just what you need to run your cloud workloads--no more,
              no less. Deploy from our single pane of glass, manage them with
              ease and scale up as fast as your workload grows
            </p>
            <div className="flex gap-3 mt-3">
              <Github />
              <Linkedin />
              <Email />
            </div>
          </div>
          <div className="bg-[#B8B8B8] h-0.5 my-6 lg:collapse visible w-full lg:hidden" />
          <div className="flex gap-10 w-full justify-around sm:justify-evenly flex-wrap">
            {footerList.map((item, index) => (
              <div
                key={index}
                id={item.id}
                className={classNames("flex flex-col sm:items-start", {
                  "items-start": index === 0,
                  "items-end": index === 2,
                  "items-center": index === 1,
                })}
              >
                <h6 className="font-poppins text-darkpurple font-semibold sm:text-2xl text-xl">
                  {item.title}
                </h6>
                <ul
                  className={classNames(
                    "mt-4 flex flex-col gap-2 sm:items-start",
                    {
                      "items-start": index === 0,
                      "items-end": index === 2,
                      "items-center": index === 1,
                    }
                  )}
                >
                  {item.links.map((link, index) => (
                    <Link key={index} href={link.href}>
                      <li className="text-lightpurple font-nunito sm:text-base text-px14">
                        {link.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#B8B8B8] h-0.5 my-6 lg:collapse visible w-full" />
        <div className="flex-col lg:flex-row flex justify-between w-full gap-3">
          <p className="text-semilightpurple font-nunito text-center text-px14 sm:text-lg">
            Terms & Condition | Privacy Policy
          </p>
          <p className="text-semilightpurple font-nunito text-center text-px14 sm:text-lg">
            Copyright © 2023{" "}
            <span className="font-bold">EXOCODE TECHNOLOGIES |</span> All rights
            reserved
          </p>
        </div>
      </Container>
    </div>
  );
}

export default CustomFooter;
