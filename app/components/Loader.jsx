"use client";
import React, { useState, useEffect } from "react";

const ComprehensivePreloader = ({ children, timeout = 10000 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState({
    videos: 0,
    images: 0,
    fonts: 0,
  });

  useEffect(() => {
    // Find all media elements
    const videos = document.querySelectorAll("video");
    const images = document.querySelectorAll("img");
    const fonts = document.fonts;

    // Tracking promises for each asset type
    const videoLoadPromises = Array.from(videos).map((video) => {
      return new Promise((resolve, reject) => {
        video.preload = "auto";

        const updateVideoProgress = () => {
          if (video.buffered.length > 0) {
            const bufferedEnd = video.buffered.end(video.buffered.length - 1);
            const duration = video.duration;
            const progress = isNaN(duration)
              ? 0
              : (bufferedEnd / duration) * 100;

            setLoadingProgress((prev) => ({
              ...prev,
              videos: Math.max(prev.videos, progress),
            }));
          }
        };

        video.addEventListener("progress", updateVideoProgress);

        video.addEventListener("canplaythrough", () => resolve());
        video.addEventListener("error", (error) => {
          console.error("Video loading error:", error);
          resolve();
        });

        video.load();
      });
    });

    const imageLoadPromises = Array.from(images).map((img) => {
      return new Promise((resolve, reject) => {
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => {
            setLoadingProgress((prev) => ({
              ...prev,
              images: 100,
            }));
            resolve();
          };
          img.onerror = (error) => {
            console.error("Image loading error:", error);
            resolve();
          };
        }
      });
    });

    const fontLoadPromise = new Promise((resolve) => {
      if (!document.fonts) {
        resolve();
        return;
      }

      document.fonts.ready
        .then(() => {
          setLoadingProgress((prev) => ({
            ...prev,
            fonts: 100,
          }));
          resolve();
        })
        .catch((error) => {
          console.error("Font loading error:", error);
          resolve();
        });
    });

    // Combine all loading promises
    Promise.all([...videoLoadPromises, ...imageLoadPromises, fontLoadPromise])
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Asset loading failed:", error);
        setIsLoading(false);
      });

    // Fallback timeout
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, timeout);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeout]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={"/preloader.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return <>{children}</>;
};

export default ComprehensivePreloader;
