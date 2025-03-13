"use client";
import { useGSAP } from "@gsap/react";
import {
  useDebouncedValue,
  useDidUpdate,
  useViewportSize,
} from "@mantine/hooks";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ImageSequenceHeader = () => {
  const header = useRef(null);
  const canvas = useRef(null);
  const viewportSize = useViewportSize();
  const [debouncedViewportSize] = useDebouncedValue(viewportSize, 500);
  const [loadedImages, setLoadedImages] = useState();

  useEffect(() => {
    if (!canvas.current) return;
    if (viewportSize.width === 0 || viewportSize.height === 0) return;
    if (!!loadedImages) return;

    const intialSetup = async () => {
      const imageWidth = 600;
      const imageHeight = 600;

      const size = Math.min(
        canvas.current.offsetWidth,
        canvas.current.offsetHeight
      );
      canvas.current.width = size;
      canvas.current.height = size;

      const imageSrcs = Array.from(
        { length: 131 },
        (_, i) => `/headset/${String(i).padStart(4, "0")}.jpeg`
      );

      const images = await loadImagesAndDrawFirstFrame({
        canvas: canvas.current,
        imageSrcs: imageSrcs,
        imageWidth: imageWidth,
        imageHeight: imageHeight,
      });

      setLoadedImages(images);
    };

    intialSetup();
  }, [viewportSize, loadedImages]);

  useGSAP(
    () => {
      if (!canvas.current || !loadedImages) return;
      const context = canvas.current.getContext("2d", { alpha: true });
      if (!context) return;

      // Clear any existing ScrollTrigger with this ID
      ScrollTrigger.getById("image-sequence")?.kill();

      ScrollTrigger.create({
        id: "image-sequence",
        trigger: header.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: ({ progress }) => {
          const nextFrame = Math.floor(progress * (loadedImages.length - 1));
          const nextImage = loadedImages[nextFrame];
          if (!nextImage) return;
          updateCanvasImage(context, canvas.current, nextImage, progress);
        },
      });

      // Force a refresh of ScrollTrigger
      ScrollTrigger.refresh();

      gsap.set(canvas.current, { opacity: 1 });
    },
    {
      dependencies: [loadedImages],
      scope: header,
    }
  );

  useDidUpdate(() => {
    const handleViewportResize = () => {
      if (
        !debouncedViewportSize.width ||
        !debouncedViewportSize.height ||
        !loadedImages
      )
        return;
      if (!canvas.current) return;
      if (canvas.current.width === debouncedViewportSize.width) return;

      const size = Math.min(
        canvas.current.offsetWidth,
        canvas.current.offsetHeight
      );
      canvas.current.width = size;
      canvas.current.height = size;

      const context = canvas.current.getContext("2d", { alpha: true });
      if (!context) return;
      const progress = ScrollTrigger.getById("image-sequence")?.progress ?? 0;
      const nextFrame = Math.floor(progress * loadedImages.length);
      const nextImage = loadedImages[nextFrame];
      if (!nextImage) return;
      updateCanvasImage(context, canvas.current, nextImage, progress);
    };
    handleViewportResize();
  }, [debouncedViewportSize]);

  return (
    <div
      ref={header}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="aspect-square w-full max-w-[600px]">
        <canvas ref={canvas} className="w-full h-full opacity-0" />
      </div>
    </div>
  );
};

const loadImagesAndDrawFirstFrame = async ({
  canvas,
  imageSrcs,
  imageWidth,
  imageHeight,
}) => {
  let images = [];
  let loadedCount = 0;

  return new Promise((resolve, reject) => {
    const onImageLoad = (index, img) => {
      if (index === 0) {
        const context = canvas.getContext("2d", { alpha: true });
        if (!context) return;
        updateCanvasImage(context, canvas, img);
      }
      loadedCount++;
      const hasLoadedAll = loadedCount === imageSrcs.length - 1;
      if (hasLoadedAll) resolve(images);
    };

    const retries = {};
    const maxRetries = 3;

    const onImageError = (i, img) => {
      if (retries[i] < maxRetries) {
        console.warn(`Image ${i} failed to load. Retrying... ${retries[i]}`);
        img.src = `${imageSrcs[i]}?r=${retries[i]}`;
        retries[i]++;
      } else {
        reject();
      }
    };

    for (let i = 0; i < imageSrcs.length - 1; i++) {
      const img = new Image();
      img.src = imageSrcs[i];
      img.width = imageWidth;
      img.height = imageHeight;
      img.addEventListener("load", (e) => onImageLoad(i, img));
      img.addEventListener("error", (e) => onImageError(i, img));
      images.push(img);
    }
  });
};

const updateCanvasImage = (renderingContext, canvas, image, progress = 0) => {
  if (!renderingContext || !canvas || !image)
    throw new Error("Unable to update canvas");

  renderingContext.clearRect(0, 0, canvas.width, canvas.height);
  renderingContext.drawImage(image, 0, 0, canvas.width, canvas.height);
};

const ImageSequencePage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ImageSequenceHeader />
    </div>
  );
};

export default ImageSequencePage;
