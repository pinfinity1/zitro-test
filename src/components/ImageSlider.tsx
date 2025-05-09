"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const images = [
  { src: "/images", alt: "1" },
  { src: "/images", alt: "2" },
  { src: "/images", alt: "3" },
  { src: "/images", alt: "4" },
  { src: "/images", alt: "5" },
];

export default function ImageSlider() {
  const [selected, setSelected] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const maxThumbnails = 3;
  const showEllipsis = images.length > maxThumbnails + 1;

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(selected);
    }
  }, [selected]);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-[360px] h-[256px] flex items-center justify-center my-2 relative">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setSelected(swiper.activeIndex)}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex items-center justify-center w-64 h-64 rounded-2xl transition-all">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-contain w-56 h-56"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          @media (min-width: 768px) {
            .swiper-pagination {
              display: none !important;
            }
          }
        `}</style>
      </div>

      <div className="w-full hidden md:flex items-center justify-between gap-4 mt-2">
        {images.slice(0, maxThumbnails).map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-[88px] h-[88px] rounded-xl flex items-center justify-center border transition-all cursor-pointer ${
              selected === idx
                ? "border-[#E8590C] border-2"
                : "border-[#DEE2E6]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-contain w-12 h-12"
            />
          </button>
        ))}
        {showEllipsis && (
          <div
            className="w-[88px] h-[88px] rounded-xl flex items-center justify-center border border-[#DEE2E6] text-2xl text-gray-400 cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            ...
          </div>
        )}
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">گالری تصاویر</Typography>
            <IconButton onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box display="flex" flexWrap="wrap" gap={2}>
            {images.map((img, idx) => (
              <Box
                key={idx}
                onClick={() => {
                  setSelected(idx);
                  setOpenModal(false);
                }}
                sx={{
                  width: 100,
                  height: 100,
                  border:
                    selected === idx
                      ? "2px solid #E8590C"
                      : "1px solid #DEE2E6",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: 60, height: 60, objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
