"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: boolean;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

// Handle next image
const handleNext = () => {
  setCurrentIndex((prevIndex) => {
    // Ensure state updates correctly in a circular manner
    return (prevIndex + 1) % images.length;
  });
};

// Handle previous image
const handlePrevious = () => {
  setCurrentIndex((prevIndex) => {
    // Ensure state updates correctly in a circular manner
    return (prevIndex - 1 + images.length) % images.length;
  });
};
  // Load images on component mount
  useEffect(() => {
    loadImages();
  }, [images]); // Add `images` as a dependency to reload images if the array changes

  const loadImages = () => {
    const loadPromises = images.map((image) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    // Once images are loaded, set state
    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  // Handle keyboard navigation and autoplay
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Autoplay logic
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]); // Added dependencies to prevent missing ones

  // Animation variants for sliding effect
  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}

      {/* Overlay if enabled */}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {/* Image transition using framer-motion */}
      {areImagesLoaded && (
        <AnimatePresence>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};

export default ImagesSlider;
