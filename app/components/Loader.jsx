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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white space-y-4 p-4">
        <div className="animate-pulse mb-4">
          <svg
            className="w-20 h-20 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* Loading Progress Sections */}
        <div className="w-full max-w-md space-y-2">
          {/* Videos */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Videos</span>
              <span>{Math.round(loadingProgress.videos)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${loadingProgress.videos}%` }}
              ></div>
            </div>
          </div>

          {/* Images */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Images</span>
              <span>{Math.round(loadingProgress.images)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${loadingProgress.images}%` }}
              ></div>
            </div>
          </div>

          {/* Fonts */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Fonts</span>
              <span>{Math.round(loadingProgress.fonts)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: `${loadingProgress.fonts}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ComprehensivePreloader;
