import Image from "next/image"
import cy1 from "/public/cy1.png"
import cy2 from "/public/cy2.png"
import cy3 from "/public/cy3.png"
import { Button } from "@/components/ui/button"
import Link from "next/link"


const Categories = () => {

  const category = [

    {
      id: 1,
      title: "Cycle 1",
      img: cy1,
      link : "/cycleone"
    },
    {
      id: 2,
      title: "Cycle 2",
      img: cy2,
      link : "/cycletwo"
    },
    {
      id: 3,
      title: "Cycle 3",
      img: cy3,
      link : "/cyclethree"
    },
  ]

  const bgColors = ["bg-red-100", "bg-green-100", "bg-blue-100"];


  return (
    <div className=" grid grid-cols-3 justify-center gap-8 items-center h-[60vh] w-[50%] m-auto">

      {
        category.map((item, index) => <div key={index} className={`${bgColors[index % bgColors.length]} rounded-lg pb-8`} >

          <div >

            <div>
              <Image className=" w-[332px] h-[186px]  " src={item.img} alt="img"></Image>
            </div>


            <div className=" rounded-2xl flex flex-col relative justify-center items-center bg-white -mt-10 py-5 space-y-3 w-11/12 m-auto">
              <h1 className=" text-2xl">{item.title}</h1>

             <Link href={item.link}> <Button varient="deafult" size="lg" className="bg-white text-black text-lg  border-2 border-black hover:bg-purple-950 hover:text-white ">Select</Button></Link>


            </div>
          </div>

        </div>)
      }

    </div>
  )
}

export default Categories
