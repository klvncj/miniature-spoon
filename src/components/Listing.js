import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { BiSolidDetail } from "react-icons/bi";
const slide =
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80";
const images = [slide, slide, slide];
function Listing({
  image = images,
  title = "Home For Sale",
  rating = 5.0,
  price = 1000,
  location = "Earth, Solar System",
  seller = "AirBNB",
}) {
  const nextEl = useRef(null);
  const prevEl = useRef(null);
  return (
    <>
      <Card className="w-full max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <Swiper
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{ nextEl: nextEl.current, prevEl: prevEl.current }}
            pagination={{ clickable: true }}
          >
            {image.map((rr, index) => (
              <SwiperSlide key={index}>
                <img
                  src={rr}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {location}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {rating}
            </Typography>
          </div>
          <Typography color="gray">{title}</Typography>
        </CardBody>
        <CardFooter className="pt-3 flex items-center justify-around">
          <Button size="lg" ripple={true} className="flex items-center gap-3">
            View <BiSolidDetail color="white" size={20} />
          </Button>
          <Button variant="outlined" className="flex items-center gap-3">
            Contact agent
            <BsFillChatSquareTextFill size={20} />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default Listing;
