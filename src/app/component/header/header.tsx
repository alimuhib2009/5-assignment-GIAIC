import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";




export default function Home() {
    return (
        <>
            <div className='bg-[#A29875] w-1200-px h-28 flex justify-around m-auto items-center'>
                {/* <Image src={}></Image> */}
                <Image src='../../images/logo.svg' alt="logo" width={150} height={100}></Image>
                <div className="w-1/2 h-10 flex" >
                <input type="text" placeholder="Search for Gold Jewellery, Diamond Jewelery and more..." className="w-11/12 h-10 rounded-l-xl  text-xs px-5" />
                <button className="text-center w-12  border-2 border-white rounded-r-xl bg-white"><IoMdSearch className="text-2xl text-center text-[gray]"/></button>
                </div>
                <div className="flex ">
                    <Link href="#"><BiHeart className="text-3xl text-white font-bold mx-6 " /></Link>
                    <Link href="#"><BsPerson className="text-3xl text-white mx-6" /></Link>
                    <Link href="#"><AiOutlineShoppingCart className="text-3xl text-white mx-6" /></Link>
                </div>
            </div>
        </> 
    );
}
