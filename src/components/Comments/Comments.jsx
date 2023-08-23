import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_COMMENTS } from "../../requester";
import { Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiperStyles.css";
// import { Title } from "../../../../globalStyles";
import {
  MainTopCommentsContainer,
  TitleBoxTopComments,
  TitleTopComments,
  TopCommentByUser,
  TopCommnetsBox,
  UserName,
} from "./commentsStyles";

const Comments = () => {
  const [commentaries, setCommentaries] = useState([]);

  const getAllComments = async () => {
    const response = await axios.get(API_COMMENTS);
    const data = await response.data.comments;
    setCommentaries(data);
  };

  const filterCommentaries = commentaries.filter(
    (item) => item.body.length > 35
  );
  console.log("filterCommentaries: ", filterCommentaries);

  useEffect(() => {
    getAllComments();
  }, []);

  return (
    <MainTopCommentsContainer>
      <TitleBoxTopComments>
        <TitleTopComments>OUR HAPPY CUSTOMERS</TitleTopComments>
      </TitleBoxTopComments>
      <Swiper
        initialSlide={3}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          borderRadius: "62px",
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {filterCommentaries.map((item) => (
          <SwiperSlide key={item.id}>
            <TopCommnetsBox>
              <Rating name="read-only" value={5} readOnly />
              <UserName>{item.user.username}</UserName>
              <TopCommentByUser>{item.body}</TopCommentByUser>
            </TopCommnetsBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainTopCommentsContainer>
  );
};

export default Comments;
