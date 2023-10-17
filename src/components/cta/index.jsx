

const Cta = () =>{

   
    

    return(
        <div className="text-center pt-[73px] h-[418px] w-full bg-deep-blue md:bg-[url('/cta-image.png')] md:h-[516px] bg-no-repeat bg-contain lg:bg-cover">
           <h2 className="text-white text-[40px] font-['Montserrat] font-[700] tracking-[0.2px] mt-[85px] text-center ">Download the app now.</h2>
           
           <h4 className="text-white text-[24px] font-['Montserrat]  text-center tracking-[0.2px] mt-[10px]">Available on your favorite store. Start your premium experience now</h4>

           <div className="grid  grid-cols-2 mx-auto w-1/2 items-center justify-items-center mt-[54px]">
            <button className="bg-orange py-[18px] text-white rounded-[10px] w-[137px] md:w-[236px] h-[68px] font-['Montserrat'] ">Playstore</button>
            <button className="py-[18px] text-orange md:text-white md:border-white border-2 rounded-[10px] w-[137px] md:w-[236px] mt-[17px] md:nt-0">App Store</button>
        </div>
           
        </div>
    )
}
export default Cta;