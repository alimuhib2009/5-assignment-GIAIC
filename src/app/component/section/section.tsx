import Image from "next/image";


export default function Section() {
    return (
        <>
            <div className="bg-gray flex justify-around m-auto items-center ml-" style={{ height: "525px" }}>
                <div className="w-2/5 h-96 flex flex-col justify-between " >
                    <h2 className="font-bold text-3xl" style={{ fontFamily: "libre-bodoni" }}>IMPECCABLE <br />CRAFTSMANSHIP AND <br />FINESSE</h2>
                    <p className="text-xl text-[#A29875] mb-5  " style={{ fontFamily: "libre-bodoni", letterSpacing: "0.025em", fontWeight: "500" }}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
                    <button className="text-2xl text-white bg-[#A29875] w-60 h-12 mb-10 rounded-xl" style={{ fontFamily: "libre-bodoni", fontWeight: "500" }}>Explore Now</button>
                </div>
                <div className="w-96 h-96 bg-cover bg-center">
                        <Image src='../../images/rs-layer.svg' width={290} height={300} className="m-auto z-0" alt="model image" ></Image>
                </div>
            </div>
        </>
    );
}